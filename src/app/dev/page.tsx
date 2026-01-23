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
        <AnimatedGlow />

        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-0" />

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
        {/* Plain card */}
        <CaseStudy
          title="VR Place Nigeria 360° Virtual Showroom"
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

        {/* Cards with images */}
        <CaseStudy
          title="VR Place Nigeria Platform"
          goal="Build a booking-driven entertainment platform"
          role="System Design · Frontend · CX"
          image="/projects/vr.png"
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
          websiteUrl="https://vrplacenigeria.com"
          repoUrl="https://github.com/ZzelakS/VRPlace"
        />

        <CaseStudy
          title="Backyard Grill Food Ordering Platform"
          goal="Create a seamless online ordering system"
          role="Full-Stack Development · UX"
          image="/projects/byg.png"
          build={[
            "React frontend",
            "Firebase backend",
            "Checkout flow optimization",
          ]}
          impact={["Simplified ordering", "Faster checkout experience"]}
          websiteUrl="https://byg-food.vercel.app/"
          repoUrl="https://github.com/ZzelakS/BYGFood"
        />

        {/* New case studies with images */}
        <CaseStudy
          title="Backyard Grill & Karaoke Lounge"
          goal="Drive foot traffic and bookings through a modern hospitality website"
          role="Product Design · Frontend · Digital Strategy"
          image="/projects/byg1.png"
          build={[
            "Brand-forward website design",
            "Event & karaoke night promotion flow",
            "Mobile-first UX",
          ]}
          impact={[
            "Improved online visibility",
            "Clearer customer engagement",
            "Stronger brand presence",
          ]}
          websiteUrl="https://byg-ng.vercel.app/"
          repoUrl="https://github.com/ZzelakS/BYG-NG"
        />

        <CaseStudy
          title="Offspring Montessori Academy"
          goal="Create trust, clarity, and enrollment conversion for parents"
          role="Frontend Development · Content Architecture"
          image="/projects/offspring.png"
          build={[
            "School website structure & UX",
            "Programs and admissions flow",
            "Content organization for parents",
          ]}
          impact={[
            "Improved parent confidence",
            "Clearer program understanding",
          ]}
          websiteUrl="https://www.offspringmontessorischool.com/"
          repoUrl="https://github.com/ZzelakS/Offspring"
        />

        <CaseStudy
          title="Teku Charitable Foundation"
          goal="Present mission, impact, and credibility for a nonprofit organization"
          role="Web Design · Storytelling · Deployment"
          image="/projects/teku.png"
          build={[
            "Nonprofit-focused website layout",
            "Mission and impact storytelling",
            "Donation-ready structure",
          ]}
          impact={["Stronger donor trust", "Clearer public messaging"]}
          websiteUrl="https://tekucharitablefoundation-zzelaks-projects.vercel.app/"
          repoUrl="https://github.com/ZzelakS/tekucharitablefoundation"
        />

        <CaseStudy
          title="360° Virtual Car Showroom"
          goal="Build an immersive web-based showroom for interactive car walkthroughs"
          role="Frontend · 3D UI · WebXR Integration"
          image="/projects/car.png"
          build={[
            "360° exterior walkaround with swipe rotation",
            "Interactive hotspots for doors & interior views",
            "WebXR-ready VR mode for immersive viewing",
          ]}
          impact={[
            "High engagement with realistic car exploration",
            "Seamless transition between exterior and interior views",
            "Scales to multiple car models with dynamic data",
          ]}
          websiteUrl="https://360-showroom.vercel.app/"
          repoUrl="https://github.com/ZzelakS/360-Showroom"
        />

        <CaseStudy
          title="Personal Portfolio Platform"
          goal="Position a hybrid software creator for high-value opportunities"
          role="Product Design · Frontend · Personal Branding"
          image="/projects/portfolio.png"
          build={[
            "Case-study driven structure",
            "Signature glow UI system",
            "Performance-focused animations",
          ]}
          impact={[
            "Clear positioning",
            "Strong first impression",
            "Showcases range across tech & strategy",
          ]}
          websiteUrl="https://simon-portfolio-yd81.vercel.app/"
          repoUrl="https://github.com/ZzelakS/Simon-Portfolio"
        />

        {/* Plain card */}
        <CaseStudy
          title="AI Customer Automation"
          goal="Reduce response time and lead friction"
          role="Automation Design · AI Integration"
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
      ========================= */}
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
