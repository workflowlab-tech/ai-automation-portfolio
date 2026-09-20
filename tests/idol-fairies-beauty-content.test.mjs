import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const readOptional = (path) => {
  try {
    return read(path);
  } catch {
    return "";
  }
};

const projectsData = read("data/projects.ts");
const featuredSystems = read("components/FeaturedSystems.tsx");
const projectsPage = read("app/projects/page.tsx");
const beautyProjectData = readOptional("data/idolFairiesBeautyProject.ts");
const idolProjectPage = read("app/idol-fairies/page.tsx");
const beautyProjectPage = readOptional("app/idol-fairies-beauty/page.tsx");

const projectContent = [
  beautyProjectData,
  read("data/beautyCaseStudy.ts"),
  read("components/BeautySystemDiagram.tsx"),
  readOptional("components/BeautySolutionAreaTabs.tsx"),
  beautyProjectPage,
].join("\n");

test("the original Idol Fairies case study and new Beauty case study coexist", () => {
  assert.match(projectsData, /export const idolFairiesProject: Project/);
  assert.match(beautyProjectData, /export const idolFairiesBeautyProject: Project/);
  assert.match(projectsData, /idolFairiesBeautyProject,/);
  assert.match(idolProjectPage, /Finance & E-commerce Automation Demo/);
  assert.match(idolProjectPage, /SolutionAreaTabs/);
  assert.match(beautyProjectPage, /Full-stack E-commerce Case Study/);
  assert.match(beautyProjectPage, /BeautySolutionAreaTabs/);
  assert.match(beautyProjectData, /viewProjectHref: "\/idol-fairies-beauty"/);
});

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

test("Fairy Skin Studio replaces Personal Income & Expense in featured systems", () => {
  assert.match(featuredSystems, /getProject\("ghl-fairy-skin-consultation-to-treatment"\)!/);
  assert.doesNotMatch(featuredSystems, /getProject\("personal-income-expense"\)!/);
});

test("Idol Fairies Beauty appears immediately below Fairy Skin Studio on the projects page", () => {
  assert.match(
    projectsPage,
    /"ghl-fairy-skin-consultation-to-treatment",\s*"idol-fairies-beauty",/,
  );
});
