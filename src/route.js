import Vue from "vue";
import VueRouter from "vue-router";
import Top from "./views/Top.vue";
import Profile from "./views/Profile.vue";
import Program from "./views/Program.vue";
import ProgramDetail from "./views/ProgramDetail.vue";
import Drawing from "./views/Drawing.vue";
import Contact from "./views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Top },
  { path: "/Profile", component: Profile },
  { path: "/Program", component: Program },
  { path: "/Program/:id", component: ProgramDetail, props: true },
  { path: "/Drawing", component: Drawing },
  { path: "/Contact", component: Contact },
];

const router = new VueRouter({
  routes: routes,
});

export default router;
