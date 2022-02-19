import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import Post from './components/Post'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    // react router dom of version 6
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route
              path='/about'
              element={
                <>
                  <AboutPage />
                </>
              }
            />
            <Route path='/post/*' element={<Post />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>

    // this is react router dom of version 5
    // {/* <Router>
    // <Header />
    // <div className='container'>
    //   <Route exact path='/'>
    //     <FeedbackForm handleAdd={addFeedback} />
    //     <FeedbackStats feedback={feedback} />
    //     <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    //   </Route>
    //   <Route path='/about' component={AboutPage} />
    // </div>
    // </Router> */}
  )
}
export default App
