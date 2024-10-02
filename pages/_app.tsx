import "../styles/globals.scss";
import "../styles/_grid.scss";
import type { AppProps } from "next/app";
import ErrorBoundary from "../components/singleComponents/ErrorBoundary/ErrorBoundary";
import { useDetectGPU } from "@react-three/drei";
import useStore from "../components/singleComponents/Hooks/useStore";
import { useRef, useEffect, useState } from "react";
import { useSpring } from "react-spring";
import { useThrottledCallback } from "use-debounce";
import ErrorMessage from "../components/singleComponents/ErrorBoundary/ErrorMessage";

function MyApp({ Component, pageProps }: AppProps) {
  // GPU detection and other hooks setup
  const GPUT = useDetectGPU();
  const GPUTier = GPUT.tier < 1 ? 0 : GPUT.isMobile ? GPUT.tier : GPUT.tier + 3;
  const setGPU = useStore((state) => state.setGPUTier);
  const [show, setShow] = useState(false);
  const [reveal, setReveal] = useState(false);

  const fwdRef = useRef<HTMLDivElement>(null);

  // Scroll and spring configuration
  const setScrollYGlobal = useStore((state) => state.setScrollY);
  const options = { mass: 1, tension: 260, friction: 100, precision: 0.0000001, velocity: 0, clamp: true };
  const [{ y }, setScroll] = useSpring(() => ({ y: [0], config: options }));

  setScrollYGlobal(y);
  useEffect(() => { setScroll({ config: options }); }, [options, setScroll]);

  const handleScroll = useThrottledCallback(() => {
    setScroll({ y: [window.scrollY / (document.body.offsetHeight - window.screen.height)] });
  }, 16);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  function playSound() {
    const music = document.getElementById("music");
    if (music) {
      (music as HTMLAudioElement).volume = 0.2;
      (music as HTMLAudioElement).play();
    }
  }


  return (
    <div className="app" ref={fwdRef}>


      {/* PRELOADER */}
      <div className={`preloader ${reveal && "reveal"} `}>
        <div className={`loader_logo`}>
          <h1>PULVERIZE</h1>
        </div>
        <div
          className={`${
            show ? "loader_button_show" : "loader_button_not_show"
          }`}
        >
          <button className="enter_btn" onClick={() =>{
            setReveal(true)
            playSound()
          }}>Tap to Open</button>
        </div>
      </div>
      <ErrorBoundary fallback={<ErrorMessage />}>
        {/* CanvasWrapper removed from here */}
        <div className="dom">
          <Component {...pageProps} />
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default MyApp;
