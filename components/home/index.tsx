"use client";
import React, { useEffect } from "react";
import { fetchHome } from "redux/features/contentfulSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "redux/store";
import * as styles from "./styles";

export default function Home() {
  const { Wrapper, TitleWrapper, Title, Space, CopyP: Copy } = styles;
  const dispatch = useDispatch<AppDispatch>();
  const homeData = useSelector(
    (state: any) => state.contentful.data?.portfolio
  );
  console.log("homeData", homeData);

  useEffect(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  if (!homeData) return null;

  return (
    <Wrapper>
      <TitleWrapper>
        {homeData.title.split(" ").map((word, index) => (
          <React.Fragment key={index}>
            {word.split("").map((char, charIndex) => (
              <Title key={`${char}-${charIndex}`}>{char}</Title>
            ))}
            {index !== homeData.title.split(" ").length - 1 && (
              <Space>&nbsp;</Space>
            )}
          </React.Fragment>
        ))}
      </TitleWrapper>
      <Copy copy={homeData.description.json} />
    </Wrapper>
  );
}
