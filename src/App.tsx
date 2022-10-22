import { Router } from "./router"
import { AppContext } from "./contexts/formContext"
import { GlobalStyle } from "./style/globalStyle"


function App() {

  return (
    <AppContext>
      <Router />
      <GlobalStyle />
    </AppContext>
    
  )
}

export default App
