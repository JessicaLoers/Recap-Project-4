import { uid } from 'uid';
// Custom hook for managing state in local storage.
import useLocalStorageState from 'use-local-storage-state';

// Importing the List component.
import List from './components/List';
import Form from './components/Form';

function App() {
  // 'useLocalStorageState' is a custom hook that manages state in the browser's local storage.
  // '_ACTIVITIES' is the key under which activities will be stored in local storage.
  // The default value for activities state is an empty array.
  const [activities, setActivities] = useLocalStorageState('_ACTIVITIES', { defaultValue: [] });

  function handleAddActivity(newActivity) {
    setActivities((prevActivities) => [...prevActivities, { id: uid(), ...newActivity }]);
  }

  return (
    <main>
      {/* The List component is passed the activities state as a prop*/}
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
