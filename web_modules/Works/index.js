import { Title } from "../Title"
import css from "./index.css"
import image1 from "./1.jpg"
import image2 from "./2.jpg"
import image3 from "./3.jpg"
import image4 from "./4.jpg"
import image5 from "./5.jpg"
import image6 from "./6.jpg"
import image7 from "./7.jpg"
import image8 from "./8.jpg"

export const Works = () => (
  <section id="portfolio" className={css.wrapper}>
    <Title title={"RECENT WORKS"} subtitle={"We are proud of our projects"} />
    <div className={css.list}>
      {[
        {
          image: image1,
          title: "Woobie",
          category: "startup",
          text: "Woobie is the first ever website dedicated to connect all the kennels and catteries into a joint network and make the search and purchase of a purebred pet as simple as possible.",
          to: "http://www.woobie.ru",
        },
        {
          image: image2,
          title: "Immersive video",
          category: "startup",
          text: "Imagine, if you will, a world where the videos you watch every day do more than just talk at you. What if you could reach into those videos and become a part of the experience?",
          to: "javascript:void(0)",
        },
        {
          image: image3,
          title: "Cashback service",
          category: "startup",
          text: "German startup. Aggregator of goods with the possibility of cashback. The service has a large number of partner stores and has more than 50 million products.",
          to: "https://www.itsyourworld.net",
        },
        {
          image: image4,
          title: "Dashboard",
          category: "startup",
          text: "The dashboard allows users to have multiple payment services such as paypal, skrill, stripe and etc.",
          to: "javascript:void(0)",
        },
        {
          image: image5,
          title: "Electronic exchange of bank guarantees",
          category: "startup",
          text: "Electronic exchange of bank guarantees",
          to: "javascript:void(0)",
        },
        {
          image: image6,
          title: "Maps startup",
          category: "startup",
          text: "Make a mark on the map and share with friends",
          to: "javascript:void(0)",
        },
        {
          image: image7,
          title: "Events startup",
          category: "startup",
          text: "Creating a complex event in a few clicks",
          to: "javascript:void(0)",
        },
        {
          image: image8,
          title: "Place for your project",
          category: "startup",
          text: "We offer the best conditions. Development of large and small projects under the guidance of leading developers. Leave a request in the form below.",
          to: "#contact",
        },
      ].map((it, index) => (
        <div
          key={index}
          className={css.item}
          style={{ backgroundImage: `url(${it.image})` }}
        >
          <a href={it.to} className={css.itemOverlay}>
            <p className={css.itemText}>{it.text}</p>
            <h3 className={css.itemTitle}>{it.title}</h3>
            <span className={css.itemCategory}>{it.category}</span>
          </a>
        </div>
      ))}
    </div>
  </section>
)
