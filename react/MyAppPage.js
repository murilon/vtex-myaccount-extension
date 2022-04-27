import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
// Your component pages
import UserAddresses from './components/Addresses'

const MyAppPage = () => (
  <Fragment>
    <Route exact path="/_addresses" component={UserAddresses} />
  </Fragment>
)

export default MyAppPage
