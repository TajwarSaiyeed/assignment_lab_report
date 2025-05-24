"use client";

import Header from "@/components/assignment/header";
import AssignmentForm from "@/components/assignment/assignment-form";
import AssignmentDocument from "@/components/assignment/assignment-document";
import DeveloperCredits from "@/components/assignment/developer-credits";
import { useFormManagement } from "@/hooks/use-form-management";

export default function AssignmentFormPage() {
  const {
    formData,
    date,
    setDate,
    showForm,
    isFormValid,
    handleInputChange,
    createNewDocument,
    resetForm,
    saveToLocalStorage,
    loadFromLocalStorage,
    copyFormData,
    handlePrint,
    exportToPDF,
  } = useFormManagement();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Header
          loadFromLocalStorage={loadFromLocalStorage}
          createNewDocument={createNewDocument}
        />

        {showForm && (
          <AssignmentForm
            formData={formData}
            date={date}
            setDate={setDate}
            handleInputChange={handleInputChange}
            isFormValid={isFormValid}
            resetForm={resetForm}
            saveToLocalStorage={saveToLocalStorage}
            copyFormData={copyFormData}
            handlePrint={handlePrint}
            exportToPDF={exportToPDF}
          />
        )}

        <AssignmentDocument formData={formData} />

        <DeveloperCredits />
      </div>
    </div>
  );
}
