import { useEffect, useRef } from "react";

function MouseDot() {
  const dotRef = useRef(null);

  useEffect(() => {
    const moveDot = (e) => {
      const dot = dotRef.current;
      if (dot) {
        dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", moveDot);
    return () => window.removeEventListener("mousemove", moveDot);
  }, []);

  return (
    <div
      ref={dotRef}
      className="hidden md:block fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999]"
      style={{
        backgroundImage:
          "linear-gradient(329deg, #FF91FA 13.55%, #FA6490 48.54%, #F7D86A 86.44%)",
        mixBlendMode: "difference",
        transform: "translate(-50%, -50%)",
        transition: "transform 0.05s linear",
      }}
    ></div>
  );
}

export default MouseDot;
