import Svg from 'react-svg-inline'
import styles from './index.css'

const {
  string
} = React.PropTypes

const Item = ({icon, amount, text}) => (
  <div className={ styles.wrapper }>
    <Svg
      className={ styles.icon }
      svg={ icon }
      width="3rem"
    />
    <h3 className={ styles.amount }>{ amount }</h3>
    <p className={ styles.text }>{ text }</p>
  </div>
)

Item.propTypes = {
  icon: string.isRequired,
  amount: string.isRequired,
  text: string.isRequired
}

export default Item
