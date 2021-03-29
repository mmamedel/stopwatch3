const { publish } = require('gh-pages')

publish(
  'build',
  {
    repo,
    user: {
      name: 'Git Hub Actions',
      email: 'actions@github.com'
    }
  },
  (err) => {
    err && console.error(err)
  }
)
