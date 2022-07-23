import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Headers"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/shared/FeedbackStats"
import FeedbackForm from "./components/shared/FeedbackForm"
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconLink from './components/shared/AboutIconLink'

 

function App() {
    return (
        <FeedbackProvider>
        <Router>
        <Header />
        <div className='container'> 
        <Routes>
            <Route exact path='/' element={
                <>
                <FeedbackForm  />
                <FeedbackStats  />
                <FeedbackList   />
                </> 
            }> 
                
            </Route>
           <Route path='/about' element={<AboutPage />} />
           </Routes> 


            <AboutIconLink/>
        </div>
        </Router>
        </FeedbackProvider> 
    )
}


export default App 