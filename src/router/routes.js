const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Home.vue") },
      {
        path: "/registration/",
        component: () => import("pages/form/RegistrationPage.vue"),
      },
      {
        path: "/registration/success",
        component: () => import("pages/form/Registered.vue"),
      },
      {
        path: "/registration/detail",
        component: () => import("pages/form/RegistrationDetail.vue"),
      },
      {
        path: "/registration/:id",
        component: () => import("pages/form/RegistrationPage.vue"),
        params: true,
        props: true,
      },
      {
        path: "/doctor/search",
        component: () => import("pages/SearchDoctorPage.vue"),
      },
      {
        path: "/user/login",
        component: () => import("pages/form/LoginOrRegister.vue"),
      },
    ],
  },
  {
    path: "/test",
    component: () => import("pages/test.vue"),
  },
  {
    path: "/depo",
    component: () => import("pages/opname/ChooseDepo.vue"),
  },
  {
    path: "/so",
    name:'so',
    component: () => import("pages/opname/FormSO.vue"),
  },
  {
    path: '/tshirt',
    component: () => import("pages/Tshirt.vue"),
  },
  // {
  //   path:'/registration',
  //   component: ()=> import('pages/form/RegistrationPage.vue'),
  //   children:[
  //     {path:':id',
  //       name : 'registration',
  //       component:()=>{ import ('pages/form/RegistrationPage.vue')},
  //       props: true,
  //       params:true

  //   }
  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
