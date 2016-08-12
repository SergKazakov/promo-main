import Title from "../Title"
import Item from "./Item"
import styles from "./index.css"
import pricings from "./pricings.json"

const Pricing = () => (
  <section id="pricing" className={ styles.wrapper }>
    <div className={ styles.pricing }>
      <Title
        title={ "Our pricing" }
        subtitle={
          `A 30 days free trial for all.
          A brief story about how this process works,
          keep an eye till the end.`
        }
      />
      <div className={ styles.list }>
        {
          pricings.map((props, index) => (
            <Item { ...props } key={ index }  />
          ))
        }
      </div>
    </div>
  </section>
)

export default Pricing
