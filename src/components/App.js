import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Sessions from "./Sessions"
import Header from "./Header"
import Films from "./Films"
import Seats from "./Seats"
import Success from "./Success"

export default function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/' exact>
                    <Films />
                </Route>
                <Route path='/sessoes/:id' exact>
                    <Sessions />
                </Route>
                <Route path='/assentos/:id' exact>
                    <Seats />
                </Route>
                <Route path='/sucesso' exact>
                    <Success />
                </Route>
            </Switch>
        </Router>
    )
}