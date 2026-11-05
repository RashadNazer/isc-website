# ISC Test Website

A premium, high-performance website for **ISC**, the premier leader in Electronic Systems Integration. This platform showcases over 40 years of industrial excellence through a modern, immersive digital experience.

## 🛠 Tech Stack

* **Frontend:** [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/) (Orchestrated Reveals & Parallax)
* **Interactive Visuals:** [Liquid Ether](https://github.com/) (Custom GLSL/Canvas Interaction)
* **Routing:** [React Router v6](https://reactrouter.com/)
* **Deployment:** [Vercel](https://vercel.com/)


## ✨ Key Features

* **Asymmetric Architecture:** Custom Bento-style image grids that maintain natural resolutions and aspect ratios.
* **Micro-Interactions:** Magnetic buttons and staggered "Reveal" components for a high-end feel.
* **Optimized Performance:** SmoothImage components with blur-up loading and image priority handling.
* **Robust Routing:** Configured for SPA stability to prevent 404 errors on direct URL entry or page refreshes.

## 🚀 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Development
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

## 🌐 Deployment Configuration

To ensure seamless routing on Vercel, the project uses a vercel.json rewrite configuration in the root directory. This redirects all server requests to index.html, allowing React Router to handle the URL logic.

```JSON
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 📁 Project Structure

* **src/assets/** — High-resolution industrial photography and brand assets.
* **src/components/** — Core UI library including MagneticButton, Reveal, and StatCounter.
* **src/pages/** — Individual page views (Home, Career, Projects, Privacy, etc.).
* **src/component/LiquidEther/** — Specialized interactive background engine.
