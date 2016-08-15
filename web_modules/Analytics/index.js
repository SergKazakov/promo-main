import ga from "react-google-analytics"
import { ym } from "react-ym"

const Ga = ga.Initializer
const isProduction = process.env.NODE_ENV === "production"
const isClient = typeof window !== "undefined"

const {
  Component,
  PropTypes: {
    object,
  },
} = React

class Analytics extends Component {
  componentWillMount() {
    if (isClient) {
      const { pkg } = this.context.metadata
      if (isProduction) {
        ga("create", pkg.googleAnalyticsUA, "auto")
        ym.initialize(pkg.yandexMetrika, {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
          trackHash: true,
        })
      }
      else {
        console.info("ga.create", pkg.googleAnalyticsUA)
      }
      this.logPageview()
    }
  }

  componentWillReceiveProps(props) {
    if (props.params.splat !== this.props.params.splat) {
      this.logPageview()
    }
  }

  logPageview() {
    if (isClient) {
      if (isProduction) {
        ga("set", "page", window.location.pathname)
        ga("send", "pageview")
      }
      else {
        console.info("New pageview", window.location.href)
      }
    }
  }

  render() {
    return (
      <div className={ this.props.className }>
        { this.props.children }
        { isClient && isProduction && <Ga /> }
      </div>
    )
  }
}

Analytics.propTypes = {
  params: object.isRequired,
}

Analytics.contextTypes = {
  metadata: object.isRequired,
}

export default Analytics
