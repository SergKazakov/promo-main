import { Route } from "react-router"

import PhenomicPageContainer from "phenomic/lib/PageContainer"

import { Page } from "../Page"

export default (
  <Route
    path="*"
    component={props => (
      <PhenomicPageContainer
        {...props}
        layouts={{ Page, PageError: () => null, PageLoading: () => null }}
      />
    )}
  />
)
