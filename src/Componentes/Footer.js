import styles from './Navbar.module.css'


function Footer(){
    return(
        <div className={styles.footer}>
            <footer>
                    <div className={styles.brasil}>
                        <p>Brasil</p>
                    </div>
            <div className={styles.flexContainer}>
                <div className={styles.flexContainer}>
                    <a href='https://about.google/intl/pt-BR/'>Sobre</a>
                    <a href='https://ads.google.com/intl/pt_br/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1'>Publicidade</a>
                    <a href='https://www.google.com/intl/pt_br/business/'>Negócios</a>
                    <a href='https://support.google.com/webmasters/answer/9128586?hl=pt-BR'>Como funciona a Pesquisa</a>
                </div>
                    <div className={styles.flexContainer}>
                        <a href='https://policies.google.com/privacy?hl=pt-BR'>Privacidade</a>
                        <a href='https://policies.google.com/terms?hl=pt-BR'>Termos</a>
                        <a href=''>Configurações</a>
                    </div>
            </div>
            </footer>
        </div>
    )
}

export default Footer