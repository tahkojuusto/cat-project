import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { SearchForm } from './SearchForm';

describe('SearchForm', () => {
  test('has input form with placeholder text', async () => {
    expect.assertions(1);

    const searchFnMock: jest.Mock = jest.fn();
    const component: RenderResult = render(<SearchForm search={searchFnMock} />);

    const input = component.container.querySelector('input');
    expect(input).toHaveProperty('placeholder', 'Search breeds by name or origin');
  });

  test('filters names and origins', async () => {
    expect.assertions(4);

    const searchFnMock: jest.Mock = jest.fn();
    const component: RenderResult = render(<SearchForm search={searchFnMock} />);

    const input: HTMLElement = component.getByPlaceholderText('Search breeds by name or origin');
    const form: HTMLFormElement | null = component.container.querySelector('form');

    fireEvent.change(input, { target: { value: 'Persian' } });
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fireEvent.submit(form!);

    // Search will be called twice (write to the input + submit).
    expect(searchFnMock.mock.calls.length).toBe(2);
    expect(searchFnMock).toHaveBeenCalledWith('Persian');

    fireEvent.change(input, { target: { value: 'Bengal' } });
    fireEvent.keyUp(input);
    expect(searchFnMock).toHaveBeenCalledWith('Bengal');
    expect(searchFnMock.mock.calls.length).toBe(3);
  });
});
