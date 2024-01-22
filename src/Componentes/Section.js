import safe from './Imagens/safe.png'
import styles from './Navbar.module.css'
function Section(){
    return(
        <div className={styles.safety}>
            <img src={safe} alt='' className={styles.safe}></img>
           <p>Faça o Check-up de privacidade</p>
        </div>
    )
}

export default Section