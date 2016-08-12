import { Link as ScrollLink } from "react-scroll"
import styles from "./index.css"

const About = () => (
  <section id="about" className={ styles.wrapper }>
    <div className={ styles.about }>
      <img className={ styles.img } src={ require("./about.jpg") } />
      <div className={ styles.content }>
        <h3 className={ styles.title }>{ 'OUR HISTORY' }</h3>
        <p className={ styles.text }>
          {
            `We have been starting as a young freelance team since 2013 year.
            Our first project was an American startup, which was based on
            interactive videos. This project has grown as our team.
            The next project was sold to the banking system. In parallel,
            we are engaged in another project built on Cashback system.`
          }
        </p>
        <p className={ styles.text }>
          {
            `Now we are developing a platform for a new generation of 
            financial systems covering the whole banking system in the world.
            We are also working on own internal projects, which can be seen in
            the portfolio. We actively participate in the development of open
            source projects and communicate with Ember community.`
          }
        </p>
        <ScrollLink
          className={ styles.btn }
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
