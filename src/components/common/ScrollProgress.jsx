import { useEffect, useState } from "react";

function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (window.scrollY / totalHeight) * 100;

      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[9999] h-1 w-full bg-transparent">
      <div
        className="h-full bg-orange-500 transition-all duration-150"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
}

export default ScrollProgress;