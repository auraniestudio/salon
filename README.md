# Salon Landing Page

A modern, minimal landing page for a beauty salon with Fresha booking integration. Built with React (TypeScript) and Tailwind CSS.

## Features

- **Hero** – Full-screen background image, salon name, tagline, and “Book Appointment” (Fresha)
- **Services** – Hair Styling, Hair Coloring, Manicure & Pedicure, Facial Treatments (cards with icons)
- **About** – Short copy on professionalism, premium products, and atmosphere
- **Gallery** – Grid of salon/beauty imagery
- **Book Now** – CTA card with “Book via Fresha” button
- **Contact** – Address, phone, Instagram, and Google Maps embed
- Sticky navigation and footer with opening hours
- Soft neutrals (beige, white, blush), rounded cards, hover animations, mobile responsive

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Customize

Edit `src/config.ts` to set:

- **FRESHA_BOOKING_URL** – Your Fresha booking page URL
- **SALON_NAME** – Salon name (used in nav and hero)
- **OPENING_HOURS** – Footer opening hours
- **CONTACT** – Address, phone, Instagram URL
- **GOOGLE_MAPS_EMBED_URL** – Google Maps embed URL for your location

Replace the image URLs in the components with your own photos, or keep the Unsplash placeholders for demo.

## Build

```bash
npm run build
npm run preview
```
