import Button from "../Button"
import Divider from "../Divider"
import customArrow from "./customArrow"
import Svg from "react-svg-inline"
import Slider from "react-slick"
import styles from "./index.css"

const PrevArrow = customArrow("prev")

const NextArrow = customArrow("next")

const Hero = () => {
  const settings = {
    className: styles.slider,
    slideToShow: 1,
    slideToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  }

  const props = {
    className: styles.slide,
    style: {
      backgroundImage: `url(${require("./hero.jpg")})`,
    },
  }

  return (
    <section className={ styles.hero }>
      <Slider { ...settings }>
        <div>
          <div { ...props }>
            <h3 className={ styles.subtitle }>
              { 'Our Clients Are Our First Priority' }
            </h3>
            <h2 className={ styles.title }>
              { 'WELCOME TO BINO' }
            </h2>
            <Divider />
            <p className={ styles.text }>
              {
                `Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a
                type specimen book.`
              }
            </p>
            <footer className={ styles.footer }>
              <Button to={ '/' } className={ styles.btn }>
                { 'Get started now' }
              </Button>
              <Button type={ 'ghost' } to={ '/' } className={ styles.btn }>
                { 'Learn more' }
              </Button>
            </footer>
          </div>
        </div>
      </Slider>
      <Svg
        className={ styles.anchor }
        svg={ require("./anchor.svg") }
        width="2.4rem"
      />
    </section>
  )
}

export default Hero
