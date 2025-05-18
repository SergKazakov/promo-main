import Media from "react-responsive"

import { Divider } from "../Divider"
import { Link } from "../Link"

import Arrow from "./arrow.svg?react"
import * as css from "./index.module.css"
import poster from "./poster.jpg"
import videoMp4 from "./video.mp4"
import videoWebm from "./video.webm"

export const Hero = () => (
  <section className={css.wrapper}>
    <div className={css.inner}>
      <video autoPlay className={css.video} loop poster={poster}>
        <source src={videoMp4} type="video/webm" />
        <source src={videoWebm} type="video/mp4" />
      </video>
      <div className={css.content}>
        <h2 className={css.title}>
          The Team for creating ambitious web applications
        </h2>
        <Divider theme="white" />
        <Media minWidth={401}>
          <h3 className={css.subtitle}>
            We&apos;ll help you to develop ambitious Ember.js applications
          </h3>
          <p className={css.text}>
            Ember.js Training & Code Audits & Hire developers & Startup MVP
          </p>
        </Media>
        <Link to="#contact">Get started now</Link>
      </div>
    </div>
    <a className={css.anchor} href="#features">
      <Arrow width="2.4rem" />
    </a>
  </section>
)
