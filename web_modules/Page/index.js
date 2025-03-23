import Media from "react-responsive"
import { Header } from "../Header"
import { Menu } from "../Menu"
import { Hero } from "../Hero"
import { Features } from "../Features"
import { About } from "../About"
import { Services } from "../Services"
import { Works } from "../Works"
import { Study } from "../Study"
import { Contact } from "../Contact"
import { Stats } from "../Stats"
import { Pricing } from "../Pricing"
import { Team } from "../Team"
import { Clients } from "../Clients"
import { Blog } from "../Blog"
import { Promo } from "../Promo"
import { Footer } from "../Footer"
import "./index.global.css"
import css from "./index.css"
import image from "../About/about.jpg"

export const Page = () => {
  const title = "EmberMVP | Outsourcing & Ember.js Сonsulting Services"

  const description =
    "Outsourcing | Team of great Ember.js developers | Ember.js Training | Code Audits | Hire developers | Startup MVP"

  const homepage = "https://embermvp.com"

  const logo = `${homepage}${image}`

  return (
    <div>
      <Helmet
        title={title}
        meta={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1, user-scalable=no",
          },
          {
            name: "keywords",
            content:
              "software development, web development, web outsourcing, ember.js, ember-cli, startup, mvp, ember consulting, ember training, hiring ember.js developers",
          },
          { name: "description", content: description },
          { property: "og:locale", content: "en_US" },
          { property: "og:type", content: "website" },
          { property: "og:title", content: title },
          { property: "og:description", content: description },
          { property: "og:url", content: homepage },
          { property: "og:site_name", content: "EmberMVP" },
          { property: "og:image", content: logo },
          { property: "og:image:width", content: "229" },
          { property: "og:image:height", content: "52" },
          { name: "twitter:card", content: "summary" },
          { name: "twitter:title", content: title },
          { name: "twitter:description", content: description },
          { name: "twitter:site", content: "@embermvp" },
          { name: "twitter:domain", content: "EmberMVP" },
          { name: "twitter:image:src", content: logo },
        ]}
      />
      <Header />
      <Media maxWidth={1024}>
        <Menu />
      </Media>
      <main className={css.main}>
        <Hero />
        <Features />
        <About />
        <Services />
        <Works />
        <Study />
        <Stats />
        <Pricing />
        <Team />
        <Clients />
        <Blog />
        <Contact />
        <Promo />
      </main>
      <Footer />
    </div>
  )
}
