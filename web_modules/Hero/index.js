import { Divider } from "../Divider"
import Media from "react-responsive"
import Svg from "react-svg-inline"
import { Link } from "../Link"
import css from "./index.css"
import poster from "./poster.jpg"
import videoMp4 from "!!file!./video.mp4"
import videoWebm from "!!file!./video.webm"
import arrow from "./arrow.svg"

export const Hero = () => (
  <section className={css.wrapper}>
    <div className={css.inner}>
      <video className={css.video} poster={poster} autoPlay loop>
        <source src={videoMp4} type="video/webm" />
        <source src={videoWebm} type="video/mp4" />
      </video>
      <div className={css.content}>
        <h2 className={css.title}>
          {"OUTSOURCING & EMBER.JS CONSULTING SERVICES"}
        </h2>
        <Divider theme={"white"} />
        <Media minWidth={401}>
          <h3 className={css.subtitle}>
            {"We'll help you to develop ambitious Ember.js applications"}
          </h3>
          <p className={css.text}>
            {"Ember.js Training & Code Audits & Hire developers & Startup MVP"}
          </p>
        </Media>
        <Link to="#contact">Get started now</Link>
      </div>
    </div>
    <a className={css.anchor} href="#features">
      <Svg svg={arrow} width="2.4rem" />
    </a>
  </section>
)
