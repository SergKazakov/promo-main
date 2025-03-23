import { Title } from "../Title"
import css from "./index.css"
import amazon from "!!file!./amazon.svg"
import ember from "!!file!./ember.svg"
import facebook from "!!file!./facebook.svg"
import firebase from "!!file!./firebase.svg"
import google from "!!file!./google.svg"
import jquery from "!!file!./jquery.svg"
import mocha from "!!file!./mocha.svg"
import nodejs from "!!file!./nodejs.svg"
import travisCi from "!!file!./travis-ci.svg"
import youtube from "!!file!./youtube.svg"

export const Clients = () => (
  <section className={css.wrapper}>
    <Title
      title={"Great Integrations with Others"}
      subtitle={
        "We actively use new technologies and interact with popular services"
      }
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
