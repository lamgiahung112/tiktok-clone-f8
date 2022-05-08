import { Fragment } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { publicRoutes, privateRoutes } from "~/routes"
import { DefaultLayout } from "./components/Layouts"

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, idx) => {
                        const Page = route.component

                        let Layout = DefaultLayout

                        if (route.layout) {
                            Layout = route.layout
                        } else if (route.layout === null) {
                            Layout = Fragment
                        }

                        return (
                            <Route
                                key={idx}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        )
                    })}
                    {privateRoutes.map((route, idx) => (
                        <Route
                            key={idx}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                </Routes>
            </div>
        </Router>
    )
}

export default App
