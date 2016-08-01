import Svg from "react-svg-inline"

export default icon => props => (
  <button { ...props }>
    <Svg
      svg={ require(`./${icon}.svg`) }
      width="2rem"
      height="auto"
    />
  </button>
)
