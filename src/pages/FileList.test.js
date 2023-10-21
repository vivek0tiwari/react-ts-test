import { render, screen } from '@testing-library/react';
import {FileList} from './FileList';
import {PAGE_HEADER} from './constants'


test('renders file expolere', () => {
  render(<FileList />);
  const linkElement = screen.getByText(PAGE_HEADER);
  expect(linkElement).toBeInTheDocument();
});


