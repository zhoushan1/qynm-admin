module.exports = {
  apps: [
    {
      name: 'qynm-admin',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
    },
  ],
};
