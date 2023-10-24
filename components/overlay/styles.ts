import styled from "styled-components";
import { colors } from "theme/colors";

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Bar = styled.div`
  position: relative;
  width: 10vw;
  height: 100vh;
  top: -100vh;
  background: ${colors.premier.darkerPurple};
`;

export { Wrapper, Bar };
