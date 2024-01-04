import { useState } from 'react';
import { uid } from 'uid';

import Form from './components/Form';

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities((prevActivities) => [...prevActivities, { id: uid(), ...newActivity }]);
  }

  return (
    <main>
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
