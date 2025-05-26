import { Card, CardContent } from "@/components/ui/card";
import { FormData } from "@/lib/form-schema";
import Image from "next/image";

interface AssignmentDocumentProps {
  formData: FormData;
}

export default function AssignmentDocument({
  formData,
}: AssignmentDocumentProps) {
  return (
    <div className="w-full max-w-4xl mx-auto print:max-w-none print:mx-0 print:w-full">
      <Card className="bg-white shadow-lg relative overflow-hidden print-document print:shadow-none print:overflow-visible">
        <div
          className="absolute inset-0 flex items-center justify-center opacity-10 z-0 print:hidden"
          style={{
            backgroundImage: "url(/watermark.jpeg)",
            backgroundSize: "350px 350px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />

        <div className="print-watermark hidden print:block" />

        <CardContent className="print-content p-8 relative z-10 print:p-4 print:relative print:z-10">
          <div className="print:block">
            <div className="text-center space-y-3 print:space-y-2 print:mb-6">
              <div className="flex justify-center mb-4 print:mb-2">
                <Image
                  src="/logo.jpeg"
                  alt="BGC Trust University Bangladesh Logo"
                  width={80}
                  height={80}
                  className="h-20 w-auto object-contain print:h-16"
                  priority
                />
              </div>
              <h1 className="text-2xl font-bold text-green-800 leading-tight print:text-xl print:leading-tight">
                BGC TRUST UNIVERSITY BANGLADESH
              </h1>
              <p className="text-base text-gray-700 font-medium print:text-sm">
                BGC Bidyanagar, Chandanaish, Chattogram
              </p>
              <p className="text-base font-semibold text-gray-800 print:text-sm">
                Department of Computer Science and Engineering
              </p>
            </div>

            {/* Assignment Title */}
            <div className="text-center py-4 print:py-3 print:mb-6">
              <h2 className="text-xl font-bold underline decoration-2 underline-offset-4 print:text-lg">
                {formData.documentTitle || "Assignment"}
              </h2>
            </div>

            {/* Assignment Details */}
            <div className="space-y-3 p-6 rounded-lg print:space-y-2 print:p-0 print:mb-6">
              {formData.documentTitle === "Lab Report" ? (
                <>
                  {/* Lab Report specific layout */}
                  <div className="print:block print:mb-2">
                    <div className="print:flex print:justify-between">
                      <span className="font-bold print:inline">
                        Experiment Name
                      </span>
                      <span className="font-bold print:inline print:mx-2">
                        :
                      </span>
                      <span className="font-normal print:inline print:flex-1">
                        {formData.experimentName || "___"}
                      </span>
                    </div>
                  </div>
                  <div className="print:block print:mb-2">
                    <div className="print:flex print:justify-between">
                      <span className="font-bold print:inline">
                        Experiment No
                      </span>
                      <span className="font-bold print:inline print:mx-2">
                        :
                      </span>
                      <span className="font-normal print:inline print:flex-1">
                        {formData.experimentNo || "___"}
                      </span>
                    </div>
                  </div>
                  <div className="print:block print:mb-2">
                    <div className="print:flex print:justify-between">
                      <span className="font-bold print:inline">
                        Course Title
                      </span>
                      <span className="font-bold print:inline print:mx-2">
                        :
                      </span>
                      <span className="font-normal print:inline print:flex-1">
                        {formData.courseTitle || "___"}
                      </span>
                    </div>
                  </div>
                  <div className="print:block print:mb-2">
                    <div className="print:flex print:justify-between">
                      <span className="font-bold print:inline">
                        Course Code
                      </span>
                      <span className="font-bold print:inline print:mx-2">
                        :
                      </span>
                      <span className="font-normal print:inline print:flex-1">
                        {formData.courseCode || "___"}
                      </span>
                    </div>
                  </div>
                  <div className="print:block print:mb-2">
                    <div className="print:flex print:justify-between">
                      <span className="font-bold print:inline">Session</span>
                      <span className="font-bold print:inline print:mx-2">
                        :
                      </span>
                      <span className="font-normal print:inline print:flex-1">
                        {formData.session || "___"}
                      </span>
                    </div>
                  </div>
                  <div className="print:block print:mb-2">
                    <div className="print:flex print:justify-between">
                      <span className="font-bold print:inline">Program</span>
                      <span className="font-bold print:inline print:mx-2">
                        :
                      </span>
                      <span className="font-normal print:inline print:flex-1">
                        {formData.program || "___"}
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Assignment/other document types layout */}
                  <div className="print:block print:mb-2">
                    <div className="print:flex print:justify-between">
                      <span className="font-bold print:inline">
                        {formData.documentTitle || "Assignment"} no
                      </span>
                      <span className="font-bold print:inline print:mx-2">
                        :
                      </span>
                      <span className="font-normal print:inline print:flex-1">
                        {formData.assignmentNo || "___"}
                      </span>
                    </div>
                  </div>
                  <div className="print:block print:mb-2">
                    <div className="print:flex print:justify-between">
                      <span className="font-bold print:inline">
                        Course Title
                      </span>
                      <span className="font-bold print:inline print:mx-2">
                        :
                      </span>
                      <span className="font-normal print:inline print:flex-1">
                        {formData.courseTitle || "___"}
                      </span>
                    </div>
                  </div>
                  <div className="print:block print:mb-2">
                    <div className="print:flex print:justify-between">
                      <span className="font-bold print:inline print:mx-2">
                        Course Code
                      </span>
                      <span className="font-bold print:inline">:</span>
                      <span className="font-normal print:inline print:flex-1">
                        {formData.courseCode || "___"}
                      </span>
                    </div>
                  </div>
                  <div className="print:block print:mb-2">
                    <div className="print:flex print:justify-between">
                      <span className="font-bold print:inline">Session</span>
                      <span className="font-bold print:inline print:mx-2">
                        :
                      </span>
                      <span className="font-normal print:inline print:flex-1">
                        {formData.session || "___"}
                      </span>
                    </div>
                  </div>
                  <div className="print:block print:mb-2">
                    <div className="print:flex print:justify-between">
                      <span className="font-bold print:inline">Program</span>
                      <span className="font-bold print:inline print:mx-2">
                        :
                      </span>
                      <span className="font-normal print:inline print:flex-1">
                        {formData.program || "___"}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Submitted To and Submitted By sections */}
            <div className="grid grid-cols-1 gap-8 mt-8 print:gap-6 print:mt-6">
              {/* Submitted To */}
              <div className="text-center space-y-4 print:space-y-3 print:page-break-inside-avoid">
                <h3 className="text-lg font-bold border-b-2 border-gray-300 inline-block print:text-base">
                  Submitted To
                </h3>
                <div className="space-y-2 text-base print:space-y-1 print:text-sm">
                  <div className="space-y-1">
                    <div>
                      <span className="font-normal">
                        {formData.courseTeacher || "___"}
                      </span>
                    </div>
                    <div className="font-normal">
                      {formData.designation || "___"} at <br />
                      <span className="font-bold text-green-800">
                        BGC TRUST UNIVERSITY BANGLADESH
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submitted By */}
              <div className="text-center space-y-4 print:space-y-3 print:page-break-inside-avoid">
                <h3 className="text-lg font-bold border-b-2 border-gray-300 inline-block print:text-base">
                  Submitted By
                </h3>
                <div className="space-y-2 text-base print:space-y-1 print:text-sm">
                  <div className="space-y-1">
                    <div>
                      <span className="font-bold">Name: </span>
                      <span className="font-normal">
                        {formData.studentName || "___"}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold">Internal ID: </span>
                      <span className="font-normal">
                        {formData.internalId || "___"}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold">
                        {formData.semester || "___"} Semester Section:{" "}
                      </span>
                      <span className="font-normal">
                        {formData.section || "___"}
                      </span>
                    </div>
                    <div className="font-bold text-green-800">
                      Department of CSE, BGCTUB
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-end pt-8 border-t border-gray-200 mt-8 print:pt-6 print:mt-6 print:border-gray-400 print:page-break-inside-avoid">
              {formData.documentTitle === "Lab Report" ? (
                <div className="space-y-2 print:space-y-1">
                  <div className="text-base print:text-sm">
                    <span className="font-bold">Date of Experiment: </span>
                    <span className="font-normal">
                      {formData.experimentDate || "_______________"}
                    </span>
                  </div>
                  <div className="text-base print:text-sm">
                    <span className="font-bold">Date of Submission: </span>
                    <span className="font-normal">
                      {formData.submissionDate || "_______________"}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-base print:text-sm">
                  <span className="font-bold">Date of Submission: </span>
                  <span className="font-normal">
                    {formData.submissionDate || "_______________"}
                  </span>
                </div>
              )}
              <div className="text-center">
                <div className="border-b-2 border-gray-500 w-48 mb-2 print:w-40"></div>
                <span className="text-sm font-normal text-gray-600 print:text-xs">
                  Signature of Course Teacher
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
