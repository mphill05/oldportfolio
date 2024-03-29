import styled from "styled-components";

export const ProjectSection = styled.div`
  min-height: 70vh;
  width: 80%;
  margin: auto;

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;

export const NumberSlider = styled.div`
  .card {
    color: #fff;
    background-color: #111827;
    padding: 10rem 0 0;
    max-width: 20ch;
    margin: auto;
    border-radius: 0.5rem;
    overflow: hidden;

    transition: transform 500ms ease;
  }

  .backgroundImage {
    width: 50%;
    margin: auto;
    position: relative;
    background-size: cover;
    object-fit: contain;
  }

  .card-content {
    --padding: 3rem;
    padding: var(--padding);
    background: linear-gradient(
      hsl(0 0% 0% / 0),
      hsl(20 0% 0% / 0.3) 20%,
      hsl(0 0% 0% / 1)
    );
  }

  @media (hover) {
    .card-content {
      transform: translateY(60%);
      transition: transform 500ms ease;
    }

    .card:hover .card-content,
    .card:focus-within .card-content {
      transform: translateY(0);
      transition-delay: 500ms;
    }

    .card:focus-within .card-content {
      transition-duration: 0ms;
    }

    .card-content > *:not(.card-title) {
      opacity: 0;
      transition: opacity 500ms linear;
    }

    .card:hover .card-content > *:not(.card-title),
    .card:focus-within .card-content > *:not(.card-title) {
      opacity: 1;
      transition-delay: 1000ms;
    }

    .card-title::after {
      transform: scaleX(0);
    }
  }

  .card-title {
    position: relative;
    width: max-content;

    &::after {
      content: '';
      position: absolute;
      left: calc(var(--padding) * -1);
      bottom: -2px;
      height: 4px;
      width: calc(100% + var(--padding));
      background: #84E421;
      transform-origin: left;
      transition: transform 500ms ease;
    }
  }

  .card:hover,
  .card:focus-within {
    transform: scale(1.05);
  }

  .card:hover .card-title::after,
  .card:focus-within .card-title::after {
    transform: scaleX(1);
  }

  .card-body {
    color: rgb(255 255 255 / 0.5);
    padding-top: 2rem;
  }

  .projectBtn {
    display: inline;
    text-decoration: none;
  }
`;

export const NavigationWrapper = styled.div`
  position: relative;
  width: 80vw;

  .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit - transform: translateY(-50%);
    fill: #00ff00;
    cursor: pointer;
  }

  .arrow--left {
    left: 5px;
  }

  .arrow--right {
    right: 5px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: 767px) {
    width: 90vw;
  }
`;

export const KeenSlider = styled.div`
  font-size: 50px;
  color: #fff;
  font-weight: 500;
`;

export const Dots = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: center;

  .dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: #00ff00;
  }
`;