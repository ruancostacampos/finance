import React, { createContext, useContext, useState } from "react"


const initialValue = {
    transactions: [
        {id: '0', description: 'Padaria', value: 20.5, type: 'received', date: 1688499355094},
        {id: '1', description: 'Frutas', value: 32.90, type: 'received', date: 1688499402492},
        {id: '2', description: 'Tênis Nike', value: 260, type: 'spent', date: 1688499410394},

    ]
}


const getInitialTransactions = () => {
    const data = localStorage.getItem("transactions")
    return data ? JSON.parse(data) : initialValue
}

export const TransactionContext = createContext()




const TransactionContextProvider = (props) => {

    const [data, setData] = useState(getInitialTransactions)

    const getElementIndex = (id) => {

        let finalIndex = -1
        
        data.transactions.forEach( (element, index) => {
        
            if(element.id === id){
                finalIndex = index
            }

        })

        return finalIndex
    }

    const addTransaction = ({id, description, value, date, type}) => {
        
        let newTransaction = {id, description, value: parseFloat(value), date, type}
        console.log(newTransaction)

        setData( (old) => ({
            ...old,
            transactions: [...old.transactions, newTransaction]
        }))

    }

    const deleteTransaction = ({id}) => {

        let spliceIndex = getElementIndex(id)
        
        if(spliceIndex > -1){

            let dataObj = data
            dataObj.transactions.splice(spliceIndex, 1)
            setData(dataObj)

        }

    }

    const editTransaction = ({id, description, value, date, type}) => {

        let index = getElementIndex(id)

        if(index > -1){
            
            let dataObj = data
            let newTransaction = {id, description, value, date, type}
            dataObj.transactions[index] = newTransaction
            setData(dataObj)

        }
        
    }


    return (
    
        <TransactionContext.Provider value={{data, addTransaction, deleteTransaction, editTransaction}}>
            {props.children}
        </TransactionContext.Provider>  

    )


}

export const useTransactions = () => useContext(TransactionContext)

export default TransactionContextProvider