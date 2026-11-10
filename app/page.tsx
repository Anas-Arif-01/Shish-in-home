"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock3, Sparkles, ShieldCheck, PartyPopper } from "lucide-react";
import { businessPhone, serviceAreas } from "./site-config";

const heroImage = "/images/ChatGPT Image Jun 23, 2026, 10_19_46 PM.png";
const areasImage = "https://img.magnific.com/premium-photo/hookah-shisha-with-glass-flask-metal-bowl-with-colored-smoke_118086-3035.jpg?semt=ais_test_b&w=740&q=80";
const whatsappPhone = businessPhone.replace(/\D/g, "");
const currency = "AED";

const howItWorks = [
  {
    title: "Select flavor & setup",
    description:
      "Choose a smooth classic blend or a premium Russian tobacco setup for your home, villa, or event.",
  },
  {
    title: "Fast 30–45 min delivery",
    description:
      "Our team arrives with premium hookahs, coals, and all essentials ready to enjoy in minutes.",
  },
  {
    title: "Hassle-free pickup",
    description:
      "We collect the equipment the next day so you can enjoy the night without cleanup or stress.",
  },
];

const featuredFlavors = [
  { name: "Bubble Gum Flavor", price: 130, image: "/flavours/bubble%20gum.png" },
  { name: "Ice Mango Flavor Shisha", price: 130, image: "/flavours/mango.png" },
  { name: "Bubble Apple Flavor", price: 130, image: "/flavours/ice%20bubble%20apple.png" },
  { name: "Grape Flavor", price: 130, image: "/flavours/ice%20mint%20lime%20grape.png" },
  { name: "Mint Flavor", price: 130, image: "/flavours/lemonmint.png" },
  { name: "Watermelon Flavor", price: 130, image: "/flavours/icemintwatermelongrape.png" },
  { name: "Passion Fruit Flavor", price: 130, image: "/flavours/icePassionfruit.png" },
  { name: "Gum Mint Flavor", price: 130, image: "/flavours/gum%20mint.png" },
  { name: "Gum Cinnamon Flavor", price: 130, image: "/flavours/gum%20cinnamon.png" },
  { name: "Grape Mint Flavor", price: 130, image: "/flavours/grape%20mint%5D.png" },
  { name: "Apple Mint Flavor", price: 130, image: "/flavours/apple.png" },
  { name: "Vanilla Paan Flavor", price: 130, image: "/flavours/vanilla%20pan.png" },
  { name: "Frosty Blueberry Lemon Flavor", price: 130, image: "/flavours/frosty%20bluebarry.png" },
  { name: "Watermelon Mint Flavor", price: 130, image: "/flavours/watermelon%20mint.png" },
  { name: "Lemon Mint Flavor", price: 130, image: "/flavours/lemonmint.png" },
  { name: "Melon Flavor", price: 130, image: "/flavours/melon.png" },
  { name: "Double Apple Flavor", price: 130, image: "/flavours/double%20apple%20.png" },
  { name: "Orange Mint Flavor", price: 130, image: "/flavours/orangemint.png" },
  { name: "Coconut Flavor", price: 130, image: "/flavours/cocunut%20.png" },
  { name: "Vanilla Flavor", price: 130, image: "/flavours/vanilla%20.png" },
  { name: "Kiwi Flavor", price: 130, image: "/flavours/kiwi.png" },
  { name: "Strawberry Flavor", price: 130, image: "/flavours/strawberry.png" },
  { name: "Blueberry Flavor", price: 130, image: "/flavours/blue%20barray.png" },
];

