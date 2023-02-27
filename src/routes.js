import constants from './common/constants';

import ParentContainer from './pages/parent/ParentContainer';
import ParentModalContainer from './pages/parent/parent-modal/ParentModalContainer';
import BabysitterContainer from './pages/babysitter/BabysitterContainer';
import BabysitterModalContainer from './pages/babysitter/babysitter-modal/BabysitterModalContainer';
import ChildContainer from './pages/child/ChildContainer';
import ChildModalContainer from './pages/child/child-modal/ChildModalContainer';
import SettingsContainer from './pages/settings/SettingsContainer';
import App from './App';

const routes = [
  {
    path: constants.routes.root,
    element: <App />,
    children: [
      {
        path: constants.routes.parents,
        element: <ParentContainer />,
        children: [
          {
            path: constants.routes.parent,
            element: <ParentModalContainer />
          }
        ]
      },
      {
        path: constants.routes.babysitters,
        element: <BabysitterContainer />,
        children: [
          {
            path: constants.routes.babysitter,
            element: <BabysitterModalContainer />
          }
        ]
      },
      {
        path: constants.routes.children,
        element: <ChildContainer />,
        children: [
          {
            path: constants.routes.child,
            element: <ChildModalContainer />
          }
        ]
      },
      {
        path: constants.routes.settings,
        element: <SettingsContainer />
      }
    ]
  }
];

export default routes;
