import React, {useEffect, useState} from 'react'
import { useTransactions } from '../../contexts/TransactionContext'
import redIcon from '../../assets/redIcon.svg'
import BRL from '../../utils/BRL'
import styles from '../../styles/Card.module.css'

const MonthSpentCard = () => {

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
                    transaction.type === 'spent' &&
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
                <img src={redIcon} />
                <h3>Gastos do mês</h3>    
            </div>
            <p>{BRL().format(total)}</p>
        </div>

    )
}

export default MonthSpentCard