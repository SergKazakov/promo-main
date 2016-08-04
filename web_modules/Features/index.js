import Feature from "./Feature"
import styles from "./index.css"
import features from "./features.json"

const Features = () => (
  <section id="features" className={ styles.wrapper }>
    <div className={ styles.features }>
      <div className={ styles.inner }>
        {
          features.map(({ icon, title, text }, index) => {
            return (
              <Feature
                key={ index }
                icon={ require(`./${icon}.svg`) }
                title={ title }
                text={ text }
              />
            )
          })
        }
      </div>
    </div>
  </section>
)

export default Features
