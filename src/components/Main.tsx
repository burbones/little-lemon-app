import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Menu from "./Menu";
import BookingPage from "./BookingPage";
import { useReducer } from "react";

interface UpdateTimesAction {
  type: string;
  payload: Date;
}

interface AvailableTimesState {
  availableTimes: String[];
}

function Main() {

  const updateTimes = (state: AvailableTimesState, action: UpdateTimesAction) => {
    const {type, payload} = action;
    switch (type) {
      case "update":
        return {
          availableTimes: [...state.availableTimes, '23:00']
        };
      default:
        return state;
    }
  }

  const initializeTimes = (): String[] => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const [state, dispatch] = useReducer(updateTimes, {availableTimes: initializeTimes()});

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<BookingPage availableTimes={state.availableTimes} dispatchTimes={dispatch}/>} />
      </Routes>
    </main>
  )
}

export default Main;
