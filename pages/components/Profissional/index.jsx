import Image from 'next/image'

import styles from './styles.module.scss'

import profissional from '../../../public/profissional.svg'

function Profissional() {
    return (
        <>
            <main className={styles.Profissional}>
                <div>
                    <Image src={profissional} width={942} height={859}/>
                </div>
                <div className={styles.Text}>
                    <h2>Professional Team</h2>
                    <p>Well, obviously, we're professionals. Don't hesitate - get to know us better.</p>
                    <a>Learn more</a>
                </div>

            </main>
        </>
    )
}

export default Profissional