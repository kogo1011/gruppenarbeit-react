import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('does the button exist', () => 
{
  render(<App />);
  const buttonElement = screen.getByTestId("change-color-button");
  expect(buttonElement).toBeInTheDocument();
})

test('does the button change its color', () => 
{
  render (<App />);
  const buttonElement = screen.getByTestId("change-color-button");
  const color = buttonElement.style.backgroundColor;
  fireEvent.click(buttonElement);
  const newColor = buttonElement.style.backgroundColor;
  expect(newColor).toEqual(color);
})

test('change button size on click', () =>
{
  render (<App />);
  const buttonElement = screen.getByTestId("change-size-button");
  const size = buttonElement.style.padding;
  fireEvent.click(buttonElement);
  const newSize = buttonElement.style.padding;
  expect(newSize).not.toEqual(size);
})

// In der Workflow:
// 1. Nach der Ausführung von den Tests muss ein Image aus der gebauten React Applikation erstellen.
// 2. Das Image muss nach Docker Hub gepushet werden (die Credentaisl für Docker Hub müssen als Variablen/Secretes gesetzt)
// 3. Erstellung von einem neuen job, in dem man das Docker Image aus dem Docker Hub repo auscheckt.