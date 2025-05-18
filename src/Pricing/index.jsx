import { PricingItem } from "../PricingItem"
import { Title } from "../Title"

import * as css from "./index.module.css"

export const Pricing = () => (
  <section className={css.wrapper} id="pricing">
    <div className={css.pricing}>
      <Title
        subtitle="You will be surprised pleasantly by our prices"
        title="Our pricing"
      />
      <div className={css.list}>
        {[
          {
            title: "starter",
            price: "35",
            list: [
              "upgrading your app to 3.x",
              "wrap to mobile app",
              "running FastBoot",
              "integration Engines",
              "using tasks",
            ],
          },
          {
            title: "premium",
            price: "40",
            list: [
              "visualizations of d3",
              "module app",
              "search engine optimization",
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
