import { uid } from 'uid';
import useLocalStorageState from 'use-local-storage-state';

import List from './components/List';
import Form from './components/Form';

function App() {
  const [activities, setActivities] = useLocalStorageState('_ACTIVITIES', { defaultValue: [] });

  function handleAddActivity(newActivity) {
    setActivities((prevActivities) => [...prevActivities, { id: uid(), ...newActivity }]);
  }

  return (
    <main>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
