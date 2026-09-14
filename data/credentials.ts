export type Credential = {
  label: string;
  issuer: string;
  href?: string;
  previewHref?: string;
};

export const credentials: Credential[] = [
  { label: "BS Accountancy", issuer: "Polytechnic University of the Philippines, 2017" },
  {
    label: "Building Marketing Workflows with n8n",
    issuer: "DataCamp, 2026",
    href: "/documents/certificates/portfolio/building-marketing-workflows-n8n.pdf",
    previewHref: "/certificates/icons/building-marketing-workflows-n8n.png",
  },
  {
    label: "Introduction to Workflow Automation with n8n",
    issuer: "DataCamp, 2026",
    href: "/documents/certificates/portfolio/introduction-workflow-automation-n8n.pdf",
    previewHref: "/certificates/icons/introduction-workflow-automation-n8n.png",
  },
  {
    label: "Claude 101",
    issuer: "DataCamp, 2026",
    href: "/documents/certificates/portfolio/claude-101.pdf",
    previewHref: "/certificates/icons/claude-101.png",
  },
  {
    label: "Intermediate ChatGPT",
    issuer: "DataCamp, 2026",
    href: "/documents/certificates/portfolio/intermediate-chatgpt.pdf",
    previewHref: "/certificates/icons/intermediate-chatgpt.png",
  },
  {
    label: "Understanding ChatGPT",
    issuer: "DataCamp, 2026",
    href: "/documents/certificates/portfolio/understanding-chatgpt.pdf",
    previewHref: "/certificates/icons/understanding-chatgpt.png",
  },
  {
    label: "Practical AI with Google Gemini and NotebookLM",
    issuer: "DataCamp, 2026",
    href: "/documents/certificates/portfolio/gemini-notebooklm.pdf",
    previewHref: "/certificates/icons/gemini-notebooklm.png",
  },
  {
    label: "Claude Code in Action",
    issuer: "Claude Academy, 2026",
    href: "/documents/certificates/portfolio/claude-code-in-action.png",
    previewHref: "/certificates/icons/claude-code-in-action.png",
  },
  {
    label: "Claude Code 101",
    issuer: "Claude Academy, 2026",
    href: "/documents/certificates/portfolio/claude-code-101.png",
    previewHref: "/certificates/icons/claude-code-101.png",
  },
  {
    label: "From Data to Decisions",
    issuer: "The Coding School, 2026",
    href: "/documents/certificates/portfolio/from-data-to-decisions.png",
    previewHref: "/certificates/icons/from-data-to-decisions.png",
  },
];
