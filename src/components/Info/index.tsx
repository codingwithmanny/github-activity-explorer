// IMPORTS
// --------------------------------------------------------
import React, { useEffect } from 'react';
import {
  X,
  Github,
  GitCommit,
  CornerLeftUp,
  User,
} from '@styled-icons/feather';

// Styled Components
import { InfoStyles } from './styles';

// TYPES
// --------------------------------------------------------
interface InfoProps {
  show: boolean | null;
  handleClose?: Function;
}

// MAIN PRESENTATION COMPONENT
// --------------------------------------------------------
/**
 * Info
 * @param {Object} props component props
 * @returns {JSX} React compoennt
 */
const Info: React.FC<InfoProps> = (props) => {
  // State / Props
  const { show, handleClose } = props;

  // Functions
  /**
   * When X button is clicked
   */
  const onClickClose = () => {
    if (handleClose) {
      handleClose();
    }
  };

  /**
   * Handles pressing Escape to leave modal
   */
  useEffect(() => {
    let listener: ((this: Window, ev: KeyboardEvent) => void) | null = null;
    if (show) {
      listener = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClickClose();
        }
      };
      window.addEventListener('keyup', listener);
    }
    return () => {
      if (listener) {
        window.removeEventListener('keyup', listener);
      }
    };
    // eslint-disable-next-line
  }, [show]);

  // Render
  return (
    <InfoStyles show={show}>
      <div>
        <button onClick={onClickClose}>
          <X strokeWidth={2} />
        </button>
        <p>
          <small>
            <Github strokeWidth={2} />
            GitHub URL
          </small>
        </p>
        <p>
          <a
            href={`${window.GITHUB_REPO_URL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>{window.GITHUB_REPO_URL}</code>
          </a>
        </p>
        <p>
          <small>
            <GitCommit strokeWidth={2} />
            GitHub COMMIT
          </small>
        </p>
        <p>
          <a
            href={`${window.GITHUB_REPO_URL}/commit/${window.GITHUB_COMMIT}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>{window.GITHUB_COMMIT}</code>
          </a>
        </p>
        <p>
          <small>
            <CornerLeftUp strokeWidth={2} />
            Deployment
          </small>
        </p>
        <p>
          <a
            href={`${window.DEPLOY_URL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>{window.DEPLOY_ID}</code>
          </a>
        </p>
        <p>
          <small>
            <User strokeWidth={2} />
            GitHub User
          </small>
        </p>
        <p>
          <a
            href={`https://github.com/${window.GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>@{window.GITHUB_USER}</code>
          </a>
        </p>
      </div>
    </InfoStyles>
  );
};

// EXPORTS
// --------------------------------------------------------
export default Info;
