import Item from "./Item"
import styles from "./index.css"
import stats from "./stats.json"

const Stats = () => (
  <section className={ styles.statsWrapper }>
    <div className={ styles.stats }>
      {
        stats.map(({ icon, amount, text }, index) => (
          <Item
            key={ index }
            icon={ require(`./${icon}.svg`) }
            amount={ amount }
            text={ text }
          />
        ))
      }
    </div>
  </section>
)

export default Stats
