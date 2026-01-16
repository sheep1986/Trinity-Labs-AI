import React from "react";

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

interface loadingProps {
  screenHFull?: boolean;
}

const getBorderColor = (loadText: string) => {
  switch (loadText) {
    case "Fetching":
      return "border-lime-500";
    case "Loading":
      return "border-sky-500";
    case "Processing":
      return "border-yellow-500";
    case "Finalizing":
      return "border-orange-500";
    default:
      return "border-lime-500";
  }
};

export function Loading({ screenHFull = true }: loadingProps) {
  const [state, setState] = React.useState("_");
  const [loadText, setLoadText] = React.useState("Fetching");

  React.useEffect(() => {
    const stateInterval = setInterval(() => {
      setState((prev) => {
        if (prev === "_") return ".";
        if (prev === ".") return "..";
        if (prev === "..") return "...";
        return "_";
      });
    }, 500);

    const textInterval = setInterval(() => {
      setLoadText((prev) => {
        if (prev === "Fetching") return "Loading";
        if (prev === "Loading") return "Processing";
        if (prev === "Processing") return "Finalizing";
        return "Fetching";
      });
    }, 2000);

    return () => {
      clearInterval(stateInterval);
      clearInterval(textInterval);
    };
  }, []);

  const colorClass = getBorderColor(loadText);

  return (
    <div
      className={`${
        screenHFull ? "min-h-screen" : ""
      } relative flex flex-col items-center justify-center`}
    >
      <div
        className={`p-1 border border-dashed rounded-full animate-spin ${colorClass}`}
      >
        <div
          className={`w-16 h-16 border-4 border-dashed rounded-full flex justify-center items-center animate-spin ${colorClass}`}
        >
          <PlusIcon />
        </div>
      </div>
    </div>
  );
}
