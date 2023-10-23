import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const WorkoutDetail = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (in kgs): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps (in kgs): </strong>
        {workout.reps}
      </p>
      <p>
        <strong>Created: </strong>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <p>
        <strong>Updated: </strong>
        {formatDistanceToNow(new Date(workout.updatedAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        Delete
      </span>
    </div>
  );
};

export default WorkoutDetail;
