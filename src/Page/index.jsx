import Media from "react-responsive"

import { About } from "../About"
import { Blog } from "../Blog"
import { Clients } from "../Clients"
import { Contact } from "../Contact"
import { Features } from "../Features"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Hero } from "../Hero"
import { Menu } from "../Menu"
import { Pricing } from "../Pricing"
import { Promo } from "../Promo"
import { Services } from "../Services"
import { Stats } from "../Stats"
import { Study } from "../Study"
import { Team } from "../Team"
import { Works } from "../Works"

import "./index.global.css"

export const Page = () => (
  <div>
    <Header />
    <Media maxWidth={1024}>
      <Menu />
    </Media>
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
    <Footer />
  </div>
)
