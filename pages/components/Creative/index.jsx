import Image from 'next/image'

import styles from './styles.module.scss'

import undraw_new_ideas_jdea from '../../../public/undraw_new_ideas_jdea.svg'

function Creative() {
    return (
        <>
            <main className={styles.Creative}>
                <div className={styles.Text}>
                    <h2>Creative Solutions</h2>
                    <p>Creativity is our second name. We're full of inventive ideas and we're happy to present them to you.</p>
                    <a>Learn more</a>
                </div>
                <div>
                    <Image src={undraw_new_ideas_jdea} width={942} height={859}/>
                </div>
            </main>
        </>
    )
}

export default Creative