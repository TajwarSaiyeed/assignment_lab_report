"use client";

import { useState, useEffect } from "react";
import Header from "@/components/assignment/header";
import AssignmentForm from "@/components/assignment/assignment-form";
import AssignmentDocument from "@/components/assignment/assignment-document";
import RecentDocuments from "@/components/assignment/recent-documents";
import DeveloperCredits from "@/components/assignment/developer-credits";
import { useFormManagement } from "@/hooks/use-form-management";

export default function AssignmentFormPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  
  const {
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
  } = useFormManagement();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDocumentUpdate = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <Header
              loadFromLocalStorage={loadFromLocalStorage}
              createNewDocument={createNewDocument}
            />

            {showForm && (
              <AssignmentForm
                form={form}
                date={date}
                setDate={setDate}
                experimentDate={experimentDate}
                setExperimentDate={setExperimentDate}
                isFormValid={isFormValid}
                resetForm={resetForm}
                saveToLocalStorage={() => {
                  saveToLocalStorage();
                  handleDocumentUpdate();
                }}
                copyFormData={copyFormData}
                handlePrint={handlePrint}
                exportToPDF={() => {
                  exportToPDF();
                  handleDocumentUpdate();
                }}
                onSubmit={onSubmit}
              />
            )}

            <AssignmentDocument formData={formData} />

            <DeveloperCredits />
          </div>
        </div>

        {/* Side Panel for Recent Documents */}
        <div className="w-72 bg-white border-l border-gray-200 h-screen sticky top-0 overflow-hidden">
          <div className="p-3 h-full">
            <RecentDocuments
              onLoadDocument={loadDocumentFromHistory}
              onDocumentUpdate={handleDocumentUpdate}
              key={refreshTrigger}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
