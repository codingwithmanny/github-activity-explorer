// IMPORTS
// --------------------------------------------------------
import axios, { AxiosResponse } from 'axios';

// CONFIG
// --------------------------------------------------------
const apiUrl = window.API_URL;

// MIDDLEWARE
// --------------------------------------------------------
/**
 * Used to get more information from error messages
 */
axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosResponse) => Promise.reject(error),
);

// MAIN REQUESTS
// --------------------------------------------------------
/**
 * Retrieves search result query based on string search
 * @param {string} query
 * @param {number} perPage
 */
export const getSearchResults = async (query: string, perPage = 6) =>
  await axios.get(
    `${apiUrl}/search/repositories?q=${query}${
      perPage && perPage > 0 ? `&per_page=${perPage}` : ''
    }`,
  );

/**
 * Retrieves commit history of a given github repository
 * @param {string} repo ex: facebook/create-react-app
 * @param {string} since YYYY-MM-DDTHH:MM:SSZ
 * @param {string} until YYYY-MM-DDTHH:MM:SSZ.
 */
export const getCommitHistory = async (
  repo: string,
  since?: string,
  until?: string,
) =>
  await axios.get(
    `${apiUrl}/repos/${repo}/commits?${since ? `since=${since}&` : ''}${
      until ? `until=${until}&` : ''
    }per_page=100`,
  );
