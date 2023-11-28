import React from "react";
import styled from "styled-components";

import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { colors } from "theme/colors";
import { media } from "theme/media";

type CopyProps = {
  copy: Document;
  className?: string;
  id?: string;
};

const Wrapper = styled.div`
  /* font-family: Arial; */
  letter-spacing: 1px;
  color: ${colors.ashGray};
  font-size: 16px;
  font-weight: 100;
  text-align: center;

  ${media.small`
    font-size: 24px;
    letter-spacing: 2px;
    text-align: left;
  `}
`;

const Copy: React.FC<CopyProps> = ({ copy, className, id }) => {
  return (
    <Wrapper id={id} className={className}>
      {documentToReactComponents(copy)}
    </Wrapper>
  );
};

export default Copy;
