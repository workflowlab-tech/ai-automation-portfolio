import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const projectsData = read("data/projects.ts");
const idolProjectData = projectsData.slice(projectsData.indexOf("export const idolFairiesProject"));

const projectContent = [
  idolProjectData,
  read("data/beautyCaseStudy.ts"),
  read("components/BeautySystemDiagram.tsx"),
  read("components/SolutionAreaTabs.tsx"),
  read("app/idol-fairies/page.tsx"),
].join("\n");

test("Idol Fairies Beauty case study includes verified platform capabilities", () => {
  const required = [
    "Idol Fairies Beauty",
    "Full-stack",
    "Guest checkout",
    "nationwide shipping",
    "GCash and GoTyme",
    "payment-proof",
    "Order tracking",
    "customer referral",
    "referral dashboard",
    "Messenger",
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Vercel",
    "Resend",
    "Gemini",
    "n8n",
  ];

  for (const phrase of required) {
    assert.match(projectContent, new RegExp(phrase, "i"), `missing required phrase: ${phrase}`);
  }
});

test("Beauty case study excludes external affiliate activity and stale K-pop positioning", () => {
  const forbidden = [
    "shopee",
    "affiliate",
    "commission",
    "K-pop merchandise",
    "wholesale order",
    "Metabase",
  ];

  for (const phrase of forbidden) {
    assert.doesNotMatch(projectContent, new RegExp(phrase, "i"), `contains forbidden phrase: ${phrase}`);
  }
});

test("Beauty case study does not link the older public storefront build", () => {
  assert.doesNotMatch(projectContent, /https:\/\/idolfairies\.workflowlab\.site/i);
});
