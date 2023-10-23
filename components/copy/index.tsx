import React from "react";
import styled from "styled-components";

import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { colors } from "theme/colors";

interface CopyProps {
  copy: Document;
}

const Wrapper = styled.p`
  color: ${colors.darkBlue};
  font-size: 16px;
`;

const Copy: React.FC<CopyProps> = ({ copy }) => {
  return <Wrapper>{documentToReactComponents(copy)}</Wrapper>;
};

export default Copy;
