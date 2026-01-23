"use client";

import { useEffect, useRef } from "react";
import "pannellum/build/pannellum.js";
import "pannellum/build/pannellum.css";
import "./Page1.css";

/* ---------------- HOTSPOT UI ---------------- */
function hotspotLink(hotSpotDiv, args) {
  hotSpotDiv.classList.add("custom-tooltip", "hotspot-dark");
  hotSpotDiv.innerHTML = `<button class="hotspot-btn">${args.text}</button>`;
  hotSpotDiv.querySelector("button").onclick = () => args.onClick();
}

/* ---------------- SCENES ---------------- */
const scenes = [
  {
    id: "entrance",
    panorama: "/360/1.webp",
    pitch: 10,
    yaw: 0,
    hfov: 110,
    hotSpots: [{ pitch: -31, yaw: 20, type: "custom", text: "Entrance", targetSceneId: "scene2" }],
  },
  {
    id: "scene2",
    panorama: "/360/2.webp",
    pitch: 0,
    yaw: 0,
    hfov: 110,
    hotSpots: [
      { pitch: -40, yaw: 150, type: "custom", text: "Entrance", targetSceneId: "entrance" },
      { pitch: -14, yaw: -113, type: "custom", text: "Backyard Grill", targetSceneId: "scene3" },
      { pitch: -10, yaw: 65, type: "custom", text: "VR Entrance", targetSceneId: "scene9" },
    ],
  },
  {
    id: "scene3",
    panorama: "/360/3.webp",
    pitch: 0,
    yaw: 0,
    hfov: 110,
    hotSpots: [
      { pitch: -16, yaw: 161, type: "custom", text: "Entrance", targetSceneId: "scene2" },
      { pitch: -7, yaw: 43, type: "custom", text: "Games", targetSceneId: "scene5" },
      { pitch: -8, yaw: -17, type: "custom", text: "Stage", targetSceneId: "scene4" },
      { pitch: -26, yaw: -42, type: "custom", text: "Pictures", targetSceneId: "scene6" },
    ],
  },
  {
    id: "scene4",
    panorama: "/360/4.webp",
    pitch: 0,
    yaw: 87,
    hfov: 110,
    hotSpots: [
      { pitch: -11, yaw: 118, type: "custom", text: "Games", targetSceneId: "scene5" },
      { pitch: -9, yaw: 79, type: "custom", text: "Seats", targetSceneId: "scene7" },
      { pitch: -27, yaw: -179, type: "custom", text: "Pictures", targetSceneId: "scene6" },
    ],
  },
  {
    id: "scene5",
    panorama: "/360/5.webp",
    pitch: 0,
    yaw: -136,
    hfov: 110,
    hotSpots: [
      { pitch: -15, yaw: 95, type: "custom", text: "Pictures", targetSceneId: "scene6" },
      { pitch: -11, yaw: 129, type: "custom", text: "Stage", targetSceneId: "scene4" },
      { pitch: -10, yaw: -105, type: "custom", text: "Seats", targetSceneId: "scene7" },
    ],
  },
  {
    id: "scene6",
    panorama: "/360/6.webp",
    pitch: 0,
    yaw: 92,
    hfov: 110,
    hotSpots: [
      { pitch: -11, yaw: 118, type: "custom", text: "Games", targetSceneId: "scene5" },
      { pitch: -21, yaw: 19, type: "custom", text: "Stage", targetSceneId: "scene4" },
      { pitch: -17, yaw: -161, type: "custom", text: "Entrance", targetSceneId: "scene2" },
    ],
  },
  {
    id: "scene7",
    panorama: "/360/7.webp",
    pitch: 0,
    yaw: -33,
    hfov: 110,
    hotSpots: [
      { pitch: -6, yaw: 150, type: "custom", text: "Games", targetSceneId: "scene5" },
      { pitch: -5, yaw: -9, type: "custom", text: "Sip & Paint", targetSceneId: "scene8" },
    ],
  },
  {
    id: "scene8",
    panorama: "/360/8.webp",
    pitch: 0,
    yaw: 87,
    hfov: 110,
    hotSpots: [{ pitch: -13, yaw: -132, type: "custom", text: "Seats", targetSceneId: "scene7" }],
  },
  {
    id: "scene9",
    panorama: "/360/9.webp",
    pitch: 0,
    yaw: -33,
    hfov: 110,
    hotSpots: [
      { pitch: -3, yaw: -42, type: "custom", text: "VR Place Nigeria", targetSceneId: "scene10" },
      { pitch: -10, yaw: -128, type: "custom", text: "Entrance", targetSceneId: "scene2" },
    ],
  },
  {
    id: "scene10",
    panorama: "/360/10.webp",
    pitch: 0,
    yaw: 10,
    hfov: 110,
    hotSpots: [
      { pitch: -10, yaw: -51, type: "custom", text: "Throwball", targetSceneId: "scene12" },
      { pitch: -3, yaw: 27, type: "custom", text: "PlayStation", targetSceneId: "scene11" },
      { pitch: -4, yaw: -162, type: "custom", text: "VR Entrance", targetSceneId: "scene9" },
      { pitch: -0.5, yaw: -86, type: "custom", text: "Warzone", targetSceneId: "scene13" },
    ],
  },
  {
    id: "scene11",
    panorama: "/360/11.webp",
    pitch: 0,
    yaw: 3,
    hfov: 110,
    hotSpots: [
      { pitch: 0.8, yaw: -139, type: "custom", text: "Warzone", targetSceneId: "scene13" },
      { pitch: -2, yaw: 72, type: "custom", text: "Karaoke", targetSceneId: "scene14" },
      { pitch: -0.5, yaw: 174, type: "custom", text: "VR Entrance", targetSceneId: "scene10" },
    ],
  },
  {
    id: "scene12",
    panorama: "/360/12.webp",
    pitch: 0,
    yaw: -80,
    hfov: 110,
    hotSpots: [
      { pitch: -5, yaw: 122, type: "custom", text: "PlayStation", targetSceneId: "scene11" },
      { pitch: -3, yaw: 169, type: "custom", text: "VR Entrance", targetSceneId: "scene10" },
    ],
  },
  {
    id: "scene13",
    panorama: "/360/13.webp",
    pitch: 0,
    yaw: 24,
    hfov: 110,
    hotSpots: [
      { pitch: 0.7, yaw: 150, type: "custom", text: "PlayStation", targetSceneId: "scene11" },
      { pitch: 0.8, yaw: -176, type: "custom", text: "VR Entrance", targetSceneId: "scene10" },
    ],
  },
  {
    id: "scene14",
    panorama: "/360/14.webp",
    pitch: 0,
    yaw: 87,
    hfov: 110,
    hotSpots: [{ pitch: -2, yaw: 146, type: "custom", text: "PlayStation", targetSceneId: "scene11" }],
  },
];

