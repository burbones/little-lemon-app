import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { fetchAPI } from './utils/const';

test('Renders Choose date label element', () => {
  render(<BookingForm availableTimes={[]} dispatchTimes={() => {}} submitForm={() => {}}/>);
  const labelElement = screen.getByText("Choose date*");
  expect(labelElement).toBeInTheDocument();
});

test('Submits Bookings Form', () => {
  const initializeTimes = (): String[] => {
    const initialTimes = fetchAPI(new Date());
    return initialTimes;
  }
  render(<BookingForm availableTimes={initializeTimes()} dispatchTimes={() => {}} submitForm={() => {}} />);
  fireEvent.submit(screen.getByRole('form'));
});

test('InitializeTimes function returns the correct expected value', () => {
  const mockInit = jest.fn(() => {
    const initialTimes = fetchAPI(new Date());
    return initialTimes;
  });
  mockInit();
  expect(mockInit).toHaveReturnedWith(fetchAPI(new Date()));
});

test('UpdateTime function returns the same value that is provided in the state', () => {
  const mockUpdate = jest.fn((state, action) => {
    const {type, payload} = action;
    switch (type) {
      case "update":
        return {
          availableTimes: fetchAPI(payload)
        };
      default:
        return state;
    }
  });

  const testDate = new Date(12345678)

  mockUpdate({availableTimes: fetchAPI(new Date())}, {type: 'update', payload: testDate});
  expect(mockUpdate).toHaveReturnedWith({availableTimes: fetchAPI(testDate)});
});

test('Checks form date input', () => {
  render(<BookingForm availableTimes={[]} dispatchTimes={() => {}} submitForm={() => {}}/>);
  const inputDateElement = screen.getByLabelText("Choose date*");
  expect(inputDateElement.getAttribute("type")).toBe("date");
})

test('Checks form number of guests input', () => {
  render(<BookingForm availableTimes={[]} dispatchTimes={() => {}} submitForm={() => {}}/>);
  const inputDateElement = screen.getByLabelText("Number of guests*");
  expect(inputDateElement.getAttribute("type")).toBe("number");
  expect(inputDateElement.getAttribute("min")).toBe("1");
  expect(inputDateElement.getAttribute("max")).toBe("10");
})