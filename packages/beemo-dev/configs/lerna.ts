import { LernaConfig } from '@beemo/driver-lerna';

const config: LernaConfig = {
  packages: ['packages/*', 'packages/goji.js.org/*'],
  npmClient: 'yarn',
  useWorkspaces: true,
  version: '0.11.0',
};

export default config;
