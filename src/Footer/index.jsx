import Facebook from "./facebook.svg?react"
import * as css from "./index.module.css"
import Twitter from "./twitter.svg?react"
import Vk from "./vk.svg?react"

export const Footer = () => (
  <footer className={css.wrapper}>
    <div className={css.footer}>
      <ul className={css.social}>
        {[
          { Icon: Facebook, url: "https://facebook.com/embermvp" },
          { Icon: Twitter, url: "https://twitter.com/embermvp" },
          { Icon: Vk, url: "https://vk.com/embermvp" },
        ].map(({ Icon, url }, index) => (
          <li className={css.socialItem} key={index}>
            <a
              className={css.socialSvg}
              href={url}
              rel="noreferrer"
              target="_blank"
            >
              <Icon width="2rem" />
            </a>
          </li>
        ))}
      </ul>
      <p className={css.copyright}>Kazi Erfan © All Rights Reserved</p>
    </div>
  </footer>
)
