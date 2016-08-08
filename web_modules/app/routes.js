import { Route } from "react-router"

import LayoutContainer from "../LayoutContainer"
import PhenomicPageContainer from "phenomic/lib/PageContainer"

import Page from "../layouts/Page"
import PageError from "../layouts/PageError"
import PageLoading from "../layouts/PageLoading"

class PageContainer extends React.Component {
  render() {
    return (
      <PhenomicPageContainer
        { ...this.props }
        layouts={ {
          Page,
          PageError,
          PageLoading,
        } }
      />
    )
  }
}

export default (
  <Route component={ LayoutContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)
