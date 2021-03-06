import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types'

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) return <div>No feedback yet</div>;

  return (
    <div className="feedback-list">
      {feedback.map(item => (
        <FeedbackItem
          key={item.id}
          feedbackItem={item}
          handleDelete={handleDelete} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
}
export default FeedbackList;