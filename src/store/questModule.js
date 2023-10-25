import { questCards } from '@/data/questCards';

const questModule = {
  state: {
    user: {
      questData: JSON.parse(localStorage.getItem('quest-data')) || questCards,
    },
  },
  getters: {
    getQuestData(state) {
      return state.user.questData[0];
    },
  },
  mutations: {
    SET_QUEST_STATUS(state, payload) {
      const questChallenge = state.user.questData[0].challenges.find(
        (result) => result.id === payload,
      );
      if (questChallenge.status === 'Start') {
        questChallenge.status = 'In Progress';
      } else {
        questChallenge.status = 'Completed';
        questChallenge.completed = true;
      }
      localStorage.setItem('quest-data', JSON.stringify(state.user.questData));
    },
  },
  actions: {
    updateQuestStatus(context, { id }) {
      context.commit('SET_QUEST_STATUS', id);
    },
  },
};

export { questModule };
