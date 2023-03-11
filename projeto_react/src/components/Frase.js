import styles from './Frase.module.css'

function Frase(){
    return  (
        <div className={styles.FraseContainer}>
            <p className={styles.FraseContent}>Esta página foi criada como forma de estudos em baseados em react.</p>
        </div>
    )
}

export default Frase