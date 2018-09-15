import doczPluginNetlify from 'docz-plugin-netlify';

export default {
  typescript: true,
  protocol: 'http',
  propsParser: true,
  port: '6060',
  wrapper: 'src/utils/DoczWrapper',
  plugins: [doczPluginNetlify()],
};
