// components/Container.jsx
const Container = ({ children, className = "", width = "wide", padded = true }) => {
  const widths = {
    tight: "max-w-3xl",
    normal: "max-w-5xl",
    wide: "max-w-7xl",
    wider: "max-w-[1400px]",
    full: "",
  };

  const padding = padded ? "px-6 md:px-10 lg:px-16 xl:px-20" : "";

  return (
    <div className={`${widths[width]} mx-auto ${padding} ${className}`}>
      {children}
    </div>
  );
};