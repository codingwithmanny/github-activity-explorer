// IMPORTS
// --------------------------------------------------------
import styled, { keyframes } from 'styled-components';
import color from 'color';
import { Colors, ScreenSizes } from '../../styles/DefaultStyles';

// ANIMATIONS
// --------------------------------------------------------
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

// TYPES
// --------------------------------------------------------
interface SidebarStylesProps {
  show: boolean;
}

interface DropdownProps {
  focused?: boolean;
  loading: string;
  results?: number | null | undefined;
}

interface SelectionProps {
  active?: boolean;
  color?: string;
}

// MAIN STYLES
// --------------------------------------------------------
/**
 * Main styled component for the mobile menu button
 * @constant {JSX} styled component
 */
export const MenuStyles = styled.button``;

/**
 * Main styled the application info button
 * @constant {JSX} styled component
 */
export const InfoStyles = styled.button`
  background: ${Colors.darkBlue};
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 30px;
  position: absolute;
  bottom: 25px;
  right: 30px;
  opacity: 0.6;
  display: flex;
  cursor: pointer;
  transition: all 250ms ease-in-out 0s;

  &:hover,
  &:focus {
    outline: none;
  }

  svg {
    height: 20px;
    width: 20px;
    color: ${Colors.white};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  @media (min-width: ${ScreenSizes.medium}) {
    &:focus,
    &:hover {
      background: ${Colors.darkestBlue};
      transform: scale(1.2);
      box-shadow: 0 0 0 0.2rem rgba(113, 183, 248, 0.3);
    }
  }
`;
/**
 * Main styled component for <Sidebar />
 * @constant {JSX} styled component
 */
export const SidebarStyles = styled.div<SidebarStylesProps>`
  background: ${Colors.deepBlue};
  padding: 80px 0 0 0;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  transition: all 350ms ease-in-out 0s;
  transform: ${(props) =>
    props?.show ? 'translateX(0px)' : 'translateX(100vw)'};
  z-index: 80;

  > ${MenuStyles.toString()} {
    position: absolute;
    cursor: pointer;
    top: 10px;
    right: 0;
    background: none;
    border: none;
    width: 80px;
    height: 60px;
    padding: 0 0 0 20px;
    margin: 0;
    text-align: left;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    transition: all 250ms ease-in-out 350ms;
    transform: ${(props) =>
      props?.show ? 'translateX(0)' : 'translateX(-100vw)'};

    &:hover,
    &:focus {
      background: none;
      outline: none;
    }

    svg {
      transition: all 250ms ease-in-out 0s;
      height: 30px;
      color: ${(props) => (props?.show ? Colors.white : Colors.darkBlue)};
    }
  }

  @media (min-width: ${ScreenSizes.medium}) {
    width: 538px;
    position: absolute;
    transform: translateX(0) !important;
    overflow: hidden;
    > ${MenuStyles.toString()} {
      display: none !important;
    }
  }
`;

/**
 * Main container for dropdown component
 * @constant {JSX} styled component
 */
export const Dropdown = styled.div<DropdownProps>`
  right: 30px;
  left: 30px;
  position: absolute;
  top: 80px;
  z-index: 100;

  input[type='search'] {
    -webkit-appearance: none;
    height: 60px;
    border-radius: 4px;
    border: none;
    padding: 0 70px 0 24px;
    width: 100%;
    top: 80px;
    border: 1px solid transparent;
    transition: border 250ms ease-in-out 0ms, box-shadow 250ms ease-in-out 0ms;

    ${(props) =>
      props.focused &&
      (props.loading === 'true' || (props?.results ?? 0) > 0) &&
      `border-bottom-left-radius: 0px;
       border-bottom-right-radius: 0px;
    `}

    ${(props) =>
      props.focused &&
      props.loading !== 'true' &&
      props.results === 0 &&
      `
      border-bottom-left-radius: 0px;
       border-bottom-right-radius: 0px;
    `}

    ${(props) =>
      !props.focused &&
      (props.loading === 'true' || (props?.results && props?.results > 0)) &&
      `transition: border-radius 0ms ease-in-out 250ms;  border 250ms ease-in-out 0ms;`}
      
    &:focus {
        outline: none;
        box-shadow: 0 0 0 0.2rem rgba(113, 183, 248, 0.3);
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
        display: none;
    }

    &::placeholder {
      color: ${Colors.blue};
    }
  }

  > svg {
    height: 24px;
    position: absolute;
    top: 18px;
    right: 22px;
    color: ${Colors.deepBlue};
  }

  ul {
    display: block;
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    height: 0;
    top: 60px;
    left: 0;
    right: 0;
    overflow: hidden;
    transition: all 250ms ease-in-out 0s;

    ${(props) => props.focused && 'overflow: hidden;'}
    ${(props) => props.focused && props.loading === 'true' && 'height: 60px;'}
    ${(props) =>
      props.focused &&
      props.loading !== 'true' &&
      `height: ${props?.results === 0 ? '60' : 44 * (props?.results ?? 0)}px;`}

    ${(props) =>
      props.loading === 'true' &&
      `
      li:first-child {
        background: ${Colors.lightestPurple};
        display: flex;
        height: 60px;

        svg {
          width: 24px;
          height: 24px;
          stroke: ${Colors.deepBlue};
          margin: auto;
        }
    }`}

    ${(props) =>
      props.loading !== 'true' &&
      (props?.results ?? 0) === 0 &&
      `
      li:first-child {
        background: ${Colors.lightestPurple};
        color: ${Colors.deepBlue};
        display: flex;
        height: 60px;
        justify-content: center;
        line-height: 60px;
      }
    `}

    li {
      background: ${Colors.white};
      height: 44px;

      &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;

        a {
          &:hover {
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
          }
        }
      }

      a {
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        width: calc(100% - 48px);
        padding: 0 24px;
        height: 44px;
        line-height: 44px;
        text-decoration: none;
        transition: all 250ms ease-in-out 0s;
        font-size: 16px;

        span  {
          color: ${Colors.blue};
          margin-right: 5px;

          &:last-child {
           color: ${Colors.deepBlue};
           font-weight: bold; 
          }
        }

        &:hover, &:focus {
          background: ${Colors.lightestPurple};
          outline: none;
        }
      }
    }
  }
`;

