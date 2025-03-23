import { Title } from "../Title"
import css from "./index.css"
import image from "./1.png"

export const Team = () => (
  <section id="team" className={css.wrapper}>
    <Title
      theme={"white"}
      title={"Our team"}
      subtitle={"Meet the craziest team. Share your thoughts with them."}
    />
    <ul className={css.inner}>
      {Array.from({ length: 4 }, (_, index) => (
        <li key={index} className={css.item}>
          <img className={css.img} src={image} />
          <div className={css.content}>
            <h3 className={css.title}>{"Kazi Erfan"}</h3>
            <h4 className={css.subtitle}>{"UI/UX Designer"}</h4>
          </div>
        </li>
      ))}
    </ul>
  </section>
)
