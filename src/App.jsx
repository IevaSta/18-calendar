import { useReducer } from 'react';
import './App.scss';
import Calendar from './Components/Calendar';
import DataContext from './Components/DataContext';
import Header from './Components/Header';
import Notes from './Components/Notes';
import calendarReducer from './Reducer/calendarReducer';
import notesReducer from './Reducer/notesReducer';

function App() {

  const [dataCalendar, dispachDataCalendar] = useReducer(calendarReducer,
    {
      year: '',
      month: '',
      data: []
    }
  );

  const [dataNotes, dispachDataNotes] = useReducer(notesReducer,
    {
      year: '',
      month: '',
      day: '',
      weekDay: '',
      data: null
    }
  )

  return (
    <DataContext.Provider
      value={{
        dataCalendar,
        dispachDataCalendar,
        dataNotes,
        dispachDataNotes
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