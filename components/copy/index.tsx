import React from "react";
import styled from "styled-components";

import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { colors } from "theme/colors";
import { media } from "theme/media";

type CopyProps = {
  copy: Document;
  className: string;
};

const Wrapper = styled.p`
  /* font-family: Arial; */
  letter-spacing: 1px;
  color: ${colors.white};
  font-size: 16px;
  font-weight: 100;
  text-align: center;

  ${media.small`
    font-size: 24px;
    letter-spacing: 2px;
    text-align: left;
  `}
`;

const Copy: React.FC<CopyProps> = ({ copy, className }) => {
  return (
    <Wrapper className={className}>{documentToReactComponents(copy)}</Wrapper>
  );
};

export default Copy;
