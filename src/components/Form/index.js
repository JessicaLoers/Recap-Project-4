import './Form.css';

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const { name, isForGoodWeather } = form.elements;

    const newEntry = {
      name: name.value,
      isForGoodWeather: isForGoodWeather.checked,
    };

    onAddActivity(newEntry);

    form.reset();
    name.focus();
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>add new activity</h2>
      <div className="form__input-container">
        <label>city title</label>
        <input type="text" name="name" />
      </div>
      <div className="form__input-container">
        <label>good weather activity</label>
        <input type="checkbox" name="isForGoodWeather" />
      </div>
      <button type="submit">submit activity</button>
    </form>
  );
}
