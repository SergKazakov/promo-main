import Title from "../Title"
import styles from "./index.css"

const Team = () => (
  <div className={ styles.wrapper }>
    <Title
      theme={ 'white' }
      title={ 'Our team' }
      subtitle={ 'Meet the craziest team. Share your thoughts with them.' }
    />
  </div>
)

export default Team
