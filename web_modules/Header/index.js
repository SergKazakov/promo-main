import Media from "react-responsive"
import css from "./index.css"
import logoImage from "./logo.png"

export const Header = () => (
  <header className={css.wrapper}>
    <div className={css.header}>
      <a className={css.logoWrapper} href={"/"}>
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
            <li key={index} className={css.navItem}>
              <a className={css.navLink} href={it.url} data-title={it.title}>
                {it.title}
              </a>
            </li>
          ))}
        </ul>
      </Media>
    </div>
  </header>
)
