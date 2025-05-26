declare module 'html2pdf.js' {
  interface Html2PdfOptions {
    margin?: number | number[]
    filename?: string
    image?: {
      type?: string
      quality?: number
    }
    html2canvas?: {
      scale?: number
      useCORS?: boolean
      allowTaint?: boolean
      letterRendering?: boolean
      scrollX?: number
      scrollY?: number
      windowWidth?: number
      windowHeight?: number
      width?: number
      height?: number
    }
    jsPDF?: {
      unit?: string
      format?: string
      orientation?: string
      compressPDF?: boolean
      hotfixes?: string[]
    }
    pagebreak?: {
      mode?: string[]
    }
  }

  interface Html2Pdf {
    set(options: Html2PdfOptions): Html2Pdf
    from(element: Element | null): Html2Pdf
    save(): Promise<void>
    outputPdf(type: 'blob'): Promise<Blob>
    outputPdf(type: 'dataurlnewwindow'): Promise<Window | null>
    outputPdf(type: 'dataurl'): Promise<string>
    outputPdf(type: 'arraybuffer'): Promise<ArrayBuffer>
    outputPdf(type: string): Promise<any>
  }

  function html2pdf(): Html2Pdf

  export default html2pdf
}
