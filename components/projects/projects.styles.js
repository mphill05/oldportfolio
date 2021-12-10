import styled from "styled-components";

export const NumberSlide1 = styled.div`
  background: rgb(64, 175, 255);
  background: linear-gradient(
    128deg,
    rgba(64, 175, 255, 1) 0%,
    rgba(63, 97, 255, 1) 100%
  );
`;

export const NumberSlide2 = styled.div`
  background: rgb(255, 75, 64);
  background: linear-gradient(
    128deg,
    rgba(255, 154, 63, 1) 0%,
    rgba(255, 75, 64, 1) 100%
  );
`;

export const NumberSlide3 = styled.div`
  background: rgb(182, 255, 64);
  background: linear-gradient(
    128deg,
    rgba(182, 255, 64, 1) 0%,
    rgba(63, 255, 71, 1) 100%
  );
  background: linear-gradient(
    128deg,
    rgba(189, 255, 83, 1) 0%,
    rgba(43, 250, 82, 1) 100%
  );
`;

export const NumberSlide4 = styled.div`
  background: rgb(64, 255, 242);
  background: linear-gradient(
    128deg,
    rgba(64, 255, 242, 1) 0%,
    rgba(63, 188, 255, 1) 100%
  );
`;

export const NumberSlide5 = styled.div`
  background: rgb(255, 64, 156);
  background: linear-gradient(
    128deg,
    rgba(255, 64, 156, 1) 0%,
    rgba(255, 63, 63, 1) 100%
  );
`;

export const NumberSlide6 = styled.div`
  background: rgb(64, 76, 255);
  background: linear-gradient(
    128deg,
    rgba(64, 76, 255, 1) 0%,
    rgba(174, 63, 255, 1) 100%
  );
`;

export const NavigationWrapper = styled.div`
  position: relative;
  width: 70vw;
  margin: auto;
`;

export const KeenSlider = styled.div`
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 80vh;
  max-height: 100vh;
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
    background: #000;
  }
`;


// .arrow {
//   width: 30px;
//   height: 30px;
//   position: absolute;
//   top: 50 %;
//   transform: translateY(-50 %);
//   -webkit - transform: translateY(-50 %);
//   fill: #fff;
//   cursor: pointer;
// }

// .arrow--left {
//   left: 5px;
// }

// .arrow--right {
//   left: auto;
//   right: 5px;
// }

// .arrow--disabled {
//   fill: rgba(255, 255, 255, 0.5);
// }