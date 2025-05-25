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
    <div className="w-full max-w-4xl mx-auto print-hidden">
      <Card className="bg-white shadow-lg relative overflow-hidden print-document w-full aspect-[1/1.414] max-h-[11.69in]">
        <div
          className="absolute inset-0 flex items-center justify-center opacity-10 z-0 print:hidden"
          style={{
            backgroundImage: "url(/watermark.jpeg)",
            backgroundSize: "350px 350px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />

        <div className="print-watermark" />

        <CardContent className="p-8 relative z-10 print-content h-full flex flex-col justify-between">
          <div className="flex-1 space-y-6">
            <div className="text-center space-y-3">
              <div className="flex justify-center mb-4">
                <Image
                  src="/logo.jpeg"
                  alt="BGC Trust University Bangladesh Logo"
                  width={80}
                  height={80}
                  className="h-20 w-auto object-contain"
                  priority
                />
              </div>
              <h1 className="text-2xl font-bold text-green-800 leading-tight">
                BGC TRUST UNIVERSITY BANGLADESH
              </h1>
              <p className="text-base text-gray-700 font-medium">
                BGC Bidyanagar, Chandanaish, Chattogram
              </p>
              <p className="text-base font-semibold text-gray-800">
                Department of Computer Science and Engineering
              </p>
            </div>

            {/* Assignment Title */}
            <div className="text-center py-4">
              <h2 className="text-xl font-bold underline decoration-2 underline-offset-4">
                {formData.documentTitle || "Assignment"}
              </h2>
            </div>

            {/* Assignment Details */}
            <div className="space-y-3 p-6 rounded-lg print:bg-white print:p-0">
              {formData.documentTitle === "Lab Report" ? (
                <>
                  {/* Lab Report specific layout */}
                  <div className="grid grid-cols-12 gap-2 items-center text-base">
                    <span className="col-span-5 font-bold">Experiment Name</span>
                    <span className="col-span-1 font-bold text-center">:</span>
                    <span className="col-span-6 font-normal">
                      {formData.experimentName || "___"}
                    </span>
                  </div>
                  <div className="grid grid-cols-12 gap-2 items-center text-base">
                    <span className="col-span-5 font-bold">Experiment No</span>
                    <span className="col-span-1 font-bold text-center">:</span>
                    <span className="col-span-6 font-normal">
                      {formData.experimentNo || "___"}
                    </span>
                  </div>
                  <div className="grid grid-cols-12 gap-2 items-center text-base">
                    <span className="col-span-5 font-bold">Course Title</span>
                    <span className="col-span-1 font-bold text-center">:</span>
                    <span className="col-span-6 font-normal">
                      {formData.courseTitle || "___"}
                    </span>
                  </div>
                  <div className="grid grid-cols-12 gap-2 items-center text-base">
                    <span className="col-span-5 font-bold">Course Code</span>
                    <span className="col-span-1 font-bold text-center">:</span>
                    <span className="col-span-6 font-normal">
                      {formData.courseCode || "___"}
                    </span>
                  </div>
                  <div className="grid grid-cols-12 gap-2 items-center text-base">
                    <span className="col-span-5 font-bold">Session</span>
                    <span className="col-span-1 font-bold text-center">:</span>
                    <span className="col-span-6 font-normal">
                      {formData.session || "___"}
                    </span>
                  </div>
                  <div className="grid grid-cols-12 gap-2 items-center text-base">
                    <span className="col-span-5 font-bold">Program</span>
                    <span className="col-span-1 font-bold text-center">:</span>
                    <span className="col-span-6 font-normal">
                      {formData.program || "___"}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  {/* Assignment/other document types layout */}
                  <div className="grid grid-cols-12 gap-2 items-center text-base">
                    <span className="col-span-5 font-bold">
                      {formData.documentTitle || "Assignment"} no
                    </span>
                    <span className="col-span-1 font-bold text-center">:</span>
                    <span className="col-span-6 font-normal">
                      {formData.assignmentNo || "___"}
                    </span>
                  </div>
                  <div className="grid grid-cols-12 gap-2 items-center text-base">
                    <span className="col-span-5 font-bold">Course Title</span>
                    <span className="col-span-1 font-bold text-center">:</span>
                    <span className="col-span-6 font-normal">
                      {formData.courseTitle || "___"}
                    </span>
                  </div>
                  <div className="grid grid-cols-12 gap-2 items-center text-base">
                    <span className="col-span-5 font-bold">Course Code</span>
                    <span className="col-span-1 font-bold text-center">:</span>
                    <span className="col-span-6 font-normal">
                      {formData.courseCode || "___"}
                    </span>
                  </div>
                  <div className="grid grid-cols-12 gap-2 items-center text-base">
                    <span className="col-span-5 font-bold">Session</span>
                    <span className="col-span-1 font-bold text-center">:</span>
                    <span className="col-span-6 font-normal">
                      {formData.session || "___"}
                    </span>
                  </div>
                  <div className="grid grid-cols-12 gap-2 items-center text-base">
                    <span className="col-span-5 font-bold">Program</span>
                    <span className="col-span-1 font-bold text-center">:</span>
                    <span className="col-span-6 font-normal">
                      {formData.program || "___"}
                    </span>
                  </div>
                </>
              )}
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8">
              <div className="text-center space-y-4">
                <h3 className="text-lg font-bold border-b-2 border-gray-300 inline-block">
                  Submitted To
                </h3>
                <div className="space-y-2 text-base">
                  <div className="space-y-1">
                    <div>
                      <span className="font-normal">
                        {formData.courseTeacher || "___"}
                      </span>
                    </div>
                    <div className="font-normal">
                      {formData.designation || "___"} at{" "}
                      <br />
                      <span className="font-bold text-green-800">
                        BGC TRUST UNIVERSITY BANGLADESH
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submitted By */}
              <div className="text-center space-y-4">
                <h3 className="text-lg font-bold border-b-2 border-gray-300 inline-block">
                  Submitted By
                </h3>
                <div className="space-y-2 text-base">
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
          </div>

          {/* Footer */}
          <div className="flex justify-between items-end pt-8 border-t border-gray-200 print:border-gray-400">
            {formData.documentTitle === "Lab Report" ? (
              <div className="space-y-2">
                <div className="text-base">
                  <span className="font-bold">Date of Experiment: </span>
                  <span className="font-normal">
                    {formData.experimentDate || "_______________"}
                  </span>
                </div>
                <div className="text-base">
                  <span className="font-bold">Date of Submission: </span>
                  <span className="font-normal">
                    {formData.submissionDate || "_______________"}
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-base">
                <span className="font-bold">Date of Submission: </span>
                <span className="font-normal">
                  {formData.submissionDate || "_______________"}
                </span>
              </div>
            )}
            <div className="text-center">
              <div className="border-b-2 border-gray-500 w-48 mb-2"></div>
              <span className="text-sm font-normal text-gray-600">
                Signature of Course Teacher
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
