import { useState } from 'react';
import { uid } from 'uid';

import List from './components/List';
import Form from './components/Form';

function App() {
  const [activities, setActivities] = useState([]);

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
