import { Title } from "../Title"
import { Link } from "../Link"
import Svg from "react-svg-inline"
import Slider from "react-slick"
import Media from "react-responsive"
import css from "./index.css"
import glasses from "../Features/glasses.svg"
import heart from "../Features/heart.svg"
import lamp from "../Features/lamp.svg"
import image from "./study.jpg"

export const Study = () => (
  <section className={css.wrapper}>
    <Title
      title={"CASE STUDY"}
      subtitle={
        "A brief story about how this process works, keep an eye till the end."
      }
    />
    <div className={css.inner}>
      <div className={css.list}>
        <Slider arrows={false} slideToShow={1} slideToScroll={1} dots autoplay>
          {[
            {
              svg: lamp,
              title: "aCCUMULATE CREATIVE IDEAS",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry Printing and typelorem Ipsum has been the setting let.",
            },
            {
              svg: heart,
              title: "aCCUMULATE CREATIVE IDEAS",
              text: "Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry Printing and typelorem Ipsum has been the setting let.",
            },
            {
              svg: glasses,
              title: "aCCUMULATE CREATIVE IDEAS",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry Printing and typelorem Ipsum has been the setting let.",
            },
          ].map((it, index) => (
            <div key={index}>
              <Svg
                className={css.listIcon}
                svg={it.svg}
                width="3rem"
                height="auto"
              />
              <h3 className={css.listTitle}>{it.title}</h3>
              <p className={css.listText}>{it.text}</p>
              <footer className={css.listFooter}>
                <Link to="/">Read more</Link>
              </footer>
            </div>
          ))}
        </Slider>
      </div>
      <Media minWidth={768}>
        <img className={css.img} src={image} />
      </Media>
    </div>
  </section>
)
