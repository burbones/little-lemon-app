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

interface Touched {
    resDate: Boolean,
    resTime: Boolean,
    numGuests: Boolean,
    occasion: Boolean
}

function BookingForm(props: TableProps) {
    const [resDate, setResDate] = useState<Date>(new Date(0));
    const [resTime, setResTime] = useState<String>('');
    const [numGuests, setNumGuests] = useState<number>(0);
    const [occasion, setOccasion] = useState<String>('');

    const [isTouched, setIsTouched] = useState<Touched>({resDate: false, resTime: false, numGuests: false, occasion: false});

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

    const getIsFormValid = (): Boolean => {
        return ((resDate > new Date(0)) && (resTime !== '') && (numGuests !== 0) && (occasion !== ''));
    }

    const classValid = getIsFormValid() ? "submit-button" : "submit-button disabledButton";

  return (
    <form className="booking-form" role="form" onSubmit={(e: React.FormEvent) => handleSubmit(e)}>
        <label htmlFor="res-date">Choose date*</label>
        <input type="date" id="res-date" required
            onChange={handleDateChange} onBlur={() => {setIsTouched({...isTouched, resDate: true})}}/>

        {!isTouched.resDate || (resDate > new Date(0)) ? <></> : <p>Choose a correct date</p>}

        <label htmlFor="res-time">Choose time*</label>
        <select id="res-time" defaultValue=""
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setResTime(e.target.value)}
            onBlur={() => {setIsTouched({...isTouched, resTime: true})}}>
                <option value="" disabled hidden>hh:mm</option>
                {props.availableTimes.map((elem, index: number) => <option key={index}>{elem}</option>)}
        </select>

        {!isTouched.resTime || (resTime !== '') ? <></> : <p>Choose correct time</p>}

        <label htmlFor="guests">Number of guests*</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNumGuests(Number(e.target.value))}
            onBlur={() => setIsTouched({...isTouched, numGuests: true})}/>

        {!isTouched.numGuests || (numGuests > 0 && numGuests < 11) ? <></> : <p>Choose number of guests (from 1 to 10)</p>}

        <label htmlFor="occasion">Occasion*</label>
        <select id="occasion" defaultValue=""
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setOccasion(e.target.value)}
            onBlur={() => setIsTouched({...isTouched, occasion: true})}>
            <option value="" disabled hidden>Choose occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
        </select>

        {!isTouched.occasion || occasion !== "" ? <></> : <p>Choose an occasion</p>}

        <input id="submit-button" className={classValid} type="submit" value="Make your reservation" role="button"
            aria-label="On Click" disabled={!getIsFormValid()} />
    </form>
  )
}

export default BookingForm;
