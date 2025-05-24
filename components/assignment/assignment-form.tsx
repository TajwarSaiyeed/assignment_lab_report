import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  CalendarIcon,
  Save,
  RotateCcw,
  Copy,
  Printer,
  FileDown,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { FormData } from "@/types/form";

interface AssignmentFormProps {
  formData: FormData;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  handleInputChange: (field: keyof FormData, value: string) => void;
  isFormValid: () => boolean;
  resetForm: () => void;
  saveToLocalStorage: () => void;
  copyFormData: () => void;
  handlePrint: () => void;
  exportToPDF: () => void;
}

export default function AssignmentForm({
  formData,
  date,
  setDate,
  handleInputChange,
  isFormValid,
  resetForm,
  saveToLocalStorage,
  copyFormData,
  handlePrint,
  exportToPDF,
}: AssignmentFormProps) {
  return (
    <Card className="print:hidden">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="space-y-2">
            <Label htmlFor="documentTitle">Document Type</Label>
            <select
              id="documentTitle"
              value={formData.documentTitle}
              onChange={(e) =>
                handleInputChange("documentTitle", e.target.value)
              }
              className="w-full p-2 border rounded-md"
            >
              <option value="Assignment">Assignment</option>
              <option value="Lab Report">Lab Report</option>
              <option value="Project Report">Project Report</option>
              <option value="Term Paper">Term Paper</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="assignmentNo">
              {formData.documentTitle} Number
            </Label>
            <Input
              id="assignmentNo"
              value={formData.assignmentNo}
              onChange={(e) =>
                handleInputChange("assignmentNo", e.target.value)
              }
              placeholder="Enter number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="courseTitle">Course Title</Label>
            <Input
              id="courseTitle"
              value={formData.courseTitle}
              onChange={(e) => handleInputChange("courseTitle", e.target.value)}
              placeholder="Enter course title"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="courseCode">Course Code</Label>
            <Input
              id="courseCode"
              value={formData.courseCode}
              onChange={(e) => handleInputChange("courseCode", e.target.value)}
              placeholder="Enter course code"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="session">Session</Label>
            <Input
              id="session"
              value={formData.session}
              onChange={(e) => handleInputChange("session", e.target.value)}
              placeholder="e.g., 2023-24"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="program">Program</Label>
            <select
              id="program"
              value={formData.program}
              onChange={(e) => handleInputChange("program", e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="B.Sc. (Hons.) in CSE">B.Sc. (Hons.) in CSE</option>
              <option value="B.Sc. (Hons.) in EEE">B.Sc. (Hons.) in EEE</option>
              <option value="BBA">BBA</option>
              <option value="LLB (Hons.)">LLB (Hons.)</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="courseTeacher">Course Teacher</Label>
            <Input
              id="courseTeacher"
              value={formData.courseTeacher}
              onChange={(e) =>
                handleInputChange("courseTeacher", e.target.value)
              }
              placeholder="Enter teacher name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="designation">Designation</Label>
            <Input
              id="designation"
              value={formData.designation}
              onChange={(e) => handleInputChange("designation", e.target.value)}
              placeholder="e.g., Assistant Professor"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="studentName">Student Name</Label>
            <Input
              id="studentName"
              value={formData.studentName}
              onChange={(e) => handleInputChange("studentName", e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="internalId">Internal ID</Label>
            <Input
              id="internalId"
              value={formData.internalId}
              onChange={(e) => handleInputChange("internalId", e.target.value)}
              placeholder="Enter your ID"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="semester">Semester</Label>
            <select
              id="semester"
              value={formData.semester}
              onChange={(e) => handleInputChange("semester", e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Semester</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
              <option value="5th">5th</option>
              <option value="6th">6th</option>
              <option value="7th">7th</option>
              <option value="8th">8th</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="section">Section</Label>
            <Input
              id="section"
              value={formData.section}
              onChange={(e) => handleInputChange("section", e.target.value)}
              placeholder="e.g., A"
            />
          </div>

          <div className="space-y-2">
            <Label>Submission Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-4 border-t">
          <Button
            onClick={saveToLocalStorage}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Data
          </Button>

          <Button
            onClick={resetForm}
            variant="outline"
            className="border-red-600 text-red-600 hover:bg-red-50"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset Form
          </Button>

          <Button
            onClick={copyFormData}
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy Data
          </Button>

          <Button
            onClick={handlePrint}
            disabled={!isFormValid()}
            className="bg-green-600 hover:bg-green-700 text-white disabled:opacity-50"
          >
            <Printer className="w-4 h-4 mr-2" />
            Print
          </Button>

          <Button
            onClick={exportToPDF}
            disabled={!isFormValid()}
            className="bg-orange-600 hover:bg-orange-700 text-white disabled:opacity-50"
          >
            <FileDown className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
