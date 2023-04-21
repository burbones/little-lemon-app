import BookingForm from "./BookingForm";

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

interface TableProps {
    availableTimes: String[];
    dispatchTimes: React.Dispatch<UpdateTimesAction>;
    submitForm: (formdata: FormResults) => void;
}

function BookingPage(props: TableProps) {
  return (
    <>
      <h1 className="booking-heading">Booking a Table</h1>
     <BookingForm availableTimes={props.availableTimes} dispatchTimes={props.dispatchTimes} submitForm={props.submitForm}/> 
    </>
  )
}

export default BookingPage;