const packages = [
  {
    name: "Platinum",
    price: `${currency} 1800`,
    image: "https://shishahomeservice.com/wp-content/uploads/2025/12/platinum-gathering.webp",
    features: [
      "10x Shisha of your choice",
      "Choose Unlimited flavors",
      "Unlimited Charcoal",
      "Unlimited Head changes",
      "Portable burner",
      "Free Delivery",
      "4x hours of smoking",
    ],
    accent: "from-[#d4af37]/20 to-[#d4af37]/10",
    cta: `https://wa.me/${whatsappPhone}`,
  },
  {
    name: "Gold VIP",
    price: `${currency} 1400`,
    image: "https://shishahomeservice.com/wp-content/uploads/2025/12/Gold-gathering.webp",
    features: [
      "7x Shisha of your choice",
      "Choose Unlimited flavors",
      "Unlimited Charcoal",
      "Unlimited Head changes",
      "Portable burner",
      "Free Delivery",
      "4x hours of smoking",
    ],
    accent: "from-emerald-500/20 to-emerald-400/10",
    cta: `https://wa.me/${whatsappPhone}`,
  },
  {
    name: "Silver Setup",
    price: `${currency} 900`,
    image: "https://shishahomeservice.com/wp-content/uploads/2025/12/silver-gathering.webp",
    features: [
      "5x Shisha of your choice",
      "Choose Unlimited flavors",
      "Unlimited Charcoal",
      "Unlimited Head changes",
      "Portable burner",
      "Free Delivery",
      "3x hours of smoking",
    ],
    accent: "from-zinc-500/20 to-zinc-300/10",
    cta: `https://wa.me/${whatsappPhone}`,
  },
];

const areas = serviceAreas;

