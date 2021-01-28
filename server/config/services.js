module.exports = {
  attractionOverview: {
    api: '/api/attraction',
    url: 'http://localhost:3002',
    bundle: 'overview-bundle.js',
  },
  reviews: {
    api: '/api/reviews',
    url: 'http://localhost:3003',
    bundle: 'review-bundle.js',
  },
  ratings: {
    api: '/api/ratings',
    url: 'http://localhost:3003',
    bundle: 'review-bundle.js',
  },
  qAndA: {
    api: '/api/retrieve',
    url: 'http://localhost:3004',
    bundle: 'q-and-a-bundle.js',
  },
  related: {
    api: '/api/retrieve',
    url: 'http://localhost:3005',
    bundle: 'related-bundle.js',
  },
};
