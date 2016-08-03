import Title from "../Title"
import styles from "./index.css"

const Team = () => (
  <section className={ styles.wrapper }>
    <Title
      theme={ 'white' }
      title={ 'Our team' }
      subtitle={ 'Meet the craziest team. Share your thoughts with them.' }
    />
    <ul className={ styles.inner }>
      {
        new Array(4).fill(0).map((item, index) => (
          <li key={ index } className={ styles.item }>
            <img className={ styles.img } src={ require("./1.png") } />
            <div className={ styles.content }>
              <h3 className={ styles.title }>{ "Kazi Erfan" }</h3>
              <h4 className={ styles.subtitle }>{ "UI/UX Designer" }</h4>
            </div>
          </li>
        ))
      }
    </ul>
  </section>
)

export default Team
