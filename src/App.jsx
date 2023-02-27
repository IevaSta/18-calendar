import { useReducer } from 'react';
import './App.scss';
import Calendar from './Components/Calendar';
import DataContext from './Components/DataContext';
import Header from './Components/Header';
import Notes from './Components/Notes';
import calendarReducer from './Reducer/calendarReducer';

function App() {

  const [data, dispachData] = useReducer(calendarReducer, null);

  return (
    <DataContext.Provider
      value={{
        data,
        dispachData
      }}>

      <Header />

      <main>
        <Calendar />
        <Notes />
      </main>

      {/* 
      Header: Kalendoriaus pavadinimas
      Main:
      -kalendorius
        -metai menesis
        -mygtukai menesiu keitimui
        -kalendoriaus dienos
      -notes
        -savaites diena ir menesio diena
        -notes sukurimas(form)
        -notes list
          -note
          -mygtukai edit/delete
*/}

    </DataContext.Provider>
  );
}

export default App;