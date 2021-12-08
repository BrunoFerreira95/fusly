import Image from 'next/image'

import styles from './styles.module.scss'

import facebook from '../../../public/facebook.svg'
import twitter from '../../../public/twitter.svg'
import linkdin from '../../../public/linkdin.svg'

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.Card}>
                    <div>
                        <p>Product</p>
                        <ul>
                            <li>How it works</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>FAQ</li>
                            <li>Download</li>
                        </ul>
                    </div>
                    <div>
                        <p>Company</p>
                        <ul>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Partnership</li>
                            <li>Terms of use</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                    <div>
                    <p>Support</p>
                        <ul>
                            <li>Help center</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div>
                        <p>Get in touch</p>
                        <ul>
                            <li>
                                <Image src={facebook} className={styles.ImageMargin}/>
                            </li>
                            <li>
                                <Image src={twitter} className={styles.ImageMargin}/>
                            </li>
                            <li>
                                <Image src={linkdin} className={styles.ImageMargin}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer