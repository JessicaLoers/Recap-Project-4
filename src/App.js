import { useEffect } from 'react';
import { uid } from 'uid';
import useLocalStorageState from 'use-local-storage-state';

import List from './components/List';
import Form from './components/Form';

function App() {
  const [activities, setActivities] = useLocalStorageState('_ACTIVITIES', { defaultValue: [] });

  // Setting up a state variable 'weather' with a custom hook 'useLocalStorageState' to manages the state and syncs it with local storage
  const [weather, setWeather] = useLocalStorageState('_WEATHER', { defaultValue: null });

  // Using the useEffect-Hook to run data fetchind (a side effect) in functional components
  useEffect(() => {
    // Declaring an asynchronous function "fetchWeather" to fetch weather data from the API
    async function fetchWeather() {
      try {
        // Fetching data from the given URL
        const response = await fetch('https://example-apis.vercel.app/api/weather/rainforest');
        // Checking if the response is OK (status in the range 200-299).
        if (response.ok) {
          // Parsing the response body as JSON.
          const weatherData = await response.json();
          // Updating the 'weather' state with the fetched data.
          setWeather(weatherData);
        } else {
          // Logging an error message if the server response is not OK.
          console.error('bad server response');
        }
      } catch (error) {
        // Catching and logging any errors that occur during the fetch.
        console.error(error);
      }
    }
    // Calling "fetchWeather" to execute the data fetching.
    fetchWeather();
  }, [setWeather]);
  // The effect depends on "setWeather". It runs when "setWeather" changes.

  const filteredActivities = activities.filter((activity) => {
    return weather ? activity.isForGoodWeather : !activity.isForGoodWeather;
  });

  function handleAddActivity(newActivity) {
    setActivities((prevActivities) => [...prevActivities, { id: uid(), ...newActivity }]);
  }

  return (
    <main>
      <h1>
        <span role="img" aria-label="emoji indicating the current weather">
          {weather.condition}
        </span>
        <span> {weather.temperature} °C</span>
      </h1>
      <List activities={filteredActivities} isGoodWeather={weather?.isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
