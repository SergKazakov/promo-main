import Title from "../Title"
import Button from "../Button"
import Svg from "react-svg-inline"
import styles from "./index.css"

const Study = () => (
  <section className={ styles.wrapper }>
    <Title
      title={ 'CASE STUDY' }
      subtitle={
        "A brief story about how this process works, keep an eye till the end."
      }
    />
    <div className={ styles.inner }>
      <div className={ styles.list }>
        <Svg
          className={ styles.listIcon }
          svg={ require("../Features/lamp.svg") }
          width="3rem"
          height="auto"
        />
        <h3 className={ styles.listTitle }>
          {
            'aCCUMULATE CREATIVE IDEAS'
          }
        </h3>
        <p className={ styles.listText }>
          {
            `Lorem Ipsum is simply dummy text of the printing and typesetting
            let. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy
            text of the printing and typesetting let. Lorem Ipsum has been the
            industry Printing and typelorem Ipsum has been the setting let.`
          }
        </p>
        <Button to={ '/' }>{ 'Read more' }</Button>
      </div>
      <img className={ styles.img } src={ require("./study.jpg") } />
    </div>
  </section>
)

export default Study
