import Media from "react-responsive"
import Slider from "react-slick"

import Development from "./development.svg?react"
import * as css from "./index.module.css"
import Management from "./management.svg?react"
import Outsource from "./outsource.svg?react"
import Review from "./review.svg?react"
import Seo from "./seo.svg?react"
import Server from "./server.svg?react"
import Smartphone from "./smartphone.svg?react"
import Training from "./training.svg?react"
import Update from "./update.svg?react"

export const Services = () => (
  <section className={css.wrapper}>
    <div className={css.content}>
      <h3 className={css.title}>Our services</h3>
      <div className={css.sliderWrapper}>
        <Slider
          arrows={false}
          autoplay
          className={css.slider}
          dots
          fade
          slideToScroll={1}
          slideToShow={1}
          swipe={false}
        >
          {[
            [
              { Icon: Development, title: "architecture development" },
              { Icon: Update, title: "updating your app to latest versions" },
              { Icon: Outsource, title: "outsourcing" },
            ],
            [
              { Icon: Training, title: "training" },
              { Icon: Review, title: "code audit" },
              { Icon: Management, title: "application lifecycle management" },
            ],
            [
              { Icon: Seo, title: "search engine optimization" },
              { Icon: Smartphone, title: "wrap to mobile app" },
              { Icon: Server, title: "server rendering" },
            ],
          ].map((it, index) => (
            <div key={index}>
              {it.map(({ Icon, title }, index) => (
                <div className={css.itemWrapper} key={index}>
                  <h3 className={css.itemTitle}>{title}</h3>
                  <i className={css.itemIcon}>
                    <Icon width="2.6rem" />
                  </i>
                </div>
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </div>
    <Media minWidth={1025}>
      <div className={css.img} />
    </Media>
  </section>
)