export default function page() {
  const viewerRef = useRef(null);
  const viewerInstance = useRef(null);

  useEffect(() => {
    const pannellum = window.pannellum;
    if (!pannellum?.viewer) return;

    const sceneConfig = {};
    scenes.forEach((scene) => {
      sceneConfig[scene.id] = {
        type: "equirectangular",
        panorama: scene.panorama,
        pitch: scene.pitch,
        yaw: scene.yaw,
        hfov: scene.hfov,
        hotSpots: scene.hotSpots.map((spot) => ({
          pitch: spot.pitch,
          yaw: spot.yaw,
          type: spot.type,
          createTooltipFunc: hotspotLink,
          createTooltipArgs: {
            text: spot.text,
            onClick: () => viewerInstance.current.loadScene(spot.targetSceneId),
          },
        })),
      };
    });

    viewerInstance.current = pannellum.viewer(viewerRef.current, {
      default: { firstScene: "entrance" },
      scenes: sceneConfig,
      autoLoad: true,
      showLoading: false,
      sceneFadeDuration: 0,
      compass: true,
      showFullscreenCtrl: true,
      showZoomCtrl: true,
    });

    return () => viewerInstance.current.destroy();
  }, []);

  return (
    <div className="relative">
      <div
        ref={viewerRef}
        style={{ width: "100%", height: "100vh", touchAction: "none" }}
      />
    </div>
  );
}
