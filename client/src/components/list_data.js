import { v4 as uuidv4 } from 'uuid';

export const temp_data = [
  { id: uuidv4(), text: 'Do this thing', title: 'Task 1', list: 'List 1' },
  { id: uuidv4(), text: 'Do that thing', title: 'Task 3', list: 'List 1' },
  { id: uuidv4(), text: 'Do something else', title: 'Task 2', list: 'List 2' },
  { id: uuidv4(), text: 'Do everything', title: 'Task 12', list: 'List 3' },
];

export const lists = [
  {
    id: uuidv4(),
    name: 'List 3',
    tasks: [
      { id: uuidv4(), text: 'Do this thing', title: 'Task 1' },
      { id: uuidv4(), text: 'Do that thing', title: 'Task 3' },
    ],
  },
  {
    id: uuidv4(),
    name: 'List 1',
    tasks: [
      { id: uuidv4(), text: 'Do this thing', title: 'ASDF 1' },
      { id: uuidv4(), text: 'Do that thing', title: 'ASDE 3' },
    ],
  },
  {
    id: uuidv4(),
    name: 'List 2',
    tasks: [
      { id: uuidv4(), text: 'Do this thing', title: 'QWQQ 1' },
      { id: uuidv4(), text: 'Do that thing', title: 'QEWW 3' },
    ],
  },
  {
    id: uuidv4(),
    name: 'List 4',
    tasks: [
      { id: uuidv4(), text: 'Do this thing', title: 'POKEMON 1' },
      { id: uuidv4(), text: 'Do that thing', title: 'TaPOKEMONsk 3' },
    ],
  },
];
