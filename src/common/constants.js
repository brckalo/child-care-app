const constants = {
  appName: 'ChildCare',
  currency: '€',

  languages: {
    en: 'en',
    sr: 'sr'
  },

  routes: {
    root: '',
    parents: '/parents',
    parent: '/parents/:id',
    babysitters: '/babysitters',
    babysitter: '/babysitters/:id',
    children: '/children',
    child: '/children/:id',
    settings: '/settings'
  },

  api: {
    baseURL: 'http://localhost:8000/api/v1',
    parents: '/parents',
    babysitters: '/babysitters',
    children: '/children',
    methods: {
      get: 'get',
      post: 'post',
      put: 'put',
      delete: 'delete'
    }
  },

  pagination: {
    size: 8
  }
};

export default constants;
