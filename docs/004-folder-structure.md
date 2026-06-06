
Structure:

```text
AnyApp/
│
├── frontend/
├── backend/
├── docs/
├── infrastructure/
├── .github/
├── README.md
├── .gitignore
└── docker-compose.yml
```

---

# Frontend Structure

```text
frontend/
│
├── public/
│
├── src/
│   │
│   ├── app/
│   │   ├── router/
│   │   ├── providers/
│   │   └── store/
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Library/
│   │   ├── AppViewer/
│   │   ├── Community/
│   │   └── Profile/
│   │
│   ├── features/
│   │   │
│   │   ├── prompt/
│   │   ├── generation/
│   │   ├── apps/
│   │   ├── community/
│   │   ├── auth/
│   │   └── profile/
│   │
│   ├── components/
│   │   │
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── forms/
│   │   └── feedback/
│   │
│   ├── runtime/
│   │   │
│   │   ├── sandbox/
│   │   ├── renderer/
│   │   ├── permissions/
│   │   └── api/
│   │
│   ├── services/
│   │   ├── api/
│   │   └── websocket/
│   │
│   ├── hooks/
│   │
│   ├── types/
│   │
│   ├── utils/
│   │
│   ├── assets/
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
└── vite.config.ts
```

---

# Why Runtime gets its own folder

Because:

```text
runtime/
```

is the heart of AnyApp.

Eventually:

```text
runtime/
├── sandbox/
├── renderer/
├── permissions/
└── api/
```

becomes your most valuable code.

Everything else is just CRUD around it.

---

# Backend Structure

Since you're planning Symfony:

```text
backend/
│
├── src/
│   │
│   ├── Controller/
│   │
│   ├── Entity/
│   │
│   ├── Repository/
│   │
│   ├── Service/
│   │
│   ├── Runtime/
│   │
│   ├── AI/
│   │
│   ├── Security/
│   │
│   ├── Event/
│   │
│   ├── Message/
│   │
│   ├── MessageHandler/
│   │
│   └── DTO/
│
├── config/
│
├── migrations/
│
├── tests/
│
├── composer.json
│
└── .env
```

---

# Future Database Design

Not now.

But keep these in mind:

```text
users
apps
app_versions
prompts
generations
likes
comments
shares
followers
```

---

# Docs Structure

This becomes very important.

```text
docs/
│
├── adr/
│   │
│   ├── 001-project-vision.md
│   ├── 002-architecture.md
│   ├── 003-technology-stack.md
│   ├── 004-runtime-design.md
│   └── 005-security-model.md
│
├── api/
│
├── diagrams/
│
└── roadmap/
```

---

# Infrastructure

Don't put Docker files everywhere.

```text
infrastructure/
│
├── docker/
│   ├── nginx/
│   ├── php/
│   └── postgres/
│
├── staging/
│
└── production/
```

---

# Future Pages

You don't need them now.

But your router should eventually support:

```text
/
├── Home
├── Library
├── App Viewer
├── Community
├── Profile
├── Settings
└── Admin
```

---

# MVP Pages Only

Start with:

```text
pages/
├── Home/
├── Library/
└── AppViewer/
```

Nothing more.

---


```text
frontend/
└── pages/
    ├── Home/
    ├── Library/
    └── AppViewer/

Home
↓
Prompt Box
↓
Generate Button
↓
Fake App Preview
```
