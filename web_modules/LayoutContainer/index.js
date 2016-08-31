import Header from "../Header"
import Footer from "../Footer"
import Menu from "../Menu"
import Analytics from "../Analytics"
import "./index.global.css"
import css from "./index.css"

const {
  Component,
  PropTypes: {
    object,
  },
} = React

class Layout extends Component {
  render() {
    return (
      <Analytics
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
      </Analytics>
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
