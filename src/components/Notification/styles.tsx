// IMPORTS
// --------------------------------------------------------
import styled from 'styled-components';
import color from 'color';
import { Colors, ScreenSizes } from '../../styles/DefaultStyles';

// TYPES
// --------------------------------------------------------
interface NotificationStylesProps {
  show: boolean;
}

// MAIN STYLES
// --------------------------------------------------------
/**
 * container styled component within <Notification />
 * @constant {JSX} styled component
 */
export const NotificationStyles = styled.div<NotificationStylesProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 30px;

  > div {
    display: block;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    padding: 0 20px;
    white-space: nowrap;
    background: ${Colors.red};
    color: ${color(Colors.white).alpha(0.8).toString()};
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    width: calc(100% - 160px);
    transition: all 250ms ease-in-out 0s;
    transform: ${(props) =>
      props.show ? 'translateY(0px)' : 'translateY(-40px)'};
  }

  @media (min-width: ${ScreenSizes.medium}) {
    > div {
      text-align: center;
    }
  }
`;
