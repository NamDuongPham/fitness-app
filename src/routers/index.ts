import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../components/pages/Welcome.vue";
import Dashboard from "../components/pages/Dashboard.vue";
import Workout from "../components/pages/Workout.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    props: () => ({
      handleChangeDisplay: (idx: number) => {
        console.log("Change display:", idx);
      },
    }),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    props: (route: any) => ({
      firstIncompleteWorkoutIndex: route.query.idx ?? 0,
      handleSelectWorkout: (id: number) => {
        console.log("Selected workout:", id);
      },
      handleResetPlan: () => {
        console.log("reset plan");
      },
    }),
  },
  {
    path: "/workout/:id",
    name: "Workout",
    component: Workout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
