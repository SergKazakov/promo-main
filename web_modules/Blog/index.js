import Media from "react-responsive"
import { Title } from "../Title"
import css from "./index.css"
import image1 from "./1.jpg"
import image2 from "./2.jpg"
import image3 from "./3.jpg"
import image4 from "./4.jpg"

export const Blog = () => (
  <section id="blog" className={css.wrapper}>
    <Title
      title={"Our blog"}
      subtitle={
        "Our little blog about Ember.js secrets and application architecture"
      }
    />
    <div className={css.blog}>
      {[
        {
          image: image1,
          category: "code",
          title: "Dynamic router extension",
          text: null,
        },
        {
          image: image2,
          category: "code",
          title: "Ember engine step by step",
          text: null,
        },
        {
          image: image3,
          category: "code",
          title: "Ember concurrency changes life",
          text: null,
        },
        {
          image: image4,
          category: "code",
          title: "Application architecture based on ember.js plugins",
          text: null,
        },
      ].map((it, index) => (
        <div key={index} className={css.itemWrapper}>
          <div
            className={css.itemImg}
            style={{ backgroundImage: `url(${it.image})` }}
          />
          <div className={css.itemContent}>
            <span className={css.itemCategory}>{it.category}</span>
            <h4 className={css.itemTitle}>{it.title}</h4>
            {it.text && (
              <Media minWidth={401}>
                <p className={css.itemText}>{it.text}</p>
              </Media>
            )}
            <footer className={css.itemFooter}>
              <span className={css.itemEmptyLink}>{"coming soon"}</span>
            </footer>
          </div>
        </div>
      ))}
    </div>
  </section>
)
