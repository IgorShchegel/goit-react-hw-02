import { useState,useEffect } from 'react'
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Feedback/Notification/Notification';
import './App.css'

function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100);
   
   
  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);

  

  const updateFeedback = (feedbackType) => {
    const newFeedback = { ...feedback, [feedbackType]: feedback[feedbackType] + 1, };
    setFeedback(newFeedback);
    localStorage.setItem('feedback', JSON.stringify(newFeedback));
  };

  const resetFeedback = () => {
    const newFeedback = { good: 0, neutral: 0, bad: 0 };
    setFeedback(newFeedback);
    localStorage.setItem('feedback', JSON.stringify(newFeedback));
  };

  return (
    
      <div>
        <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      {totalFeedback > 0 ? (
        <div>
          <Feedback feedback={feedback} totalFeedback={totalFeedback} positivePercentage={positivePercentage} />
        </div>
      ) : (
        <Notification />
      )}
      </div>
      
  )
}

export default App
