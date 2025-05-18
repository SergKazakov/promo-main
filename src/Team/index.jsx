import { Title } from "../Title"

import image from "./1.png"
import * as css from "./index.module.css"

export const Team = () => (
  <section className={css.wrapper} id="team">
    <Title
      subtitle="Meet the craziest team. Share your thoughts with them."
      theme="white"
      title="Our team"
    />
    <ul className={css.inner}>
      {Array.from({ length: 4 }, (_, index) => (
        <li className={css.item} key={index}>
          <img className={css.img} src={image} />
          <div className={css.content}>
            <h3 className={css.title}>Kazi Erfan</h3>
            <h4 className={css.subtitle}>UI/UX Designer</h4>
          </div>
        </li>
      ))}
    </ul>
  </section>
)
