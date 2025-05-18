import Chat from "./chat.svg?react"
import Glasses from "./glasses.svg?react"
import Heart from "./heart.svg?react"
import * as css from "./index.module.css"
import Lamp from "./lamp.svg?react"

export const Features = () => (
  <section className={css.wrapper} id="features">
    <div className={css.features}>
      <div className={css.inner}>
        {[
          {
            Icon: Glasses,
            title: "Ember.js Training",
            text: "We offer corporate training. We’ll teach you everything we know about building Ember.js applications, from the basics down to deployment, testing, working with backends, and even optimization.",
          },
          {
            Icon: Heart,
            title: "Code Audits",
            text: "Have an existing a project or don't know where to start? Our experts will prepare a detailed project report or develop an architecture of a new application using best practices.",
          },
          {
            Icon: Lamp,
            title: "Outstaffing",
            text: "Hire our people as individual developers to your company.",
          },
          {
            Icon: Chat,
            title: "Startup MVP",
            text: "Do you run a startup and you need Minimal Viable Product for the demo? We can do it for a short time! Development and maintenance of your application.",
          },
        ].map(({ Icon, ...it }, index) => (
          <div className={css.featureWrapper} key={index}>
            <i className={css.featureIcon}>
              <Icon width="2.4rem" />
            </i>
            <h4 className={css.featureTitle}>{it.title}</h4>
            <p className={css.featureText}>{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)
