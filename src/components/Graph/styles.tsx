// IMPORTS
// --------------------------------------------------------
import styled, { keyframes } from 'styled-components';
import color from 'color';
import { Colors, ScreenSizes } from '../../styles/DefaultStyles';

// ANIMATIONS
// --------------------------------------------------------
/**
 * @constant
 */
const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

/**
 * @constant
 */
const fadeDown = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  50% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    transform: translateY(100%);
  }
`;

// TYPES
// --------------------------------------------------------
interface GraphLoaderProps {
  loading: string;
}

interface GraphShowHideProps {
  show: boolean;
}

// MAIN STYLES
// --------------------------------------------------------
/**
 * Main styled component for <Graph />
 * @constant {JSX} styled component
 */
export const GraphStyles = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (min-width: ${ScreenSizes.medium}) {
    width: calc(100% - 538px);
  }
`;

/**
 * container styled component within <Graph />
 * @constant {JSX} styled component
 */
export const GraphContainerStyles = styled.div<GraphShowHideProps>`
  display: block;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.show ? 1 : 0)};
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
  scroll-behavior: smooth;
  transition: all 250ms ease-in-out 0s;

  > div {
    height: 100%;
    width: 2000px;
  }
`;

/**
 * No results styled component within <Graph />
 * @constant {JSX} styled component
 */
export const GraphNoResultsStyles = styled.div<GraphShowHideProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  animation: ${(props) => (props.show ? fadeUp : fadeDown)} 400ms ease-in-out 0s
    forwards;
  z-index: 50;
  opacity: ${(props) => (props.show ? '1' : '0')};
  top: ${(props) => (props.show ? '0' : '100%')};

  > div {
    margin: auto;
    height: 110px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    svg {
      display: block;
      margin: 0 auto;
      color: ${Colors.darkPurple};
      height: 60px;
    }

    p {
      color: ${Colors.darkPurple};
      text-align: center;

      span {
        background: ${Colors.lightestPurple};
        padding: 8px 12px;
        border-radius: 4px;
      }
    }
  }
`;

/**
 * Loader styled component within <Graph />
 * @constant {JSX} styled component
 */
export const GraphLoaderStyles = styled.div<GraphLoaderProps>`
  background: ${color(Colors.white).fade(0.3).toString()};
  box-shadow: 0px 3px 12px ${color(Colors.darkestBlue).fade(0.9).toString()};
  position: absolute;
  top: 30px;
  left: 30px;
  height: 60px;
  width: 60px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms ease-in-out 0s;
  transform: ${(props) =>
    props.loading === 'true' ? 'translateY(0px)' : 'translateY(20px)'};
  opacity: ${(props) => (props.loading === 'true' ? '1' : '0')};

  svg {
    stroke: ${Colors.deepBlue};
    height: 30px;
  }
`;
