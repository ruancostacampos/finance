import styles from './App.module.css'
import MonthReceivedCard from './components/MonthReceivedCard/MonthReceivedCard'
import MonthSpentCard from './components/MonthSpentCard/MonthSpentCard'
import TotalSpentCard from './components/TotalSpentCard/TotalSpentCard'
import History from './components/History/History'
import ButtonToggle from './components/Modal/ButtonToggle'

function App() {


  return (
    <>
      <div className={styles.header}>
          <div>
              <h1>Início</h1>
              <p>Monitore seus gastos e receitas</p>
          </div>
          <ButtonToggle/>
      </div>
      <div className={styles.cardContainer}>
          <MonthReceivedCard/>
          <MonthSpentCard/>
          <TotalSpentCard/>
      </div>
      <History/>
    </>
  )
}

export default App
