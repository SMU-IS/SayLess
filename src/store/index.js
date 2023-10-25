import { createStore } from 'vuex';
import { userModule } from './userModule';
import { inventoryModule } from './inventoryModule';
import { recipeModule } from './recipeModule';
import { questModule } from './questModule';
import { chatModule } from './chatModule';
import { communityModule } from './communityModule';

const store = createStore({
  modules: {
    chat: chatModule,
    community: communityModule,
    inventory: inventoryModule,
    quest: questModule,
    recipe: recipeModule,
    user: userModule,
  },
});

export default store;
