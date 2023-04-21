import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import Menu from "./Menu";
import BookingPage from "./BookingPage";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../utils/const";
import ConfirmedBooking from "./ConfirmedBooking";

interface FormResults {
  resDate: Date;
  resTime: String;
  numGuests: number;
  occasion: String;
}

interface UpdateTimesAction {
  type: string;
  payload: Date;
}

interface AvailableTimesState {
  availableTimes: String[];
}

function Main() {

  const navigate = useNavigate();

  const updateTimes = (state: AvailableTimesState, action: UpdateTimesAction) => {
    const {type, payload} = action;
    switch (type) {
      case "update":
        return {
          availableTimes: fetchAPI(payload)
        };
      default:
        return state;
    }
  }

  const initializeTimes = (): String[] => {
    const initialTimes = fetchAPI(new Date());
    return initialTimes;
  }

  const [state, dispatch] = useReducer(updateTimes, {availableTimes: initializeTimes()});

  const submitForm = (formdata: FormResults) => {
    if (submitAPI(formdata))
      navigate("/confirm");
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" 
          element={<BookingPage availableTimes={state.availableTimes} dispatchTimes={dispatch} submitForm={submitForm}/>} />
        <Route path="/confirm" element={<ConfirmedBooking />}/>
      </Routes>
    </main>
  )
}

export default Main;
