"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { formSchema, type FormData } from "@/lib/form-schema";

interface DocumentHistory {
  id: string;
  data: FormData;
  createdAt: string;
  lastModified: string;
}

const defaultValues: FormData = {
  assignmentNo: "",
  courseTitle: "",
  courseCode: "",
  session: "",
  program: "B.Sc. (Hons.) in CSE",
  courseTeacher: "",
  designation: "",
  studentName: "",
  internalId: "",
  semester: "",
  section: "",
  submissionDate: "",
  documentTitle: "Assignment",
  experimentName: "",
  experimentNo: "",
  experimentDate: "",
};

export function useFormManagement() {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [experimentDate, setExperimentDate] = useState<Date>();
  const [showForm, setShowForm] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: "onChange",
  });

  const formData = form.watch();

  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Update submission date when date changes
  useEffect(() => {
    if (date) {
      const formattedDate = format(date, "do MMMM, yyyy");
      form.setValue("submissionDate", formattedDate);
    }
  }, [date, form]);

  // Update experiment date when experimentDate changes
  useEffect(() => {
    if (experimentDate) {
      const formattedDate = format(experimentDate, "do MMMM, yyyy");
      form.setValue("experimentDate", formattedDate);
    }
  }, [experimentDate, form]);

  // Load saved data on mount (client-side only)
  useEffect(() => {
    if (!isMounted) return;
    
    const savedData = localStorage.getItem("bgc-assignment-data");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        // Merge saved data with default values to ensure all fields exist
        const mergedData = { ...defaultValues, ...parsedData };
        form.reset(mergedData);
      } catch (error) {
        console.error("Error loading saved data:", error);
      }
    }
  }, [form, isMounted]);

  // Document history management functions
  const saveToDocumentHistory = (data: FormData) => {
    if (!isMounted) return;
    
    try {
      const history: DocumentHistory[] = JSON.parse(
        localStorage.getItem("bgc-document-history") || "[]"
      );
      
      const documentId = `doc_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      const timestamp = new Date().toISOString();
      
      const newDocument: DocumentHistory = {
        id: documentId,
        data: { ...data },
        createdAt: timestamp,
        lastModified: timestamp,
      };
      
      // Check if this is an update to an existing document
      const existingIndex = history.findIndex(doc => 
        doc.data.studentName === data.studentName &&
        doc.data.internalId === data.internalId &&
        doc.data.courseCode === data.courseCode &&
        doc.data.documentTitle === data.documentTitle &&
        (
          (data.documentTitle === "Lab Report" && doc.data.experimentName === data.experimentName) ||
          (data.documentTitle !== "Lab Report" && doc.data.assignmentNo === data.assignmentNo)
        )
      );
      
      if (existingIndex !== -1) {
        // Update existing document
        history[existingIndex] = {
          ...history[existingIndex],
          data: { ...data },
          lastModified: timestamp,
        };
      } else {
        // Add new document to the beginning of the array
        history.unshift(newDocument);
      }
      
      // Keep only the latest 50 documents
      if (history.length > 50) {
        history.splice(50);
      }
      
      localStorage.setItem("bgc-document-history", JSON.stringify(history));
    } catch (error) {
      console.error("Error saving to document history:", error);
    }
  };

  const loadDocumentFromHistory = (data: FormData) => {
    form.reset(data);
    setShowForm(true);
    
    // Set the submission date if it exists
    if (data.submissionDate) {
      try {
        // Try to parse the date from the formatted string
        const parsedDate = new Date(data.submissionDate);
        if (!isNaN(parsedDate.getTime())) {
          setDate(parsedDate);
        }
      } catch (error) {
        console.error("Error parsing submission date:", error);
      }
    }
    
    // Set the experiment date if it exists
    if (data.experimentDate) {
      try {
        // Try to parse the date from the formatted string
        const parsedExperimentDate = new Date(data.experimentDate);
        if (!isNaN(parsedExperimentDate.getTime())) {
          setExperimentDate(parsedExperimentDate);
        }
      } catch (error) {
        console.error("Error parsing experiment date:", error);
      }
    }
  };

  const isFormValid = () => {
    return form.formState.isValid;
  };

  const createNewDocument = () => {
    setShowForm(true);
  };

  const resetForm = () => {
    form.reset(defaultValues);
    setDate(undefined);
    setExperimentDate(undefined);
    toast({
      title: "Form Reset",
      description: "All fields have been cleared.",
    });
  };

  const saveToLocalStorage = () => {
    if (!isMounted) return;
    
    try {
      const currentValues = form.getValues();
      localStorage.setItem("bgc-assignment-data", JSON.stringify(currentValues));
      
      // Also save to document history
      saveToDocumentHistory(currentValues);
      
      // Refresh recent documents if the function exists
      if (typeof window !== 'undefined' && (window as any).refreshRecentDocuments) {
        (window as any).refreshRecentDocuments();
      }
      
      toast({
        title: "Data Saved Successfully",
        description: "Your form data has been saved for future editing.",
      });
    } catch (error) {
      toast({
        title: "Save Failed",
        description: "Failed to save data to local storage.",
        variant: "destructive",
      });
    }
  };

  const loadFromLocalStorage = () => {
    if (!isMounted) return;
    
    try {
      // First try to load the most recent document from history
      if (typeof window !== 'undefined' && (window as any).getLatestDocument) {
        const latestDoc = (window as any).getLatestDocument();
        if (latestDoc) {
          loadDocumentFromHistory(latestDoc.data);
          toast({
            title: "Latest Document Loaded",
            description: "Your most recently saved document has been loaded.",
          });
          return;
        }
      }
      
      // Fallback to regular localStorage if no recent documents
      const savedData = localStorage.getItem("bgc-assignment-data");
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        const mergedData = { ...defaultValues, ...parsedData };
        form.reset(mergedData);
        setShowForm(true);
        toast({
          title: "Data Loaded Successfully",
          description: "Your previously saved form data has been restored.",
        });
      } else {
        toast({
          title: "No Saved Data Found",
          description: "No previously saved data found in storage.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Load Failed",
        description: "Failed to load data from local storage.",
        variant: "destructive",
      });
    }
  };

  const copyFormData = () => {
    if (!isMounted) return;
    
    try {
      const currentValues = form.getValues();
      const formText = Object.entries(currentValues)
        .filter(([_, value]) => value && value.toString().trim() !== "")
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");

      navigator.clipboard.writeText(formText);
      toast({
        title: "Data Copied",
        description: "Form data has been copied to clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy data to clipboard.",
        variant: "destructive",
      });
    }
  };

  const handlePrint = () => {
    if (!isMounted || !isFormValid()) return;
    
    window.print();
  };

  const exportToPDF = async () => {
    try {
      saveToLocalStorage();

      const html2pdf = (await import("html2pdf.js")).default;
      const element = document.querySelector(".print-document");

      const studentName =
        formData.studentName.replace(/\s+/g, "_") || "Student";
      const studentId = formData.internalId || "ID";
      const filename = `${studentName}_${studentId}.pdf`;

      const opt = {
        margin: [0.25, 0.25, 0.25, 0.25],
        filename: filename,
        image: { type: "jpeg", quality: 1.0 },
        html2canvas: {
          scale: 4,
          useCORS: true,
          allowTaint: true,
          letterRendering: true,
          scrollX: 0,
          scrollY: 0,
          windowWidth: 745,
          windowHeight: 1055,
          width: 745,
          height: 1055,
        },
        jsPDF: {
          unit: "in",
          format: "a4",
          orientation: "portrait",
          compressPDF: true,
          hotfixes: ["px_scaling"],
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      };

      await html2pdf().set(opt).from(element).save();

      toast({
        title: "PDF Exported Successfully",
        description: `Your assignment has been exported as ${filename}`,
      });
    } catch (error) {
      toast({
        title: "Export Failed",
        description: "Failed to export PDF. Please try printing instead.",
        variant: "destructive",
      });
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    saveToLocalStorage();
    saveToDocumentHistory(data);
  };

  return {
    form,
    formData,
    date,
    setDate,
    experimentDate,
    setExperimentDate,
    showForm,
    isFormValid,
    createNewDocument,
    resetForm,
    saveToLocalStorage,
    loadFromLocalStorage,
    copyFormData,
    handlePrint,
    exportToPDF,
    onSubmit,
    loadDocumentFromHistory,
  };
}
