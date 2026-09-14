import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{ width: `${scrollProgress}%` }}
      className="fixed top-0 left-0 h-[2.5px] z-[100] bg-gradient-to-r from-[#FFFFFF] via-[#BFC3C7] to-[#FFFFFF] transition-all duration-75 ease-out shadow-[0_0_8px_rgba(191,195,199,0.3)]"
    />
  );
}


