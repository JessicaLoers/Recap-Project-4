import './List.css';

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h2>{isGoodWeather ? 'good' : 'bad'} Weather Activities</h2>
      <ul className="list">
        {activities.map(({ name, id }) => {
          return (
            <li key={id} className="list__item">
              {name}
              <button type="button" onClick={() => onDeleteActivity(id)}>
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
