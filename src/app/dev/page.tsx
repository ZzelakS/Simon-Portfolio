"use client";

import { motion } from "framer-motion";
import Hero from "../components/shared/Hero";
import CaseStudy from "../components/shared/CaseStudy";
import Skills from "../components/shared/Skills";
import CTA from "../components/shared/CTA";
import AnimatedGlow from "../components/shared/AnimatedGlow";

export default function DevPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12">
      {/* =========================
          HERO
      ========================== */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        {/* Glow layer */}
        <AnimatedGlow />

        {/* Noise / texture layer */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-0" />

        {/* Content */}
        <div className="relative z-10">
          <Hero
            title="Building digital experiences, AI workflows, and marketing systems that grow businesses."
            subtitle="I’m Simon — a software creator and digital marketer. I design and launch products, VR experiences, ecommerce platforms, AI agents, and customer acquisition systems that drive real-world results."
            cta1="View Projects"
            cta2="Work With Me"
          />
        </div>
      </section>

      {/* =========================
          CASE STUDIES
      ========================== */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <CaseStudy
          variant="dev"
          title="VR Experience Center"
          goal="Build a booking-driven entertainment platform"
          role="System Design · Frontend · CX"
          build={[
            "Booking platform architecture",
            "Customer journey design",
            "Retention & loyalty logic",
          ]}
          impact={[
            "Improved session bookings",
            "Clearer customer flow",
            "Repeat engagement",
          ]}
        />

        <CaseStudy
          title="360° Virtual Showroom"
          goal="An immersive, sales-focused VR experience for product exploration"
          role="Frontend Engineer & XR Developer"
          build={[
            "360° image-based viewer",
            "Interactive hotspots",
            "Firebase-powered content management",
          ]}
          impact={[
            "Increased engagement time",
            "Improved product understanding",
          ]}
          skills={["React", "Three.js", "WebXR", "Firebase"]}
          cta={{
            label: "Enter 360° Experience",
            href: "/dev/360",
          }}
        />

        <CaseStudy
          variant="dev"
          title="Food Ordering Platform"
          goal="Create a seamless online ordering system"
          build={[
            "React frontend",
            "Firebase backend",
            "Checkout flow optimization",
          ]}
          impact={["Simplified ordering", "Faster checkout experience"]}
        />

        <CaseStudy
          variant="dev"
          title="AI Customer Automation"
          goal="Reduce response time and lead friction"
          build={[
            "Automated workflows",
            "Conversation routing",
            "CRM tagging logic",
          ]}
          impact={["Faster replies", "Saved internal time"]}
        />
      </motion.section>

      {/* =========================
          SKILLS
      ========================== */}
      <section className="my-20">
        <Skills />
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="my-32 text-center">
        <CTA
          title="Have a system or product to build?"
          subtitle="Let’s talk."
        />
      </section>
    </main>
  );
}
