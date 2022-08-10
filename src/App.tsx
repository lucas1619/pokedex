import { 
    BrowserRouter, 
    Routes,
    Route, 
} from "react-router-dom";

import { Main, Detail } from '@/pages';

import '@/styles/app.css';
import { SelectedPokemons } from "@/components";

const App = () => {
    return (
        <main className="main">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/*" element={<div>404 not found</div>} />
                </Routes>
                <SelectedPokemons/>
            </BrowserRouter>
        </main>
    )

}

export default App;