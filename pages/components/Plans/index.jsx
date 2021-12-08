import styles from './styles.module.scss'

function Plans() {
    return (
        <>
        <section className={styles.Plans}>
            <div>
                <p>Starter</p>
                <p><b className={styles.Price}>Free</b></p>
                <p>Dashboard</p>
                <p>Limited Support</p>
                <p>Forever free</p>
                <a>Get Started</a>
            </div>
            <div className={styles.PricePopular}>
                <p>Premium</p>
                <p><b className={styles.Price}>$29</b>/month</p>
                <p>Dashboard & Analysis</p>
                <p>Premium Support</p>
                <p>Tracking Service</p>
                <a>Get Started</a>
            </div>
            <div>
                <p>Enterprise</p>
                <p><b className={styles.Price}>$49</b>/month</p>
                <p>All features in Premium</p>
                <p>Realtime overwier</p>
                <p>Mobile app</p>
                <a>Get Started</a>
            </div>
        </section>
        </>
    )
}

export default Plans