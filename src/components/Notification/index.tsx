// IMPORTS
// --------------------------------------------------------
import React from 'react';

// Styled Components
import { NotificationStyles } from './styles';

// Presentation Components
// TYPES
// --------------------------------------------------------
interface NotificationProps {
  message: string | null;
}

// MAIN PRESENTATION COMPONENT
// --------------------------------------------------------
/**
 * Notification
 * @param {Object} props component props
 * @returns {JSX} React compoennt
 */
const Notification: React.FC<NotificationProps> = (props) => {
  // State / Props
  const { message } = props;

  // Render
  return (
    <NotificationStyles show={(message && message.length > 0) || false}>
      <div>{message && message}</div>
    </NotificationStyles>
  );
};

// EXPORTS
// --------------------------------------------------------
export default Notification;
