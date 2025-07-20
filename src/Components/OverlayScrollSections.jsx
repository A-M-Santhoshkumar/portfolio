// src/components/OverlayScrollSections.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function OverlayScrollSections() {
  const containerRef = useRef(null);
  const section2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(section2Ref.current, {
        y: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Section 1 - Base */}
      <section className="h-screen w-full bg-blue-500 flex items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Section 1</h1>
      </section>

      {/* Section 2 - Overlapping Slide */}
      <section
        ref={section2Ref}
        className="absolute top-0 left-0 h-screen w-full bg-white flex items-center justify-center translate-y-full"
      >
        <h1 className="text-4xl text-black font-bold">Section 2 (Slide Over)</h1>
      </section>
    </div>
  );
}

export default OverlayScrollSections;
