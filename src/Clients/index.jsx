import { Title } from "../Title"

import amazon from "./amazon.svg?url"
import ember from "./ember.svg?url"
import facebook from "./facebook.svg?url"
import firebase from "./firebase.svg?url"
import google from "./google.svg?url"
import * as css from "./index.module.css"
import jquery from "./jquery.svg?url"
import mocha from "./mocha.svg?url"
import nodejs from "./nodejs.svg?url"
import travisCi from "./travis-ci.svg?url"
import youtube from "./youtube.svg?url"

export const Clients = () => (
  <section className={css.wrapper}>
    <Title
      subtitle="We actively use new technologies and interact with popular services"
      title="Great Integrations with Others"
    />
    <ul className={css.list}>
      {[
        jquery,
        ember,
        google,
        mocha,
        amazon,
        facebook,
        travisCi,
        youtube,
        firebase,
        nodejs,
      ].map((it, index) => (
        <li className={css.listItem} key={index}>
          <img className={css.listImg} src={it} />
        </li>
      ))}
    </ul>
  </section>
)
