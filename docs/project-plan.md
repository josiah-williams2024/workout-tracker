# 🧩 Project Plan – Workout Tracker

**Author:** Josiah Williams  
**Start Date:** October 2025  
**Goal:** Build a full-stack Workout Tracker web app that evolves into a Progressive Web App (PWA) for mobile use.

---

## 🎯 Project Overview

The **Workout Tracker** is a learning project designed to practice full-stack development concepts.  
The app will allow users to record their workouts, track progress, and eventually install the app as a PWA on mobile devices.  

This plan outlines the roadmap from a simple web app to a fully functional backend-integrated and mobile-ready solution.

---

## 🗂️ Phase Breakdown

### **Phase 1: Frontend Foundation 
**Objective:** Build the user interface and basic functionality.

**Tasks:**
- Create HTML structure for workout input and history
- Style using CSS (responsive layout)
- Add JavaScript logic for:
  - Adding, editing, deleting workouts
  - Saving data to LocalStorage
- Validate inputs and handle simple errors

**Deliverables:**
- `frontend/index.html`
- `frontend/style.css`
- `frontend/app.js`
- First working version (no backend)

---

### **Phase 2: Data Handling & API Integration 
**Objective:** Introduce backend and data persistence.

**Tasks:**
- Learn RESTful API concepts
- Build a backend server with **Node.js + Express** (or Flask if Python)
- Create CRUD routes for workouts (`/api/workouts`)
- Connect to a database (MongoDB, MySQL, or Firebase)
- Fetch workouts via AJAX or Fetch API on frontend

**Deliverables:**
- `backend/server.js`
- `backend/routes/workouts.js`
- Connected database instance
- Basic API testing using Postman

---

### **Phase 3: PWA Conversion 
**Objective:** Make the app installable and functional offline.

**Tasks:**
- Add a `manifest.json`
- Implement **Service Worker** for caching assets and offline access
- Create an “Install App” button
- Test installation on desktop and mobile browsers

**Deliverables:**
- `frontend/manifest.json`
- `frontend/sw.js`
- Verified offline mode

---

### **Phase 4: UI/UX Enhancement & Testing 
**Objective:** Improve usability and ensure stability.

**Tasks:**
- Enhance visual design and navigation
- Add filters (by muscle group or date)
- Add progress charts using Chart.js or similar
- Perform basic usability testing
- Document bugs and fixes

**Deliverables:**
- Polished interface
- `docs/learning-notes.md` updated with testing results
- Screenshots for README

---

### **Phase 5: Deployment & Maintenance**
**Objective:** Host the project and finalize documentation.

**Tasks:**
- Deploy frontend via **GitHub Pages** (or Vercel)
- Deploy backend via **Render** (or Railway)
- Finalize all documentation:
  - README.md
  - project-plan.md
  - learning-notes.md
- Optional: add CI/CD workflow

**Deliverables:**
- Live hosted project
- Complete documentation set
- Final commit tagged `v1.0`

---

## 🧭 Tools & Technologies
| Category | Tools |
|-----------|-------|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express (or Flask) |
| Database | MongoDB / MySQL / Firebase |
| PWA | Service Worker, Manifest |
| Deployment | GitHub Pages, Render, Vercel |
| Version Control | Git & GitHub |

---

## 📈 Success Criteria
- ✅ User can add, edit, delete, and view workouts  
- ✅ Data persists across sessions (local or database)  
- ✅ App works offline (PWA)  
- ✅ App installable on mobile  
- ✅ Fully documented project repo  

---

## 🧠 Reflection Notes (To Fill as You Go)
| Week | Key Learning | Challenges | Next Steps |
|------|----------------|-------------|-------------|
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |
| 4 |  |  |  |
| 5 |  |  |  |

---

**Made with ❤️ by Josiah Williams**  
_Conestoga College – Software Engineering Technology_
