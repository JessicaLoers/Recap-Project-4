import { uid } from 'uid';
import useLocalStorageState from 'use-local-storage-state';

import List from './components/List';
import Form from './components/Form';

function App() {
  const [activities, setActivities] = useLocalStorageState('_ACTIVITIES', { defaultValue: [] });

  const isGoodWeather = false;

  const filteredActivities = activities.filter((activity) => {
    return isGoodWeather ? activity.isForGoodWeather : !activity.isForGoodWeather;
  });

  function handleAddActivity(newActivity) {
    setActivities((prevActivities) => [...prevActivities, { id: uid(), ...newActivity }]);
  }

  return (
    <main>
      <List activities={filteredActivities} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
