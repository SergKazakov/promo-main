import React, { Component, PropTypes } from "react"
import styles from "./index.css"

export default class Header extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    return (
      <header className={ styles.header }>
        <nav className={ styles.nav }>
        </nav>
      </header>
    )
  }
}
