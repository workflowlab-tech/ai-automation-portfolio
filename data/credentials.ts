export type Credential = {
  label: string;
  issuer: string;
  href?: string;
  previewHref?: string;
};

export const credentials: Credential[] = [
  { label: "BS Accountancy", issuer: "Polytechnic University of the Philippines, 2017" },
  {
    label: "Xero Certified Associate — Level 1",
    issuer: "Xero, 2026",
    href: "/documents/certificates/xero-certified-associate.pdf",
    previewHref: "/certificates/previews/xero-certified-associate.png",
  },
  {
    label: "Excel Automation Workshop",
    issuer: "MSTConnect Educational Consultancy, 2026",
    href: "/documents/certificates/excel-automation-workshop.pdf",
    previewHref: "/certificates/previews/excel-automation-workshop.png",
  },
  {
    label: "Introduction to Bookkeeping",
    issuer: "TESDA, 2026",
    href: "/documents/certificates/introduction-to-bookkeeping.pdf",
    previewHref: "/certificates/previews/introduction-to-bookkeeping.png",
  },
  {
    label: "Claude 101",
    issuer: "DataCamp, 2026",
    href: "/documents/certificates/datacamp-claude-101.pdf",
    previewHref: "/certificates/previews/datacamp-claude-101.png",
  },
  {
    label: "Practical AI with Gemini & NotebookLM",
    issuer: "DataCamp, 2026",
    href: "/documents/certificates/datacamp-gemini-notebooklm.pdf",
    previewHref: "/certificates/previews/datacamp-gemini-notebooklm.png",
  },
  {
    label: "Understanding ChatGPT",
    issuer: "DataCamp, 2026",
    href: "/documents/certificates/datacamp-understanding-chatgpt.pdf",
    previewHref: "/certificates/previews/datacamp-understanding-chatgpt.png",
  },
  {
    label: "Intermediate ChatGPT",
    issuer: "DataCamp, 2026",
    href: "/documents/certificates/datacamp-intermediate-chatgpt.pdf",
    previewHref: "/certificates/previews/datacamp-intermediate-chatgpt.png",
  },
];
