import { useReducer } from 'react';
import './App.scss';
import DataContext from './Components/DataContext';
import dataReducer from './Reducer/dataReducer';

function App() {

  const [data, dispachData] = useReducer(dataReducer, null);

  return (
    <DataContext.Provider
      value={{
        data,
        dispachData
      }}
    >
    </DataContext.Provider>
  );
}

export default App;