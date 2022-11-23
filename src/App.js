import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {PokemonProvider} from "./context/SelectedPokemonContext";
import {PageProvider} from "./context/PageContext";
import NavBar from "./components/NavBar/NavBar";


function App() {

  return (
      <BrowserRouter>
          <NavBar/>
          <PageProvider>
              <PokemonProvider>
                <AppRouter/>
              </PokemonProvider>
          </PageProvider>
      </BrowserRouter>
  );
}
export default App;
