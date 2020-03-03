import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { BreedList } from './BreedList';

const BREEDS = [
  {
    id: '1',
    name: 'Abyssinian',
    origin: 'Ethiopia',
    temperament: 'Skittish',
    description:
      'Abyssinians are highly intelligent and intensely inquisitive. They love to investigate and will leave no nook or cranny unexplored.',
  },
  {
    id: '2',
    name: 'Scottish Fold',
    origin: 'Scotland',
    temperament: 'Friendly',
    description:
      'The smart and friendly Scottish Fold loves playing with challenging, puzzling toys to test her intelligence.',
  },
  {
    id: '3',
    name: 'Himalayan',
    origin: 'Nepal',
    temperament: 'Outgoing',
    description: 'The Himalayan Cat is a sweet and mild-tempered feline. She’s affectionate but selective.',
  },
  {
    id: '4',
    name: 'Bengal',
    origin: 'Asia',
    temperament: 'Outgoing',
    description:
      'This docile house cat has what some would call a rambunctious personality. Bengal cats are playful and love to chase, climb, investigate and be part of the action.',
  },
  {
    id: '5',
    name: 'Persian',
    origin: 'Iran',
    temperament: 'Skillish',
    description: 'The docile Persian is a quiet feline who enjoys a calm and relaxing environment.',
  },
  {
    id: '6',
    name: 'Turkish Van',
    origin: 'Turkey',
    temperament: 'Friendly',
    description: 'A slow-maturing breed, the Turkish Van takes three to five years to reach maturity.',
  },
];

describe('BreedList', () => {
  test('renders the breed table', async () => {
    expect.assertions(4);

    const component: RenderResult = render(<BreedList breeds={BREEDS} />);
    const headers = component.container.querySelectorAll('th');
    const tableBody: HTMLTableSectionElement | null = component.container.querySelector('tbody');

    expect(tableBody).not.toBeFalsy();
    expect(tableBody?.children.length).toBe(5);
    expect(headers.length).toBe(4);
    expect(component.getByText('Scottish Fold')).toBeTruthy();
  });

  test('paginates breeds', async () => {
    expect.assertions(5);

    const component: RenderResult = render(<BreedList breeds={BREEDS} />);
    const tableBody: HTMLTableSectionElement | null = component.container.querySelector('tbody');

    expect(tableBody).not.toBeFalsy();
    expect(tableBody?.children.length).toBe(5);
    expect(component.getByText('1-5 of 6')).toBeTruthy();

    const pageChange: HTMLElement = component.getByTitle('Next page');
    pageChange.click();

    expect(component.getByText('6-6 of 6')).toBeTruthy();
    expect(tableBody?.children.length).toBe(1);
  });
});
