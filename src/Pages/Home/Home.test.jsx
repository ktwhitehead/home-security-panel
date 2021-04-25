import React from 'react';
import Home from './Home';
import withContext from '../../Test';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { statusMessages } from './StatusMessage';

describe('Home', () => {
  it('displays the home page and current status', () => {
    const currentStatus = 'disarmed';
    const { getByTestId } = render(withContext(<Home />, { status: currentStatus }));

    const home = getByTestId('HomePage');

    expect(home).toBeVisible();
  });

  it('displays the Arm Stay button and current status when disarmed', () => {
    const currentStatus = 'disarmed';
    const { getByTestId } = render(withContext(<Home />, { status: currentStatus }));

    const armButton = getByTestId('ArmStayButton');
    const status = getByTestId('HomeStatusMessage');

    expect(armButton).toBeVisible();
    expect(status.innerHTML).toEqual(statusMessages[currentStatus]);
  });

  it('displays the Disarm button and current status when armed', () => {
    const currentStatus = 'armed_stay';
    const { getByTestId } = render(withContext(<Home />, { status: currentStatus }));

    const disarmButton = getByTestId('DisarmButton');
    const status = getByTestId('HomeStatusMessage');

    expect(disarmButton).toBeVisible();
    expect(status.innerHTML).toEqual(statusMessages[currentStatus]);
  });

  it('displays the pin pad when a status button is clicked', () => {
    const currentStatus = 'armed_stay';
    const { getByTestId } = render(withContext(<Home />, { status: currentStatus }));

    const disarmButton = getByTestId('DisarmButton');

    fireEvent.click(disarmButton);

    const pinPad = getByTestId('PinPad')

    expect(pinPad).toBeVisible();
  });
});
