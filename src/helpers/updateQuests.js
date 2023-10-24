import { questCards } from '@/data/questCards.js';

const updateQuestStatus = (challengeId) => {
  const updatedQuestCards = questCards.map((card) => {
    if (card.id === challengeId) {
      return { ...card, checked: true };
    }
    return card;
  });

  questCards.length = 0;
  questCards.push(...updatedQuestCards);
};

const updateChallengeStatus = (updateId) => {
  questCards.forEach((card) => {
    if (card.id === updateId) {
      if ((card.status = 'Start')) {
        card.status = 'In Progress';
      } else {
        card.status = 'Completed';
      }
    }
  });
};

export { updateQuestStatus, updateChallengeStatus };
