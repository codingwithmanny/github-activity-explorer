// IMPORTS
// --------------------------------------------------------
import styled from 'styled-components';
import color from 'color';
import { Colors } from '../../styles/DefaultStyles';

// TYPES
// --------------------------------------------------------
interface TooltipStylesProps {
  top: number;
  left: number;
  show: boolean;
  xAlign: string;
  yAlign: string;
}

// MAIN STYLES
// --------------------------------------------------------
/**
 * Main styled component within <Tooltip />
 * @constant {JSX} styled component
 */
export const TooltipStyles = styled.div<TooltipStylesProps>`
  position: absolute;
  background: white;
  color: black;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 0px 3px 12px ${color(Colors.darkestBlue).fade(0.9).toString()};
  ${(props) =>
    props.show &&
    props.left &&
    `left: ${
      props.left +
      (props.xAlign === 'right' ? -220 : props.xAlign === 'center' ? -95 : 30)
    }px`};
  ${(props) =>
    props.show &&
    props.top &&
    `top: ${
      props.top +
      (props.yAlign === 'top' ? 20 : props.yAlign === 'center' ? -30 : -80)
    }px`};
  ${(props) =>
    !props.show && `top: ${props.top - 400}px; left ${props.left}px;`};

  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: all 250ms ease-in-out 0s;
  width: 150px;

  span,
  strong {
    display: block;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    color: ${Colors.darkPurple};
    margin-bottom: 2px;
    font-size: 14px;
    font-weight: 400;
  }

  strong {
    color: ${Colors.deepBlue};
    font-size: 14px;
    svg {
      width: 22px;
      margin-right: 5px;
    }
  }
`;
