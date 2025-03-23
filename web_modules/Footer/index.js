import Svg from "react-svg-inline"
import css from "./index.css"
import facebook from "./facebook.svg"
import twitter from "./twitter.svg"
import vk from "./vk.svg"

export const Footer = () => (
  <footer className={css.wrapper}>
    <div className={css.footer}>
      <ul className={css.social}>
        {[
          { svg: facebook, url: "https://facebook.com/embermvp" },
          { svg: twitter, url: "https://twitter.com/embermvp" },
          { svg: vk, url: "https://vk.com/embermvp" },
        ].map((it, index) => (
          <li key={index} className={css.socialItem}>
            <a href={it.url} className={css.socialLink} target={"_blank"}>
              <Svg className={css.socialSvg} svg={it.svg} width="2rem" />
            </a>
          </li>
        ))}
      </ul>
      <p className={css.copyright}>{"Kazi Erfan © All Rights Reserved"}</p>
    </div>
  </footer>
)
