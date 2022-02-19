import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackData from './Data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'
import AboutPage from './pages/AboutPage'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  return (
    // react router dom of version 6
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
                <AboutIconLink />
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
