import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button'

describe('<Button />', () => {
  it('calls the function prop', () => {
    const onClick = jest.fn()

    render(<Button text='test' handleClick={onClick}/>)

    const button = screen.getByText("test")

    userEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  });
})