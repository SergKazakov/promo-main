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
    <div className={ styles.divider }>
      <span className={ styles.dividerInner }></span>
    </div>
  </div>
)

Title.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
}

export default Title
