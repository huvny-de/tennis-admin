  <template>
  <div class="flex h-screen">
    <preloader-component />

    <SideBarAdmin @changeTab="changeCurrentComponent" class="flex w-[16%]" />

    <div class="flex-1 bg-[#F8F9FF] flex flex-col">
      <the-header />
      <component :is="isSelectedTab" />
    </div>
  </div>
</template>

  <script>
import SideBarAdmin from "../../layout/admin/SideBarAdmin.vue";
import Memberships from "../../layout/admin/Memberships.vue";
import CreateAccount from "../../layout/admin/CreateAccount.vue";

export default {
  components: {
    SideBarAdmin,
    Memberships,
    CreateAccount,
  },
  data() {
    return {
      isSelectedTab: "Memberships",
    };
  },
  methods: {
    changeCurrentComponent(currentTab) {
      console.log(currentTab);
      this.isSelectedTab = currentTab;
    },
  },
};
</script>

