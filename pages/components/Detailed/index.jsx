import Image from 'next/image'

import styles from './styles.module.scss'

import Illustration from '../../../public/Illustration.svg'

function Detailed() {
    return (
        <>
            <main className={styles.Detailed}>
                <div>
                    <Image src={Illustration} width={942} height={859}/>
                </div>
                <div className={styles.Text}>
                    <h2>Detailed Examination</h2>
                    <p>A daily dataset to keep you up to date on subscription market trends and what is happening in your vertical.</p>
                    <a>Learn more</a>
                </div>

            </main>
        </>
    )
}

export default Detailed