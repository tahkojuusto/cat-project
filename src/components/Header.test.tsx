import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  test('renders the project name', async () => {
    expect.assertions(1);

    const component: RenderResult = render(<Header />);
    expect(component.getByText('Cat Project')).toBeTruthy();
  });
});
