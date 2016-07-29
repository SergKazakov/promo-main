import Item from "./Item"
import styles from "./index.css"
import services from "./services.json"

const Services = () => (
  <section className={ styles.wrapper }>
    <div className={ styles.content }>
      <h3 className={ styles.title }>{ 'Our srvices' }</h3>
      <div className={ styles.list }>
        {
          services.map(({ title, text, icon }, index) => (
            <Item
              title={ title }
              text={ text }
              icon={ require(`./${icon}.svg`) }
              key={ index }
            />
          ))
        }
      </div>
    </div>
    <div className={ styles.img }></div>
  </section>
)

export default Services
