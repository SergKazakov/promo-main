import Title from "../Title"
import Post from "./Post"
import styles from "./index.css"
import posts from "./posts.json"

const Blog = () => (
  <section className={ styles.blogWrapper }>
    <Title
      title={ 'Our blog' }
      subtitle={
        `Suspendisse sed eros mollis,
        tincidunt felis eget,
        interdum eratullam sit amet odio.`
      }
    />
    <div className={ styles.blog }>
      {
        posts.map(({ isReverse, category, title, text, url }, index) => {
          return (
            <Post
              key={ index }
              isReverse={ isReverse }
              src={ require(`./blog-${++index}.jpg`) }
              category={ category }
              title={ title }
              text={ text }
              url={ url }
            />
          )
        })
      }
    </div>
  </section>
)

export default Blog
