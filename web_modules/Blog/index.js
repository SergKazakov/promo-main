import Title from "../Title"
import Post from "./Post"
import styles from "./index.css"
import posts from "./posts.json"

const Blog = () => (
  <section id="blog" className={ styles.wrapper }>
    <Title
      title={ 'Our blog' }
      subtitle={
        "Our little blog about Ember.js secrets and application architecture"
      }
    />
    <div className={ styles.blog }>
      {
        posts.map(({ category, title, text, url }, index) => (
            <Post
              key={ index }
              src={ require(`./${++index}.jpg`) }
              category={ category }
              title={ title }
              text={ text }
              url={ url }
            />
          )
        )
      }
    </div>
  </section>
)

export default Blog
