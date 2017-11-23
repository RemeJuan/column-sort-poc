import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'styled-components';

const fontFamily =
  'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif';

injectGlobal([
  `
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    font-family: ${fontFamily};
    box-sizing: border-box;
  }

  a, h1, h2, h3, h4, h5, h6, strong, span[role=link] {font-weight:600;}

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;

    &:before,
    &:after {
      content: '';
      content: none;
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }`,
]);

const App = ({ children }) => <div>{children}</div>;

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
