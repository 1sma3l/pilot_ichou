const useItemsMenu = () => {
  return {
    //State
    //isLoadingItems: computed(() => store.state.item.isLoadingItems ),
    //menus: computed(()=> store.state.item.mainMenu),
    //submenus: computed(()=> store.state.item.subMenu),

    isLoadingItems: true,
    menus: [],
    submenus: [],
  };
};
export default useItemsMenu;
