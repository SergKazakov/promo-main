import Button from "../Button"
import styles from "./index.css"

const About = () => (
  <section id="about" className={ styles.wrapper }>
    <div className={ styles.about }>
      <img className={ styles.img } src={ require("./about.jpg") } />
      <div className={ styles.content }>
        <h3 className={ styles.title }>{ 'OUR HISTORY' }</h3>
        <p className={ styles.text }>
          {
            `Lorem Ipsum is simply dummy text
             of the printing and typesetting industry.
             Lorem Ip sum has been the industry's
             standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled
             it to make a type specimen book.`
          }
        </p>
        <p className={ styles.text }>
          {
            `It has survived not only five centuries,
            but also the leap into electronic typesetting,
            remaining essentially unchanged.
            It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.`
          }
        </p>
        <Button to="/">{ 'Browse our work' }</Button>
      </div>
    </div>
  </section>
)

export default About
