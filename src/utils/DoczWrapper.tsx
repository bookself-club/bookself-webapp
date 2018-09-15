import React from 'react';
import { ThemeProvider } from 'styled-components';

const Wrapper: React.SFC = ({ children }) => (
  <ThemeProvider theme={{ mode: 'dark' }}>{children}</ThemeProvider>
);

export default Wrapper;
