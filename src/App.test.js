import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('<App />', () => {
  test('renders learn react link', () => {
    render(<App />);

    const linkElement = screen.getByText(/learn react/i);

    expect(linkElement).toBeInTheDocument();
  });

  it('renders the button', () => {
    const { getByText } = render(<App />)

    const button = getByText("click me")

    expect(button).toBeInTheDocument()
  });

  it('clicks the button', () => {
    render(<App />)
    screen.debug()
    expect(() => screen.getByText("You clicked the button")).toThrowError()

    const button = screen.getByText("click me")

    userEvent.click(button)

    const revealedText = screen.getByText("You clicked the button")

    expect(revealedText).toBeInTheDocument()
  });
})
