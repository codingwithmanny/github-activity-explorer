// IMPORTS
// --------------------------------------------------------
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { getGraphColor } from '../../styles/DefaultStyles';

// Actions / Requests
import { getSearchResults, getCommitHistory } from '../../utils/requests';

// Presentation Components
import Notification from '../../components/Notification';
import Sidebar from '../../components/Sidebar';
import Graph from '../../components/Graph';
import Info from '../../components/Info';

// MAIN CONTAINER COMPONENT
// --------------------------------------------------------
/**
 * Handles most logic and passes date to presentation components
 * @returns {JSX} React compoennt
 */
const AppContainer: React.FC = () => {
  // State / Props
  const [searchResults, setSearchResults] = useState<Array<any> | null>(null);
  const [searchLoading, setSearchLoading] = useState<boolean>(false);
  const [repos, setRepos] = useState<Array<string>>([]);
  const [history, setHistory] = useState<Array<any>>([]);
  const [historyLoading, setHistoryLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [colors, setColors] = useState<Array<number>>(
    Array.apply(null, Array(52)).map((_i, k) => k + 1),
  );
  const [showDetails, setShowDetails] = useState<boolean | null>(null);

  // Functions
  /**
   * Expected graph data and formats within the week object given
   * @param {array} data Array of GitHub commits
   * @param {object} allWeeks object which contains all 52 weeks
   * @returns {object} with all data merged with allWeeks
   */
  const formatGraphData = (data: Array<any>, allWeeks: any) => {
    if (data?.length > 0) {
      return data.reduce((a: any, b: any) => {
        const date = moment(b?.commit?.author?.date);
        const key = `${
          date.month() === 11 && date.weeks() === 1
            ? date.year() + 1
            : date.year()
        }-${date.weeks()}`;

        if (a[key]) {
          a[key].commits.push({
            ...b,
            datetime: date,
          });
        }
        return a;
      }, allWeeks);
    }
    return {};
  };

  /**
   * Formats, sends request for commit history, and updates local state
   * @param {string} query repo to be queried
   * @param {object} repo GitHub repo object
   * @param {number} colorUsed index of color used to avoid duplication
   * @returns {void}
   */
  const handleCommitHistoryRequest = async (
    query: string,
    repo: any,
    colorUsed: number,
  ) => {
    setHistoryLoading(true);

    try {
      // To + From Dates
      let to = moment();

      // Adjust for monday as first day of the week
      // 0 = Sunday
      // 1 = Monday
      // ...
      const dayOfWeek = to.day();
      if (dayOfWeek !== 1) {
        if (dayOfWeek === 0) {
          to = to.clone().subtract(6, 'days');
        } else {
          to = to.clone().subtract(dayOfWeek - 1, 'days');
        }
      }
      // Get the date of 52 weeks ago
      let from = to.clone().subtract(52, 'week');

      // Http request
      const response = await getCommitHistory(
        query,
        from.format('YYYY-MM-DDTHH:MM:SSZ'),
        to.format('YYYY-MM-DDTHH:MM:SSZ'),
      );

      // Format an object with all weeks as key names
      const allWeeks = Array.apply(null, Array(53)) // 52 Weeks + 1 Current Week
        .map(() => {
          // Adjust for week number in between two years
          const key = `${
            from.month() === 11 && from.weeks() === 1
              ? from.year() + 1
              : from.year()
          }-${from.weeks()}`;

          const dateKey = [key, from.format('MMM DD, YYYY')];
          from = from.clone().add(1, 'week');
          return dateKey;
        })
        .reduce((a: any, b: any) => {
          // Create object
          a[b[0]] = {
            date: b[1],
            datetime: moment(new Date(b[1]).toISOString()),
            commits: [],
          };
          return a;
        }, {});

      // Get all logs / commit data
      const getLogs = formatGraphData(response?.data ?? [], allWeeks);

      // Format for storing data for one repo
      const data = {
        id: query,
        logs: getLogs,
        color: repo.color,
        colorUsed,
        active: true,
      };

      setColors(colors.filter((i) => i !== colorUsed));
      setHistory([...history, ...[data]]);
      setHistoryLoading(false);
      setRepos([...repos, ...[repo]]);
    } catch (error) {
      setError(
        error?.response?.data?.message ??
          error?.message ??
          'Something went wrong.',
      );
      setHistoryLoading(false);

      // Clean up remove item from selected
      const repoName = query.split('/');
      repos.find((i: any) => {
        return i?.owner?.login === repoName[0] && i?.name === repoName[1];
      });
    }
  };

  /**
   * Handles searching for repos with a query string and displays the query results
   * @param {string} query string to be searched
   * @returns {void}
   */
  const handleSearchRepo = async (query: string) => {
    setSearchLoading(true);

    if (query?.length > 0) {
      try {
        const response = await getSearchResults(query);

        if (!response?.data?.items) {
          throw new Error('Could not retrieve data.');
        }

        setSearchResults(response?.data?.items ?? []);
        setSearchLoading(false);
      } catch (error) {
        setError(
          error?.response?.data?.message ??
            error?.message ??
            'Something went wrong.',
        );
        setSearchLoading(false);
      }
    } else {
      // Reset values for blank query
      setSearchResults(null);
      setSearchLoading(false);
    }
  };

  /**
   * When a repo is selected perform the request to retrieve its commit history
   * @param {object} data Repo object data from GitHub
   * @returns {void}
   */
  const handleRepoSelected = (data: any) => {
    setSearchResults(null);
    setSearchLoading(false);

    if (!repos.find((i: any) => i?.id === data?.id) && repos.length < 50) {
      // prevent add`ing the same data / value
      const color = `${getGraphColor(colors[0])}`;

      // Get history dat
      handleCommitHistoryRequest(
        `${data?.owner?.login}/${data.name}`,
        {
          ...data,
          active: true,
          color,
        },
        colors[0],
      );
    } else {
      setError('Repo limit reached. Try removing one.');
    }
  };

  /**
   * When an repo is removed from the current selection
   * @param {object} data GitHub repo object
   * @returns {void}
   */
  const handleRemoveRepo = (data: any) => {
    // Remove from selections
    const index = repos?.findIndex((i: any) => i?.id === data?.id);

    if (index > -1) {
      setRepos([...repos.slice(0, index), ...repos.slice(index + 1)]);
    }

    // Remove from commit history
    const historyIndex = history?.findIndex(
      (i: any) => i?.id === `${data?.owner.login}/${data?.name}`,
    );
    const repo = history?.[index] ?? null;

    if (historyIndex > -1) {
      setColors([...[repo.colorUsed, ...colors]]);
      setHistory([
        ...history.slice(0, historyIndex),
        ...history.slice(historyIndex + 1),
      ]);
    }
  };

  /**
   * Toggles showing / hiding a selection
   * @param {object} data GitHub repo object
   * @returns {void}
   */
  const handleToggleShow = (data: any) => {
    const index = repos?.findIndex((i: any) => i?.id === data?.id);
    const newRepos: Array<any> = [...repos];

    if (index > -1) {
      newRepos[index].active = !newRepos[index].active;
      setRepos(newRepos);
    }

    // Update history
    const historyIndex = history?.findIndex(
      (i: any) => i?.id === `${data?.owner.login}/${data?.name}`,
    );

    if (historyIndex > -1) {
      const newHistory = [...history];
      newHistory[historyIndex].active = !newHistory[historyIndex].active;
      setHistory(newHistory);
    }
  };

  /**
   * Toggles showing / hiding app information
   * @returns {void}
   */
  const handleInfo = () => {
    setShowDetails(showDetails === null || !showDetails);
  };

  // Hooks
  /**
   * Handles when new error shows and auto hides it after 2 seconds
   */
  useEffect(() => {
    let timer: any = null;
    if (error) {
      timer = setTimeout(() => {
        setError(null);
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  // Render
  return (
    <>
      <Notification message={error} />
      <Graph loading={historyLoading} history={history} />
      <Sidebar
        results={searchResults}
        loading={searchLoading}
        repos={repos}
        handleSearch={handleSearchRepo}
        handleSelected={handleRepoSelected}
        handleRemove={handleRemoveRepo}
        handleToggleSelected={handleToggleShow}
        handleInfo={handleInfo}
      />
      <Info show={showDetails} handleClose={handleInfo} />
    </>
  );
};

// EXPORTS
// --------------------------------------------------------
export default AppContainer;
