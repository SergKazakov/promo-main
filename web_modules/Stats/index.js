import Item from "./Item"
import Title from "../Title"
import css from "./index.css"
import stats from "./stats.json"

const Stats = () => (
  <section className={ css.wrapper }>
    <Title
      title={ 'Our achievements' }
    />
    <div className={ css.statsWrapper }>
      <div className={ css.stats }>
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
    </div>
  </section>
)

export default Stats
