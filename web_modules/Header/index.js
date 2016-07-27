import React, { Component, PropTypes } from "react"
import { Link } from "react-router"

import styles from "./index.css"
import Svg from "react-svg-inline"

export default class Header extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    return (
      <header className={ styles.header }>
        <nav className={ styles.nav }>
        </nav>
      </header>
    )
  }
}
