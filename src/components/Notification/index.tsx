// IMPORTS
// --------------------------------------------------------
import React from 'react';

// Styled Components
import { NotificationStyles } from './styles';

// TYPES
// --------------------------------------------------------
interface NotificationProps {
  message: string | null;
}

// MAIN PRESENTATION COMPONENT
// --------------------------------------------------------
/**
 * Notification
 * @param {object} props component props
 * @returns {JSX} React compoennt
 */
const Notification: React.FC<NotificationProps> = (props) => (
  <NotificationStyles
    show={(props.message && props.message.length > 0) || false}
  >
    <div>{props.message && props.message}</div>
  </NotificationStyles>
);

// EXPORTS
// --------------------------------------------------------
export default Notification;
