# 👕 Garment Pilot

Garment Pilot is a full-stack garment management and order tracking system designed to streamline product management, order processing, and shipment tracking for buyers, managers, and admins.  
The platform provides role-based dashboards with powerful features to manage garments efficiently from production to delivery.

---

## 🚀 Live URL

👉 https://garment-pilot.web.app/

---

## 🎯 Purpose of the Project

The main goal of **Garment Pilot** is to digitize and simplify the garment production and order lifecycle by providing:

- Role-based access control (Admin, Manager, Buyer)
- Transparent order tracking
- Secure product and user management
- Scalable and modern UI with smooth UX

---

## ✨ Key Features

- 🔐 **Authentication & Authorization**

  - Firebase authentication
  - Role-based route protection (Admin / Manager / Buyer)

- 🧑‍💼 **Admin Dashboard**

  - Manage users (approve / suspend with feedback)
  - Manage all products
  - Control which products appear on the Home page

- 🧑‍🏭 **Manager Dashboard**

  - Add and manage products
  - Approve or reject buyer orders
  - Add tracking updates for approved orders
  - Restricted actions if suspended

- 🛒 **Buyer Dashboard**

  - Place orders
  - View order status and payment status
  - Track order timeline visually
  - Restricted ordering if suspended

- 📦 **Order Tracking System**

  - Step-by-step tracking timeline
  - Status updates like Cutting, Sewing, QC, Packed, Shipped, etc.
  - Location, notes, and date/time support

- 📄 **Pagination & Search**

  - Paginated product listing
  - Search products by name or category

- 🎨 **Modern UI/UX**

  - Tailwind CSS + DaisyUI
  - Responsive design for all devices
  - Tooltips, modals, badges, and animations

- ⚡ **Optimized Data Fetching**
  - TanStack Query for caching, refetching, and state management

---

## 🧰 NPM Packages Used

### Core

- **react**
- **react-dom**
- **react-router**
- **axios**

### State & Data Management

- **@tanstack/react-query**

### Styling & UI

- **tailwindcss**
- **daisyui**
- **react-icons**
- **framer-motion**
- **swiper**

### Forms & Utilities

- **react-hook-form**
- **react-datepicker**
- **react-hot-toast**
- **sweetalert2**

### Authentication & Media

- **firebase**
- **lottie-react**

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Auth:** Firebase
- **Styling:** Tailwind CSS + DaisyUI

---

## 📌 Installation

```bash
npm install
npm run dev
```

### 👨‍💻 Developed by **Nasim Ferdous**
