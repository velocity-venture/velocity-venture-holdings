"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    name: "SAYADA.AI",
    label: "Business Suite",
    description:
      "AI-powered business operating system for solopreneurs and small teams.",
    href: "https://sayada.ai",
    status: "Live",
  },
  {
    name: "BenchBook AI",
    label: "Legal Tech",
    description:
      "Smart legal research and drafting workflows for boutique practices.",
    status: "Coming Soon",
  },
  {
    name: "SlabHaul",
    label: "Fishing App",
    description:
      "Route planning, catch logs, and water intelligence for anglers.",
    status: "Coming Soon",
  },
  {
    name: "FlightForge.ai",
    label: "Pilot Training",
    description:
      "AI-guided training ecosystem for the next generation of pilots.",
    href: "https://flightforge.ai",
    status: "Live",
  },
  {
    name: "Unconventional Wisdom",
    label: "Education",
    description:
      "Operator-focused education built for future-proof leadership.",
    href: "https://uw.sayada.ai/learn",
    status: "Live",
  },
  {
    name: "Z2Q",
    label: "Quantum Education",
    description:
      "12-month deep dive into quantum strategy and execution.",
    href: "https://uw.sayada.ai/z2q",
    status: "Live",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const CircuitIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="4" y="4" width="32" height="32" rx="8" stroke="#5A5AF2" />
    <path
      d="M12 20H20V12H28V20H20V28H12V20Z"
      stroke="#C0C0C0"
      strokeWidth="1.5"
    />
    <circle cx="20" cy="20" r="3" fill="#2A2A72" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <section className="relative min-h-screen overflow-hidden bg-hero-gradient">
        <div className="circuit-bg" aria-hidden="true" />
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-10 px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <Image
              src="/images/vvh-logo-dark.jpg"
              alt="Velocity Venture Holdings logo"
              width={180}
              height={180}
              className="mx-auto h-auto w-[140px] md:w-[180px]"
              priority
            />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.15}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-silver">
              Velocity Venture Holdings, LLC
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-tight md:text-6xl">
              Building AI-Powered Solutions for Tomorrow&apos;s Challenges
            </h1>
            <p className="mx-auto max-w-xl text-base text-white/75 md:text-lg">
              A futuristic portfolio of AI-first ventures powering business
              automation, education, and industry-specific intelligence.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.3}
            className="flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href="#portfolio"
              className="rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-glow transition hover:opacity-90"
            >
              Explore Portfolio
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold tracking-wide text-white/80 transition hover:border-white/60"
            >
              Meet the Founder
            </a>
          </motion.div>
        </div>
      </section>

      <section id="portfolio" className="section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-silver">
            Portfolio
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold md:text-4xl">
            A constellation of AI ventures
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.name}
              className="glass-card flex h-full flex-col justify-between rounded-2xl p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={index * 0.1}
            >
              <div className="space-y-4">
                <CircuitIcon />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-silver">
                    {item.label}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-semibold">
                    {item.name}
                  </h3>
                </div>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-silver">
                  {item.status}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-accent transition hover:text-white"
                  >
                    Visit
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-white/40">
                    Notify Me
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="section-padding bg-[#12121f]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="grid gap-10 lg:grid-cols-[1.2fr_1fr]"
        >
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-silver">
              About
            </p>
            <h2 className="font-heading text-3xl font-semibold md:text-4xl">
              Solo founder, future-focused execution
            </h2>
            <p className="text-base text-white/70 md:text-lg">
              Velocity Venture Holdings is built by a solo founder in Memphis,
              Tennessee. The mission is to deliver AI-powered business tools that
              help ambitious operators move faster, smarter, and further.
            </p>
            <p className="text-base text-white/70 md:text-lg">
              From flagship business automation to education programs, every
              venture shares a focus on clarity, speed, and intelligent systems.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-heading text-2xl font-semibold">
              Operating Principles
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>Precision intelligence over guesswork.</li>
              <li>Automation that scales with the operator.</li>
              <li>Clarity in execution, speed in delivery.</li>
            </ul>
          </div>
        </motion.div>
      </section>

      <footer className="section-padding border-t border-white/10">
        <div className="flex flex-col items-start justify-between gap-6 text-sm text-white/60 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Velocity Venture Holdings, LLC. All
            rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="hover:text-white">
              Portfolio
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="mailto:contact@velocityventureholdings.com" className="hover:text-white">
              contact@velocityventureholdings.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
