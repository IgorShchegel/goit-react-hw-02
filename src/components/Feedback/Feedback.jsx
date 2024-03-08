import css from './Feedback.module.css'

const Feedback = ({ feedback,totalFeedback,positivePercentage }) => {
  return (
   <div>
      <p className={css.feedback}>Good: {feedback.good}</p>
      <p className={css.feedback}>Neutral: {feedback.neutral}</p>
      <p className={css.feedback}>Bad: {feedback.bad}</p>
      <p className={css.feedback}>Total: {totalFeedback}</p>
      <p className={css.feedback}>Positive: {positivePercentage}%</p>
    </div>
  )
}

export default Feedback