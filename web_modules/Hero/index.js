import Divider from "../Divider"
import { Link } from "react-scroll"
import { Link as ScrollLink } from "react-scroll"
import Svg from "react-svg-inline"
import styles from "./index.css"

const Hero = () => (
  <section className={ styles.wrapper }>
    <div className={ styles.inner }>
      <video
        className={ styles.video }
        poster={ require("./poster.jpg") }
        autoPlay
        loop
      >
        <source
          src={ require("!!file!./video.mp4") }
          type="video/webm"
        />
        <source
          src={ require("!!file!./video.webm") }
          type="video/mp4"
        />
      </video>
      <div className={ styles.content }>
        <h2 className={ styles.title }>
          { 'OUTSOURCING & EMBER.JS CONSULTING SERVICES' }
        </h2>
        <Divider theme={ 'white' } />
        <h3 className={ styles.subtitle }>
          { "We'll help you to develop ambitious Ember.js applications" }
        </h3>
        <p className={ styles.text }>
          {
            "Ember.js Training & Code Audits & Hire developers & Startup MVP"
          }
        </p>
        <ScrollLink
          className={ styles.btn }
          to={ 'contact' }
          smooth
          duration={ 2000 }
        >
          { 'Get started now' }
        </ScrollLink>
      </div>
    </div>
    <Link
      className={ styles.anchor }
      to={ 'features' }
      smooth
      duration={ 2000 }
    >
      <Svg
        svg={ require("./arrow.svg") }
        width="2.4rem"
      />
    </Link>
  </section>
)

export default Hero
