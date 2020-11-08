import styled from 'styled-components';

export const Skeleton = styled.div`
  background-image: linear-gradient(
    -90deg,
    #e3e3e3 0%,
    #f8f8f8 50%,
    #e3e3e3 100%
  );
  opacity: 0.7;
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;
  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
  &.white {
    background-image: linear-gradient(-90deg, #fff 0%, #e7edf1 50%, #fff 100%);
  }
`;
