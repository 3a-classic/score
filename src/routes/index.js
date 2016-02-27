import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import HomeView from 'views/HomeView/HomeView'
import TeamListView from 'views/TeamListView/TeamListView'
import NotFoundView from 'views/NotFoundView/NotFoundView'
// for test
import teamTest from 'sampleData/teamTest'

export default (
  <Route path='/score' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/team' component={TeamListView} />
    <Route path='/404' component={NotFoundView} />
    <Route path='sampleData/team' handler={teamTest} />
    <Redirect from='*' to='/404' />
  </Route>
)
