import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import CustomButton from './CustomButton.component';
import '@testing-library/jest-dom/extend-expect';

afterEach(() => {
  cleanup();
  onClickMock.mockClear();
});
const onClickMock = jest.fn();

test('fires when the button is clicked', () => {
  const { getByTestId } = render(
    <CustomButton onClick={onClickMock()}>Testing</CustomButton>
  );
  expect(getByTestId('CustomButton')).toBeTruthy();
  expect(getByTestId('CustomButton')).toHaveTextContent('Testing');

  fireEvent.click(getByTestId('CustomButton'));

  expect(onClickMock).toHaveBeenCalledTimes(1);
});

test('snapshot', () => {
  const { container } = render(
    <CustomButton onClick={onClickMock()} btnType="green">
      Testing
    </CustomButton>
  );
  expect(container.firstChild).toMatchSnapshot();
});
