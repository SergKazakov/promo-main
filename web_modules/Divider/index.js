import css from "./index.css"

export const Divider = ({ theme = "gray" }) => (
  <div className={css.divider}>
    <span
      className={
        theme === "gray" ? css.dividerInnerGray : css.dividerInnerWhite
      }
    />
  </div>
)
