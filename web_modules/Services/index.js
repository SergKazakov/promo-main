import Slider from "react-slick"
import Media from "react-responsive"
import Svg from "react-svg-inline"
import css from "./index.css"
import development from "./development.svg"
import management from "./management.svg"
import outsource from "./outsource.svg"
import review from "./review.svg"
import seo from "./seo.svg"
import server from "./server.svg"
import smartphone from "./smartphone.svg"
import training from "./training.svg"
import update from "./update.svg"

export const Services = () => (
  <section className={css.wrapper}>
    <div className={css.content}>
      <h3 className={css.title}>{"Our services"}</h3>
      <div className={css.sliderWrapper}>
        <Slider
          className={css.slider}
          arrows={false}
          slideToShow={1}
          slideToScroll={1}
          dots
          fade
          autoplay
          swipe={false}
        >
          {[
            [
              { title: "architecture development", svg: development },
              { title: "updating your app to latest versions", svg: update },
              { title: "outsourcing", svg: outsource },
            ],
            [
              { title: "training", svg: training },
              { title: "code audit", svg: review },
              { title: "application lifecycle management", svg: management },
            ],
            [
              { title: "search engine optimization", svg: seo },
              { title: "wrap to mobile app", svg: smartphone },
              { title: "server rendering", svg: server },
            ],
          ].map((it, index) => (
            <div key={index}>
              {it.map((itt, index) => (
                <div key={index} className={css.itemWrapper}>
                  <h3 className={css.itemTitle}>{itt.title}</h3>
                  <Svg className={css.itemIcon} svg={itt.svg} width="2.6rem" />
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
