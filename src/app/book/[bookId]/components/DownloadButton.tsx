"use client";
import React from "react";

const DownloadButton = ({ fileLink }: { fileLink: string }) => {
  const handleDownload = () => {
    window.open(fileLink, "_blank");
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-10 h-10 rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-indigo-600 active:bg-indigo-700"
    >
      Download the book
    </button>
  );
};

export default DownloadButton;
