import './Form.css';

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    // Accesses the form element that triggered the submit event.
    const form = event.target;

    // Destructures "name" and "isForGoodWeather" from the form's elements collection
    // This allows direct access to these specific form fields
    const { name, isForGoodWeather } = form.elements;

    // Constructs a new object 'newEntry' with properties:
    // - "name": the value (text) entered in the "name" input field
    // - "isForGoodWeather": the boolean checked state of the "isForGoodWeather" checkbox
    const newEntry = {
      name: name.value,
      isForGoodWeather: isForGoodWeather.checked,
    };

    // Calls "onAddActivity" function with "newEntry" as an argument
    onAddActivity(newEntry);

    // Resets the form to its initial state, clearing all input fields
    form.reset();
    // Sets the focus back to the "name" input field
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
