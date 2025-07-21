import { useState } from "react"

import { CurrencyContext } from "./context/CurrencyContext"
import Routing from "./Component/Router/Routing"

function App() {
  
  const [currency,setCurrency] = useState('usd')

  return (
    <div data-theme="coffee" className="min-h-screen bg-base-100 text-base-content p-6">
      <CurrencyContext.Provider value={{currency,setCurrency}}>
        <Routing />
      </CurrencyContext.Provider>
    </div>
  )
}

export default App
