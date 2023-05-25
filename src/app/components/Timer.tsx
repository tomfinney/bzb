"use client";

import React, { useState, useEffect } from "react";

export function Timer() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setValue((current) => current + 1),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className="bg-zinc-300 py-1 px-2">{value}</div>;
}
