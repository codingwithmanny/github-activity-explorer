// IMPORTS
// --------------------------------------------------------
import React from 'react';
import renderer from 'react-test-renderer';

// TESTING
// --------------------------------------------------------
import Sidebar from '../';

// MOCKS
// --------------------------------------------------------
/**
 * Mocks
 */
jest.mock('moment', () => () => ({
  fromNow: () => '7 days ago',
}));

/**
 * Reset for mocks
 */
beforeEach(() => {
  jest.clearAllMocks();
});

// TESTS
// --------------------------------------------------------
/**
 * Renders <Sidebar /> default state
 */
test('Renders Sidebar Default State', () => {
  const tree = renderer.create(<Sidebar loading={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});

/**
 * Renders <Sidebar /> results
 */
test('Renders Sidebar Results', () => {
  const tree = renderer
    .create(
      <Sidebar
        loading={false}
        results={[
          {
            id: 63537249,
            node_id: 'MDEwOlJlcG9zaXRvcnk2MzUzNzI0OQ==',
            name: 'create-react-app',
            full_name: 'facebook/create-react-app',
            private: false,
            owner: {
              login: 'facebook',
              id: 69631,
              node_id: 'MDEyOk9yZ2FuaXphdGlvbjY5NjMx',
              avatar_url: 'https://avatars3.githubusercontent.com/u/69631?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/facebook',
              html_url: 'https://github.com/facebook',
              followers_url: 'https://api.github.com/users/facebook/followers',
              following_url:
                'https://api.github.com/users/facebook/following{/other_user}',
              gists_url:
                'https://api.github.com/users/facebook/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/facebook/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/facebook/subscriptions',
              organizations_url: 'https://api.github.com/users/facebook/orgs',
              repos_url: 'https://api.github.com/users/facebook/repos',
              events_url:
                'https://api.github.com/users/facebook/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/facebook/received_events',
              type: 'Organization',
              site_admin: false,
            },
            html_url: 'https://github.com/facebook/create-react-app',
            description: 'Set up a modern web app by running one command.',
            fork: false,
            url: 'https://api.github.com/repos/facebook/create-react-app',
            forks_url:
              'https://api.github.com/repos/facebook/create-react-app/forks',
            keys_url:
              'https://api.github.com/repos/facebook/create-react-app/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/facebook/create-react-app/collaborators{/collaborator}',
            teams_url:
              'https://api.github.com/repos/facebook/create-react-app/teams',
            hooks_url:
              'https://api.github.com/repos/facebook/create-react-app/hooks',
            issue_events_url:
              'https://api.github.com/repos/facebook/create-react-app/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/facebook/create-react-app/events',
            assignees_url:
              'https://api.github.com/repos/facebook/create-react-app/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/facebook/create-react-app/branches{/branch}',
            tags_url:
              'https://api.github.com/repos/facebook/create-react-app/tags',
            blobs_url:
              'https://api.github.com/repos/facebook/create-react-app/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/facebook/create-react-app/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/facebook/create-react-app/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/facebook/create-react-app/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/facebook/create-react-app/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/facebook/create-react-app/languages',
            stargazers_url:
              'https://api.github.com/repos/facebook/create-react-app/stargazers',
            contributors_url:
              'https://api.github.com/repos/facebook/create-react-app/contributors',
            subscribers_url:
              'https://api.github.com/repos/facebook/create-react-app/subscribers',
            subscription_url:
              'https://api.github.com/repos/facebook/create-react-app/subscription',
            commits_url:
              'https://api.github.com/repos/facebook/create-react-app/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/facebook/create-react-app/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/facebook/create-react-app/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/facebook/create-react-app/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/facebook/create-react-app/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/facebook/create-react-app/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/facebook/create-react-app/merges',
            archive_url:
              'https://api.github.com/repos/facebook/create-react-app/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/facebook/create-react-app/downloads',
            issues_url:
              'https://api.github.com/repos/facebook/create-react-app/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/facebook/create-react-app/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/facebook/create-react-app/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/facebook/create-react-app/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/facebook/create-react-app/labels{/name}',
            releases_url:
              'https://api.github.com/repos/facebook/create-react-app/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/facebook/create-react-app/deployments',
            created_at: '2016-07-17T14:55:11Z',
            updated_at: '2020-08-05T02:35:04Z',
            pushed_at: '2020-08-05T02:24:52Z',
            git_url: 'git://github.com/facebook/create-react-app.git',
            ssh_url: 'git@github.com:facebook/create-react-app.git',
            clone_url: 'https://github.com/facebook/create-react-app.git',
            svn_url: 'https://github.com/facebook/create-react-app',
            homepage: 'https://create-react-app.dev',
            size: 14495,
            stargazers_count: 80801,
            watchers_count: 80801,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: false,
            has_pages: true,
            forks_count: 19595,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 647,
            license: {
              key: 'mit',
              name: 'MIT License',
              spdx_id: 'MIT',
              url: 'https://api.github.com/licenses/mit',
              node_id: 'MDc6TGljZW5zZTEz',
            },
            forks: 19595,
            open_issues: 647,
            watchers: 80801,
            default_branch: 'master',
            score: 1,
          },
          {
            id: 78664391,
            node_id: 'MDEwOlJlcG9zaXRvcnk3ODY2NDM5MQ==',
            name: 'create-react-native-app',
            full_name: 'expo/create-react-native-app',
            private: false,
            owner: {
              login: 'expo',
              id: 12504344,
              node_id: 'MDEyOk9yZ2FuaXphdGlvbjEyNTA0MzQ0',
              avatar_url:
                'https://avatars3.githubusercontent.com/u/12504344?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/expo',
              html_url: 'https://github.com/expo',
              followers_url: 'https://api.github.com/users/expo/followers',
              following_url:
                'https://api.github.com/users/expo/following{/other_user}',
              gists_url: 'https://api.github.com/users/expo/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/expo/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/expo/subscriptions',
              organizations_url: 'https://api.github.com/users/expo/orgs',
              repos_url: 'https://api.github.com/users/expo/repos',
              events_url: 'https://api.github.com/users/expo/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/expo/received_events',
              type: 'Organization',
              site_admin: false,
            },
            html_url: 'https://github.com/expo/create-react-native-app',
            description:
              'Create React Native apps that run on iOS, Android, and web',
            fork: false,
            url: 'https://api.github.com/repos/expo/create-react-native-app',
            forks_url:
              'https://api.github.com/repos/expo/create-react-native-app/forks',
            keys_url:
              'https://api.github.com/repos/expo/create-react-native-app/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/expo/create-react-native-app/collaborators{/collaborator}',
            teams_url:
              'https://api.github.com/repos/expo/create-react-native-app/teams',
            hooks_url:
              'https://api.github.com/repos/expo/create-react-native-app/hooks',
            issue_events_url:
              'https://api.github.com/repos/expo/create-react-native-app/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/expo/create-react-native-app/events',
            assignees_url:
              'https://api.github.com/repos/expo/create-react-native-app/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/expo/create-react-native-app/branches{/branch}',
            tags_url:
              'https://api.github.com/repos/expo/create-react-native-app/tags',
            blobs_url:
              'https://api.github.com/repos/expo/create-react-native-app/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/expo/create-react-native-app/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/expo/create-react-native-app/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/expo/create-react-native-app/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/expo/create-react-native-app/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/expo/create-react-native-app/languages',
            stargazers_url:
              'https://api.github.com/repos/expo/create-react-native-app/stargazers',
            contributors_url:
              'https://api.github.com/repos/expo/create-react-native-app/contributors',
            subscribers_url:
              'https://api.github.com/repos/expo/create-react-native-app/subscribers',
            subscription_url:
              'https://api.github.com/repos/expo/create-react-native-app/subscription',
            commits_url:
              'https://api.github.com/repos/expo/create-react-native-app/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/expo/create-react-native-app/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/expo/create-react-native-app/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/expo/create-react-native-app/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/expo/create-react-native-app/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/expo/create-react-native-app/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/expo/create-react-native-app/merges',
            archive_url:
              'https://api.github.com/repos/expo/create-react-native-app/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/expo/create-react-native-app/downloads',
            issues_url:
              'https://api.github.com/repos/expo/create-react-native-app/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/expo/create-react-native-app/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/expo/create-react-native-app/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/expo/create-react-native-app/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/expo/create-react-native-app/labels{/name}',
            releases_url:
              'https://api.github.com/repos/expo/create-react-native-app/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/expo/create-react-native-app/deployments',
            created_at: '2017-01-11T17:54:30Z',
            updated_at: '2020-08-04T20:46:46Z',
            pushed_at: '2020-07-20T18:53:46Z',
            git_url: 'git://github.com/expo/create-react-native-app.git',
            ssh_url: 'git@github.com:expo/create-react-native-app.git',
            clone_url: 'https://github.com/expo/create-react-native-app.git',
            svn_url: 'https://github.com/expo/create-react-native-app',
            homepage: '',
            size: 1223,
            stargazers_count: 12203,
            watchers_count: 12203,
            language: 'TypeScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: false,
            has_pages: false,
            forks_count: 1340,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 10,
            license: {
              key: 'bsd-3-clause',
              name: 'BSD 3-Clause "New" or "Revised" License',
              spdx_id: 'BSD-3-Clause',
              url: 'https://api.github.com/licenses/bsd-3-clause',
              node_id: 'MDc6TGljZW5zZTU=',
            },
            forks: 1340,
            open_issues: 10,
            watchers: 12203,
            default_branch: 'master',
            score: 1,
          },
          {
            id: 76130347,
            node_id: 'MDEwOlJlcG9zaXRvcnk3NjEzMDM0Nw==',
            name: 'create-react-app-typescript',
            full_name: 'wmonk/create-react-app-typescript',
            private: false,
            owner: {
              login: 'wmonk',
              id: 175278,
              node_id: 'MDQ6VXNlcjE3NTI3OA==',
              avatar_url: 'https://avatars0.githubusercontent.com/u/175278?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/wmonk',
              html_url: 'https://github.com/wmonk',
              followers_url: 'https://api.github.com/users/wmonk/followers',
              following_url:
                'https://api.github.com/users/wmonk/following{/other_user}',
              gists_url: 'https://api.github.com/users/wmonk/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/wmonk/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/wmonk/subscriptions',
              organizations_url: 'https://api.github.com/users/wmonk/orgs',
              repos_url: 'https://api.github.com/users/wmonk/repos',
              events_url: 'https://api.github.com/users/wmonk/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/wmonk/received_events',
              type: 'User',
              site_admin: false,
            },
            html_url: 'https://github.com/wmonk/create-react-app-typescript',
            description:
              'DEPRECATED: Create React apps using typescript with no build configuration.',
            fork: false,
            url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript',
            forks_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/forks',
            keys_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/collaborators{/collaborator}',
            teams_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/teams',
            hooks_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/hooks',
            issue_events_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/events',
            assignees_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/branches{/branch}',
            tags_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/tags',
            blobs_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/languages',
            stargazers_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/stargazers',
            contributors_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/contributors',
            subscribers_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/subscribers',
            subscription_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/subscription',
            commits_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/merges',
            archive_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/downloads',
            issues_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/labels{/name}',
            releases_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/wmonk/create-react-app-typescript/deployments',
            created_at: '2016-12-10T18:34:32Z',
            updated_at: '2020-08-01T15:28:27Z',
            pushed_at: '2019-08-21T21:31:39Z',
            git_url: 'git://github.com/wmonk/create-react-app-typescript.git',
            ssh_url: 'git@github.com:wmonk/create-react-app-typescript.git',
            clone_url:
              'https://github.com/wmonk/create-react-app-typescript.git',
            svn_url: 'https://github.com/wmonk/create-react-app-typescript',
            homepage: '',
            size: 5040,
            stargazers_count: 3765,
            watchers_count: 3765,
            language: 'JavaScript',
            has_issues: true,
            has_projects: false,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 494,
            mirror_url: null,
            archived: true,
            disabled: false,
            open_issues_count: 119,
            license: null,
            forks: 494,
            open_issues: 119,
            watchers: 3765,
            default_branch: 'master',
            score: 1,
          },
          {
            id: 64449645,
            node_id: 'MDEwOlJlcG9zaXRvcnk2NDQ0OTY0NQ==',
            name: 'create-react-app-buildpack',
            full_name: 'mars/create-react-app-buildpack',
            private: false,
            owner: {
              login: 'mars',
              id: 17164,
              node_id: 'MDQ6VXNlcjE3MTY0',
              avatar_url: 'https://avatars1.githubusercontent.com/u/17164?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/mars',
              html_url: 'https://github.com/mars',
              followers_url: 'https://api.github.com/users/mars/followers',
              following_url:
                'https://api.github.com/users/mars/following{/other_user}',
              gists_url: 'https://api.github.com/users/mars/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/mars/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/mars/subscriptions',
              organizations_url: 'https://api.github.com/users/mars/orgs',
              repos_url: 'https://api.github.com/users/mars/repos',
              events_url: 'https://api.github.com/users/mars/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/mars/received_events',
              type: 'User',
              site_admin: false,
            },
            html_url: 'https://github.com/mars/create-react-app-buildpack',
            description:
              '⚛️ Heroku Buildpack for create-react-app: static hosting for React.js web apps',
            fork: false,
            url: 'https://api.github.com/repos/mars/create-react-app-buildpack',
            forks_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/forks',
            keys_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/collaborators{/collaborator}',
            teams_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/teams',
            hooks_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/hooks',
            issue_events_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/events',
            assignees_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/branches{/branch}',
            tags_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/tags',
            blobs_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/languages',
            stargazers_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/stargazers',
            contributors_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/contributors',
            subscribers_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/subscribers',
            subscription_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/subscription',
            commits_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/merges',
            archive_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/downloads',
            issues_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/labels{/name}',
            releases_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/mars/create-react-app-buildpack/deployments',
            created_at: '2016-07-29T04:10:19Z',
            updated_at: '2020-08-05T01:04:19Z',
            pushed_at: '2020-06-11T20:06:20Z',
            git_url: 'git://github.com/mars/create-react-app-buildpack.git',
            ssh_url: 'git@github.com:mars/create-react-app-buildpack.git',
            clone_url: 'https://github.com/mars/create-react-app-buildpack.git',
            svn_url: 'https://github.com/mars/create-react-app-buildpack',
            homepage: '',
            size: 166,
            stargazers_count: 2429,
            watchers_count: 2429,
            language: 'Shell',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 387,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 3,
            license: {
              key: 'mit',
              name: 'MIT License',
              spdx_id: 'MIT',
              url: 'https://api.github.com/licenses/mit',
              node_id: 'MDc6TGljZW5zZTEz',
            },
            forks: 387,
            open_issues: 3,
            watchers: 2429,
            default_branch: 'master',
            score: 1,
          },
          {
            id: 169795745,
            node_id: 'MDEwOlJlcG9zaXRvcnkxNjk3OTU3NDU=',
            name: 'create-react-app-auth-amplify',
            full_name: 'aws-samples/create-react-app-auth-amplify',
            private: false,
            owner: {
              login: 'aws-samples',
              id: 8931462,
              node_id: 'MDEyOk9yZ2FuaXphdGlvbjg5MzE0NjI=',
              avatar_url:
                'https://avatars1.githubusercontent.com/u/8931462?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/aws-samples',
              html_url: 'https://github.com/aws-samples',
              followers_url:
                'https://api.github.com/users/aws-samples/followers',
              following_url:
                'https://api.github.com/users/aws-samples/following{/other_user}',
              gists_url:
                'https://api.github.com/users/aws-samples/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/aws-samples/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/aws-samples/subscriptions',
              organizations_url:
                'https://api.github.com/users/aws-samples/orgs',
              repos_url: 'https://api.github.com/users/aws-samples/repos',
              events_url:
                'https://api.github.com/users/aws-samples/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/aws-samples/received_events',
              type: 'Organization',
              site_admin: false,
            },
            html_url:
              'https://github.com/aws-samples/create-react-app-auth-amplify',
            description:
              'Implements a basic authentication flow for signing up/signing in users as well as protected client side routing using AWS Amplify. ',
            fork: false,
            url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify',
            forks_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/forks',
            keys_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/collaborators{/collaborator}',
            teams_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/teams',
            hooks_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/hooks',
            issue_events_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/events',
            assignees_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/branches{/branch}',
            tags_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/tags',
            blobs_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/languages',
            stargazers_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/stargazers',
            contributors_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/contributors',
            subscribers_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/subscribers',
            subscription_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/subscription',
            commits_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/merges',
            archive_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/downloads',
            issues_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/labels{/name}',
            releases_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/aws-samples/create-react-app-auth-amplify/deployments',
            created_at: '2019-02-08T20:38:08Z',
            updated_at: '2020-08-04T01:05:45Z',
            pushed_at: '2020-08-01T21:43:48Z',
            git_url:
              'git://github.com/aws-samples/create-react-app-auth-amplify.git',
            ssh_url:
              'git@github.com:aws-samples/create-react-app-auth-amplify.git',
            clone_url:
              'https://github.com/aws-samples/create-react-app-auth-amplify.git',
            svn_url:
              'https://github.com/aws-samples/create-react-app-auth-amplify',
            homepage: null,
            size: 19474,
            stargazers_count: 143,
            watchers_count: 143,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: false,
            has_pages: false,
            forks_count: 1702,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 4,
            license: {
              key: 'other',
              name: 'Other',
              spdx_id: 'NOASSERTION',
              url: null,
              node_id: 'MDc6TGljZW5zZTA=',
            },
            forks: 1702,
            open_issues: 4,
            watchers: 143,
            default_branch: 'master',
            score: 1,
          },
          {
            id: 78417495,
            node_id: 'MDEwOlJlcG9zaXRvcnk3ODQxNzQ5NQ==',
            name: 'create-react-app-redux',
            full_name: 'notrab/create-react-app-redux',
            private: false,
            owner: {
              login: 'notrab',
              id: 950181,
              node_id: 'MDQ6VXNlcjk1MDE4MQ==',
              avatar_url: 'https://avatars3.githubusercontent.com/u/950181?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/notrab',
              html_url: 'https://github.com/notrab',
              followers_url: 'https://api.github.com/users/notrab/followers',
              following_url:
                'https://api.github.com/users/notrab/following{/other_user}',
              gists_url: 'https://api.github.com/users/notrab/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/notrab/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/notrab/subscriptions',
              organizations_url: 'https://api.github.com/users/notrab/orgs',
              repos_url: 'https://api.github.com/users/notrab/repos',
              events_url:
                'https://api.github.com/users/notrab/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/notrab/received_events',
              type: 'User',
              site_admin: false,
            },
            html_url: 'https://github.com/notrab/create-react-app-redux',
            description:
              'React Router, Redux, Redux Thunk & Create React App boilerplate',
            fork: false,
            url: 'https://api.github.com/repos/notrab/create-react-app-redux',
            forks_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/forks',
            keys_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/collaborators{/collaborator}',
            teams_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/teams',
            hooks_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/hooks',
            issue_events_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/events',
            assignees_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/branches{/branch}',
            tags_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/tags',
            blobs_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/languages',
            stargazers_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/stargazers',
            contributors_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/contributors',
            subscribers_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/subscribers',
            subscription_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/subscription',
            commits_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/merges',
            archive_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/downloads',
            issues_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/labels{/name}',
            releases_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/notrab/create-react-app-redux/deployments',
            created_at: '2017-01-09T10:13:34Z',
            updated_at: '2020-08-02T05:11:18Z',
            pushed_at: '2020-06-05T16:40:21Z',
            git_url: 'git://github.com/notrab/create-react-app-redux.git',
            ssh_url: 'git@github.com:notrab/create-react-app-redux.git',
            clone_url: 'https://github.com/notrab/create-react-app-redux.git',
            svn_url: 'https://github.com/notrab/create-react-app-redux',
            homepage:
              'https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f',
            size: 1530,
            stargazers_count: 865,
            watchers_count: 865,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: false,
            has_pages: true,
            forks_count: 289,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 6,
            license: {
              key: 'mit',
              name: 'MIT License',
              spdx_id: 'MIT',
              url: 'https://api.github.com/licenses/mit',
              node_id: 'MDc6TGljZW5zZTEz',
            },
            forks: 289,
            open_issues: 6,
            watchers: 865,
            default_branch: 'master',
            score: 1,
          },
        ]}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/**
 * Renders sidebar repos
 */
test('Renders Sidebar Results', () => {
  const tree = renderer
    .create(
      <Sidebar
        loading={false}
        results={null}
        repos={[
          {
            id: 63537249,
            node_id: 'MDEwOlJlcG9zaXRvcnk2MzUzNzI0OQ==',
            name: 'create-react-app',
            full_name: 'facebook/create-react-app',
            private: false,
            owner: {
              login: 'facebook',
              id: 69631,
              node_id: 'MDEyOk9yZ2FuaXphdGlvbjY5NjMx',
              avatar_url: 'https://avatars3.githubusercontent.com/u/69631?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/facebook',
              html_url: 'https://github.com/facebook',
              followers_url: 'https://api.github.com/users/facebook/followers',
              following_url:
                'https://api.github.com/users/facebook/following{/other_user}',
              gists_url:
                'https://api.github.com/users/facebook/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/facebook/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/facebook/subscriptions',
              organizations_url: 'https://api.github.com/users/facebook/orgs',
              repos_url: 'https://api.github.com/users/facebook/repos',
              events_url:
                'https://api.github.com/users/facebook/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/facebook/received_events',
              type: 'Organization',
              site_admin: false,
            },
            html_url: 'https://github.com/facebook/create-react-app',
            description: 'Set up a modern web app by running one command.',
            fork: false,
            url: 'https://api.github.com/repos/facebook/create-react-app',
            forks_url:
              'https://api.github.com/repos/facebook/create-react-app/forks',
            keys_url:
              'https://api.github.com/repos/facebook/create-react-app/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/facebook/create-react-app/collaborators{/collaborator}',
            teams_url:
              'https://api.github.com/repos/facebook/create-react-app/teams',
            hooks_url:
              'https://api.github.com/repos/facebook/create-react-app/hooks',
            issue_events_url:
              'https://api.github.com/repos/facebook/create-react-app/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/facebook/create-react-app/events',
            assignees_url:
              'https://api.github.com/repos/facebook/create-react-app/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/facebook/create-react-app/branches{/branch}',
            tags_url:
              'https://api.github.com/repos/facebook/create-react-app/tags',
            blobs_url:
              'https://api.github.com/repos/facebook/create-react-app/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/facebook/create-react-app/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/facebook/create-react-app/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/facebook/create-react-app/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/facebook/create-react-app/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/facebook/create-react-app/languages',
            stargazers_url:
              'https://api.github.com/repos/facebook/create-react-app/stargazers',
            contributors_url:
              'https://api.github.com/repos/facebook/create-react-app/contributors',
            subscribers_url:
              'https://api.github.com/repos/facebook/create-react-app/subscribers',
            subscription_url:
              'https://api.github.com/repos/facebook/create-react-app/subscription',
            commits_url:
              'https://api.github.com/repos/facebook/create-react-app/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/facebook/create-react-app/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/facebook/create-react-app/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/facebook/create-react-app/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/facebook/create-react-app/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/facebook/create-react-app/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/facebook/create-react-app/merges',
            archive_url:
              'https://api.github.com/repos/facebook/create-react-app/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/facebook/create-react-app/downloads',
            issues_url:
              'https://api.github.com/repos/facebook/create-react-app/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/facebook/create-react-app/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/facebook/create-react-app/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/facebook/create-react-app/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/facebook/create-react-app/labels{/name}',
            releases_url:
              'https://api.github.com/repos/facebook/create-react-app/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/facebook/create-react-app/deployments',
            created_at: '2016-07-17T14:55:11Z',
            updated_at: '2020-08-05T02:35:04Z',
            pushed_at: '2020-08-05T02:24:52Z',
            git_url: 'git://github.com/facebook/create-react-app.git',
            ssh_url: 'git@github.com:facebook/create-react-app.git',
            clone_url: 'https://github.com/facebook/create-react-app.git',
            svn_url: 'https://github.com/facebook/create-react-app',
            homepage: 'https://create-react-app.dev',
            size: 14495,
            stargazers_count: 80801,
            watchers_count: 80801,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: false,
            has_pages: true,
            forks_count: 19595,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 647,
            license: {
              key: 'mit',
              name: 'MIT License',
              spdx_id: 'MIT',
              url: 'https://api.github.com/licenses/mit',
              node_id: 'MDc6TGljZW5zZTEz',
            },
            forks: 19595,
            open_issues: 647,
            watchers: 80801,
            default_branch: 'master',
            score: 1,
            active: true,
            color: '#4CCA8D',
          },
        ]}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
