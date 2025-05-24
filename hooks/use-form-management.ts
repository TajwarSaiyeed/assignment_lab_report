import { useState, useEffect } from "react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { FormData } from "@/types/form";

const initialFormData: FormData = {
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
};

export function useFormManagement() {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const isFormValid = () => {
    return (
      formData.assignmentNo.trim() !== "" &&
      formData.courseTitle.trim() !== "" &&
      formData.courseCode.trim() !== "" &&
      formData.session.trim() !== "" &&
      formData.courseTeacher.trim() !== "" &&
      formData.studentName.trim() !== "" &&
      formData.internalId.trim() !== "" &&
      formData.semester.trim() !== "" &&
      formData.section.trim() !== ""
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem("bgc-assignment-data");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
      } catch (error) {
        console.error("Error loading saved data:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (date) {
      const formattedDate = format(date, "do MMMM, yyyy");
      setFormData((prev) => ({ ...prev, submissionDate: formattedDate }));
    }
  }, [date]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const createNewDocument = () => {
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setDate(undefined);
    toast({
      title: "Form Reset",
      description: "All fields have been cleared.",
    });
  };

  const saveToLocalStorage = () => {
    try {
      localStorage.setItem("bgc-assignment-data", JSON.stringify(formData));
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
    try {
      const savedData = localStorage.getItem("bgc-assignment-data");
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
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

  const copyFormData = async () => {
    try {
      const dataString = JSON.stringify(formData, null, 2);
      await navigator.clipboard.writeText(dataString);
      toast({
        title: "Data Copied Successfully",
        description: "Form data has been copied to your clipboard.",
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
    saveToLocalStorage();
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

  return {
    formData,
    date,
    setDate,
    showForm,
    setShowForm,
    isFormValid,
    handleInputChange,
    createNewDocument,
    resetForm,
    saveToLocalStorage,
    loadFromLocalStorage,
    copyFormData,
    handlePrint,
    exportToPDF,
  };
}
