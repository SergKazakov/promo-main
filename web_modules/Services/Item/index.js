import Svg from "react-svg-inline"
import styles from "./index.css"

const {
  string,
} = React.PropTypes

const Item = ({ title, text, icon }) => (
  <div className={ styles.wrapper }>
    <h3 className={ styles.title }>{ title }</h3>
    <p className={ styles.text }>{ text }</p>
    <Svg
      className={ styles.icon }
      svg={ icon }
      width="2.6rem"
    />
  </div>
)

Item.propTypes = {
  title: string.isRequired,
  text: string.isRequired,
  icon: string.isRequired,
}

export default Item
