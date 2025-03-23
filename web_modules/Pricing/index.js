import { Title } from "../Title"
import { PricingItem } from "../PricingItem"
import css from "./index.css"

export const Pricing = () => (
  <section id="pricing" className={css.wrapper}>
    <div className={css.pricing}>
      <Title
        title={"Our pricing"}
        subtitle={"You will be surprised pleasantly by our prices"}
      />
      <div className={css.list}>
        {[
          {
            title: "starter",
            price: "20",
            list: [
              "develop arhitecrture",
              "develop components",
              "updating your app",
              "wrap to mobile app",
            ],
          },
          {
            title: "premium",
            price: "30",
            list: [
              "visualizations of d3",
              "module app",
              "search engine optimization",
              "server rendering",
              "build app in realtime",
              "plugins system",
              "secure you code",
              "memory leak detect",
            ],
            type: "gray",
          },
          {
            title: "enterprise",
            price: "70",
            list: [
              "private company components",
              "training",
              "code audit",
              "corporative contracts",
              "full app lifecycle",
            ],
          },
        ].map((props, index) => (
          <PricingItem {...props} key={index} />
        ))}
      </div>
    </div>
  </section>
)
