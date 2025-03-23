import { slide as BurgerMenu } from "react-burger-menu"
import "./index.global.css"

export const Menu = () => (
  <BurgerMenu>
    <ul className={"bm-list"}>
      {[
        { title: "about us", url: "#about" },
        { title: "portfolio", url: "#portfolio" },
        { title: "pricing", url: "#pricing" },
        { title: "blog", url: "#blog" },
        { title: "contact", url: "#contact" },
      ].map((it, index) => (
        <li key={index} className={"bm-list__item"}>
          <a className="bm-list__link" href={it.url}>
            {it.title}
          </a>
        </li>
      ))}
    </ul>
  </BurgerMenu>
)
