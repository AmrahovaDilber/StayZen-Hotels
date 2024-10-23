'use client'; 
import React, { useState } from "react";

export default function TextExpander({children}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <div>
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Show less" : "Show More"}
      </button>
    </div>
  );
}