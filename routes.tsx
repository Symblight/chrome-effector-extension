import { onlyAuth, onlyAnon } from '@features/common/guards';

import { paths } from './paths';

import { Login } from './popup/login';
import { DialogScrape } from './popup/dialog-scrape';
import { Logout } from './popup/logout';

export const ROUTES: any[] = [
  {
    path: paths.login(),
    component: Login,
    exact: true,
    guards: [onlyAnon()],
  },
  {
    path: paths.logout(),
    component: Logout,
    exact: true,
    guards: [onlyAuth()],
  },
  {
    path: paths.home(),
    component: DialogScrape,
    exact: true,
    guards: [onlyAuth()],
  },
];
