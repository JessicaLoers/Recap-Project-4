export default function Form() {
  return (
    <form>
      <h2>add new activity</h2>
      <label>city title</label>
      <input type="text" name="name" />
      <label>Is a good weather activity</label>
      <input type="checkbox" name="isForGoodWeather" />
      <button type="submit">submit activity</button>
    </form>
  );
}
