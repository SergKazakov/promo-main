import Header from "../Header"
import Footer from "../Footer"
import Menu from "../Menu"
import GoogleAnalyticsTracker from "../GoogleAnalyticsTracker"
import "./index.global.css"
import css from "./index.css"

const {
  Component,
  PropTypes: {
    object,
  },
} = React

export default class Layout extends Component {
  render() {
    return (
      <GoogleAnalyticsTracker
        params={ this.props.params }
        className={ css.layout }
      >
        <Helmet
          meta={ [ {
            name: "viewport",
            content: "width=device-width, initial-scale=1, user-scalable=no",
          } ] }
        />
        <Header />
        <Menu />
        <main className={ css.main }>
          { this.props.children }
        </main>
        <Footer />
      </GoogleAnalyticsTracker>
    )
  }
}

Layout.propTypes = {
  params: object,
}

Layout.contextTypes = {
  metadata: object.isRequired,
}

export default Layout
