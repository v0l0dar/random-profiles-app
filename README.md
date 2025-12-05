# Random Profiles App

A Nuxt 4 application displaying randomly generated user profiles with a local REST API layer. Built with Tailwind CSS and TypeScript.

## 🚀 Features

- **Nuxt 4 Architecture:** Utilizes server routes, composables, and strict typing.
- **Local REST API:** `GET /api/profiles`, `GET /api/search`, and `GET /api/profile/:id`.
- **Data Validation:** Zod schemas used for both API responses and client-side validation.
- **Optimized UX:** Skeleton loaders, transition effects, and responsive design.
- **SEO & A11Y:** Open Graph tags, JSON-LD Schema integration, and semantic HTML.

## 🛠️ Tech Stack

- **Framework:** Nuxt 4
- **Styling:** Tailwind CSS 4 (Vite)
- **Validation:** Zod
- **Data Generation:** FakerJS
- **Linting:** ESLint + Prettier

## 📦 Setup & Run

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Start development server:**

    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    npm run preview
    ```
