import React from "react";

type TagTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "p";

export type TagProps = {
  tag?: TagTypes;
  children: React.ReactNode;
  align?: string;
  color?: string;
};
