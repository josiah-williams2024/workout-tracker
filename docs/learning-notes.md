# 🧩 Learning Notes – Workout Tracker

**Author:** Josiah Williams  
**Purpose:** Technical reference notes and commands learned during the project.

---

## 🧠 Phase 1 Notes

### 🔹 Git Commands

#### Command: `git init`
**Explanation:**
- Creates a hidden `.git/` folder that tracks changes to your files.  
- Tells Git, “start tracking this project.”  

**When to Use:**
- Only once per new project (before any commits).

---

#### Command: `git add .`
**Explanation:**
- Prepares files for committing.  
- The `.` means “everything in this folder.”  

**When to Use:**
- Every time you make changes before committing.

---

#### Command: `git commit -m "Initial setup with docs and frontend"`
**Explanation:**
- Creates a permanent snapshot of your project.  
- The `-m` stands for “message.”  

**When to Use:**
- After `git add .`, to record your changes locally.

---

#### Command: `git status`
**Explanation:**
- Lists new, modified, or deleted files.  
- Tells you if your branch is ahead/behind GitHub.  

**When to Use:**
- Anytime you want to check what’s changed before committing or pushing.

---

#### Command: `git branch -M main`
**Explanation:**
- “Main” is now the default branch name for modern Git repos.  
- The `-M` means “move” (rename forcefully).  

**When to Use:**
- After initializing a new repo (usually only once).

---

#### Command: `git remote add origin https://github.com/josiah-williams2024/workout-tracker.git`
**Explanation:**
- “origin” is the default nickname for your remote GitHub link.  
- This tells Git where to push your commits online.  

**When to Use:**
- The first time you set up a project with GitHub.

---

#### Command: `git push -u origin main`
**Explanation:**
- Sends your commits to your GitHub repository.  
- The `-u` means “set upstream” — Git will remember this link so later you can just use `git push`.  

**When to Use:**
- After committing, to upload your latest version online.

---

#### Command: `git pull`
**Explanation:**
- Syncs your local repo with the remote version.  

**When to Use:**
- Before you start working, or if you made changes on another device.

---

#### Command: `git log`
**Explanation:**
- Displays commit IDs, messages, authors, and dates.  

**When to Use:**
- To review what you’ve done or confirm your last commit message.

---

### 🧱 Markdown (.md)
**Explanation:**
- Markdown is a simple text formatting language that turns plain text into nicely formatted documents (like `README.md` files on GitHub).
