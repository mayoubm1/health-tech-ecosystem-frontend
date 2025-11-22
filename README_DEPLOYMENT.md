# Health Tech Ecosystem - Frontend Deployment Guide

## Overview

This is the Next.js frontend application for the Health Tech Ecosystem, a unified healthcare technology platform integrating AI intelligence, patient management, telemedicine services, and research capabilities.

## Project Structure

```
frontend/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Landing page
│   ├── login/             # Authentication pages
│   ├── signup/
│   ├── dashboard/         # Main dashboard
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── lib/                   # Utility functions
│   ├── api.ts            # API client with axios
│   ├── auth.ts           # Authentication utilities
│   └── supabase.ts       # Supabase client initialization
├── public/               # Static assets
├── .env.local           # Local environment variables
├── .env.production      # Production environment variables
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript configuration
├── next.config.ts       # Next.js configuration
└── vercel.json          # Vercel deployment configuration
```

## Technologies Used

- **Framework:** Next.js 16.0.3
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.1.17
- **Authentication:** Supabase Auth
- **API Client:** Axios
- **Real-time:** Socket.IO Client
- **Database:** Supabase (PostgreSQL)

## Environment Variables

### Required Environment Variables

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Backend API Configuration
NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.supabase.co/functions/v1
NEXT_PUBLIC_BACKEND_WEBSOCKET_URL=wss://your-backend-url.supabase.co

# Application Configuration
NEXT_PUBLIC_APP_NAME=Health Tech Ecosystem
NEXT_PUBLIC_APP_ENV=production
```

## Local Development

### Prerequisites

- Node.js 18+ or pnpm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/mayoubm1/health-tech-ecosystem-frontend.git
cd health-tech-ecosystem-frontend

# Install dependencies
pnpm install

# Create .env.local with your configuration
cp .env.production .env.local
# Edit .env.local with your actual values
```

### Running the Development Server

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
pnpm run build
pnpm run start
```

## Deployment to Vercel

### Prerequisites

1. Vercel account (https://vercel.com)
2. GitHub repository connected to Vercel
3. Supabase project with API credentials

### Step-by-Step Deployment

#### 1. Connect GitHub Repository to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Select "Import Git Repository"
4. Authorize GitHub and select `health-tech-ecosystem-frontend`
5. Click "Import"

#### 2. Configure Environment Variables

In the Vercel project settings:

1. Go to **Settings** → **Environment Variables**
2. Add the following variables:

```
NEXT_PUBLIC_SUPABASE_URL = https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = your-anon-key-here
NEXT_PUBLIC_BACKEND_URL = https://your-backend-url.supabase.co/functions/v1
NEXT_PUBLIC_BACKEND_WEBSOCKET_URL = wss://your-backend-url.supabase.co
NEXT_PUBLIC_APP_ENV = production
```

3. Apply to all environments (Production, Preview, Development)

#### 3. Deploy

1. Click "Deploy"
2. Wait for the build to complete
3. Your application will be live at `https://your-project.vercel.app`

### Automatic Deployments

- **Production:** Deploys automatically on pushes to `main` branch
- **Preview:** Creates preview deployments for pull requests
- **Development:** Available for manual deployment

## Features

### Authentication
- Sign up with email and password
- Sign in with existing credentials
- JWT token management
- Automatic token refresh
- Sign out functionality

### Dashboard
- User profile information
- Access to all system components:
  - **OmniCognitor:** AI Platform
  - **Healthcare Hub:** Patient & Provider Management
  - **Telemed Services:** Virtual Consultations
  - **M23M Research:** Research Data Management

### API Integration
- Axios-based HTTP client with interceptors
- Automatic JWT token injection
- Error handling and 401 redirect
- Support for all CRUD operations

### Real-time Features
- Socket.IO client for WebSocket connections
- Real-time message updates
- Live consultation support

## Security Considerations

1. **Environment Variables:** All sensitive data is stored in Vercel environment variables
2. **HTTPS Only:** All communications are encrypted
3. **JWT Tokens:** Secure token-based authentication
4. **CORS:** Properly configured for your backend
5. **XSS Protection:** React's built-in XSS protection

## Troubleshooting

### Build Failures

**Issue:** Build fails with "Cannot find module"

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Environment Variables Not Loading

**Issue:** `NEXT_PUBLIC_*` variables are undefined

**Solution:**
1. Verify variables are prefixed with `NEXT_PUBLIC_`
2. Check Vercel environment variables are set correctly
3. Redeploy after changing environment variables

### API Connection Issues

**Issue:** API requests fail with CORS errors

**Solution:**
1. Verify `NEXT_PUBLIC_BACKEND_URL` is correct
2. Check backend CORS configuration allows your domain
3. Ensure JWT token is being sent in Authorization header

### WebSocket Connection Fails

**Issue:** Real-time features not working

**Solution:**
1. Verify `NEXT_PUBLIC_BACKEND_WEBSOCKET_URL` is correct
2. Check WebSocket is enabled on your backend
3. Ensure WSS (secure WebSocket) is used in production

## Performance Optimization

### Implemented Optimizations

- **Code Splitting:** Automatic with Next.js
- **Image Optimization:** Next.js Image component
- **CSS Optimization:** Tailwind CSS purging
- **Bundle Analysis:** Use `next/bundle-analyzer`

### Monitoring

- Use Vercel Analytics for performance metrics
- Monitor Web Vitals in browser console
- Check Vercel deployment logs for errors

## API Endpoints

The frontend communicates with the following backend endpoints:

### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `GET /auth/me` - Get current user

### Healthcare
- `GET /healthcare/patients` - List patients
- `POST /healthcare/patients` - Create patient
- `GET /healthcare/appointments` - List appointments
- `POST /healthcare/appointments` - Create appointment

### Telemedicine
- `GET /telemed/consultations` - List consultations
- `POST /telemed/consultations/:id/start` - Start consultation
- `POST /telemed/consultations/:id/end` - End consultation

### Research
- `GET /research/projects` - List projects
- `POST /research/projects` - Create project
- `GET /research/projects/:id/datasets` - List datasets

### AI
- `GET /ai/models` - List AI models
- `GET /ai/agents` - List AI agents
- `POST /ai/agents/:id/interact` - Interact with agent

## Support and Documentation

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Supabase Docs:** https://supabase.com/docs
- **Tailwind CSS Docs:** https://tailwindcss.com/docs

## License

© 2024 Health Tech Ecosystem. All rights reserved.
