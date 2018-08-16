export const imports = {
  'src/components/atoms/Button/README.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-atoms-button-readme" */ 'src/components/atoms/Button/README.mdx'),
};
