import { createRouter, createWebHistory } from 'vue-router';
import MessagePage from '@/views/MessagePage.vue';
import AddItem from '@/views/AddItem.vue';
import OnboardPage from '@/views/Onboard.vue';
import PageNotFound from '@/views/PageNotFound.vue';
import LandingPageVue from '@/views/LandingPage.vue';
import LoginPageVue from '@/views/LoginPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';
import ResetPasswordPage from '@/views/ResetPassword.vue';
import ListItemDetails from '@/components/Listings/ListItemsDetails.vue';
import RecipePage from '@/views/RecipePage.vue';
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
    path: '/item/:id',
    name: 'ListItemDetails',
    component: ListItemDetails,
  },
  {
    path: '/recipe',
    name: 'RecipePage',
    component: RecipePage,
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
