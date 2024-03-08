import css from './Options.module.css'

const Options = ({ updateFeedback, totalFeedback,resetFeedback }) => {
  return (
    <div className={css.box}>
      <button className={css.button} onClick={() => updateFeedback('good')}>Good</button>
      <button className={css.button} onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button className={css.button} onClick={() => updateFeedback('bad')}>Bad</button>
          {totalFeedback > 0 ? (<button className={css.button} onClick={resetFeedback}>Reset</button>) : null}
    </div>
  )
}

export default Options