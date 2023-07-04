import React, { useContext, useEffect } from 'react'
import { useTransactions } from '../../contexts/TransactionContext'
import BRL from '../../utils/BRL'
import spentIcon from '../../assets/spent.svg'
import receivedIcon from '../../assets/received.svg'
import styles from '../../styles/History.module.css'

const History = () => {

    const { data } = useTransactions()

    const getIcon = (type) => {
        if (type === 'spent') return spentIcon
        if (type === 'received') return receivedIcon
    }

    return (
        <div className={styles.history}>
            <h2>Histórico</h2>
            <ul className={styles.list}>
                {data.transactions.map((transaction) => (
                    <li key={transaction.id}>
                        <img src={getIcon(transaction.type)} alt="icon" />
                        <p>{transaction.description}</p>
                        <p>{BRL().format(transaction.value)}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default History