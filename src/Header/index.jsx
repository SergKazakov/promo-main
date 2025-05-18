import Media from "react-responsive"

import * as css from "./index.module.css"
import logoImage from "./logo.png"

export const Header = () => (
  <header className={css.wrapper}>
    <div className={css.header}>
      <a className={css.logoWrapper} href="/">
        <img className={css.logo} src={logoImage} />
      </a>
      <Media minWidth={1025}>
        <ul className={css.nav}>
          {[
            { title: "about us", url: "#about" },
            { title: "portfolio", url: "#portfolio" },
            { title: "pricing", url: "#pricing" },
            { title: "blog", url: "#blog" },
            { title: "contact", url: "#contact" },
          ].map((it, index) => (
            <li className={css.navItem} key={index}>
              <a className={css.navLink} data-title={it.title} href={it.url}>
                {it.title}
              </a>
            </li>
          ))}
        </ul>
      </Media>
    </div>
  </header>
)
