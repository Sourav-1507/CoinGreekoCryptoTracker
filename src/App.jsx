import { useState } from "react"
import Home from "./Pages/home"
import { CurrencyContext } from "./context/CurrencyContext"

function App() {
  
  const [currency,setCurrency] = useState('usd')

  return (
    <div data-theme="coffee" className="min-h-screen bg-base-100 text-base-content p-6">
      <CurrencyContext.Provider value={{currency,setCurrency}}>
        <Home />
      </CurrencyContext.Provider>
    </div>
  )
}

export default App
