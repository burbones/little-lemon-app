import BookingForm from "./BookingForm";

interface UpdateTimesAction {
    type: string;
    payload: Date;
  }

interface TableProps {
    availableTimes: String[];
    dispatchTimes: React.Dispatch<UpdateTimesAction>;
}

function BookingPage(props: TableProps) {
  return (
    <>
     <BookingForm availableTimes={props.availableTimes} dispatchTimes={props.dispatchTimes}/> 
    </>
  )
}

export default BookingPage;
