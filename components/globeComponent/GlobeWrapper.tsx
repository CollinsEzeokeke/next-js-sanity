// components/GlobeWrapper.tsx
"use client";

import dynamic from "next/dynamic";
import { ForwardedRef, forwardRef, MutableRefObject } from "react";
import type { GlobeMethods } from 'react-globe.gl';

const GlobeTmpl = dynamic(() => import("react-globe.gl"), { 
  ssr: false,
  loading: () => (<></>)
});

interface GlobeProps {
  width?: number;
  height?: number;
  globeImageUrl?: string;
  bumpImageUrl?: string;
  backgroundColor?: string;
  atmosphereColor?: string;
  onGlobeReady?: () => void;
  pointsData?: Array<{ lat: number; lng: number; name: string; }>;
  pointLabel?: string;
  pointRadius?: number;
  pointColor?: () => string;
  enablePointerInteraction?: boolean;
}

const Globe = forwardRef((props: GlobeProps, ref: ForwardedRef<GlobeMethods>) => {
  // Convert ForwardedRef to MutableRefObject
  const mutableRef = ref as MutableRefObject<GlobeMethods | undefined>;
  
  return <GlobeTmpl {...props} ref={mutableRef} />;
});

Globe.displayName = "Globe";

export default Globe;