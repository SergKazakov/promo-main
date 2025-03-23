import Svg from "react-svg-inline"
import css from "./index.css"
import chat from "./chat.svg"
import glasses from "./glasses.svg"
import heart from "./heart.svg"
import lamp from "./lamp.svg"

export const Features = () => (
  <section id="features" className={css.wrapper}>
    <div className={css.features}>
      <div className={css.inner}>
        {[
          {
            svg: glasses,
            title: "Ember.js Training",
            text: "We offer corporate training. We’ll teach you everything we know about building Ember.js applications, from the basics down to deployment, testing, working with backends, and even optimization.",
          },
          {
            svg: heart,
            title: "Code Audits",
            text: "Have an existing a project or don't know where to start? Our experts will prepare a detailed project report or develop an architecture of a new application using best practices.",
          },
          {
            svg: lamp,
            title: "Hire developers",
            text: "You can outsource our Ember.js developer for your web projects at very affordable price.",
          },
          {
            svg: chat,
            title: "Startup MVP",
            text: "Do you run a startup and you need Minimal Viable Product for the demo? We can do it for a short time! Development and maintenance of your application.",
          },
        ].map((it, index) => (
          <div key={index} className={css.featureWrapper}>
            <Svg className={css.featureIcon} svg={it.svg} width="2.4rem" />
            <h4 className={css.featureTitle}>{it.title}</h4>
            <p className={css.featureText}>{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)
