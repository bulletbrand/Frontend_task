import React from "react";
import { TagProps } from "./Tag.types";

export const Tag = ({ tag = "p", children, align = "left", color = "black" }: TagProps): JSX.Element => {
  const getTagTemplate = (tag: string): React.ReactNode => {
    if (tag === "h1") return <h1>{children}</h1>;
    if (tag === "h2") return <h2>{children}</h2>;
    if (tag === "h3") return <h3>{children}</h3>;
    if (tag === "h4") return <h4>{children}</h4>;
    if (tag === "h5") return <h5>{children}</h5>;
    return <p>{children}</p>;
  };

  return (
    <div style={{ color }} className={`tag ${align}`}>
      {getTagTemplate(tag)}
    </div>
  );
};
