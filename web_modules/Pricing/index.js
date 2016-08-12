import Title from "../Title"
import Item from "./Item"
import css from "./index.css"
import pricings from "./pricings.json"

const Pricing = () => (
  <section id="pricing" className={ css.wrapper }>
    <div className={ css.pricing }>
      <Title
        title={ "Our pricing" }
        subtitle={
          "You will be surprised pleasantly by our prices!"
        }
      />
      <div className={ css.list }>
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
