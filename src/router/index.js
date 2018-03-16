import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Game from '@/components/Game'
import Results from "@/components/Results";
import Import from "@/components/Import";
import Score from '@/components/Score';
import User from '@/components/User';
import Leaderboard from '@/components/Leaderboard';
import Gameview from '@/components/Gamevue';
import Yourdetail from '@/components/Yourdetail';
import TermsConditions from '@/components/Termsconditions';
import Yourinitial from '@/components/Yourinitials';

Vue.use(Router)

export default new Router({
  routes: [

    {
        path: '/games',
        name: 'game_view',
        component: Gameview
    },
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
        path: '/user',
        name: 'user',
        component: User
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/results',
      name: 'results',
      component: Results
    },
    {
      path: '/import',
      name: 'import',
      component: Import
    },
    {
      path: '/score',
      name: 'score',
      component: Score
    },
    {
        path: '/leader_board',
        name: 'leader_board',
        component: Leaderboard
    },

  {
      path: '/term_condition',
      name: 'term_condition',
      component: TermsConditions
  },
  {
      path: '/your_detail',
      name: 'your_detail',
      component: Yourdetail
  },
  {
      path: '/your_initials',
      name: 'your_initial',
      component: Yourinitial
  },

  ]
})
