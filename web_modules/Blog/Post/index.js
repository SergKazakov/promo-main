import css from "./index.css"

const {
  string,
} = React.PropTypes

const Post = ({ src, category, title, text }) => (
  <div className={ css.wrapper }>
    <div
      className={ css.img }
      style={ { backgroundImage: `url(${src})` } }
    />
    <div className={ css.content }>
      <span className={ css.category }>{ category }</span>
      <h4 className={ css.title }>{ title }</h4>
      <p className={ css.text }>{ text }</p>
      <footer className={ css.footer }>
        <span className={ css.emptyLink }>{ 'coming soon' }</span>
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
