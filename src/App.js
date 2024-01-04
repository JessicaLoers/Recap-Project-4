import { useEffect } from 'react';
import { uid } from 'uid';
import useLocalStorageState from 'use-local-storage-state';

import List from './components/List';
import Form from './components/Form';

function App() {
  const [activities, setActivities] = useLocalStorageState('_ACTIVITIES', { defaultValue: [] });
  const [weather, setWeather] = useLocalStorageState('_WEATHER', { defaultValue: null });

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch('https://example-apis.vercel.app/api/weather/rainforest');

        if (response.ok) {
          const weatherData = await response.json();

          setWeather(weatherData);
        } else {
          console.error('bad server response');
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchWeather();
  }, [setWeather]);

  const filteredActivities = activities.filter((activity) => {
    return weather ? activity.isForGoodWeather : !activity.isForGoodWeather;
  });

  function handleAddActivity(newActivity) {
    setActivities((prevActivities) => [...prevActivities, { id: uid(), ...newActivity }]);
  }

  // Function "handleDeleteActivity" to handle the deletion of an activity.
  function handleDeleteActivity(id) {
    // Updating the "activities" state by calling the setter function "setActivities"
    // For each "activity" in the "activities" array, the filter method checks if the "activity.id" is not equal to the "id" passed to the function.
    // If "activity.id" is not equal to "id", the "activity" is kept in the new array.
    // If it's equal, the "activity" is excluded, effectively deleting it from the list.
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <main>
      <h1>
        <span role="img" aria-label="emoji indicating the current weather">
          {weather.condition}
        </span>
        <span> {weather.temperature} °C</span>
      </h1>
      <List
        activities={filteredActivities}
        isGoodWeather={weather?.isGoodWeather}
        // The List component is given the "handleDeleteActivity" function to call when deleting an activity
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
