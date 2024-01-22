import styles from './Navbar.module.css'
import logo from './Imagens/logo.png'

function Logo(){
    return(
        <div className={styles.logo}>
            <a href='https://www.google.com.br/'>
                <img src={logo}></img>
            </a>
        </div>
    )
}

export default Logo