import { createRouter, createWebHistory } from 'vue-router';
import MessagePage from '@/views/MessagePage.vue';
import AddItem from '@/views/AddItem.vue';
import OnboardPage from '@/views/OnboardPage.vue';
import PageNotFound from '@/views/PageNotFound.vue';
import QuestPageVue from '@/views/QuestPage.vue';
import LandingPageVue from '@/views/LandingPage.vue';
import LoginPageVue from '@/views/LoginPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';
import ResetPasswordPage from '@/views/ResetPassword.vue';
import RecipePage from '@/views/RecipePage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import ChatDetails from '@/views/ChatDetails.vue';
import CommunitySharingDetails from '@/views/CommunitySharing/CommunitySharingDetails.vue';
import CommunitySharingAll from '@/views/CommunitySharing/CommunitySharingAll.vue';
import InventoryPage from '@/views/Inventory/InventoryPage.vue';
import NotificationDetails from '@/views/NotificationDetails.vue';
import store from '@/store';

const routes = [
  {
    path: '/onboard',
    name: 'OnboardPage',
    component: OnboardPage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPageVue,
  },
  {
    path: '/signup',
    name: 'SignUpPage',
    component: SignUpPage,
  },
  {
    path: '/reset-password',
    name: 'ResetPasswordPage',
    component: ResetPasswordPage,
  },
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPageVue,
  },
  {
    path: '/community',
    name: 'CommunitySharingAll',
    component: CommunitySharingAll,
  },
  {
    path: '/item/:id',
    name: 'CommunitySharingDetails',
    component: CommunitySharingDetails,
  },
  {
    path: '/inventory',
    name: 'InventoryPage',
    component: InventoryPage,
  },
  {
    path: '/quest',
    name: 'QuestPage',
    component: QuestPageVue,
  },
  {
    path: '/message',
    name: 'MessagePage',
    component: MessagePage,
  },
  {
    path: '/add-item',
    name: 'AddItem',
    component: AddItem,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound,
  },
  {
    path: '/recipe',
    name: 'RecipePage',
    component: RecipePage,
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage,
  },
  {
    path: '/chat',
    name: 'ChatDetails',
    component: ChatDetails,
  },
  {
    path: '/message/:chatId',
    name: 'chat-details',
    component: ChatDetails,
  },
  {
    path: '/notification',
    name: 'NotificationDetails',
    component: NotificationDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  const isAuthenticated = store.getters.getEmail;
  const forbiddenPages = [
    'LoginPage',
    'SignUpPage',
    'OnboardPage',
    'ResetPasswordPage',
  ];
  if (!isAuthenticated && !forbiddenPages.includes(to.name)) {
    return {
      name: 'OnboardPage',
    };
  }
  if (isAuthenticated && forbiddenPages.includes(to.name)) {
    return {
      name: 'LandingPage',
    };
  }
});

export default router;
