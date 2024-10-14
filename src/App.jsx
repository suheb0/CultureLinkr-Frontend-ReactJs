import { useState } from 'react'
import './App.css'

function App() {
  const [userInput, setUserInput] = useState({
    Name: '',
    userEmail: '',
    userMessage: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value
    })
  }

  const submitForm = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="contact-container">
      <h2>Fill the Form</h2>
      {isSubmitted ? (
        <p className="success-message">Form Submitted Successfully!</p>
      ) : (
        <form onSubmit={submitForm}>
          <div className="input-group">
            <label htmlFor="fullName">Name</label>
            <input
              type="text"
              id="Name"
              name="Name"
              value={userInput.fullName}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="userEmail">Email</label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              value={userInput.userEmail}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="userMessage">Message</label>
            <textarea
              id="userMessage"
              name="userMessage"
              value={userInput.userMessage}
              onChange={handleInputChange}
              placeholder="Write your message here"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  )
}

export default App
