# 🧠 Learning Notes – Workout Tracker
**Author:** Josiah Williams
**Project Type:** Full-Stack PWA
**Start Date:** OCTOBER 2025
**GOAL** Document weekly progress, new concepts learned, and challenges while building the Workout Tracker app.

**Note:**
- Depending on my availability, I may complete multiple phases quickly if time permits.  
- The focus is on learning and building at a steady pace, not on fixed deadlines.
---

### 🧩 Phase 0 – Setup & Environment
**Focus:**  
- Set up development environment (VS Code, Git, Node, browser tools).  
- Create GitHub repo, folders, and initial documentation (`README.md`, `project-plan.md`, `learning-notes.md`).  

**What I Learned:**  
- How to use `git init`, `commit`, and `push` to manage a repo  
- How Markdown (`.md`) works for documentation 
- Planning out pahse before writing code helps a lot

**Challenges:**  
-Deciding what folders to include
-Learning Git commands
-Remembering Git command without GUI
 
**Next Phase Goal:**  
Begin front-end rebuild.

---

### 🧩 Phase 1 – Front-End Rebuild (Week 1)
**Focus:**  
- Rebuild core HTML, CSS, and JS interface.  
- Create form and workout list for adding/displaying entries.  

**What I Learned:**  
- How to structure a clean HTML form for user input.  
- How to capture form values using JavaScript event listeners.  
- How to store workouts inside an array and render them dynamically.  
- How to use DOM methods (`createElement`, `innerHTML`, `appendChild`) to display content.  
- The importance of keeping HTML, CSS, and JS responsibilities separate.  
- How to reset a form and update the UI without reloading the page.  

**Challenges:**  
- Understanding when and why to use `e.preventDefault()` in form submissions.  
- Making sure the workout list updated properly after each added entry.  
- Keeping the layout clean and readable while adjusting CSS.  
- Preventing elements from stretching or aligning incorrectly.  

**Next Phase Goal:**  
Add delete and edit functionality.

---

### 🧩 Phase 2 – CRUD Logic & Dynamic Form Behavior (Week 2)
**Focus:**  
- Implement full CRUD functionality (Create, Read, Update, Delete).  
- Add Edit and Delete buttons for each workout.  
- Add dynamic form behavior that changes based on workout type (Cardio, Strength, Flexibility).  

**What I Learned:**  
- How to assign unique IDs to workouts using `Date.now()`.  
- How to find, update, and delete specific objects inside an array.  
- How to reload workout data back into the form when editing.  
- How to hide/show form sections using JavaScript and CSS.  
- How to toggle required fields dynamically (`required = true/false`).  
- How to use a placeholder option in a `<select>` to force intentional user choices.  
- How to refine spacing and layout for a clean, professional UI.  

**Challenges:**  
- Getting edit mode to correctly update workouts, especially when switching between Strength and Cardio types.  
- Ensuring old values (sets/reps or duration) don’t remain when changing workout type.  
- Fixing layout issues like misaligned inputs and inconsistent spacing.  
- Debugging visibility issues caused by CSS and form structure.  

**Next Phase Goal:**  
Add persistent storage (localStorage) and filtering options (e.g., filter by type or date).


---
**Made with ❤️ by Josiah Williams** 