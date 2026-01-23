"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import Hero from "../components/shared/Hero";
import VimeoPlayer from "../components/shared/VimeoPlayer";
import CaseStudy from "../components/shared/CaseStudy";
import Skills from "../components/shared/Skills";
import CTA from "../components/shared/CTA";
import ShowreelHero from "../components/shared/ShowreelHero";

export default function CreatorPage() {
  const videos = [
    { videoId: "1154964684", title: "VR Promo" },
    { videoId: "1154979765", title: "Shortlet Promo" },
    { videoId: "1154958476", title: "Teambonding Promo" },
    { videoId: "1154979690", title: "Party Space" },
    { videoId: "1154960527", title: "Apartment Promo" },
    { videoId: "1154979214", title: "Next Level Promo" },
    { videoId: "1154979521", title: "Promo Content" },
    { videoId: "1154980003", title: "VR Gameplay" },
    { videoId: "1154979965", title: "Gameplay" },
    { videoId: "1154980032", title: "Boxing Tournament" },
    { videoId: "1154979939", title: "Party Host" },
    { videoId: "1154979868", title: "Luxury" },
    { videoId: "1154979808", title: "Luxury Shortlet" },
    { videoId: "1154979628", title: "Boxing Day" },
    { videoId: "1154979404", title: "Super Deluxe" },
    { videoId: "1154979256", title: "Deluxe Promo" },
    { videoId: "1154978914", title: "Deluxe Promo" },
  ];

  const [showAll, setShowAll] = useState(false);

  const displayedVideos = showAll ? videos : videos.slice(0, 6);

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12">

      {/* HERO */}
      <section className="my-8">
        <ShowreelHero
          videoId="1154964684"
          title="Turning culture into stories people feel."
          subtitle="Short-form video, carousel storytelling & content systems that build attention and community."
        />
      </section>

      {/* VIDEO GALLERY */}
      <motion.section
        id="creator-work"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="my-20 section-card"
      >
        <h2 className="text-3xl font-bold mb-8">Creator Work</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {displayedVideos.map((video) => (
            <VimeoPlayer
              key={video.videoId}
              videoId={video.videoId}
              title={video.title}
            />
          ))}
        </div>

        {/* SEE MORE BUTTON */}
        {!showAll && (
          <div className="flex justify-center mt-10">
            <button
              className="neon-btn"
              onClick={() => setShowAll(true)}
            >
              See More
            </button>
          </div>
        )}
      </motion.section>

      {/* CASE STUDIES */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <CaseStudy
          title="Diaspora Content Series"
          goal="Build an authentic series that resonates with global Nigerians."
          role="Creator • Editor • Strategy"
          build={[
            "Story-led scripting",
            "Short-form editing (Reels/TikTok)",
            "Carousel narratives",
            "Community engagement"
          ]}
          impact={[
            "Higher save rate",
            "More DMs + community growth",
            "Better retention and shareability"
          ]}
        />

        <CaseStudy
          title="Cultural Travel Mini-Docs"
          goal="Turn travel experiences into shareable cultural storytelling."
          role="Creator • Editor • Strategy"
          build={[
            "Interview-based storytelling",
            "Montage editing",
            "Music + pacing strategy"
          ]}
          impact={[
            "Better audience connection",
            "More watch time",
            "Stronger brand identity"
          ]}
        />
      </motion.section>

      {/* SKILLS */}
      <section className="my-20">
        <Skills />
      </section>

      {/* CTA */}
      <section className="my-32 text-center">
        <CTA
          title="Want a creator who understands culture?"
          subtitle="Let’s build content that feels real, not generic."
        />
      </section>
    </main>
  );
}
