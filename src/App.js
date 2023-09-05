import {Header, Footer} from "./components"
import {AllRoutes} from "./routes/AllRoutes"


function App() {
  return (
    <div className="App dark:bg-darkBg">
      <Header />
     <AllRoutes />
     <Footer />
    </div>
  );
}

export default App;
