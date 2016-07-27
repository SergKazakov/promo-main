import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"

import Header from "../Header"
import Footer from "../Footer"

import "./index.global.css"
import styles from "./index.css"

export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className={ styles.layout }>
        <Helmet
          meta={ [ {
            name: "viewport",
            content: "width=device-width, initial-scale=1, user-scalable=no",
          } ] }
        />

        <Header />
        <div className={ styles.content }>
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
}
