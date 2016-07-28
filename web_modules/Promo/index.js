import styles from './index.css';

const Promo = () => (
  <section className={  styles.promoWrapper }>
    <div className={ styles.promo }>
      <h3 className={ styles.title }>
        { "Let's Get Started Now." } <b>{ "It's FREE" }</b>
      </h3>
      <h4 className={ styles.subtitle }>
        {
          `
          30 day free trial.
          Free plan allows up to 2 projects.
          Pay if you need more. Cancel anytime. No catches.
          `
        }
      </h4>
    </div>
  </section>
);

export default Promo;
