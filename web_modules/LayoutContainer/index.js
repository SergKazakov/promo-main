import Notifications from "react-notify-toast"
import Header from "../Header"
import Footer from "../Footer"
import Menu from "../Menu"
import "./index.global.css"
import styles from "./index.css"

const {
  oneOfType,
  array,
  object,
} = React.PropTypes

const Layout = ({ children }) => (
  <div className={ styles.layout }>
    <Helmet
      meta={ [ {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no",
      } ] }
    />
    <Notifications />
    <Header />
    <Menu />
    <main className={ styles.main }>
      { children }
    </main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: oneOfType([ array, object ]),
}

Layout.contextTypes = {
  metadata: object.isRequired,
}

export default Layout
