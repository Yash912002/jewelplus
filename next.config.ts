import path from 'path';

module.exports = {
  webpack: (config: { watchOptions: { ignored: any[]; }; }, { isServer }: any) => {
    if (!isServer) {
      config.watchOptions = {
        ignored: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, '.next'),
        ],
      };
    }
    return config;
  },
};