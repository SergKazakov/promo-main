import styles from "./index.css"
import Svg from "react-svg-inline"

const Hero = () => (
  <section className={ styles.hero }>
    <Svg
      className={ styles.anchor }
      svg={ require("./anchor.svg") }
      width="2.4rem"
    />
  </section>
)

export default Hero