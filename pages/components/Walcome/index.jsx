import Image from 'next/image'

import styles from './styles.module.scss'

import Heroimage from '../../../public/Heroimage.svg'

function Walcome() {
    return (
        <>
            <main className={styles.Main}>
                <div className={styles.Text}>
                    <h1>Let’s get fusely together</h1>
                    <p>Outcome-centered product that reduce churn, optimize pricing, and grow your subscription business end-to-end.</p>
                    <a className={styles.GetStarted}>Get Started</a>
                </div>
                <div>
                    <Image src={Heroimage} width={942} height={859}/>
                </div>
            </main>
        </>
    )
}

export default Walcome