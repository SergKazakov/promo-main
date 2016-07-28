import Header from "../Header"
import Footer from "../Footer"
import "./index.global.css"
import styles from "./index.css"

const { PropTypes } = React

const Layout = ({ children }) => (
  <div className={ styles.layout }>
    <Helmet
      meta={ [ {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no",
      } ] }
    />
    <Header />
    <main className={ styles.main }>
      { children }
    </main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
}

Layout.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Layout
