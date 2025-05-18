import Media from "react-responsive"

import { Link } from "../Link"

import image from "./about.jpg"
import * as css from "./index.module.css"

export const About = () => (
  <section className={css.wrapper} id="about">
    <div className={css.about}>
      <Media minWidth={1025}>
        <img src={image} />
      </Media>
      <div className={css.content}>
        <h3 className={css.title}>OUR HISTORY</h3>
        <p className={css.text}>
          We have been starting as a young freelance team since 2013 year. Our
          first project was an American startup, which was based on interactive
          videos. This project has grown as our team. The next project was sold
          to the banking system. In parallel, we are engaged in another project
          built on Cashback system.
        </p>
        <p className={css.text}>
          Now we are developing a platform for a new generation of financial
          systems covering the whole banking system in the world. We are also
          working on own internal projects, which can be seen in the portfolio.
          We actively participate in the development of open source projects and
          communicate with Ember community.
        </p>
        <Link to="#portfolio">Browse our work</Link>
      </div>
    </div>
  </section>
)
