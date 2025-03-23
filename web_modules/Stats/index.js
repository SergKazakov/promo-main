import Svg from "react-svg-inline"
import { Title } from "../Title"
import css from "./index.css"
import client from "./client.svg"
import code from "./code.svg"
import developer from "./developer.svg"
import experience from "./experience.svg"
import heart from "./heart.svg"

export const Stats = () => (
  <section className={css.wrapper}>
    <Title title={"Our achievements"} />
    <div className={css.statsWrapper}>
      <div className={css.stats}>
        {[
          { svg: code, amount: "10M+", text: "Lines of Code" },
          { svg: client, amount: "100+", text: "Happy Clients" },
          { svg: experience, amount: "8Y+", text: "Development Experience" },
          { svg: developer, amount: "23", text: "Number of Developers" },
          { svg: heart, amount: "∞", text: "In Love With Ember.js" },
        ].map((it, index) => (
          <div key={index} className={css.itemWrapper}>
            <Svg className={css.itemIcon} svg={it.svg} width="3rem" />
            <h3 className={css.itemAmount}>{it.amount}</h3>
            <p className={css.itemText}>{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)
