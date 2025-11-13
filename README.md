# 🎸 GSAP Interactive Animation Playground

A visually rich interactive website built with **React**, **GSAP (GreenSock Animation Platform)**, and **Tailwind CSS**, featuring:
- Smooth page entrance animations  
- Scroll-triggered motion sequences  
- Horizontal pinned text animation  
- A reactive glowing custom cursor  
- Interactive **“guitar string”** SVG that moves and bounces like a real string  
- A modern frosted-glass inspired UI aesthetic

---

## 🚀 Features

### ✨ Entrance Animations
- The navigation and hero title smoothly fade and slide into view on page load using `gsap.timeline()`.

### 📜 Scroll Animations
- As you scroll, different sections come alive:
  - Boxes move and rotate.
  - Text fades in with staggered timing.
  - A large headline scrolls horizontally across a pinned section (`ScrollTrigger` magic).

### 🎶 Interactive Guitar Strings
- Move your mouse over the strings to **pluck** them.  
- Each string reacts individually to mouse proximity.  
- On mouse leave, they bounce back naturally using `elastic.out` easing.

### 💫 Custom Animated Cursor
- Follows the mouse with a soft, glowing motion.  
- Scales slightly based on movement speed for a fluid, reactive effect.  
- Uses `mix-blend-difference` to stand out on both dark and light backgrounds.

### 🧊 Frosted Glass UI
- The layout uses subtle transparency, gradients, and soft shadows inspired by frosted glass effects.  
- Designed to look clean, modern, and minimalistic without overwhelming animations.

---

## 🧰 Tech Stack

| Technology | Purpose |
|-------------|----------|
| ⚛️ **React** | Component-based UI |
| 🎨 **Tailwind CSS** | Utility-first styling |
| 🌀 **GSAP + ScrollTrigger** | Animation engine |
| 💡 **@gsap/react** | Hook-based GSAP integration for React |

---

## 🛠️ Installation & Setup

Clone the repo and install dependencies:

Start the development server:

```bash
npm run dev
```

## 🧑‍💻 Project Structure

```
src/
├── App.jsx          # Main component with GSAP logic
├── index.css        # Tailwind base styles
└── main.jsx         # React entry point
public/
└── index.html
```

---

## 🎛️ Key Animations Overview

### Hero Section

```js
gsap.from("#heroTitle", { opacity: 0, y: -50, duration: 1 });
```

### Scroll-triggered Box Animation

```js
gsap.to("#box1", {
  x: 500,
  rotation: 360,
  scrollTrigger: {
    trigger: "#box1",
    start: "top 80%",
    scrub: true,
  },
});
```

### Pinned Text Scroll

```js
gsap.to("#pinText h1", {
  x: -scrollDistance,
  scrollTrigger: {
    trigger: "#pinText",
    pin: true,
    scrub: 1,
  },
});
```

### Guitar String Bounce

```js
gsap.to(path, {
  duration: 1.2,
  attr: { d: `M 100 ${baseY} Q 950 ${baseY} 1800 ${baseY}` },
  ease: "elastic.out(1.2, 0.25)",
});
```

---

## 🎨 Tailwind Design Highlights

* `backdrop-blur-lg` and `bg-white/10` for frosted glass panels
* `text-white/90` and soft gradient backgrounds for contrast
* `drop-shadow` and `shadow-[0_0_15px_rgba(255,255,255,0.3)]` for glowing details
* Responsive layout using flex and grid utilities

---

## 💬 Credits

* [GSAP](https://greensock.com/gsap/) — GreenSock Animation Platform
* [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
* [React](https://react.dev/) — UI Library
* Design & animations — *Mickey*

---

## 📜 License

MIT License © 2025 — Feel free to use, modify, and build upon this project.

---

> *“Animation isn’t just movement — it’s emotion in motion.”* 🎞️
