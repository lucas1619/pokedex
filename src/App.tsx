import { 
    BrowserRouter, 
    Routes,
    Route, 
} from "react-router-dom";

import { Main, Detail } from '@/pages';

import '@/styles/app.css';

const App = () => {
    return (
        <main className="main">
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/*" element={<div>404 not found</div>} />
                </Routes>
            </BrowserRouter>
            <section>
                <h1>Bookkeeper!</h1>
            </section>
        </main>
    )

}

export default App;