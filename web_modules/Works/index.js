import Title from "../Title"
import css from "./index.css"
import works from "./works.json"

const Works = () => (
  <section id="portfolio" className={ css.wrapper }>
    <Title
      title={ 'RECENT WORKS' }
      subtitle={
        `It has survived not only five centuries,
        but also the leap scrambled it to make a type.`
      }
    />
    <ul className={ css.list }>
      {
        works.map(({ text, title, category, url }, index) => {
          const src = require(`./${++index}.jpg`)

          const props = {
            className: css.listItem,
            style: {
              backgroundImage: `url(${src})`,
            },
          }

          return (
            <li key={ index } { ...props }>
              <a href={ url } className={ css.overlay }>
                <p className={ css.text }>{ text }</p>
                <h3 className={ css.title }>{ title }</h3>
                <span className={ css.category }>{ category }</span>
              </a>
            </li>
          )
        })
      }
    </ul>
  </section>
)

export default Works
