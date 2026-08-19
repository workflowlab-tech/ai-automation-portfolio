export type Credential = {
  label: string;
  issuer: string;
  href?: string;
};

export const credentials: Credential[] = [
  { label: "BS Accountancy", issuer: "Polytechnic University of the Philippines, 2017" },
  {
    label: "Xero Certified Associate — Level 1",
    issuer: "Xero, 2026",
    href: "/documents/certificates/xero-certified-associate.pdf",
  },
  {
    label: "Excel Automation Workshop",
    issuer: "MSTConnect Educational Consultancy, 2026",
    href: "/documents/certificates/excel-automation-workshop.pdf",
  },
  {
    label: "Introduction to Bookkeeping",
    issuer: "TESDA, 2026",
    href: "/documents/certificates/introduction-to-bookkeeping.pdf",
  },
  {
    label: "Claude 101",
    issuer: "DataCamp, 2026",
    href: "/documents/certificates/datacamp-claude-101.pdf",
  },
  {
    label: "Practical AI with Gemini & NotebookLM",
    issuer: "DataCamp, 2026",
    href: "/documents/certificates/datacamp-gemini-notebooklm.pdf",
  },
  {
    label: "Intermediate ChatGPT",
    issuer: "DataCamp, 2026",
    href: "/documents/certificates/datacamp-intermediate-chatgpt.pdf",
  },
];
