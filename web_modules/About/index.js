import { Link as ScrollLink } from "react-scroll"
import css from "./index.css"

const About = () => (
  <section id="about" className={ css.wrapper }>
    <div className={ css.about }>
      <img className={ css.img } src={ require("./about.jpg") } />
      <div className={ css.content }>
        <h3 className={ css.title }>{ 'OUR HISTORY' }</h3>
        <p className={ css.text }>
          {
            `We have been starting as a young freelance team since 2013 year.
            Our first project was an American startup, which was based on
            interactive videos. This project has grown as our team.
            The next project was sold to the banking system. In parallel,
            we are engaged in another project built on Cashback system.`
          }
        </p>
        <p className={ css.text }>
          {
            `Now we are developing a platform for a new generation of
            financial systems covering the whole banking system in the world.
            We are also working on own internal projects, which can be seen in
            the portfolio. We actively participate in the development of open
            source projects and communicate with Ember community.`
          }
        </p>
        <ScrollLink
          className={ css.btn }
          to={ 'portfolio' }
          smooth
          duration={ 2000 }
        >
          { 'Browse our work' }
        </ScrollLink>
      </div>
    </div>
  </section>
)

export default About
