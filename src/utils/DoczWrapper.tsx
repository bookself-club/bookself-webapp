import React from 'react';
import { ThemeProvider } from 'styled-components';

const Wrapper = ({ children }) => (
  <ThemeProvider theme={{ mode: 'dark' }}>{children}</ThemeProvider>
);

export default Wrapper;
