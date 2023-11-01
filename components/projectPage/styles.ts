import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  .spacer {
    width: 100%;
    height: 50vh;
    background: #ddd;
  }

  .gallery h1 {
    font-size: clamp(2em, 4vw, 6em);
  }

  .gallery p {
    font-size: clamp(1.4em, 2.5vw, 3.5em);
    line-height: 1.4;
  }

  .gallery {
    display: flex;
    /* outline:1px solid red; */
  }

  .left {
    width: 50%;
  }

  .right {
    height: 100vh;
    /* outline:1px solid purple; */
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .desktop-content {
    margin: auto;
    width: 80%;
  }

  .desktop-content-section {
    min-height: 100vh;
    /* outline:1px solid green; */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .desktop-photos {
    width: 40vw;
    height: 30vh;
    border-radius: 25px;
    position: relative;
    overflow: hidden;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
  }

  .desktop-photo {
    background-color: white;
    border: 2px solid black;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .desktop-photo img {
    width: 100%;
    height: 100%;
  }

  .red {
    background: crimson;
  }

  .green {
    background: MediumSeaGreen;
  }

  .blue {
    background: dodgerblue;
  }

  .pink {
    background: deepPink;
  }

  /* small screen / mobile layout */
  .mobile-content {
    display: none;
    width: 80vw;
  }

  .mobile-photo {
    width: 80vw;
    height: 80vw;
    margin-top: 5em;
    border-radius: 6vw;
  }

  /* defines styles for screens up to 599px wide */
  /* @media screen and (max-width: 599px) {
    .left {
      display: none;
    }

    .right {
      height: auto;
      width: 100%;
      align-items: center;
    }

    .desktop-photos {
      display: none;
    }

    .mobile-content {
      display: block;
    }
  } */
`;
