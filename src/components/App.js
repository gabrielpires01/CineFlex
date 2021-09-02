import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "./HomePage"
import Sessions from "./Sessions"


export default function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <HomePage />
                </Route>
                <Route path='/sessoes/:id' exact>
                    <Sessions />
                </Route>
            </Switch>
        </Router>
    )
}