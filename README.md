# 🍲 FoodBridge

FoodBridge is a community food-sharing platform designed to connect food donors with NGOs and volunteers. The platform helps manage food donations, pickup requests, and distribution through dedicated dashboards for different users.

## 🚀 Features

### 👤 Donor
- User registration and login
- Add food donations
- Manage donation details
- View donation status
- Track food pickup requests

### 🏢 NGO
- NGO dashboard
- View available food donations
- Manage donation requests
- Track donations and pickups

### 🚴 Volunteer
- Volunteer dashboard
- View assigned pickup requests
- Manage food pickups
- Track pickup status

### 👨‍💼 Admin
- Admin dashboard
- Monitor platform activities
- Manage users and donations
- View platform statistics and reports

## 🛠️ Tech Stack

### Frontend
- Next.js
- React.js
- TypeScript
- Tailwind CSS

### Tools & Libraries
- Next.js App Router
- React Components
- Lucide Icons
- Git & GitHub

## 📂 Project Structure

```text
FoodBridge/
│
├── app/
│   ├── admin/
│   ├── donor/
│   ├── login/
│   ├── ngo/
│   ├── register/
│   └── volunteer/
│
├── components/
│   ├── ui/
│   ├── cards.tsx
│   ├── charts.tsx
│   ├── dashboard-sidebar.tsx
│   └── navbar.tsx
│
├── lib/
│   ├── mock-data.ts
│   ├── types.ts
│   └── utils.ts
│
├── public/
│
├── next.config.mjs
├── package.json
├── tsconfig.json
└── README.md
