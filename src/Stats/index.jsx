import { Title } from "../Title"

import Client from "./client.svg?react"
import Code from "./code.svg?react"
import Developer from "./developer.svg?react"
import Experience from "./experience.svg?react"
import Heart from "./heart.svg?react"
import * as css from "./index.module.css"

export const Stats = () => (
  <section className={css.wrapper}>
    <Title title="Our achievements" />
    <div className={css.statsWrapper}>
      <div className={css.stats}>
        {[
          { Icon: Code, amount: "10M+", text: "Lines of Code" },
          { Icon: Client, amount: "100+", text: "Happy Clients" },
          { Icon: Experience, amount: "8Y+", text: "Development Experience" },
          { Icon: Developer, amount: "23", text: "Number of Developers" },
          { Icon: Heart, amount: "∞", text: "In Love With Ember.js" },
        ].map(({ Icon, ...it }, index) => (
          <div className={css.itemWrapper} key={index}>
            <i className={css.itemIcon}>
              <Icon width="3rem" />
            </i>
            <h3 className={css.itemAmount}>{it.amount}</h3>
            <p className={css.itemText}>{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)
