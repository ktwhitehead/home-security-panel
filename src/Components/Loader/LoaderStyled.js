import styled, { css, keyframes } from 'styled-components/macro';

const colors = ['#49b8e5', '#1e98d4', '#2a92d0', '#3a88c8', '#507cbe'];

const createCss = () => {
  let styles = '';
  [0, 1, 2, 3, 4].forEach(index => {
    styles += `
      #circle-${index} {
        background-color: ${colors[index]};
        &:before {
          background-color: ${colors[index]};
          animation-delay: ${200 * index}ms;
        }
      }
    `;
  });

  return css`${styles}`;
}

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  ${createCss()};
`;

const animate = keyframes`
  0% {
    transform: scale(1);
  }
  50%, 75% {
    transform: scale(2.5);
  }
  78%, 100% {
    opacity: 0;
  }
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 7px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    opacity: 0.7;
    animation: ${animate} 2s infinite 
      cubic-bezier(0, 0, 0.49, 1.02);
  }
`;

export { LoaderWrapper, Circle };