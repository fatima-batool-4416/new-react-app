import React from 'react';
import Form1 from './components/form1';
import Form2 from './components/form2';
import Uploader from './components/uploader';
import Skeleton from './components/Skeleton';
const App: React.FC = () => {
  return (
    <div className="App">
      <Form1 />
      <Form2 />
      <Uploader/>
      <Skeleton/>
    </div>
  );
};

export default App;
