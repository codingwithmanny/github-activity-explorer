// IMPORTS
// --------------------------------------------------------
import React, { useState, useEffect } from 'react';
import {
  Star,
  Trash2,
  Search,
  Menu,
  ArrowRight,
  HelpCircle,
} from '@styled-icons/feather';
import moment from 'moment';
import { formatNumber } from '../../utils/helpers';

// Styled Components
import {
  SidebarStyles,
  Dropdown,
  Selections,
  Selection,
  MenuStyles,
  InfoStyles,
} from './styles';
import { Loader } from '../../styles/Icons';

// TYPES
// --------------------------------------------------------
interface SidebarProps {
  loading: boolean;
  results?: Array<any> | null;
  repos?: Array<any>;
  handleSearch?: Function;
  handleSelected?: Function;
  handleRemove?: Function;
  handleToggleSelected?: Function;
  handleInfo?: Function;
}

// MAIN PRESENTATION COMPONENT
// --------------------------------------------------------
/**
 * Sidebar Presentation Component
 * @param {object} props component props
 * @returns {JSX} React compoennt
 */
const Sidebar: React.FC<SidebarProps> = (props) => {
  // State / Props
  const [search, setSearch] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);
  const {
    loading,
    results,
    repos,
    handleSearch,
    handleSelected,
    handleRemove,
    handleToggleSelected,
    handleInfo,
  } = props;
  const [show, setShow] = useState(true);

  // Functions
  /**
   * Handles when input field is changed
   * @param event Inptu Change Event
   * @returns {void}
   */
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    // Update input value
    setSearch(value);
  };

  /**
   * Handles when input focus is off
   * @returns {void}
   */
  const onBlurInput = () => {
    setFocused(false);
  };

  /**
   * Handles when input focus is on
   * @returns {void}
   */
  const onFocusInput = () => {
    setFocused(true);
  };

  /**
   * When a selection is made from the search results
   * @param {object} data GitHub repo object
   * @returns {void}
   */
  const onDropdownSelected = (data: any) => (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (handleSelected) {
      handleSelected(data);
    }
    setSearch('');
    onClickHideShowMenu();
    event.preventDefault();
  };

  /**
   * When the delete button is clicked on existing selections
   * @param {object} data GitHub repo object
   * @returns {void}
   */
  const onClickButtonDelete = (data: any) => (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (handleRemove) {
      handleRemove(data);
    }
    event.stopPropagation();
    event.preventDefault();
  };

  /**
   * When an item from the search results is clicked
   * @param {object} data GitHub repo object
   * @returns {void}
   */
  const onClickResults = (data: any) => (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (handleToggleSelected) {
      handleToggleSelected(data);
    }
    event.preventDefault();
  };

  /**
   * Used for mobile to hide / show menu button
   * @returns {void}
   */
  const onClickHideShowMenu = () => {
    setShow(!show);
  };

  /**
   * Used to display info about the app
   * @returns {void}
   */
  const onClickInfo = () => {
    if (handleInfo) {
      handleInfo();
    }
  };

  /**
   * Returns formatted date from now or the exact date
   * @param {string} date Date time string
   * @returns {string} formatted string
   */
  const formatDate = (date: string) => {
    const formatted = moment(date ?? '').fromNow();
    const dictionary = ['second', 'minute', 'hour'];

    const found = dictionary.findIndex((i) => formatted.indexOf(i) > -1);
    if (found > -1) return formatted;

    if (
      formatted.indexOf('day') > -1 &&
      formatted.match(/\d+/g) &&
      parseInt(formatted.match(/\d+/g)?.[0] || '0') <= 7
    ) {
      return formatted;
    }

    return `on ${moment(date ?? '').format('MMM D, YYYY')}`;
  };

  // Hooks
  /**
   * When search performed set a timer to retrieve results
   */
  useEffect(() => {
    // Reset the loading and results values
    if (handleSearch) {
      handleSearch('');
    }
    let timer: any = null;
    if (search.length > 0) {
      timer = setTimeout(() => {
        if (handleSearch) {
          handleSearch(search);
        }
      }, 500);
    }
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [search]);

  // Render
  return (
    <SidebarStyles show={show}>
      <MenuStyles onClick={onClickHideShowMenu}>
        {show ? <ArrowRight strokeWidth={2} /> : <Menu strokeWidth={2} />}
      </MenuStyles>
      <Dropdown
        focused={focused}
        loading={loading.toString()}
        results={results?.length}
        onBlur={onBlurInput}
        onFocus={onFocusInput}
      >
        <input
          tabIndex={0}
          onChange={onChangeInput}
          type="search"
          placeholder="Search a GitHub Repository..."
          value={search}
        />

        <Search strokeWidth={2} />

        <ul>
          {loading && (
            <li>
              <Loader />
            </li>
          )}
          {!loading && results && results?.length === 0 && <li>No Results</li>}
          {!loading &&
            results &&
            results?.length > 0 &&
            results?.map((i, k) => (
              <li key={`github-search-results-${k}`}>
                <a
                  href={`#${i?.owner?.login}${i?.name}`}
                  onClick={onDropdownSelected(i)}
                >
                  {i?.owner?.login ? (
                    <>
                      <span>{i?.owner?.login}</span>
                      <span>/</span>
                    </>
                  ) : (
                    ''
                  )}
                  <span>{i?.name}</span>
                </a>
              </li>
            ))}
        </ul>
      </Dropdown>

      <Selections>
        {repos && repos?.length > 0 ? (
          <>
            {repos?.map((i: any, k: number) => (
              <Selection
                active={i.active ?? false}
                color={i.color}
                key={`github-repo-selections-${k}`}
                title={`[SHOW/HIDE] '${i?.owner?.login}/${i?.name}'`}
                href={`#${i?.owner?.login}`}
                onClick={onClickResults(i)}
              >
                <div>
                  <h2>
                    <span>{i?.owner?.login}</span>
                    <span>/</span>
                    <span>{i?.name}</span>
                  </h2>
                  <section>
                    <span>
                      <Star strokeWidth={'2'} />
                      {formatNumber(`${i?.stargazers_count ?? 0}`)}
                    </span>
                    <time dateTime={`${i?.updated_at}`}>
                      Updated {formatDate(i?.updated_at)}
                    </time>
                  </section>
                </div>
                <button
                  title={`[DELETE] '${i?.owner?.login}/${i?.name}'`}
                  onClick={onClickButtonDelete(i)}
                >
                  <Trash2 strokeWidth={'2'} />
                </button>
              </Selection>
            ))}
          </>
        ) : (
          <>
            <aside>
              <Search strokeWidth={2} />
              <p>
                <span>Search for a GitHub repository</span> to populate graph
              </p>
            </aside>
          </>
        )}
      </Selections>
      <InfoStyles onClick={onClickInfo} tabIndex={0}>
        <HelpCircle strokeWidth={2} />
      </InfoStyles>
    </SidebarStyles>
  );
};

// EXPORTS
// --------------------------------------------------------
export default Sidebar;
