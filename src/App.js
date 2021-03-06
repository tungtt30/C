import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Auth from './views/Auth'
import AuthContextProvider from './contexts/AuthContext'
import Dashboard from './views/Dashboard'
import About from './views/About'
import ProtectedRoute from './components/routing/ProtectedRoute'
import PostContextProvider from './contexts/PostContext'
import StoreContextProvider from './contexts/StoreContext'
import ManagerStore from './components/stores/ManagerStore'



function App() {
    return (
        <AuthContextProvider>
            <StoreContextProvider>
                <PostContextProvider>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={Landing} />
                            <Route exact path='/login' render={props => <Auth {...props} authRoute='login' />} />
                            <Route exact path='/register' render={props => <Auth {...props} authRoute='register' />} />
                            <ProtectedRoute exact path='/about' component={About} />
                            <ProtectedRoute exact path='/dashboard' component={Dashboard} />
                            <ProtectedRoute exact path='/manager' component={ManagerStore} />
                        </Switch>
                    </Router>
                </PostContextProvider>
            </StoreContextProvider>
        </AuthContextProvider>
    )
}
export default App