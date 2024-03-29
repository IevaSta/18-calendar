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

    <div >
      <DataContext.Provider
        value={{
          dataCalendar,
          dispachDataCalendar,
          dataNotes,
          dispachDataNotes
        }}>

        <Header />

        <main className='container_main'>
          <Calendar />
          <Notes />
        </main>

      </DataContext.Provider>
    </div>
  );
}

export default App;