import { useState } from 'react';
import { uid } from 'uid';

import Form from './components/Form';

function App() {
  const [activities, setActivities] = useState([]);

  // This function updates the "activities" state variable by adding a new activity to the existing list
  function handleAddActivity(newActivity) {
    // Call 'setActivities' (state setter function)
    // Spread syntax ""...prevActivities" is used to copy all previous activities
    // Generates a unique identifier for the new activity using uid() function
    // Spreads the properties of "newActivity" into this new object.
    setActivities((prevActivities) => [...prevActivities, { id: uid(), ...newActivity }]);
  }

  return (
    <main>
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
