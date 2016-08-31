import Item from "./Item"
import Slider from "react-slick"
import Media from "react-responsive"
import styles from "./index.css"
import services from "./services.json"

const Services = () => {
  const settings = {
    className: styles.slider,
    arrows: false,
    slideToShow: 1,
    slideToScroll: 1,
    dots: true,
    fade: true,
    autoplay: true,
    swipe: false,
  }

  return (
    <section className={ styles.wrapper }>
      <div className={ styles.content }>
        <h3 className={ styles.title }>{ 'Our services' }</h3>
        <div className={ styles.sliderWrapper }>
          <Slider { ...settings }>
            {
              services.map((service, index) => (
                <div key={ index }>
                  {
                    service.map(({ title, text, icon }, index) => (
                      <Item
                        title={ title }
                        text={ text }
                        icon={ require(`./${icon}.svg`) }
                        key={ index }
                      />
                    ))
                  }
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
      <Media minWidth={ 1025 }>
        <div className={ styles.img } />
      </Media>
    </section>
  )
}

export default Services
