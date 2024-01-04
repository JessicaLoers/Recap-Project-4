import './List.css';

export default function List({ activities, isGoodWeather }) {
  return (
    <>
      <h2>{isGoodWeather ? 'good' : 'bad'} Weather Activities</h2>
      <ul className="list">
        {activities.map(({ name, id }) => {
          return (
            <li key={id} className="list__item">
              {name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
