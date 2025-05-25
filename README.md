# 📝 Assignment & Lab Report Generator

A comprehensive **academic document management system** built with **Next.js 15** and **TypeScript**, specifically designed for students at BGC Trust University Bangladesh to create, edit, and manage academic assignments and lab reports with professional formatting.

## 🎯 Project Overview

This application serves as a digital solution for creating professional academic documents, eliminating the need for manual formatting and ensuring consistent, university-standard document layouts. Built with modern web technologies, it provides an intuitive interface for students to generate print-ready academic documents.

## ✨ Key Features

### 📚 Document Types Support
- **Assignments** - Regular course assignments with assignment numbers
- **Lab Reports** - Laboratory experiment reports with experiment details  
- **Project Reports** - Academic project documentation
- **Term Papers** - Academic term papers and research documents

### 🎨 Smart Form System
- **Dynamic forms** that adapt based on document type selection
- **Real-time validation** using Zod schema validation
- **Date pickers** with intelligent restrictions and validations
- **Dropdown selections** for programs, semesters, and document types
- **Auto-save functionality** to prevent data loss

### 💾 Advanced Data Management
- **Local storage** integration for persistent data saving
- **Recent documents** sidebar showing document history (last 20 documents)
- **Load/Save functionality** with comprehensive toast notifications
- **Form reset** and **copy data** capabilities
- **Export/Import** document templates

### 🖨️ Professional Document Generation
- **Print-ready documents** with proper A4 formatting and margins
- **PDF export** functionality using html2pdf.js library
- **University branding** with official BGC Trust University logo
- **Watermark support** for official document authentication
- **Print-specific CSS** for optimal document printing

### 🎨 Modern UI/UX
- **Responsive design** that works seamlessly on all device sizes
- **Modern interface** built with shadcn/ui components and Tailwind CSS
- **Toast notifications** for real-time user feedback
- **Professional styling** with university color scheme
- **Accessibility features** for inclusive user experience

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15** - React framework with App Router and Turbopack
- **React 19** - Latest React version with concurrent features
- **TypeScript** - Type-safe development and better code quality

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **shadcn/ui** - High-quality, accessible UI component library
- **Radix UI** - Headless UI primitives for accessibility
- **Lucide React** - Beautiful and consistent icon library
- **React Icons** - Additional icon sets

### Form Management & Validation
- **React Hook Form** - Performant form library with minimal re-renders
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Seamless form validation integration

### Utilities & Libraries
- **date-fns** - Modern JavaScript date utility library
- **html2pdf.js** - Client-side PDF generation with custom styling
- **clsx & tailwind-merge** - Conditional class name utilities
- **class-variance-authority** - Type-safe variant management

## 📋 Comprehensive Form Fields

### Common Fields (All Document Types)
- Document Type selection with dynamic form adaptation
- Course Title & Course Code
- Academic Session (year format)
- Program selection (CSE, EEE, BBA, LLB, etc.)
- Course Teacher Name & Designation
- Student Name & Internal ID
- Semester & Section selection
- Submission Date with calendar picker

### Lab Report Specific Fields
- Experiment Name with detailed description
- Experiment Number for proper indexing
- Date of Experiment with validation
- Laboratory session details

### Assignment/Project Specific Fields
- Assignment/Project/Term Paper Number
- Assignment title and description
- Project scope and objectives

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Bun (recommended) or npm/yarn

### Installation & Setup

```bash
# Clone the repository (authorized users only)
git clone [repository-url]

# Navigate to project directory
cd assignment_lab_report

# Install dependencies
bun install
# or
npm install

# Run development server
bun dev
# or
npm run dev
```

### Available Scripts

```bash
# Development with Turbopack (fastest)
bun dev

# Production build
bun run build

# Start production server
bun start

# Run linting
bun run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🎯 Target Audience

- **Students** at BGC Trust University Bangladesh
- **Faculty members** for document template standardization
- **Academic administrators** for consistent formatting requirements

## 💡 Key Benefits

1. **Consistency** - Ensures all documents follow university standards
2. **Efficiency** - Significantly reduces document creation time
3. **Professional Quality** - Generates university-branded documents
4. **Cross-Platform** - Web-based solution works on any device
5. **Data Persistence** - Automatic saving prevents work loss
6. **Print Optimization** - Perfect A4 formatting for physical submission

## 🔒 Security & Data Privacy

- All data is stored locally in the browser
- No personal information is transmitted to external servers
- Secure form validation and sanitization
- Privacy-focused design with no tracking

## 🏗️ Architecture

The application follows modern React patterns with:
- **Component-based architecture** for reusability
- **Custom hooks** for state management (`use-form-management`, `use-toast`)
- **Type-safe development** with comprehensive TypeScript integration
- **Responsive design** principles throughout

## 👨‍💻 Developer Information

**Created by:** Tajwar Saiyeed Abid  
**University:** BGC Trust University Bangladesh  
**Program:** Computer Science & Engineering  

### Connect with the Developer
- **GitHub:** [tajwar](https://github.com/tajwar)
- **LinkedIn:** [tajwar-saiyeed](https://linkedin.com/in/tajwar-saiyeed)
- **Facebook:** [tajwar.saiyeed.abid](https://facebook.com/tajwar.saiyeed.abid)

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for detailed terms and conditions.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request to contribute to this project.

## 📞 Support

For technical support or inquiries, please contact the developer directly through the provided social media links.

---

**Made with ❤️ for BGC Trust University Bangladesh**
