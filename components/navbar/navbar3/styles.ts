"use client";
import styled from "styled-components";
import Link from "next/link";

import { colors } from "theme";

export const Navbar = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: "Roslindale Display Condensed";
  /* overflow: hidden; */

  .overlay {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 0;
  }

  svg path {
  }

  #toggle-btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2em;
    z-index: 2;
    cursor: pointer;
  }

  .btn-outline {
    position: absolute;
    width: 100px;
    height: 100px;
  }

  .btn-outline-1 {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    animation: morph 4s linear infinite;
  }

  .btn-outline-2 {
    border-radius: 53% 47% 43% 57% / 51% 39% 61% 49%;
  }

  #hamburger {
    position: relative;
    width: 20px;
    height: 20px;
    z-index: 2;
  }

  #hamburger .span2 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    width: 24px;
    height: 1.25px;
    transition: transform 0.25s;
  }

  #hamburger .span1 {
    position: absolute;
    right: 0;
    display: inline-block;
    width: 18px;
    height: 1.25px;
    transform: translateY(-4px);
    transition: transform 0.25s;
  }

  .active .span1 {
    transform: rotate(45deg);
  }

  .active .span2 {
    top: unset;
    width: 24px;
    transform: rotate(-90deg);
  }

  .menu {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
  }

  .menu > div {
    height: 100%;
    display: flex;
  }

  .menu a {
    position: relative;
    top: 120px;
    line-height: 70%;
    text-decoration: none;
  }

  .menu a span {
    font-size: 20px;
    margin-right: 2em;
    font-family: "Ayer";
  }

  .menu-item {
    position: relative;
  }

  .menu-item:after {
    content: "";
    position: absolute;
    top: 100px;
    left: -20px;
    width: 120%;
    height: 200%;
    margin: 0 auto;
  }

  .menu-container {
    width: 70%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .primary-menu {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .primary-menu .menu-container .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .primary-menu a {
    text-transform: uppercase;
    font-size: 125px;
    font-weight: 500;
  }

  .primary-menu .menu-container .wrapper .menu-item:nth-child(1) a,
  .primary-menu .menu-container .wrapper .menu-item:nth-child(3) a {
    margin-left: 1em;
  }
`;

export const StyledLink = styled(Link)``;