const buildWhatsAppLink = (flavorName: string, area = areas[0]) => {
  const message = `Hi! I want to order the ${flavorName} shisha delivery in ${area}.`;
  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-zinc-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-[#d4af37]/15 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-[#d4af37]/10 blur-3xl" />
      </div>

      <header id="hero" className="sticky top-0 z-30 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-2">
            <Image src="/images/pngwing.com.png" alt="Shisha Home Service" width={32} height={32} className="h-8 w-8 object-contain" />
            <span className="text-lg font-semibold tracking-[0.3em] text-[#d4af37] uppercase">Shisha Home Service</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#menu" className="transition hover:text-[#d4af37]">Menu</a>
            <a href="#packages" className="transition hover:text-[#d4af37]">Packages</a>
            <a href="#areas" className="transition hover:text-[#d4af37]">Areas</a>
            <a href="#how-it-works" className="transition hover:text-[#d4af37]">How It Works</a>
            <a href="#contact" className="transition hover:text-[#d4af37]">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${whatsappPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              data-event="whatsapp_order_click"
              data-location="navbar"
              className="rounded-full border border-emerald-500/40 bg-emerald-600/10 px-3 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500/20"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid items-center gap-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(18,18,18,0.95),rgba(8,8,8,0.95))] p-6 shadow-[0_0_80px_rgba(212,175,55,0.08)] lg:grid-cols-[1.1fr_0.9fr] lg:p-8"
        >
          <div className="space-y-5">
            <div className="inline-flex items-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-3 py-1 text-sm text-[#f5d46b]">
              Serving Downtown, Business Bay, Dubai Marina & across Dubai • 24/7 delivery
            </div>

            <div className="space-y-3">
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Premium shisha delivered in 45–60 minutes.
              </h1>

              <p className="max-w-xl text-lg text-zinc-300">
                Fresh, hygienic, luxury Russian and Arabic hookah setups delivered directly to your home, hotel, villa, or private event.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${whatsappPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_order_click"
                data-location="hero"
                className="rounded-full bg-emerald-600 px-5 py-3 font-medium text-white transition hover:bg-emerald-500"
              >
                💬 Order via WhatsApp
              </a>

              <a
                href="#contact"
                className="rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-5 py-3 font-medium text-[#f5d46b]"
              >
                ✉️ Request event quote
              </a>
            </div>

            <div className="flex flex-wrap gap-2 text-sm text-zinc-400">
              <span className="rounded-full border border-white/10 px-3 py-1">Classic tobacco</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Premium Russian tobacco</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Hygienic setup</span>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="mx-auto flex w-full max-w-[320px] items-center justify-center sm:max-w-[360px] lg:max-w-[420px]"
          >
            <Image
              src={heroImage}
              alt="Luxury shisha delivery"
              width={700}
              height={700}
              priority
              className="h-auto w-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.section>

        <section
          id="why-us"
          className="rounded-[1.5rem] border border-white/10 bg-[#101010]/80 p-6 sm:p-8"
        >
          <p className="mb-1 text-center text-sm uppercase tracking-[0.3em] text-[#d4af37]">Why us</p>
          <h2 className="mb-8 text-center text-3xl font-semibold text-white">
            Premium service, local reliability, and luxury experience.
          </h2>

          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            {/* Video */}
            <div className="overflow-hidden rounded-[1.2rem] border border-white/10">
              <video
                src="/shisha web 2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full min-h-[280px] w-full object-cover"
              />
            </div>

            {/* Feature rows */}
            <div className="flex flex-col gap-4">
              {[
                { icon: <Clock3 className="h-5 w-5" />, title: "Fast Delivery", desc: `30–45 minute delivery across ${areas.join(", ")}, any time of day or night.` },
                { icon: <Sparkles className="h-5 w-5" />, title: "Premium Setup", desc: "Luxury Russian and Arabic hookahs prepared by professionals, ready to smoke on arrival." },
                { icon: <ShieldCheck className="h-5 w-5" />, title: "Hygiene First", desc: "Fully sanitised equipment, sealed mouthpieces, and fresh accessories every single order." },
                { icon: <PartyPopper className="h-5 w-5" />, title: "Events & Parties", desc: "Scalable catering packages for weddings, corporate events, and private villa gatherings." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#d4af37]/15 text-[#f5d46b]">
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="menu" className="flex flex-col items-center rounded-[1.5rem] border border-white/10 bg-[#101010]/80 p-5 text-center sm:p-6">
          <div className="mb-5 flex flex-col items-center text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">Menu</p>
            <h2 className="text-2xl font-semibold text-white">Choose your next hookah flavor</h2>
          </div>

          <div className="grid w-full gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredFlavors.map((flavor) => (
              <article key={flavor.name} className="group overflow-hidden rounded-[1.2rem] border border-white/10 bg-black/20">
                <div className="relative h-[360px] w-full overflow-hidden">
                  <img
                    src={flavor.image}
                    alt={flavor.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-[#d4af37]/30 bg-black/45 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-[#f5d46b]">
                    Shisha
                  </span>
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">{flavor.name}</h3>
                    <span className="shrink-0 rounded-full border border-[#d4af37]/25 bg-[#d4af37]/10 px-3 py-1 text-sm text-[#f5d46b]">
                      {currency} {flavor.price}
                    </span>
                  </div>
                  <p className="mb-4 text-sm leading-7 text-zinc-400">
                    Premium hookah flavor with a smooth, rich draw and a polished finish for your next session.
                  </p>
                  <a
                    href={buildWhatsAppLink(flavor.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-event="whatsapp_order_click"
                    data-location="catering"
                    className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-500"
                  >
                    Buy product
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="packages" className="flex flex-col items-center rounded-[1.5rem] border border-white/10 bg-[#101010]/80 p-6 text-center sm:p-8">
          <div className="mb-8 flex flex-col items-center text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">Catering & Party Packages</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Complete shisha catering solutions for private parties, weddings, and corporate events.</h2>
          </div>
          <div className="grid w-full gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`rounded-[1.2rem] border border-white/10 bg-gradient-to-br ${pkg.accent} p-[1px]`}>
                <div className="h-full rounded-[1.1rem] bg-[#111111] p-5">
                  <img src={pkg.image} alt={pkg.name} className="mb-5 h-48 w-full rounded-xl object-cover" />
                  <h3 className="text-xl font-semibold text-white">{pkg.name}</h3>
                  <div className="mt-3 text-2xl font-semibold text-[#f5d46b]">{pkg.price}</div>
                  <ul className="mt-5 space-y-2.5 text-sm text-zinc-300">
                    {pkg.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  <a
                    href={pkg.cta}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-event="whatsapp_order_click"
                    data-package-name={pkg.name}
                    data-location="package_card"
                    className="mt-6 inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-500"
                  >
                    ORDER NOW
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid w-full items-center gap-4 text-center lg:grid-cols-[0.95fr_1.05fr]">
          <div id="how-it-works" className="rounded-[1.5rem] border border-white/10 bg-[#101010]/80 p-5 sm:p-6">
            <div className="mb-5 flex flex-col items-center text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">Luxury Girls Gathering</p>
              <h2 className="text-2xl font-semibold text-white">An exclusive experience</h2>
            </div>
            <div className="overflow-hidden rounded-[1.2rem] border border-white/10">
              <video
                src="/shisha web video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-[320px] w-full object-cover sm:h-[420px]"
              />
            </div>
          </div>

          <div id="areas" className="flex flex-col items-center rounded-[1.5rem] border border-white/10 bg-[#101010]/80 p-5 text-center sm:p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">Areas</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Coverage across {areas.join(", ")}</h2>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {areas.map((area) => (
                <span key={area} className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-zinc-300">
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-5 overflow-hidden rounded-[1.2rem] border border-white/10">
              <Image
                src={areasImage}
                alt="Luxury shisha setup with smoke"
                width={800}
                height={500}
                className="h-[220px] w-full object-cover sm:h-[260px]"
              />
            </div>
            <p className="mt-4 text-sm text-zinc-400">Express 30–45 minute delivery across {areas.join(", ")}.</p>
          </div>
        </section>

        <section id="contact" className="rounded-[1.5rem] border border-white/10 bg-[#101010]/80 p-5 sm:p-6">
          <div className="grid items-center gap-6 text-center lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col items-center text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">Contact</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Book your event or request a quote</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Share your details and we will respond quickly with the right setup, timing, and package for your event.
              </p>
            </div>
            <form className="mx-auto grid w-full max-w-2xl gap-3 rounded-[1.2rem] border border-white/10 bg-black/20 p-4 text-left">
              <div className="grid gap-3 sm:grid-cols-2">
                <input className="rounded-xl border border-white/10 bg-[#0b0b0b] px-3 py-3 text-sm text-white outline-none" placeholder="Name" />
                <input className="rounded-xl border border-white/10 bg-[#0b0b0b] px-3 py-3 text-sm text-white outline-none" placeholder="WhatsApp number" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <select className="rounded-xl border border-white/10 bg-[#0b0b0b] px-3 py-3 text-sm text-white outline-none">
                  {areas.map((area) => (
                    <option key={area}>{area}</option>
                  ))}
                </select>
                <input type="datetime-local" className="rounded-xl border border-white/10 bg-[#0b0b0b] px-3 py-3 text-sm text-white outline-none" />
              </div>
              <textarea className="min-h-28 rounded-xl border border-white/10 bg-[#0b0b0b] px-3 py-3 text-sm text-white outline-none" placeholder="Order notes, preferred flavor, guest count, or event details" />
              <button type="button" className="rounded-full bg-[#d4af37] px-4 py-3 text-sm font-semibold text-black transition hover:bg-[#f5d46b]">
                Send inquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#050505] px-4 py-6 text-sm text-zinc-400 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p>© 2026 Shisha Home Service. All rights reserved.</p>
            <p>Legal smoking age in the UAE is 21+.</p>
            <p>Delivery areas: {areas.join(", ")}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${whatsappPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              data-event="whatsapp_order_click"
              data-location="footer"
              className="transition hover:text-[#d4af37]"
            >
              WhatsApp
            </a>
            <a href="#contact" className="transition hover:text-[#d4af37]">Email inquiry</a>
            <span>24/7 delivery</span>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-4 bottom-4 z-40 flex gap-2 rounded-full border border-emerald-500/30 bg-[#111111]/95 p-2 shadow-[0_0_40px_rgba(5,150,105,0.2)] md:hidden">
        <a
          href={`https://wa.me/${whatsappPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          data-event="whatsapp_order_click"
          data-location="footer"
          className="flex-1 rounded-full bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white"
        >
          💬 Order now
        </a>
        <a href="#contact" className="flex-1 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-3 text-center text-sm font-semibold text-[#f5d46b]">
          ✉️ Quote
        </a>
      </div>
    </div>
  );
}
