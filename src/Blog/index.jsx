import Media from "react-responsive"

import { Title } from "../Title"

import image1 from "./1.jpg"
import image2 from "./2.jpg"
import image3 from "./3.jpg"
import image4 from "./4.jpg"
import * as css from "./index.module.css"

export const Blog = () => (
  <section className={css.wrapper} id="blog">
    <Title
      subtitle="Our little blog about Ember.js secrets and application architecture"
      title="Our blog"
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
        <div className={css.itemWrapper} key={index}>
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
              <span className={css.itemEmptyLink}>coming soon</span>
            </footer>
          </div>
        </div>
      ))}
    </div>
  </section>
)
