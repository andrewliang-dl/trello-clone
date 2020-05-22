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
      { id: uuidv4(), text: 'Do this thing', title: 'What a great app!' },
      { id: uuidv4(), text: 'Do that thing', title: 'Create a trello app' },
    ],
  },
  {
    id: uuidv4(),
    name: 'List 2',
    tasks: [
      { id: uuidv4(), text: 'Do this thing', title: 'This is a good idea!' },
      { id: uuidv4(), text: 'Do that thing', title: 'Do something important' },
    ],
  },
  {
    id: uuidv4(),
    name: 'List 4',
    tasks: [
      { id: uuidv4(), text: 'Do this thing', title: 'Do some task' },
      { id: uuidv4(), text: 'Do that thing', title: 'Take the trash out' },
    ],
  },
];
