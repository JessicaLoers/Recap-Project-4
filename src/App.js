import { useEffect } from 'react';
import { uid } from 'uid';
import useLocalStorageState from 'use-local-storage-state';

import List from './components/List';
import Form from './components/Form';

function App() {
  const [activities, setActivities] = useLocalStorageState('_ACTIVITIES', { defaultValue: [] });
  const [weather, setWeather] = useLocalStorageState('_WEATHER', { defaultValue: null });

  console.log(weather);

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

  return (
    <main>
      <h1>
        <span>{`It's ${weather.condition} and ${weather.temperature} °C`} </span>
      </h1>
      <List activities={filteredActivities} isGoodWeather={weather?.isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
