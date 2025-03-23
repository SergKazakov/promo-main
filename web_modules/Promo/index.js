import css from "./index.css"
import { Link } from "../Link"

export const Promo = () => (
  <section className={css.wrapper}>
    <div className={css.inner}>
      <h3 className={css.title}>{"Let's Get Started Now"}</h3>
      <h4 className={css.subtitle}>
        {`Look at the distance, this is the road on which your project go
          through , it is not easy, so let's go through it together`}
      </h4>
      <Link to="#contact">Start</Link>
    </div>
  </section>
)
