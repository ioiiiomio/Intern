import React from "react";
import clsx from "clsx";

type LineProps = {
  variant?: "solid" | "striped" | "dashed" | "dotted" | "gradient";
  thickness?: "thin" | "normal" | "thick";
  color?: string; // Tailwind color class, e.g. "bg-blue-500"
  className?: string;
};

function Line({
  variant = "solid",
  thickness = "normal",
  color = "bg-background_prime",
  className,
}: LineProps) {
  const thicknessMap = {
    thin: "h-[1px]",
    normal: "h-[2px]",
    thick: "h-[4px]",
  };

  const baseClasses = clsx("w-full", thicknessMap[thickness], className);

  switch (variant) {
    case "striped":
      return (
        <div
          className={clsx(
            baseClasses,
            "bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)_10px,transparent_10px,transparent_20px)]"
          )}
        />
      );
    case "dashed":
      return (
        <div
          className={clsx(
            baseClasses,
            "border-t border-dashed",
            color.replace("bg-", "border-") // e.g. bg-red-500 → border-red-500
          )}
        />
      );
    case "dotted":
      return (
        <div
          className={clsx(
            baseClasses,
            "border-t border-dotted",
            color.replace("bg-", "border-")
          )}
        />
      );
    case "gradient":
      return (
        <div
          className={clsx(
            baseClasses,
            "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          )}
        />
      );
    default:
      return <div className={clsx(baseClasses, color)} />;
  }
}

export default Line;
