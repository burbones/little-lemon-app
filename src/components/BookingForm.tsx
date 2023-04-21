import { useState } from "react";

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

function BookingForm(props: TableProps) {
    const [resDate, setResDate] = useState<Date>(new Date());
    const [resTime, setResTime] = useState<String>('');
    const [numGuests, setNumGuests] = useState<number>(0);
    const [occasion, setOccasion] = useState<String>('');

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = new Date(e.target.value);
        setResDate(date);
        props.dispatchTimes({type: 'update', payload: date});
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formdata: FormResults = {resDate, resTime, numGuests, occasion};
        props.submitForm(formdata);
    }

  return (
    <form className="booking-form" role="form" onSubmit={(e: React.FormEvent) => handleSubmit(e)}>
        <label htmlFor="res-date">Choose date*</label>
        <input type="date" id="res-date" required
            onChange={handleDateChange}/>

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setResTime(e.target.value)}>
                {props.availableTimes.map((elem, index: number) => <option key={index}>{elem}</option>)}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNumGuests(Number(e.target.value))}/>

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>

        <input id="submit-button" className="submit-button" type="submit" value="Make your reservation" role="button" />
    </form>
  )
}

export default BookingForm;
