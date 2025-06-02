import { z } from "zod";

const groupMemberSchema = z.object({
  name: z.string().min(1, "Student name is required"),
  id: z.string().min(1, "Student ID is required"),
});

export const formSchema = z.object({
  documentTitle: z.string().min(1, "Document type is required"),
  assignmentNo: z.string().optional(),
  courseTitle: z.string().min(1, "Course title is required"),
  courseCode: z.string().min(1, "Course code is required"),
  session: z.string().min(1, "Session is required"),
  program: z.string().min(1, "Program is required"),
  courseTeacher: z.string().min(1, "Course teacher is required"),
  designation: z.string().min(1, "Designation is required"),
  studentName: z.string().min(1, "Student name is required"),
  internalId: z.string().min(1, "Internal ID is required"),
  semester: z.string().min(1, "Semester is required"),
  section: z.string().min(1, "Section is required"),
  submissionDate: z.string().optional(),
  experimentName: z.string().optional(),
  experimentNo: z.string().optional(),
  experimentDate: z.string().optional(),
  // Group project fields
  isGroupProject: z.boolean(),
  groupMembers: z.array(groupMemberSchema),
  projectTitle: z.string().optional(),
}).superRefine((data, ctx) => {
  // Conditional validation based on document type
  if (data.documentTitle === "Lab Report") {
    if (!data.experimentName || data.experimentName.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Experiment name is required for lab reports",
        path: ["experimentName"],
      });
    }
    if (!data.experimentNo || data.experimentNo.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Experiment number is required for lab reports",
        path: ["experimentNo"],
      });
    }
    if (!data.experimentDate || data.experimentDate.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Experiment date is required for lab reports",
        path: ["experimentDate"],
      });
    }
  } else {
    // For assignments and other document types
    if (!data.assignmentNo || data.assignmentNo.trim() === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `${data.documentTitle} number is required`,
        path: ["assignmentNo"],
      });
    }
  }

  // Group project validation for Project Reports
  if (data.documentTitle === "Project Report" && data.isGroupProject) {
    if (data.groupMembers.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "At least one group member is required for group projects",
        path: ["groupMembers"],
      });
    }
  }
  if (data.documentTitle === "Project Report" && !data.projectTitle) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Project title is required for project reports",
      path: ["projectTitle"],
    });
  }
});

export type FormData = z.infer<typeof formSchema>;
export type GroupMember = z.infer<typeof groupMemberSchema>;
