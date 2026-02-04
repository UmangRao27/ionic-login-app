# Ionic Login App

A modern **Ionic + Angular login application** demonstrating user authentication, routing, reactive forms, and session management.  
This project is built with **NgModule-based Ionic architecture** (non-standalone components) and is ready to be deployed as a web app or Android APK using Capacitor.

---

## 🌟 Features

- **Login Page**
  - Reactive forms with **validation** (username & password required)
  - Premium CSS styling with responsive Ionic components
  - User-friendly form layout with floating labels

- **Home Page**
  - Displays **username and password** passed via **queryParams**
  - Navigation protection:
    - Prevents access if user tries to go directly to Home page
    - Redirects to Login page on refresh without valid credentials
  - Button to return to Login page

- **Routing**
  - Angular Router used for **page navigation**
  - QueryParams used for **data transfer between pages**

- **Session Management**
  - **SessionStorage** flag to allow Home access only after successful login
  - Prevents unauthorized access without using AuthGuard

- **Mobile Ready**
  - Compatible with **Ionic Capacitor** for Android APK generation
  - Fully functional on web and mobile devices

---

## 🛠 Technology Stack

- [Ionic Framework](https://ionicframework.com/)  
- [Angular](https://angular.io/) (NgModule architecture)  
- [Capacitor](https://capacitorjs.com/) for native Android build  
- HTML5, CSS3, SCSS, TypeScript  
- Reactive Forms & Angular Router

---

## 💻 Installation & Running Locally

1. **Clone the repository**

```bash
git clone https://github.com/radhikamotisariya/ionic-login-app.git
cd ionic-login-app
