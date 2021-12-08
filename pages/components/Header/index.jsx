import Image from 'next/image'
import styles from './styles.module.scss'

import logo from '../../../public/Logo.svg'

function Header() {
    return (
        <>
        <header className={styles.Header}>
            <Image src={logo}/>
            <nav>
                <a>Home</a>
                <a>Features</a>
                <a>Pricing</a>
                <a>Blog</a>
                <a>Contact</a>
            </nav>
            <div>
                <a>Log in</a>
                <a className={styles.GetStarted}>Get Started</a>
            </div>
        </header>
        </>
    )
}

export default Header