import React, { useEffect } from "react";
import styled from "styled-components";

const SkillIconAndName = ({ name, icon }) => {
  useEffect(() => {});
  return (
    <SkillIconWrapper>
      <div className="icon-card">
        {icon}
        <p>{name}</p>
      </div>
    </SkillIconWrapper>
  );
};

export default SkillIconAndName;

let SkillIconWrapper = styled.div`
  display: flex;
  flex-direction: row;

  .icon-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    margin: 10px;
  }
  img {
    width: 28px;
    height: 28px;
  }
  p {
    font-size: 12px;
  }
  @media screen and (max-width: 600px) {
    .icon-card {
      font-size: 22px;
      margin: 7px;
    }
    img {
      width: 22px;
      height: 22px;
    }
    p {
      display: none;
    }
  }
`;
