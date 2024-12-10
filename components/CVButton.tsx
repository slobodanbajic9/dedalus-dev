import React from "react";

const CVButton = () => {
  const downloadCV = () => {
    window.open("/slobodan_bajic_cv.pdf", "_blank");
  };

  return (
    <button
      className="flex items-center gap-2 dark:text-white border p-2 rounded-lg"
      onClick={downloadCV}>
      Download CV
    </button>
  );
};

export default CVButton;
