import styles from './Navbar.module.css'

function Button(){
    return(
        <div className={styles.btn}>
            <a href=''></a>
            <button className={styles.btn1}>Pesquisa Google</button>
            <button className={styles.btn2}>Estou com sorte</button>
        </div>
    )
}

export default Button