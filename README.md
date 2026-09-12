# Psychologists App

A web application that helps users find psychologists and book personal appointments with them. Built as an individual training project with a focus on Firebase integration, authentication, and pagination.

🔗 **Live demo:** https://psychologists-app-six.vercel.app/

## Features

- **Home page** with a hero section and a call-to-action leading to the psychologists list.
- **Psychologists page** — browse psychologists, sort them by name (A-Z / Z-A), price, or rating. Loads 3 cards at a time, with more cards fetched from the database on "Load more" click.
- **Authentication** — registration and login via Firebase Authentication, with form validation.
- **Favorites** — authenticated users can add psychologists to their favorites list (stored per-user in Firebase) and view them on a dedicated private page. Favorites persist across page reloads.
- **Psychologist details** — expandable cards with full description and client reviews.
- **Appointment request** — modal form to submit a request for a personal appointment with a psychologist.
- **Loading states** — a custom spinner is shown during initial data fetches and while loading more results.

## 🛠 Tech Stack

### 🌐 Core

- **Next.js** (App Router)
- **React**
- **TypeScript**

### 🎨 Styling & UI

- **CSS Modules** — scoped styles per component
- **React Icons**
- **React Hot Toast** — toast notifications

### ⚙️ Data & State

- **Firebase** — Realtime Database (psychologists collection & per-user favorites) & Authentication
- **Zustand** — global state (auth status, favorites)

### 📝 Forms

- **React Hook Form** with **@hookform/resolvers**
- **Formik**
- **Yup** — validation schemas

### 🧹 Code Quality

- **ESLint**

## 📂 Project Structure

```
app/
├── (private routes)/
│   └── favorites/
│       ├── page.module.css
│       └── page.tsx
├── components/
│   ├── Filter/
│   ├── Header/
│   │   └── UserBar/
│   ├── Hero/
│   ├── Loader/
│   ├── Modal/
│   │   ├── AppointmentModal/
│   │   ├── LoginModal/
│   │   └── RegisterModal/
│   ├── PsyCard/
│   └── Reviews/
├── psychologists/
│   └── page.tsx
├── globals.css
├── layout.tsx
└── page.tsx

lib/
├── api/
│   └── api.ts
├── filters/
│   └── filters.ts
├── firebase/
│   ├── auth.ts
│   ├── favorites.ts
│   └── firebase.ts
└── store/
    └── favorite.ts

types/
└── psychologist.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js
- A Firebase project with **Realtime Database** and **Authentication** (Email/Password) enabled

### 1. Clone and install

```bash
git clone https://github.com/asia-skoromna458/psychologists-app.git
cd psychologists-app
npm install
```

### 2. Environment variables

Create a `.env` file in the root directory with your Firebase project config (check `lib/firebase/firebase.ts` for the exact variable names used).

### 3. Run the development server

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## 🛠 Available Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Starts the development server     |
| `npm run build` | Creates a production build        |
| `npm run start` | Runs the production build locally |
| `npm run lint`  | Runs ESLint                       |

## Author

**Asia Skoromna**

- GitHub: [@asia-skoromna458](https://github.com/asia-skoromna458)
- LinkedIn: [asia-skoromna](https://www.linkedin.com/in/asia-skoromna-9586843aa/)