/**
 * Main container for selections component
 * @constant {JSX} styled component
 */
export const Selections = styled.div`
  margin-top: 75px;
  padding: 10px 30px 0 30px;
  height: calc(100% - 85px);
  overflow: scroll;

  aside {
    background: ${Colors.darkestBlue};
    border-radius: 16px;
    padding: 50px 20px 40px 20px;
    text-align: center;
    animation: ${fadeUp} 500ms ease-in-out 0s forwards;

    > svg {
      height: 46px;
      margin-bottom: 20px;
    }

    p {
      margin: 0;
      font-size: 18px;
      line-height: 24px;
    }

    color: ${Colors.purple};
  }

  @media (min-width: ${ScreenSizes.medium}) {
    aside {
      p {
        span {
          display: block;
        }
      }
    }
  }
`;

/**
 * Main container for selection component
 * @constant {JSX} styled component
 */
export const Selection = styled.div<SelectionProps>`
  opacity: ${(props) => (props.active ? '1' : '0.3')} !important;
  position: relative;
  border-radius: 4px;
  transition: all 250ms ease-in-out 0s;
  animation: ${fadeUp} 500ms ease-in-out 0s forwards;

  > button {
    background: ${(props) => props.color};
    border: none;
    display: flex;
    height: 80px;
    margin-bottom: 16px;
    border-radius: 4px;
    padding: 0;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
    transition: all 250ms ease-in-out 0s;
    text-decoration: none;
    position: relative;
    color: ${Colors.lightPurple};

    > div {
      text-align: left;
      background: ${Colors.darkBlue};
      padding: 16px;
      border-radius: 4px;
      height: 48px;
      width: calc(100% - 8px);
      overflow: hidden;

      h2 {
        font-size: 18px;
        font-weight: normal;
        line-height: 21px;
        margin-top: 0px;
        margin-bottom: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: calc(100% - 70px);

        > span {
          color: ${Colors.lightPurple};
          margin-right: 5px;

          &:last-child {
            color: ${Colors.white};
            font-weight: bold;
          }
        }
      }

      section {
        width: calc(100% - 70px);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        > span {
          color: ${Colors.white};
          font-weight: bold;
          font-size: 14px;
          line-height: 16px;
          margin-right: 10px;

          svg {
            height: 12px;
            margin-right: 5px;
          }
        }

        > time {
          color: ${Colors.lightPurple};
          font-size: 14px;
          line-height: 16px;
        }
      }
    }

    &:before {
      content: '';
      display: block;
      height: 80px;
      width: 8px;
    }

    &:focus {
      outline: none;
    }

    &:nth-child(2) {
      cursor: pointer;
      border: none;
      color: ${Colors.white};
      display: block;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      height: 80px;
      width: 68px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      transition: all 250ms ease-in-out 0s;
      background: ${color(Colors.black).alpha(0.3).toString()};

      svg {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        height: 24px;
        transition: all 250ms ease-in-out 0s;
      }
    }
  }

  @media (min-width: ${ScreenSizes.medium}) {
    > button {
      &:focus {
        outline: none;
      }

      &:nth-child(2) {
        background: transparent;
        svg {
          transform: translateX(68px);
        }
      }
    }

    &:focus-within,
    &:hover {
      box-shadow: 0 0 0 0.2rem rgba(113, 183, 248, 0.3);

      button {
        &:nth-child(2) {
          &:focus,
          &:hover {
            background: ${color(Colors.black).alpha(0.3).toString()};
          }

          svg {
            transform: translateX(0px);
          }
        }
      }
    }
  }
`;
