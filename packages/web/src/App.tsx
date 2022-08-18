import { StrictMode, useEffect } from "react"
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from "react-router-dom"
import Layer from "./components/core/Layer"
import Layout from "./components/Layout"
import RequireAuth from "./components/requireAuth"
import GlobalProvider, { State, useGlobal } from "./context/GlobalProvider"
import Index from "./pages"
import { createBrowserHistory } from "history";


import Login from "./pages/login"
import Register from "./pages/register"

const App = () => {
    const history = createBrowserHistory({ window });
    return (
        <StrictMode>
            <GlobalProvider>
                <HistoryRouter history={history}>
                    <Routes>
                        <Route element={
                            <Layout />
                        }>
                            <Route element={
                                <RequireAuth>
                                    <Layer />
                                </RequireAuth>
                            }>
                                <Route path="/" element={
                                    <Index />
                                } />
                            </Route>
                            <Route path="/login" element={
                                <Login />
                            } />
                            <Route path="/register" element={
                                <Register />
                            } />
                        </Route>
                    </Routes>
                </HistoryRouter>
            </GlobalProvider>
        </StrictMode>
    )
}
export default App