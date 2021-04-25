import React from 'react';
import PinPad from './PinPad';
import withContext from '../../Test';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

describe('PinPad', () => {
  test('displays a pin pad', () => {
    const setDisplay = jest.fn();
    const onPinEntered = jest.fn();
    const { getByTestId } = render(withContext(<PinPad display setDisplay={setDisplay} onPinEntered={onPinEntered} />));

    const pinPad = getByTestId('PinPad');
    expect(pinPad).toBeVisible();
  });

  test('displays the pin number entered', () => {
    const setDisplay = jest.fn();
    const onPinEntered = jest.fn();
    const setErrorMessage = jest.fn();
    const { getByTestId } = render(
      withContext(<PinPad display setDisplay={setDisplay} onPinEntered={onPinEntered} setErrorMessage={setErrorMessage} />)
    );

    const padNumber1 = getByTestId('PadNumber-1');
    const padNumber9 = getByTestId('PadNumber-9');

    fireEvent.click(padNumber1);
    fireEvent.click(padNumber9);

    const enteredNumber1 = getByTestId('PinNumber-1');
    const enteredNumber9 = getByTestId('PinNumber-9');

    expect(enteredNumber1).toBeVisible();
    expect(enteredNumber9).toBeVisible();
  });

  test('removes the pin numbers when 4 numbers have been entered', () => {
    const setDisplay = jest.fn();
    const onPinEntered = jest.fn();
    const setErrorMessage = jest.fn();
    const { getByTestId, queryByTestId } = render(
      withContext(<PinPad display setDisplay={setDisplay} onPinEntered={onPinEntered} setErrorMessage={setErrorMessage} />)
    );

    const padNumber1 = getByTestId('PadNumber-1');
    const padNumber2 = getByTestId('PadNumber-2');
    const padNumber3 = getByTestId('PadNumber-3');
    const padNumber4 = getByTestId('PadNumber-4');

    fireEvent.click(padNumber1);
    fireEvent.click(padNumber2);
    fireEvent.click(padNumber3);
    fireEvent.click(padNumber4);

    expect(onPinEntered).toHaveBeenCalledWith('1234');

    const enteredNumber1 = queryByTestId('PinNumber-1');
    const enteredNumber2 = queryByTestId('PinNumber-2');
    const enteredNumber3 = queryByTestId('PinNumber-3');
    const enteredNumber4 = queryByTestId('PinNumber-4');

    expect(enteredNumber1).toBeNull();
    expect(enteredNumber2).toBeNull();
    expect(enteredNumber3).toBeNull();
    expect(enteredNumber4).toBeNull();
  });

  test('displays an error message if provided', () => {
    const setDisplay = jest.fn();
    const onPinEntered = jest.fn();
    const errorMessage = 'Error Message'
    const { getByTestId } = render(
      withContext(<PinPad display setDisplay={setDisplay} onPinEntered={onPinEntered} errorMessage={errorMessage} />)
    );

    expect(getByTestId('PinPadError').innerHTML).toEqual(errorMessage);
  });

  test('matches the expected styling', () => {
    const setDisplay = jest.fn();
    const onPinEntered = jest.fn();
    const { getByTestId } = render(withContext(<PinPad display setDisplay={setDisplay} onPinEntered={onPinEntered} />));

    const pinPad = getByTestId('PinPad');
    expect(pinPad).toMatchSnapshot();
  });
});
