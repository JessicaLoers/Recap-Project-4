import './List.css';

export default function List({ activities }) {
  return (
    <>
      <h2>Activities</h2>
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
