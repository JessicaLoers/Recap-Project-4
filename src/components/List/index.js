import './List.css';

// The List components receives "activities" as a prop, which is an array of activity objects
export default function List({ activities }) {
  return (
    <>
      <h2>Activities</h2>
      {/* Mapping over each activity in the "activities" array to create list items */}
      <ul className="list">
        {/* Each activity is destructured to get "name" and "id" properties. */}
        {activities.map(({ name, id }) => {
          return (
            // "key" prop is important for React to handle re-renders efficiently.
            <li key={id} className="list__item">
              {name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
