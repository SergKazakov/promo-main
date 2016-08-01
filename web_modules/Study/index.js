import Title from "../Title"
import Button from "../Button"
import Svg from "react-svg-inline"
import Slider from "react-slick"
import styles from "./index.css"
import studies from "./studies.json"

const Study = () => {
  const settings = {
    arrows: false,
    slideToShow: 1,
    slideToScroll: 1,
    dots: true,
    autoplay: true,
  }

  return (
    <section className={ styles.wrapper }>
      <Title
        title={ 'CASE STUDY' }
        subtitle={
          `A brief story about how this process works,
          keep an eye till the end.`
        }
      />
      <div className={ styles.inner }>
        <div className={ styles.list }>
          <Slider { ...settings }>
            {
              studies.map(({ icon, title, text }, index) => (
                <div key={ index }>
                  <Svg
                    className={ styles.listIcon }
                    svg={ require(`../Features/${icon}.svg`) }
                    width="3rem"
                    height="auto"
                  />
                  <h3 className={ styles.listTitle }>{ title }</h3>
                  <p className={ styles.listText }>{ text }</p>
                  <footer className={ styles.listFooter }>
                    <Button className={ styles.listBtn } to={ '/' }>
                      { 'Read more' }
                    </Button>
                  </footer>
                </div>
              ))
            }
          </Slider>
        </div>
        <img className={ styles.img } src={ require("./study.jpg") } />
      </div>
    </section>
  )
}

export default Study
