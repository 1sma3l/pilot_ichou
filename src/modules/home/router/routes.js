export default {
  path: "/home",
  name: "home",
  component: () => import("../layouts/HomePage.vue"),
  children: [
    {
      path: "",
      name: "IndexPage",
      component: () => import("src/pages/IndexPage.vue"),
    },
  ],
};
