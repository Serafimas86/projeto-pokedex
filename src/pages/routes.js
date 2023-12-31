import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PokemonHome } from "./pokemon-home.js"
import { Pokemon } from "./pokemon.js"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={ <PokemonHome/> } />
                <Route exact path="/pokemon/:name" element={ <Pokemon/> } />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }