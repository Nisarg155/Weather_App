
## Project Setup & Installation

This project is built using **Next.js** and **React**.

### Tech Stack & Versions

* **Next.js**: `16.0.8`
* **React**: `19.2.1`
* **Node.js**: `22.14.0` (recommended)

---

## Prerequisites

Make sure you have the following installed:

* **Node.js** (v18 or above)
* **npm**

Check versions using:

```bash
node -v
npm -v
```

---

## Steps to Install & Set Up the Project

1. **Clone the repository**

```bash
git clone https://github.com/Nisarg155/Weather_App.git
cd Weather_App
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Variables**
   Create a `.env.local` file in the root directory and add the required environment variables.

```env
NEXT_PUBLIC_BASE_URL=
NEXT_PUBLIC_WEATHER_API_KEY=
```

---

## Running the Project Locally

Start the development server:

```bash
npm run dev
```

The application will be available at:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## Editing the Application

You can start editing the main page at:

```bash
app/page.tsx
```

Changes will auto-reload in the browser.

---

## Build for Production

To create a production build:

```bash
npm run build
npm run start
```

