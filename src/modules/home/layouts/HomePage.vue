<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> iChouVision </q-toolbar-title>

        <div>
          <span class="text-subtitle2 q-pa-md">{{ username }}</span>
          <q-btn @click="onLogOut" outline style="color: brown-5" icon="logout">
            <q-tooltip class="bg-primary">Cerrar sesion</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menú principal </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from "../../auth/composables/useAuth";
import EssentialLink from "src/modules/home/components/EssentialLink.vue";

const linksList = [
  {
    title: "Dashboard",
    caption: "quasar.dev",
    icon: "dashboard",
    link: "https://quasar.dev",
  },
  {
    title: "Repositorios",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "HomePage",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const router = useRouter();
    const { logout } = useAuth();
    const username = ref("Ismael Díaz");

    return {
      username,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      onLogOut: () => {
        router.push({ name: "LoginPage" });
        logout();
      },
    };
  },
});
</script>
