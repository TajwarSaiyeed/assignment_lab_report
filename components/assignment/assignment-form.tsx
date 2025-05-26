import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { UseFormReturn } from "react-hook-form";
import { FormData } from "@/lib/form-schema";

interface AssignmentFormProps {
  form: UseFormReturn<FormData>;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  experimentDate: Date | undefined;
  setExperimentDate: (date: Date | undefined) => void;
  isFormValid: () => boolean;
  resetForm: () => void;
  saveToLocalStorage: () => void;
  copyFormData: () => void;
  handlePrint: () => void;
  exportToPDF: () => void;
  onSubmit: (data: FormData) => void;
}

export default function AssignmentForm({
  form,
  date,
  setDate,
  experimentDate,
  setExperimentDate,
  isFormValid,
  resetForm,
  saveToLocalStorage,
  copyFormData,
  handlePrint,
  exportToPDF,
  onSubmit,
}: AssignmentFormProps) {
  const documentType = form.watch("documentTitle");

  return (
    <Card className="print:hidden">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Document Type */}
              <FormField
                control={form.control}
                name="documentTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Document Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select document type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Assignment">Assignment</SelectItem>
                        <SelectItem value="Lab Report">Lab Report</SelectItem>
                        <SelectItem value="Project Report">
                          Project Report
                        </SelectItem>
                        <SelectItem value="Term Paper">Term Paper</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Assignment Number - only show for non-lab report documents */}
              {documentType !== "Lab Report" && (
                <FormField
                  control={form.control}
                  name="assignmentNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{documentType} Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {/* Course Title */}
              <FormField
                control={form.control}
                name="courseTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter course title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Course Code */}
              <FormField
                control={form.control}
                name="courseCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter course code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Session */}
              <FormField
                control={form.control}
                name="session"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Session</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 2023-24" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Program */}
              <FormField
                control={form.control}
                name="program"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Program</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="B.Sc. (Hons.) in CSE">
                          B.Sc. (Hons.) in CSE
                        </SelectItem>
                        <SelectItem value="B.Sc. (Hons.) in EEE">
                          B.Sc. (Hons.) in EEE
                        </SelectItem>
                        <SelectItem value="BBA">BBA</SelectItem>
                        <SelectItem value="LLB (Hons.)">LLB (Hons.)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Course Teacher */}
              <FormField
                control={form.control}
                name="courseTeacher"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Teacher</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter teacher name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Designation */}
              <FormField
                control={form.control}
                name="designation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Designation</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Assistant Professor"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Student Name */}
              <FormField
                control={form.control}
                name="studentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Student Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Internal ID */}
              <FormField
                control={form.control}
                name="internalId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Internal ID</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your ID" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Semester */}
              <FormField
                control={form.control}
                name="semester"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Semester</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Semester" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1st">1st</SelectItem>
                        <SelectItem value="2nd">2nd</SelectItem>
                        <SelectItem value="3rd">3rd</SelectItem>
                        <SelectItem value="4th">4th</SelectItem>
                        <SelectItem value="5th">5th</SelectItem>
                        <SelectItem value="6th">6th</SelectItem>
                        <SelectItem value="7th">7th</SelectItem>
                        <SelectItem value="8th">8th</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Section */}
              <FormField
                control={form.control}
                name="section"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Section</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., A" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Lab Report specific fields */}
              {documentType === "Lab Report" && (
                <>
                  <FormField
                    control={form.control}
                    name="experimentName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Experiment Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter experiment name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="experimentNo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Experiment Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter experiment number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="experimentDate"
                    render={() => (
                      <FormItem>
                        <FormLabel>Date of Experiment</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !experimentDate && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {experimentDate ? (
                                  format(experimentDate, "PPP")
                                ) : (
                                  <span>Pick experiment date</span>
                                )}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={experimentDate}
                              onSelect={setExperimentDate}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {/* Submission Date */}
              <FormField
                control={form.control}
                name="submissionDate"
                render={() => (
                  <FormItem>
                    <FormLabel>Submission Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? (
                              format(date, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </FormControl>
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
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t">
              <Button
                type="button"
                onClick={saveToLocalStorage}
                disabled={!isFormValid()}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Data
              </Button>

              <Button
                type="button"
                onClick={resetForm}
                variant="outline"
                disabled={!isFormValid()}
                className="border-red-600 text-red-600 hover:bg-red-50"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset Form
              </Button>

              <Button
                type="button"
                onClick={copyFormData}
                variant="outline"
                disabled={!isFormValid()}
                className="border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Data
              </Button>

              <Button
                type="button"
                onClick={handlePrint}
                disabled={!isFormValid()}
                className="bg-green-600 hover:bg-green-700 text-white disabled:opacity-50"
              >
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>

              <Button
                type="button"
                onClick={exportToPDF}
                disabled={!isFormValid()}
                className="bg-orange-600 hover:bg-orange-700 text-white disabled:opacity-50"
              >
                <FileDown className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
