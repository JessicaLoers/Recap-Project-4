import './List.css';

// List component receives a new prop "onDeleteActivity"
export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h2>{isGoodWeather ? 'good' : 'bad'} Weather Activities</h2>
      <ul className="list">
        {activities.map(({ name, id }) => {
          return (
            <li key={id} className="list__item">
              {name}
              {/* Button for deleting the activity. On click, "onDeleteActivity" is called with the activity's id. */}
              <button type="button" className="list__button" onClick={() => onDeleteActivity(id)}>
                <span role="img" aria-label="A trash can indicating deletion">
                  🗑️
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
