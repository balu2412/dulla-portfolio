# Dulla Bal Reddy — Portfolio (MERN + 3D)

A 3D-animated personal portfolio built on the MERN stack.

- **Frontend:** React 18 + Vite, vanilla three.js for the rotating 3D "circuit chip" hero, plain CSS design system (no Tailwind build step required), scroll-reveal animations, and a left-margin "trace rail" that fills in as you scroll.
- **Backend:** Express + MongoDB (Mongoose) — powers the working contact form, storing each message in a `messages` collection.

Content (skills, projects, certifications, achievements) lives in one place: `frontend/src/data/content.js`. Edit that file to update anything on the site.

## Project structure

```
mern-portfolio/
├── frontend/   React + Vite app
└── backend/    Express + MongoDB API (contact form)
```

## 1. Backend setup

```bash
cd backend
npm install
cp .env.example .env     # edit MONGO_URI if you're not running Mongo locally
npm run dev
```

This starts the API on `http://localhost:5000`. You'll need MongoDB running — either locally (`mongod`) or a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (paste its connection string into `MONGO_URI`).

## 2. Frontend setup

In a separate terminal:

```bash
cd frontend
npm install
cp .env.example .env     # only needed if your backend isn't on localhost:5000
npm run dev
```

Visit `http://localhost:5173`. The contact form on the site POSTs to `${VITE_API_URL}/api/contact`, which the backend saves to MongoDB.

## 3. Building for production

```bash
cd frontend
npm run build
```

This outputs a static `frontend/dist` folder you can deploy anywhere (Vercel, Netlify, GitHub Pages). Deploy the `backend` separately (Render, Railway, Fly.io all have free tiers) and point `VITE_API_URL` at it.

## Notes

- A photo slot is already built into the About section (`frontend/src/components/About.jsx`). It currently shows a "DB" placeholder — to add your real photo, drop the image file in `frontend/public/` and replace the `<span className="about-photo-initials">` with `<img src="/your-photo.jpg" alt="Dulla Bal Reddy" />`.
- The GitHub repo links ("GitLink" buttons) on each project card point to your real repos: `project-ashwini`, `smart-civic`, and `resume_analyzer_using-langchain-and-ollama`.
- "Smart Civic" is the renamed/evolved version of the original Pothole Management System project, matching your GitHub repo name.
- If you'd rather skip the backend entirely (e.g. for a quick static deploy), you can swap the `fetch()` call in `frontend/src/components/Contact.jsx` for a `mailto:` link — happy to do that for you if you'd prefer.
