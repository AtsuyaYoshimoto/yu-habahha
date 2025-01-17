"use client";
import React from "react";

function NewComponent({ text }) {
  return (
    <h1 className="text-5xl font-impact text-white mb-12 tracking-wider font-bold italic transform hover:scale-105 transition-transform duration-300 text-shadow-lg">
      {text}
    </h1>
  );
}

function NewComponentStory() {
  return (
    <div>
      <NewComponent text="BLEACH - 千年血戦" />
    </div>
  );
}

export default NewComponent;