# 🔐 PassBox

> A simple and lightweight password manager built with React and Vite.

PassBox is a password management web application that allows users to save, view, copy, edit, and delete their website credentials.

The main focus of this project is **client-side data management and persistence**. Password data is stored in the browser's `localStorage`, so previously saved credentials remain available even after refreshing or reopening the page.

---

## 🚀 Live Demo

🔗 [PassBox](#)

---

## 📸 Preview

![PassBox Preview](#)

---

## ✨ Features

- 🔐 Save website credentials
- 👤 Store username/email
- 🔑 Store passwords
- 👁️ Show/hide password
- 📋 Copy website, username, and password
- ✏️ Edit saved credentials
- 🗑️ Delete credentials
- 🔄 **Data persists after page refresh**
- 💾 Uses browser `localStorage` for client-side data persistence
- 🔔 Toast notifications for user actions
- 📱 Responsive UI
- 🔗 GitHub profile button
- 🎨 Clean and simple interface

---

## 🧠 Memory & Data Management

One of the main concepts demonstrated in this project is **client-side memory/data management**.

When a user saves a password, the application stores the data in the browser's `localStorage`.

### Data Flow

```text
User enters credentials
        ↓
React State
        ↓
Save Password
        ↓
localStorage
        ↓
Browser stores the data
        ↓
Page Refresh
        ↓
useEffect()
        ↓
Read data from localStorage
        ↓
React State updated
        ↓
Saved passwords appear again
