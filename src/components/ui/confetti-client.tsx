"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import animationData from "@/data/confetti.json";

// Dynamically import lottie-react on the client only
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Confetti({ copied }: { copied: boolean }) {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (copied) {
      lottieRef.current?.play();
    }
  }, [copied]);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={false}
      autoplay={false}
      height={200}
      width={400}
    />
  );
}
