import './List.css';

export default function List({ activities, isGoodWeather }) {
  return (
    <>
      {/* Checks the value of the "isGoodWeather" variable to dynamically display the text*/}
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
