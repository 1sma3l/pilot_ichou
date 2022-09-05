<template>
  <div v-if="isLoadingItems">
    <q-item-label class="text-center text-subtitle1 q-pa-sm">
      No hay base de datos seleccionada
    </q-item-label>
  </div>
  <div v-else>
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        v-for="menu in menus"
        :key="menu"
        expand-separator
        :icon="menu.icon"
        :label="menu.title"
      >
        <q-expansion-item
          v-for="submenu in submenus"
          :key="submenu"
          :header-inset-level="0.5"
          expand-separator
          :icon="submenu.icon"
          :label="submenu.title"
        >
          <q-item
            clickable
            v-for="items in submenu.menuitem"
            :key="items"
            @click="navigateTo(items.Ira)"
          >
            <q-item-section v-if="items.icon" avatar>
              <q-icon :name="items.icon" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ items.title }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script>
//import useItemsMenu from "src/modules/itemsMenu/composables/useItemsMenu";
import { useRouter } from "vue-router";
import useItemsMenu from "src/modules/home/composables/useItemsMenu";

export default {
  name: "EssentialLink",

  setup() {
    const router = useRouter();
    const { isLoadingItems, menus, submenus } = useItemsMenu();

    return {
      //Variables del State
      isLoadingItems,

      menus,
      submenus,

      navigateTo(nameComponent) {
        //Abro el componente del visor de pdf, en una nueva pesta�a, para que no se muestre el dashboard de la aplicaci�n
        //Abrir el componente en pesta�a independiente
        if (nameComponent.startsWith("pdfViewer")) {
          let routerUrl = router.resolve({
            name: "pdfViewer",
            query: { uuid: "A938BF06-87AC-47EB-BA9C-D6384231F508" },
          });
          window.open(routerUrl.href, "_blank");
        } else if (nameComponent.startsWith("http")) {
          //Abrir URL de pagina externa en pesta�a independiente
          window.open(nameComponent, "_blank");
        } else {
          //Abrir componente de Vue, dentro del RouterView
          router.push({ name: nameComponent });
        }
      },
    };
  },
};
</script>
