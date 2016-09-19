import Divider from "../Divider"
import css from "./index.css"

const {
  oneOf,
  string,
} = React.PropTypes

const capitalize = className => className[0].toUpperCase() + className.slice(1)

const Title = ({ theme="gray", title, subtitle }) => {
  const capitalizeTheme = capitalize(theme)

  return (
    <div className={ css.wrapper }>
      <h2 className={ css[`title${capitalizeTheme}`] }>
        { title }
      </h2>
      {
        subtitle &&
        <h3 className={ css[`subtitle${capitalizeTheme}`] }>
          { subtitle }
        </h3>
      }
      <Divider theme={ theme } />
    </div>
  )
}

Title.propTypes = {
  theme: oneOf([ "white", "gray" ]),
  title: string.isRequired,
  subtitle: string,
}

export default Title
