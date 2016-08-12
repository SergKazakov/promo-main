import styles from "./index.css"

const {
  string,
} = React.PropTypes

const Post = ({ src, category, title, text, url }) => (
  <div className={ styles.wrapper }>
    <div
      className={ styles.img }
      style={ { backgroundImage: `url(${src})` } }
    />
    <div className={ styles.content }>
      <span className={ styles.category }>{ category }</span>
      <h4 className={ styles.title }>{ title }</h4>
      <p className={ styles.text }>{ text }</p>
      <footer className={ styles.footer }>
        <a className={ styles.link } href={ url }>{ 'read more' }</a>
      </footer>
    </div>
  </div>
)

Post.propTypes = {
  src: string.isRequired,
  category: string.isRequired,
  title: string.isRequired,
  text: string.isRequired,
  url: string.isRequired,
}

export default Post
