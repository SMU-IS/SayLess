const questCards = [
  {
    questId: 1,
    questName: 'Quest 1',
    challenges: [
      {
        id: 'Challenge 1',
        description: 'Add an item to your inventory manually',
        completed: false,
        status: 'Start',
        callToAction: '/inventory',
      },
      {
        id: 'Challenge 2',
        description: 'Scan a receipt to add items to your inventory',
        completed: false,
        status: 'Start',
        callToAction: '/inventory',
      },
      {
        id: 'Challenge 3',
        description: 'Grab an item from the community sharing marketplace',
        completed: false,
        status: 'Start',
        callToAction: '/community',
      },
    ],
  },
  {
    questId: 2,
    questName: 'Quest 2',
    challenges: [
      {
        id: 'Challenge 1',
        description: 'TBC',
        completed: false,
        status: 'Start',
        callToAction: '/inventory',
      },
      {
        id: 'Challenge 2',
        description: 'TBC',
        completed: false,
        status: 'Start',
        callToAction: '/inventory',
      },
      {
        id: 'Challenge 3',
        description: 'TBC',
        completed: true,
        status: 'Completed',
        callToAction: '/community',
      },
    ],
  },
];

export { questCards };
