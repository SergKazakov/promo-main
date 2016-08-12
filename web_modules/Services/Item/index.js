import Svg from "react-svg-inline"
import css from "./index.css"

const {
  string,
} = React.PropTypes

const Item = ({ title, icon }) => (
  <div className={ css.wrapper }>
    <h3 className={ css.title }>{ title }</h3>
    <Svg
      className={ css.icon }
      svg={ icon }
      width="2.6rem"
    />
  </div>
)

Item.propTypes = {
  title: string.isRequired,
  icon: string.isRequired,
}

export default Item
