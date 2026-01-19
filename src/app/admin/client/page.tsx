"use client";

import ThemeToggle from "@/components/common/ThemeToggle";
import Link from "next/link";

type Service = {
  title: string;
  desc: string;
  href: string;
};

type Step = {
  title: string;
  desc: string;
};

type CaseStudy = {
  title: string;
  desc: string;
  tag: string;
};

type BlogPost = {
  title: string;
  desc: string;
  href: string;
};

export default function JewelFxLandingPage() {
  const services: Service[] = [
    {
      title: "3D Jewelry Design & CAD",
      desc: "Precision CAD construction for production-ready jewelry designs.",
      href: "/services/3d-jewelry-design",
    },
    {
      title: "Photorealistic Rendering",
      desc: "High-quality renders that look like real product photography.",
      href: "/services/jewelry-rendering",
    },
    {
      title: "Creative Jewelry Animation",
      desc: "3D animations and product videos that boost conversions.",
      href: "/services/jewelry-animation",
    },
    {
      title: "Website Development",
      desc: "Ecommerce-ready websites built for jewelry brands and retailers.",
      href: "/services/website-development",
    },
    {
      title: "Other Digital Services",
      desc: "Support services tailored for modern jewelry businesses.",
      href: "/services/other-services",
    },
  ];

  const steps: Step[] = [
    {
      title: "Share your idea",
      desc: "Send sketches, references, dimensions, or a simple brief.",
    },
    {
      title: "We build the CAD",
      desc: "Our designers create accurate 3D models with clean detailing.",
    },
    {
      title: "Render / Animate",
      desc: "Photoreal renders, videos, and marketing visuals (if needed).",
    },
    {
      title: "Approve & iterate",
      desc: "Fast revisions with version control and clear feedback cycles.",
    },
    {
      title: "Deliver files",
      desc: "Get final CAD/renders ready for production or online selling.",
    },
  ];

  const caseStudies: CaseStudy[] = [
    {
      title: "Retail Product Visuals",
      desc: "Photoreal renders for catalog-ready listings across multiple SKUs.",
      tag: "Rendering",
    },
    {
      title: "Custom CAD Development",
      desc: "From a reference image to production-ready CAD with revisions.",
      tag: "CAD",
    },
    {
      title: "Animated Product Launch",
      desc: "Short promo animations for ads, reels, and product pages.",
      tag: "Animation",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-black/10 dark:border-white/10 transition-colors">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="font-['Cormorant_Garamond',serif] text-2xl tracking-wide">
            JewelFx
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 text-sm text-black/70 dark:text-white/70">
              <a
                href="#services"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#process"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Process
              </a>
              <a
                href="#work"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Work
              </a>
            </nav>
            <a
              href="/admin"
              className="hover:text-black dark:hover:text-white transition-colors text-sm text-black/70 dark:text-white/70"
            >
              Dashboard
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* 1) HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-['Cormorant_Garamond',serif] text-4xl md:text-6xl leading-tight">
                Transform jewelry ideas into{" "}
                <span className="underline underline-offset-8 decoration-black/30 dark:decoration-white/30">
                  digital masterpieces
                </span>
                .
              </h1>
              <p className="my-5 text-black/70 dark:text-white/70 leading-relaxed max-w-xl transition-colors">
                We help jewelry brands, retailers, and manufacturers with CAD
                design, photorealistic renders, and animations — plus ecommerce
                website development to sell online faster.
              </p>

              <Link
                href="/auth/signup"
                className="px-4 py-2 rounded-md border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black text-sm hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition"
              >
                Get Started
              </Link>
            </div>

            {/* Right visual block */}
            <div className="relative">
              <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-white to-black/3 dark:from-black dark:to-white/5 p-8 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="text-sm uppercase tracking-[2px] text-black/60 dark:text-white/60 transition-colors">
                    Sample Deliverables
                  </div>
                  <div className="text-xs text-black/50 dark:text-white/50 transition-colors">
                    Preview
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    "CAD File",
                    "Render Image",
                    "Animation Reel",
                    "Spec Sheet",
                  ].map((t, i) => (
                    <div
                      key={i}
                      className="h-28 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-sm text-black/60 dark:text-white/60 transition-colors"
                    >
                      {t}
                    </div>
                  ))}
                </div>

                <div className="mt-6 h-px w-full bg-black/10 dark:bg-white/10 transition-colors" />

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Fast Iterations</div>
                    <div className="text-xs text-black/60 dark:text-white/60 mt-1 transition-colors">
                      Clear revisions + version control
                    </div>
                  </div>
                  <div className="px-3 py-2 rounded-md border border-black/20 dark:border-white/20 text-xs transition-colors">
                    QC Approved
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-10 h-44 w-44 rounded-full border border-black/10 dark:border-white/10 transition-colors" />
              <div className="absolute -bottom-8 -left-10 h-56 w-56 rounded-full border border-black/10 dark:border-white/10 transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* 2) SERVICES */}
      <section
        id="services"
        className="border-t border-black/10 dark:border-white/10 transition-colors"
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl">
                Services
              </h2>
              <p className="mt-2 text-black/70 dark:text-white/70 max-w-2xl transition-colors">
                Everything you need to design, visualize, and present jewelry —
                from CAD to renders, animations, and web.
              </p>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_18px_50px_rgba(255,255,255,0.08)] hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="text-sm font-semibold uppercase tracking-wider">
                    {s.title}
                  </div>
                  <div className="h-2 w-2 rounded-full bg-black/20 dark:bg-white/20 group-hover:bg-black/60 dark:group-hover:bg-white/60 transition-colors" />
                </div>
                <p className="mt-3 text-sm text-black/60 dark:text-white/60 leading-relaxed transition-colors">
                  {s.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3) PROCESS */}
      <section
        id="process"
        className="border-t border-black/10 dark:border-white/10 bg-black/2 dark:bg-white/5 transition-colors"
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl">
            Design → Digitize → Deliver
          </h2>
          <p className="mt-2 text-black/70 dark:text-white/70 max-w-3xl transition-colors">
            A clean workflow to move from reference to deliverable — with QC and
            revision loops built in.
          </p>

          <div className="mt-10 grid md:grid-cols-5 gap-5">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="p-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 transition-colors"
              >
                <div className="text-xs uppercase tracking-[2px] text-black/50 dark:text-white/50 transition-colors">
                  Step {idx + 1}
                </div>
                <div className="mt-2 text-sm font-semibold">{step.title}</div>
                <div className="mt-2 text-sm text-black/60 dark:text-white/60 leading-relaxed transition-colors">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) CASE STUDIES / WORK */}
      <section
        id="work"
        className="border-t border-black/10 dark:border-white/10 transition-colors"
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl">
                Work & Case Studies
              </h2>
              <p className="mt-2 text-black/70 dark:text-white/70 max-w-2xl transition-colors">
                Examples of how teams use JewelFx to launch products faster and
                reduce sampling cycles.
              </p>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {caseStudies.map((c) => (
              <div
                key={c.title}
                className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_18px_50px_rgba(255,255,255,0.08)] transition-all"
              >
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[2px] text-black/60 dark:text-white/60 transition-colors">
                  <span className="h-2 w-2 rounded-full bg-black/40 dark:bg-white/40 transition-colors" />
                  {c.tag}
                </div>
                <div className="mt-3 text-sm font-semibold">{c.title}</div>
                <p className="mt-2 text-sm text-black/60 dark:text-white/60 leading-relaxed transition-colors">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA + FOOTER */}
      <section
        id="contact"
        className="border-t border-black/10 dark:border-white/10 transition-colors"
      >
        <div className="mx-auto max-w-6xl px-6 pb-10">
          <footer className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-black/60 dark:text-white/60 transition-colors">
            <div>
              <div className="font-['Cormorant_Garamond',serif] text-xl text-black dark:text-white transition-colors">
                JewelFx
              </div>
              <div className="text-xs uppercase tracking-[3px] mt-1">
                Design • Digitize • Deliver
              </div>
            </div>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Terms
              </Link>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
