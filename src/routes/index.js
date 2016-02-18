import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import HomeView from 'views/HomeView/HomeView'
import TeamView from 'views/TeamView/TeamView'
import NotFoundView from 'views/NotFoundView/NotFoundView'

export default (
  <Route path='/score' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/team' component={TeamView} />
    <Route path='/404' component={NotFoundView} />
    <Redirect from='*' to='/404' />

  </Route>
)
