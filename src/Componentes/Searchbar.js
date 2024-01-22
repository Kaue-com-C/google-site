import styles from './Navbar.module.css'
import lupa from './Imagens/lupa.png'
import teclado from './Imagens/teclado.png'
import microfone from './Imagens/microfone.png'

function Searchbar(){
    return(
        <div className={styles.searchbar}>
            <input className={styles.input}></input>
            <img className={styles.inputIcon} src={lupa} alt=''></img>
        <div className={styles.rightIcons}>
            <img src={teclado}></img>
            <img src={microfone}></img>
            
        </div>
        </div>
    )
}

export default Searchbar