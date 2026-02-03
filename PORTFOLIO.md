# Velocity Venture Holdings, LLC — Master Project Portfolio

> **Purpose:** This document serves as a comprehensive AI reference guide for all web properties, applications, and digital products under the Velocity Venture Holdings umbrella. It provides context, technical specifications, brand guidelines, and architectural information to enable AI-assisted development across the portfolio.

---

## Table of Contents

1. [Organization Overview](#organization-overview)
2. [Domain Architecture](#domain-architecture)
3. [Project Summaries](#project-summaries)
   - [sayada.ai](#1-sayadaai--parent-technology-hub)
   - [us.sayada.ai](#2-ussayadaai--us-business-suite)
   - [sa.sayada.ai](#3-sasayadaai--saudi-arabiamena-business-suite)
   - [uw.sayada.ai/learn](#4-uwsayadaailearn--unconventional-wisdom-program)
   - [uw.sayada.ai/z2q](#5-uwsayadaaiz2q--z2q-initiative)
   - [flightforge.ai](#6-flightforgeai--pilot-training-ecosystem)
   - [OurJourney App](#7-ourjourney-app--faith-based-community-platform)
   - [AI Real Estate Prospector](#8-ai-real-estate-prospector--lead-generation-tool)
   - [Pyrolytics Private KPI Dashboard](#9-pyrolytics-private-kpi-dashboard--analytics-platform)
4. [Shared Technical Infrastructure](#shared-technical-infrastructure)
5. [Brand System Guidelines](#brand-system-guidelines)
6. [AI Development Guidelines](#ai-development-guidelines)

---

## Organization Overview

**Parent Entity:** Velocity Venture Holdings, LLC  
**Headquarters:** Memphis, TN  
**Operator:** Solo entrepreneur (20–30 hours/week)  
**Business Model:** AI-powered SaaS + Educational Programs + White-label Solutions

### Revenue Targets (12–18 Month Horizon)
- $10k–$20k MRR across products
- 25–50 active Business Suite customers
- 100–200 active education students (Unconventional Wisdom + Z2Q combined)

### Core Philosophy
Velocity Venture provides small operators and serious professionals with a **future-proof operating system**: tools to run the business today (SAYADA) and programs to upgrade the operator for tomorrow (Unconventional Wisdom + Z2Q).

---

## Domain Architecture

```
Velocity Venture Holdings, LLC
├── sayada.ai (Technology Hub)
│   ├── us.sayada.ai (US Business Suite)
│   ├── sa.sayada.ai (Saudi Arabia/MENA Business Suite)
│   └── uw.sayada.ai (Educational Arm)
│       ├── /learn (Unconventional Wisdom - 16-week program)
│       └── /z2q (Z2Q Initiative - 12-month quantum program)
│
├── flightforge.ai (Aviation Training - Standalone)
│
└── Client/Partner Products
    ├── OurJourney App (Faith-based community)
    ├── AI Real Estate Prospector (Lead generation)
    └── Pyrolytics Dashboard (White-label KPI analytics)
```

---

## Project Summaries

---

### 1. sayada.ai — Parent Technology Hub

**URL:** `https://sayada.ai`  
**Status:** Production  
**Purpose:** Central hub and brand anchor for the SAYADA ecosystem

#### Overview
Sayada.ai (سيادة — Arabic for "sovereignty") serves as the sovereign data infrastructure brand, positioning itself as the AI-powered business operating system for small businesses and solopreneurs.

#### Technical Specifications

| Component | Technology |
|-----------|------------|
| Frontend | Next.js 14 (App Router), Tailwind CSS |
| Hosting | Vercel + Cloudflare CDN |
| Payments | Stripe |
| Automation | n8n + MCP (Model Context Protocol) |
| Database | Supabase (PostgreSQL) |
| Email | Resend + ConvertKit |

#### Brand Identity

| Element | Specification |
|---------|--------------|
| Primary Color | SAYADA Blue (#0066FF to #003399 gradient) |
| Secondary | Graphite (#1A1A2E), Mist (#E8ECF0), Cloud (#F5F7FA) |
| Typography | Montserrat (headlines), Inter (body), Monaco (code) |
| Aesthetic | Control-room dashboards, calm colors, "mission control for a small empire" |

#### Key Features
- **Market Sizing Intelligence (MSI) Engine** — TAM/SAM/SOM calculations
- **Industry Trends & Predictive Insights** — Growth signals, risk flags
- **Competitor Intelligence Suite** — Positioning analysis, market share estimates
- **Business Workflow Automation** — Admin tasks, reporting, onboarding
- **Executive Decision Engine** — Strategic options, risk assessments

#### Target ICP
Solopreneurs and 1–20 person service businesses (agencies, consultants, coaches, boutique firms) in the US market.

---

### 2. us.sayada.ai — US Business Suite

**URL:** `https://us.sayada.ai`  
**Status:** Development  
**Purpose:** AI-powered business automation suite for US small businesses

#### Overview
The US-focused deployment of the SAYADA Business Suite, offering tiered AI automation packages for small business operations.

#### Product Tiers

| Tier | Name | Price | Features |
|------|------|-------|----------|
| 1 | The Assistant | $99/mo | Email/calendar management, meeting notes, FAQ bot |
| 2 | The Manager | $299/mo | + Lead qualification, social posting, review management |
| 3 | The Director | $699/mo | + Full suite, reporting, strategy tools, custom workflows |

#### Core Automation Features

**Tier 1 — Executive Assistant Core:**
1. Smart Inbox Management — Auto-labeling, prioritizing, draft replies
2. Calendar Tetris — Automated scheduling, conflict resolution
3. Meeting Scribe — Transcription, summaries, action items
4. Missed Call Handler — SMS follow-up via Quo/Twilio
5. FAQ Bot — Instant answers via Chat/WhatsApp

**Tier 2 — Operations & Growth:**
6. Lead Qualification — Scoring based on criteria
7. Social Media Auto-Poster — Content repurposing
8. Review Management — Google/Yelp monitoring and replies
9. Invoice Chasing — Automated payment reminders
10. Onboarding Flows — Contract/welcome automation
11. Expense Tracking — Receipt OCR and categorization
12. Inventory Alerts — Low-stock notifications

**Tier 3 — Strategic Intelligence:**
13. Competitor Watch — Weekly pricing/ad digests
14. Sentiment Analysis — Churn risk detection
15. Dynamic Reporting — Weekly PDF KPI generation
16. CRM Data Hygiene — Auto-updates, de-duplication
17. Proposal Generator — Intake-to-proposal automation
18. Payroll Prep — Hours/commission aggregation
19. Legal/Compliance Check — Saudi Labor Law via DeepEval
20. Custom Workflow Logic — Bespoke n8n triggers

#### Website Requirements
- Professional SaaS landing page
- Feature comparison table with tier selection
- Stripe checkout integration
- Customer portal/dashboard for automation management
- Demo video integration (avatar-hosted)

---

### 3. sa.sayada.ai — Saudi Arabia/MENA Business Suite

**URL:** `https://sa.sayada.ai`  
**Status:** Production (Landing page live)  
**Purpose:** Sovereign AI infrastructure for Saudi/GCC businesses

#### Overview
Arabic-first AI automation suite targeting Saudi Arabia and the GCC region, with complete data sovereignty and Vision 2030 alignment.

#### Technical Specifications

| Component | Technology |
|-----------|------------|
| Frontend | Vanilla JS + Tailwind CSS (Static) |
| Language Support | Bilingual RTL (Arabic) / LTR (English) |
| Hosting | Netlify |
| Payments | Stripe ($99/mo early access) |

#### Brand Identity

| Element | Specification |
|---------|--------------|
| Primary Color | Neon Green (#00FF88) — tech/AI aesthetic |
| Secondary | Orange (#FFA500) — CTA buttons |
| Gold Accent | #FFD700 — Vision 2030 badges |
| Background | Dark Black (#0A0A0A) |
| Arabic Font | Tajawal (300–900 weights) |
| English Font | Inter (300–800 weights) |

#### Target Verticals
- **E-Commerce Support** — 24/7 Gulf Arabic customer service
- **Real Estate Queries** — Property search and viewing scheduling
- **HR & Visa Processing** — Nitaqat queries, visa applications
- **Oil & Gas Regulations** — Aramco compliance, safety standards
- **Halal Finance** — Shariah-compliant advice, Zakat calculations

#### Key Landing Page Elements
- Hero with Arabic-first RTL headline
- Dynamic language toggle (العربية/English)
- Live countdown showing remaining spots (starts at 47/50)
- Urgency indicator with fire animation
- Demo section with example scenario
- Trust badges: 100% Local Data, SDAIA Compliant, Vision 2030 Partner

#### Website Requirements
- Fully bilingual RTL/LTR support
- Dark futuristic theme with Saudi flag color accents
- Mobile-first responsive design
- Stripe payment integration with scarcity messaging
- Video placeholder for 20-second demo

---

### 4. uw.sayada.ai/learn — Unconventional Wisdom Program

**URL:** `https://uw.sayada.ai/learn` (or `/unconventional-wisdom`)  
**Status:** Pre-launch (January 5, 2026 start)  
**Purpose:** 16-week, 15-book business curriculum with $300 completion guarantee

#### Overview
Unconventional Wisdom is a structured educational program installing the mental models, leadership DNA, and financial clarity that business schools never teach. Students read 15 curated books over 16 weeks, complete weekly assignments, and receive $300 cash back upon completion.

#### Program Structure

| Week | Book | Author | Theme |
|------|------|--------|-------|
| 1 | Only the Paranoid Survive | Andy Grove | Strategic Inflection Points |
| 2 | How to Make a Few Billion Dollars | Brad Jacobs | Acquisition Strategy |
| 3 | Am I Being Too Subtle? | Sam Zell | Contrarian Investing |
| 4 | Extreme Ownership | Jocko Willink | Leadership Accountability |
| 5 | Who Not How | Dan Sullivan | Delegation & Leverage |
| 6 | The Ride of a Lifetime | Bob Iger | Transformational Leadership |
| 7 | Poor Charlie's Almanack | Charlie Munger | Mental Models |
| 8 | The Almanack of Naval Ravikant | Eric Jorgenson | Wealth & Happiness |
| 9 | Breaking the Habit of Being Yourself | Joe Dispenza | Neuroscience of Change |
| 10 | Illusions | Richard Bach | Beliefs & Reality |
| 11 | Setting the Table | Danny Meyer | Hospitality Excellence |
| 12 | Unreasonable Hospitality | Will Guidara | Legendary Service |
| 13 | How to Win Friends and Influence People | Dale Carnegie | Interpersonal Mastery |
| 14 | Let My People Go Surfing | Yvon Chouinard | Purpose-Driven Business |
| 15 | Your Money or Your Life | Vicki Robin | Financial Independence |
| 16 | Integration & Reflection | — | Capstone |

#### Pricing & Offer
- **Price:** $997
- **Cashback:** $300 for completers
- **Effective Price:** $697 for action-takers
- **Content:** 4,275 pages, 115+ hours audio, 16 weeks

#### Weekly Deliverables (Per Book)
- Content Pack (10–15 pages): Big Idea, Key Concepts, Case Study, Principles
- Weekly Assignment (45–60 minutes): Application exercises
- 5–6 Discussion Questions: For journaling or groups
- 5–6 Quotable Quotes: For personal content creation

#### Brand Identity

| Element | Specification |
|---------|--------------|
| Primary Color | Metallic Gold (#D4AF37) |
| Secondary | Obsidian Slate (#1A1A1B), Deep Charcoal (#2D2D2E) |
| Accent | Ivory (#F5F5F0) |
| Aesthetic | Marble libraries, leather, warm gold, "private library / rare knowledge" |
| Typography | Georgia (serif headers), Inter (body) |

#### Website Requirements
- Elegant landing page with book reveal carousel
- Student portal with progress tracking
- Assignment submission system
- Stripe checkout ($997)
- Email integration (ConvertKit) for 5-email welcome sequence
- Cashback verification and payout system

---

### 5. uw.sayada.ai/z2q — Z2Q Initiative

**URL:** `https://uw.sayada.ai/z2q`  
**Status:** Production (Enrollment open)  
**Purpose:** 12-month quantum computing education program

#### Overview
Z2Q (Zero to Quantum) takes professionals from "late to AI" to quantum-era proficiency in 12 months or less. The program features a 6-month foundation phase followed by specialized tracks in Legal, Finance, Cybersecurity, Pharmaceuticals, Machine Learning, or Logistics.

#### Technical Specifications

| Component | Technology |
|-----------|------------|
| Frontend | Next.js 14 (App Router), Tailwind CSS |
| Backend/Auth | Supabase |
| AI Middleware | n8n on Hostinger VPS (72.62.82.174) |
| Payments | Stripe |
| Email | Resend |
| CDN | Cloudflare |
| Base Path | `/z2q` |

#### Program Structure

**Level 0: Foundation (Months 1–6)**
| Month | Topics |
|-------|--------|
| 1 | Python, Linear Algebra, Probability |
| 2 | IBM Quantum, Qubits, Superposition |
| 3 | Quantum Gates, Circuits, Measurements |
| 4 | Deutsch-Jozsa, Grover's, VQE algorithms |
| 5 | Qiskit Deep Dive, Real Hardware, Projects |
| 6 | Ecosystem, Career, CAPSTONE |

**Level 1: Specialization (Months 7–12)**
Choose ONE track:
- ⚖️ **Legal & IP Strategy** — Patent law, PQC liability, export controls
- 📊 **Finance & Risk Intelligence** — Monte Carlo, portfolio optimization, fraud detection
- 🛡️ **Cybersecurity & PQC** — Shor's algorithm, NIST standards, Q-Day preparation
- 🧬 **Pharmaceuticals & Discovery** — Molecular simulation, drug discovery, VQE docking
- 🤖 **Machine Learning & AI** — QNN, quantum Boltzmann machines, QAOA
- 🚚 **Logistics & Supply Chain** — TSP quantum, fleet optimization, quantum annealing

#### Gating System
- Month-to-month progression requires 66% completion of previous month
- Foundation capstone required before specialization access
- $300 Credit Rebound unlocked upon foundation completion

#### Pricing & Offer
- **Price:** $997
- **Credit Rebound:** $300 (cash back OR credit toward specialization)
- **Includes:** Socratic AI Tutor (Claude 4.5), IBM Quantum access, Capstone certification

#### Brand Identity

| Element | Specification |
|---------|--------------|
| Primary | Metallic Gold (#D4AF37), Gold Light (#E5C45C) |
| Background | Obsidian Slate (#1A1A1B), Deep Charcoal (#2D2D2E) |
| Text | Ivory (#F5F5F0) |
| Aesthetic | Clean labs, abstract gold/black data visualizations, quiet cosmic/quantum motifs |

#### AI Tutor (Drift Detection)
The Z2Q AI Tutor includes "drift detection" to prevent Foundation students from accessing Specialization topics prematurely. Keywords are categorized by specialization and blocked during Level 0.

#### Website Requirements
- Landing page with curriculum breakdown
- Student dashboard with progress visualization
- AI Tutor chat interface (proxied to n8n)
- Stripe checkout integration
- Gated content system
- Email welcome sequence (Resend)

---

### 6. flightforge.ai — Pilot Training Ecosystem

**URL:** `https://flightforge.ai`  
**Status:** In Development  
**Purpose:** Voice-activated AI mentorship platform for student pilots

#### Overview
FlightForge is a high-fidelity AI training ecosystem for student pilots and flight instructors. It leverages the Gemini 2.0 Multimodal Live API for real-time, voice-based mentorship through specialized AI personas.

#### Technical Specifications

| Component | Technology |
|-----------|------------|
| Frontend | Vanilla JS, Tailwind CSS ("Glass Cockpit" UI) |
| System Brain | Cloudflare Workers (API Gateway, WebSocket proxy) |
| Voice Engine | Gemini 2.0 Multimodal Live API |
| Commerce | Stripe |
| Documentation | CFI-Bridge (PDF generation) |

#### AI Personas
- **Captain Reynolds** — Expert Instructor persona
- **Jordan** — Student Mentee persona (for teaching practice)

#### Core Product: Pilot Efficiency Pack ($97)
- Operating System (weekly flight plan)
- Kneeboard templates
- Debrief tracker
- Flashcards
- Future: AR/VR AI Right-Seat beta

#### Key Differentiators
1. **Citation Gate** — Users must cite specific FAA sources (PHAK, AFH, 14 CFR) to "correct" the AI student
2. **Immersive Voice Interaction** — Sub-250ms latency for natural cockpit communication
3. **CFI-Bridge Certificates** — Recognized proof of ground-school proficiency

#### Strategic Objectives
- Achieve "world-class" voice interaction feel
- Establish platform as legitimate training aid
- Partner with CFIs as affiliates (20% commission)

#### Website Requirements
- Professional aviation aesthetic ("Glass Cockpit" inspired)
- COMM SWITCH microphone interface
- Real-time HUD for transcriptions and citation status
- Stripe checkout for $97 one-time purchase
- Affiliate system via Lemon Squeezy
- YouTube integration for cornerstone content

---

### 7. OurJourney App — Trip Journaling Application

**URL:** TBD (Web + Mobile via Flutter)  
**Status:** Migrated & Stable (Replit Environment)  
**Purpose:** Trip journaling app for tracking adventures, memories, and travel experiences

#### Overview
Our Journey is a trip journaling application that helps users document their adventures, store memories, and plan future trips. The app includes a "Partner Sync" feature for shared journaling, allowing two users to link accounts and contribute to a single timeline.

#### Technical Specifications

| Component | Technology |
|-----------|------------|
| Frontend | Flutter (Dart) — Web + Mobile |
| Backend | Supabase (PostgreSQL + GoTrue Auth) |
| AI Integration | OpenAI (Story generation, trip planning suggestions) |
| Origin | Rocket.new (AI-managed) → Migrated to Replit |

#### Core Features
- **Journey Creation** — Log trips and events with details
- **Memory Keeping** — Store photos, notes, and locations for each journey
- **Partner Sync** — Optional shared timeline with another user via invite code
- **AI Story Generation** — OpenAI-powered narrative creation from journey data
- **Trip Planning Suggestions** — AI-assisted adventure recommendations

#### Key File Structure
```
lib/
├── main.dart                    # Entry point, initializes services
├── services/
│   ├── supabase_service.dart    # Database connection (CRITICAL)
│   └── auth_service.dart        # Login/Signup logic (CRITICAL)
└── presentation/
    ├── authentication_sign

---

### 8. AI Real Estate Prospector — Lead Generation Tool

**URL:** Standalone application (Replit-deployable)  
**Status:** Complete (Demo-ready)  
**Purpose:** AI-powered tool for real estate investors to find and contact high-intent sellers

#### Overview
A complete Next.js application that fetches hot seller leads, scores them with AI, generates hyper-personalized outreach messages, and sends them via email and SMS.

#### Technical Specifications

| Component | Technology |
|-----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Database | SQLite (Prisma) or Supabase |
| APIs | ATTOM, OpenAI GPT-4o, Twilio, SendGrid |

#### Core Workflow
1. **Fetch 50 Leads** — From ATTOM API with filters:
   - Absentee owners (owner doesn't live at property)
   - High equity (40%+ equity in property)
   - Long ownership (5+ years owned)

2. **Compute Intent Scores (0–100)**
   - Equity percentage: 0–40 points
   - Years owned: 0–40 points
   - Absentee owner bonus: +20 points

3. **Generate Personalized Messages** — GPT-4o creates:
   - Cold email with compelling subject line
   - SMS message (under 240 characters)

4. **Send Messages**
   - Email via SendGrid
   - SMS via Twilio

#### Features
- Beautiful UI with lead table and detail drawer
- Demo mode with mock data (works without API keys)
- One-click "Send first 10" for batch outreach
- Intent score badges (Red/Yellow/Green)

#### Website Requirements
- Single-page dashboard application
- Big "Fetch 50 Hot Seller Leads" button
- Lead detail drawer with AI-generated messages
- Demo mode toggle
- API key configuration via environment variables

---

### 9. Pyrolytics Private KPI Dashboard — Analytics Platform

**URL:** White-label (e.g., `/client/[slug]/dashboard`)  
**Status:** Complete (Production-ready)  
**Purpose:** Multi-tenant KPI analytics dashboard for home services and construction businesses

#### Overview
A white-label, production-ready analytics dashboard that aggregates data from 6 business systems and presents 15 real-time KPIs through a client-branded interface.

#### Technical Specifications

| Component | Technology |
|-----------|------------|
| Framework | Next.js 14 (App Router), TypeScript |
| Auth/Database | Supabase |
| Styling | Tailwind CSS + shadcn/ui |
| Charts | Recharts |
| Data Ingestion | Pipedream webhooks |

#### Supported Data Sources
1. Salesforce
2. QuickBooks
3. Zoho CRM
4. BuilderPrime
5. JobNimbus
6. Sage Accounting

#### 15 Real-Time KPIs

| Category | KPIs |
|----------|------|
| **Sales** | Pipeline Value, Open Opportunities, Win Rate, Avg Deal Size, Avg Sales Cycle, New Leads MTD, Booking Rate |
| **Financial** | Revenue MTD, Outstanding A/R, Overdue A/R, Avg Days to Collect |
| **Operations** | Job Backlog Value, Jobs Completed, Active Jobs |

#### Multi-Tenant Architecture
- Each client gets custom branding (logo + colors)
- Unique slug-based URL: `/client/acme-construction/dashboard`
- Complete data isolation
- Admin portal for client management

#### Admin Features
- Client creation with logo and brand color upload
- Data sync status monitoring
- Pipedream workflow management
- User access control

#### Website Requirements
- Marketing landing page
- Admin portal (`/admin`)
- Client dashboard (`/client/[slug]/dashboard`)
- Pipeline view (`/client/[slug]/pipeline`)
- A/R & Collections view (`/client/[slug]/ar`)
- Jobs view (`/client/[slug]/jobs`)
- Supabase auth integration
- Responsive charts and KPI cards

---

## Shared Technical Infrastructure

### Automation Core: n8n
All Velocity Venture products leverage n8n as the central automation orchestrator:
- **VPS Location:** Hostinger (72.62.82.174)
- **Use Cases:** Webhook handling, workflow triggers, AI integrations, email sequences

### Database: Supabase
- PostgreSQL with Row Level Security (RLS)
- Real-time subscriptions for live updates
- Auth integration across products

### Payments: Stripe
All products use Stripe for payment processing:
- Subscription management (Business Suite)
- One-time purchases (Educational programs, FlightForge)
- Webhook handling for fulfillment

### Email Stack
- **Transactional:** Resend (API-based)
- **Marketing:** ConvertKit (sequences, automations)
- **Domains:** Custom sending domains per product

### CDN & Hosting
- **Vercel:** Primary hosting for Next.js applications
- **Cloudflare:** CDN, DDoS protection, Workers for edge logic
- **Netlify:** Static sites (sa.sayada.ai)

---

## Brand System Guidelines

### Brand Hierarchy

| Level | Brand | Aesthetic |
|-------|-------|-----------|
| **Parent** | Velocity Venture Holdings | Tech-forward, professional |
| **Tech Hub** | SAYADA | Control-room dashboards, calm colors |
| **Education** | Unconventional Wisdom | Marble libraries, leather, warm gold |
| **Quantum** | Z2Q | Clean labs, cosmic/quantum motifs |
| **Aviation** | FlightForge | Glass cockpit, aviation instruments |

### Typography Standards
- **Headlines:** Montserrat, Georgia, or brand-specific serif
- **Body:** Inter (universal)
- **Code:** Monaco or monospace equivalent
- **Arabic:** Tajawal

### Color Palettes

**SAYADA (Business Suite):**
- Primary: #0066FF → #003399
- Graphite: #1A1A2E
- Cloud: #F5F7FA

**Unconventional Wisdom / Z2Q:**
- Gold: #D4AF37
- Obsidian: #1A1A1B
- Ivory: #F5F5F0

**Saudi Arabia (sa.sayada.ai):**
- Neon Green: #00FF88
- Orange CTA: #FFA500
- Dark: #0A0A0A

---

## AI Development Guidelines

### When Building for Velocity Venture Projects

1. **Prioritize SSoT (Single Source of Truth)**
   - All canonical data lives in Notion
   - This project serves as the AI reasoning/execution layer
   - Never duplicate content that should reference Notion

2. **Security Requirements**
   - NEVER store actual API keys or secrets in code
   - Always use secure placeholders: `See 1Password > Velocity Secrets`
   - Environment variables for all sensitive data

3. **Brand Alignment**
   - Match aesthetic to specific product (see Brand System above)
   - Respect visual hierarchy and color palettes
   - Use appropriate typography per brand

4. **Technical Defaults**
   - Next.js 14 with App Router for new projects
   - Tailwind CSS + shadcn/ui for styling
   - Supabase for auth/database when applicable
   - Stripe for all payments
   - n8n for automation workflows

5. **Content Voice**
   - **Business/Professional:** Formal, thoughtful, data-driven
   - **Educational/Entrepreneurial:** Energetic, motivational, conversational
   - **Faith-based:** Wise, pure, honest, following Philippians 4:8

6. **Accessibility Standards**
   - WCAG 2.1 AA minimum
   - Color contrast ratio ≥ 4.5:1 for body text
   - Keyboard-navigable controls
   - Clear focus states

### File Naming Conventions
- Components: PascalCase (`KPIGrid.tsx`)
- Utilities: camelCase (`computeIntentScore.ts`)
- Pages: lowercase with hyphens (`/client/[slug]/dashboard`)
- Environment: SCREAMING_SNAKE (`STRIPE_SECRET_KEY`)

### Deployment Checklist
1. Environment variables configured
2. Stripe webhooks registered
3. Supabase RLS policies applied
4. CDN caching rules set
5. Error monitoring enabled
6. Analytics pixels installed

---

## Document Metadata

| Field | Value |
|-------|-------|
| **Version** | 1.0.0 |
| **Last Updated** | December 29, 2025 |
| **Author** | Velocity Venture Holdings, LLC |
| **AI Reference** | Comprehensive project portfolio for AI-assisted development |

---

*This document is maintained as part of the Velocity Venture Single Source of Truth (SSoT) system. For updates, refer to the Notion workspace.*
