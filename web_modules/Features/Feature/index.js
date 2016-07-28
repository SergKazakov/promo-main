import Svg from "react-svg-inline"
import styles from "./index.css"

const {
  string,
} = React.PropTypes

const Feature = ({ icon, title, text }) => (
  <div className={ styles.wrapper }>
    <Svg
      className={ styles.icon }
      svg={ icon }
      width="2.4rem"
    />
    <h4 className={ styles.title }>{ title }</h4>
    <p className={ styles.text }>{ text }</p>
  </div>
)

Feature.propTypes = {
  icon: string.isRequired,
  title: string.isRequired,
  text: string.isRequired,
}

export default Feature
