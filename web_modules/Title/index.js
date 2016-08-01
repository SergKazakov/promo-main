import Divider from "../Divider"
import styles from "./index.css"

const {
  string,
} = React.PropTypes

const Title = ({ title, subtitle }) => (
  <div className={ styles.wrapper }>
    <h2 className={ styles.title }>
      { title }
    </h2>
    <h3 className={ styles.subtitle }>
      { subtitle }
    </h3>
    <Divider />
  </div>
)

Title.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
}

export default Title
