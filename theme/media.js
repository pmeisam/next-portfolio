import { css } from "styled-components";
import { sizes } from "./sizes";

export const media = {
  large: (...args) => css`
    @media (min-width: ${sizes.mediumMaxWidth + 1}px) {
      ${css(...args)}
    }
  `,

  medium: (...args) => css`
    @media (min-width: ${sizes.mediumMaxWidth}px) {
      ${css(...args)}
    }
  `,

  mediumSmall: (...args) => css`
    @media (min-width: ${sizes.smallMediumMaxWidth}px) {
      ${css(...args)}
    }
  `,

  small: (...args) => css`
    @media (min-width: ${sizes.smallMaxWidth}px) {
      ${css(...args)}
    }
  `,

  xSmall: (...args) => css`
    @media (max-width: ${sizes.xSmallMaxWidth}px) {
      ${css(...args)}
    }
  `,

  notSmall: (...args) => css`
    @media (min-width: ${sizes.smallMaxWidth}px) {
      ${css(...args)}
    }
  `,

  mediumHeight: (...args) => css`
    @media (max-height: ${sizes.mediumMaxHeight}px) {
      ${css(...args)}
    }
  `,
};
