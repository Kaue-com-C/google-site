import styles from './Navbar.module.css'
import menu from './Imagens/menu.png'
import foto from './Imagens/foto.png'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div>
                <img src={menu} alt='' className={styles.menu}></img>
                <img src={foto} alt='' className={styles.foto}></img>
              
            </div>    
            <p>Imagens</p>
            <p>Gmail</p>
            
        </div>
    )
}

export default Navbar