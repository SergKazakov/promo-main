import Media from "react-responsive"
import Slider from "react-slick"

import Glasses from "../Features/glasses.svg?react"
import Heart from "../Features/heart.svg?react"
import Lamp from "../Features/lamp.svg?react"
import { Link } from "../Link"
import { Title } from "../Title"

import * as css from "./index.module.css"
import image from "./study.jpg"

export const Study = () => (
  <section className={css.wrapper}>
    <Title
      subtitle="A brief story about how this process works, keep an eye till the end."
      title="CASE STUDY"
    />
    <div className={css.inner}>
      <div className={css.list}>
        <Slider arrows={false} autoplay dots slideToScroll={1} slideToShow={1}>
          {[
            {
              Icon: Lamp,
              title: "aCCUMULATE CREATIVE IDEAS",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry Printing and typelorem Ipsum has been the setting let.",
            },
            {
              Icon: Heart,
              title: "aCCUMULATE CREATIVE IDEAS",
              text: "Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry Printing and typelorem Ipsum has been the setting let.",
            },
            {
              Icon: Glasses,
              title: "aCCUMULATE CREATIVE IDEAS",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry Printing and typelorem Ipsum has been the setting let.",
            },
          ].map(({ Icon, ...it }, index) => (
            <div key={index}>
              <i className={css.listIcon}>
                <Icon width="3rem" />
              </i>
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
