const { publish } = require('gh-pages')

publish(
  'build',
  {
    repo: 'https://github.com/mmamedel/stopwatch3.git',
    user: {
      name: 'Git Hub Actions',
      email: 'actions@github.com'
    }
  },
  (err) => {
    err && console.error(err)
  }
)
