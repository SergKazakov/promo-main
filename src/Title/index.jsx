import { Divider } from "../Divider"

import * as css from "./index.module.css"

const capitalize = className => className[0].toUpperCase() + className.slice(1)

export const Title = ({ theme = "gray", title, subtitle }) => {
  const capitalizeTheme = capitalize(theme)

  return (
    <div className={css.wrapper}>
      <h2 className={css[`title${capitalizeTheme}`]}>{title}</h2>
      {subtitle && (
        <h3 className={css[`subtitle${capitalizeTheme}`]}>{subtitle}</h3>
      )}
      <Divider theme={theme} />
    </div>
  )
}
