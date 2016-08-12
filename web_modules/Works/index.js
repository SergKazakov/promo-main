import Title from "../Title"
import Item from "./Item"
import css from "./index.css"
import works from "./works.json"

const Works = () => (
  <section id="portfolio" className={ css.wrapper }>
    <Title
      title={ 'RECENT WORKS' }
      subtitle={
        "We are proud of our projects"
      }
    />
    <div className={ css.list }>
      {
        works.map((props, index) => (
          <Item
            key={ index }
            { ...props }
            img={ require(`./${++index}.jpg`) }
          />
        ))
      }
    </div>
  </section>
)

export default Works
