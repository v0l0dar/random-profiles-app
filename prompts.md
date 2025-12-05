# AI Interaction Log

This document records the usage of AI assistants (ChatGPT/Gemini/Claude) during the development of the Random Profiles App. The AI was used primarily for boilerplate generation, data mocking logic, strict typing enforcement, and SEO optimization.

## Phase 1: Architecture & Server Layer

**Context:** While the Nuxt 4 scaffold was ready, I needed to ensure the server-side API structure followed the latest Nitro event handler patterns and efficiently handled data mocking.

> **Prompt:**
> "I am building a Nuxt 4 application with a local server API. I need to implement a REST endpoint `/api/profiles` that generates random user data.
> Please provide a TypeScript utility function using `@faker-js/faker` to generate a `Profile` object (id, name, email, job, avatarUrl).
> Then, show how to implement the server route handler `server/api/profiles.get.ts` to return a list of these profiles using proper Nuxt server utils."

**Action:** Adopted the `generateProfile` utility but customized the avatar generation logic to align with project requirements.

---

## Phase 2: Type Safety & Validation (Zod)

**Context:** To ensure type safety between the server response and the client, and to earn bonus points for validation, I decided to integrate Zod.

> **Prompt:**
> "I have a TypeScript interface for a User Profile. Refactor this interface to use `zod` schema validation.
> Create a shared schema that can be used to validate the API response payload on the server and infer the TypeScript type for the client.
> The schema should include validation rules (e.g., valid email, URL for avatar)."

**Action:** Created `app/types/profile.ts` with `ProfileSchema` and `z.infer`. Applied this validation in the server handlers before returning data.

---

## Phase 3: UI Components & Tailwind

**Context:** accelerating the development of the UI layer using Tailwind CSS best practices.

> **Prompt:**
> "Create a Vue 3 component `ProfileCard.vue` using Tailwind CSS.
> It should accept a `Profile` prop.
> Features:
>
> 1. Display the avatar, name, job title, and email.
> 2. Hover effects for interactivity.
> 3. A skeleton loading state component (`ProfileCardSkeleton.vue`) that matches the layout of the card exactly."

**Action:** Integrated the code, but refactored the prop typing to import the shared `Profile` type instead of inline declaration to adhere to DRY principles.

---

## Phase 4: Troubleshooting & Optimization

**Context:** Encountered `429 Too Many Requests` errors when using TestingBot API with `NuxtImg` due to aggressive server-side optimization requests.

> **Prompt:**
> "I am getting HTTP 429 errors when fetching avatar images from an external API inside a loop. The issue seems to be caused by NuxtImage optimizing images on the server side.
> Suggest a strategy to handle this or an alternative stable placeholder service for development."

**Action:** Modified `generateProfile.ts` to use `pravatar.cc` as a fallback and adjusted the caching logic in `server/utils/store.ts` to prevent unnecessary re-generation of profiles, reducing external API calls.

---

## Phase 5: SEO & Schema.org

**Context:** Improving the SEO score for the dynamic profile pages.

> **Prompt:**
> "Generate a JSON-LD structured data snippet for a Person profile page.
> It should map the following fields: name, jobTitle, company, email, and avatarUrl.
> Show me how to inject this into a Nuxt 3/4 page using `useHead`."

**Action:** Implemented the JSON-LD script in `app/pages/profile/[id].vue` to improve search engine understanding of the profile entities.
