import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.getAttribute("data-theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          setTheme(document.documentElement.getAttribute("data-theme") || "dark");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const options = useMemo(() => {
    const isDark = theme === "dark";

    return {
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: isDark ? 0.5 : 0.3,
            },
          },
        },
      },
      particles: {
        color: {
          value: isDark ? "#ffffff" : "#212121",
        },
        links: {
          color: isDark ? "#ffffff" : "#424242",
          distance: 150,
          enable: true,
          opacity: isDark ? 0.1 : 0.06,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: isDark ? 0.2 : 0.15,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    };
  }, [theme]);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
    );
  }

  return null;
};

export default ParticlesBackground;