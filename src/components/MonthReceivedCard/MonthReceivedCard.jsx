import React, { useContext, useEffect, useState } from 'react'
import greenIcon from '../../assets/greenIcon.svg'
import { useTransactions } from '../../contexts/TransactionContext'
import BRL from '../../utils/BRL'
import styles from '../../styles/Card.module.css'

const MonthReceivedCard = () => {
  
    const {data} = useTransactions()
    const [total, setTotal] = useState(0)
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth()

    useEffect( () => {
        
        const calculateMonthTransaction = () => {
            
            let calculatingTotal = 0

            data.transactions.forEach( (transaction) => {
            
                let transactionDate = new Date(transaction.date)
                
                if(
                    transaction.type === 'received' &&
                    transactionDate.getFullYear() === currentYear &&
                    transactionDate.getMonth() === currentMonth
                ){
                    calculatingTotal += transaction.value
                }
    
            })

            setTotal(calculatingTotal)

        }

        calculateMonthTransaction()

    }, [] )


    return (
    
        <div className={styles.card}>
            <div>
                <img src={greenIcon} />
                <h3>Receitas do mês</h3>    
            </div>
            <p>{BRL().format(total)}</p>
        </div>

    )
}

export default MonthReceivedCard