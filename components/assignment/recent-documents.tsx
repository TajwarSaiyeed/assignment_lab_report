"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  FileText,
  Calendar,
  User,
  BookOpen,
  Trash2,
  Eye,
  Clock,
} from "lucide-react";
import { format } from "date-fns";
import { FormData } from "@/lib/form-schema";
import { useToast } from "@/hooks/use-toast";

interface DocumentHistory {
  id: string;
  data: FormData;
  createdAt: string;
  lastModified: string;
}

interface RecentDocumentsProps {
  onLoadDocument: (data: FormData) => void;
  onDocumentUpdate?: () => void;
}

export default function RecentDocuments({
  onLoadDocument,
  onDocumentUpdate,
}: RecentDocumentsProps) {
  const [documents, setDocuments] = useState<DocumentHistory[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsMounted(true);
    loadDocuments();
  }, []);

  // Refresh documents when external updates happen
  useEffect(() => {
    if (isMounted) {
      loadDocuments();
    }
  }, [onDocumentUpdate, isMounted]);

  const loadDocuments = () => {
    if (!isMounted) return;
    
    try {
      const savedDocs = localStorage.getItem("bgc-document-history");
      if (savedDocs) {
        const parsedDocs = JSON.parse(savedDocs);
        // Sort by last modified date, newest first
        const sortedDocs = parsedDocs.sort(
          (a: DocumentHistory, b: DocumentHistory) =>
            new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime()
        );
        setDocuments(sortedDocs);
      }
    } catch (error) {
      console.error("Error loading document history:", error);
    }
  };

  const saveDocuments = (docs: DocumentHistory[]) => {
    if (!isMounted) return;
    
    try {
      localStorage.setItem("bgc-document-history", JSON.stringify(docs));
      setDocuments(docs);
    } catch (error) {
      console.error("Error saving document history:", error);
    }
  };

  const addDocument = (formData: FormData) => {
    const timestamp = new Date().toISOString();
    const newDoc: DocumentHistory = {
      id: Date.now().toString(),
      data: { ...formData },
      createdAt: timestamp,
      lastModified: timestamp,
    };

    const updatedDocs = [newDoc, ...documents];
    // Keep only the last 20 documents
    const limitedDocs = updatedDocs.slice(0, 20);
    saveDocuments(limitedDocs);

    toast({
      title: "Document Saved",
      description: "Document added to recent history.",
    });
  };

  const deleteDocument = (id: string) => {
    const updatedDocs = documents.filter((doc) => doc.id !== id);
    saveDocuments(updatedDocs);

    toast({
      title: "Document Deleted",
      description: "Document removed from history.",
    });
  };

  const clearHistory = () => {
    setDocuments([]);
    if (isMounted) {
      localStorage.removeItem("bgc-document-history");
    }

    toast({
      title: "History Cleared",
      description: "All document history has been cleared.",
    });
  };

  const loadDocument = (doc: DocumentHistory) => {
    onLoadDocument(doc.data);
    toast({
      title: "Document Loaded",
      description: "Document data has been loaded into the form.",
    });
  };

  const getDocumentTitle = (data: FormData) => {
    if (data.documentTitle === "Lab Report" && data.experimentName) {
      return `${data.documentTitle}: ${data.experimentName}`;
    }
    if (data.documentTitle !== "Lab Report" && data.assignmentNo) {
      return `${data.documentTitle} ${data.assignmentNo}`;
    }
    return data.documentTitle || "Untitled Document";
  };

  const getLatestDocument = () => {
    if (documents.length > 0) {
      return documents[0]; // Already sorted by lastModified, newest first
    }
    return null;
  };

  // Expose functions to parent component
  useEffect(() => {
    (window as any).addRecentDocument = addDocument;
    (window as any).getLatestDocument = getLatestDocument;
    (window as any).refreshRecentDocuments = loadDocuments;
    return () => {
      delete (window as any).addRecentDocument;
      delete (window as any).getLatestDocument;
      delete (window as any).refreshRecentDocuments;
    };
  }, [documents]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="h-full flex flex-col">
      {/* Fixed Header */}
      <div className="flex flex-row items-center justify-between space-y-0 pb-2 border-b flex-shrink-0">
        <h2 className="text-sm font-semibold flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          Recent Documents
        </h2>
        {documents.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearHistory}
            className="text-red-600 hover:text-red-700 h-6 w-6 p-0"
            title="Clear all documents"
          >
            <Trash2 className="h-3 w-3" />
          </Button>
        )}
      </div>
      
      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 pt-2">
        {documents.length === 0 ? (
          <div className="text-center py-4 text-gray-500">
            <FileText className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p className="text-xs">No recent documents</p>
            <p className="text-xs opacity-75 mt-1">Save documents to see them here</p>
          </div>
        ) : (
          <ScrollArea className="h-full">
            <div className="space-y-1.5 pr-2">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="border rounded-md p-2 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-1 min-w-0">
                      {/* Document Title and Type */}
                      <div className="flex items-center gap-1">
                        <h3 className="font-medium text-xs truncate leading-tight">
                          {getDocumentTitle(doc.data)}
                        </h3>
                      </div>
                      <Badge variant="secondary" className="text-xs px-1 py-0 h-4 text-[10px]">
                        {doc.data.documentTitle}
                      </Badge>
                      
                      {/* Document Details */}
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1">
                          <User className="h-2 w-2 text-gray-400 flex-shrink-0" />
                          <span className="text-[10px] text-gray-600 truncate">
                            {doc.data.studentName || "No Name"}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-2 w-2 text-gray-400 flex-shrink-0" />
                          <span className="text-[10px] text-gray-600 truncate">
                            {doc.data.courseCode || "No Course"}
                          </span>
                        </div>
                        
                        {/* Date and Time */}
                        <div className="flex items-center justify-between text-[10px] text-gray-500 pt-0.5">
                          <div className="flex items-center gap-0.5">
                            <Calendar className="h-2 w-2" />
                            <span>
                              {format(new Date(doc.createdAt), "MMM dd")}
                            </span>
                          </div>
                          <div className="flex items-center gap-0.5">
                            <Clock className="h-2 w-2" />
                            <span>
                              {format(new Date(doc.lastModified), "HH:mm")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col gap-0.5 ml-1.5 flex-shrink-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => loadDocument(doc)}
                        className="h-5 w-5 p-0 hover:bg-blue-100"
                        title="Load document"
                      >
                        <Eye className="h-2.5 w-2.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteDocument(doc.id)}
                        className="h-5 w-5 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                        title="Delete document"
                      >
                        <Trash2 className="h-2.5 w-2.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </div>
    </div>
  );
}
