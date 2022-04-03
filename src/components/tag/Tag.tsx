import React from "react";
import ReactHtmlParser from "react-html-parser";
import { TagProps } from "./Tag.types";

export const Tag = ({ tag = "p", children, align = "left", color = "black" }: TagProps): JSX.Element => {
  // Create tag with content from string ( without dangerouslySetInnerHTML )
  const getTagTemplate = (tag: string): React.ReactNode => {
    const tagWithChildren = "<" + tag + ">" + children;
    return ReactHtmlParser(tagWithChildren);
  };

  return (
    <div style={{ color }} className={`tag ${align}`}>
      {getTagTemplate(tag)}
    </div>
  );
};
