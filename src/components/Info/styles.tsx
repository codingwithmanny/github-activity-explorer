// IMPORTS
// --------------------------------------------------------
import styled, { keyframes } from 'styled-components';
import color from 'color';
import { Colors, ScreenSizes } from '../../styles/DefaultStyles';

// ANIMATIONS
// --------------------------------------------------------
const fadeUp = keyframes`
    0% {
        transform: translateY(100vh);
    }
    5% {
        opacity: 0;
        transform: translateY(0);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeDown = keyframes`
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    95% {
        opacity: 0;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(100vh);
    }
`;

// TYPES
// --------------------------------------------------------
interface InfoStylesProps {
  show: boolean | null;
}

// MAIN STYLES
// --------------------------------------------------------
/**
 * Main styled the app infor
 * @constant {JSX} styled component
 */
export const InfoStyles = styled.div<InfoStylesProps>`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  z-index: 2000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 250ms ease-in-out 0s;
  background: ${color(Colors.black).alpha(0.7).toString()};
  &:hover,
  &:focus {
    outline: none !important;
  }

  animation: ${(props) =>
      props.show === null ? '' : props.show ? fadeUp : fadeDown}
    400ms ease-in-out 0s forwards;

  ${(props) =>
    props.show === null && `opacity: 0; transform: translateY(100vh);`}

  > div {
    display: block;
    background: ${Colors.white};
    border-radius: 8px;
    width: calc(100% - 100px);
    padding: 20px;
    position: relative;

    button {
      background: ${Colors.deepBlue};
      border: none;
      position: absolute;
      top: 20px;
      right: 20px;
      width: 30px;
      height: 30px;
      border-radius: 30px;
      cursor: pointer;

      svg {
        color: ${Colors.white};
        width: 18px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }

      &:hover,
      &:focus {
        outline: none;
      }
    }

    p {
      color: ${Colors.darkPurple};
      small {
        svg {
          height: 20px;
          margin-right: 5px;
        }
      }
      a {
        margin-bottom: 30px;
        display: block;
        background: ${Colors.grey};
        color: ${Colors.deepBlue};
        line-height: 40px;
        border-radius: 4px;
        padding: 0 15px;
        text-decoration: none;
        transition: all 250ms ease-in-out 0s;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        code {
          font-size: 14px;
        }
      }
    }
  }

  @media (min-width: ${ScreenSizes.medium}) {
    > div {
      max-width: 480px;

      button {
        &:focus,
        &:hover {
          box-shadow: 0 0 0 0.2rem rgba(113, 183, 248, 0.3);
        }
      }
      p {
        a {
          &:focus,
          &:hover {
            background: ${color(Colors.grey).darken(0.1).toString()};
            outline: none;
            box-shadow: 0 0 0 0.2rem rgba(113, 183, 248, 0.3);
          }
        }
      }
    }
  }
`;
