  <template>
  <div class="flex h-screen">
    <SideBarAdmin @changeTab="changeCurrentComponent" class="w-60" />

    <div class="flex-1 w-full overflow-auto h-screen bg-[#F8F9FF] flex flex-col scroll-content">
      <the-header :toggleModal="toggleModal" />
      <component class="overflow-y-auto" :is="isSelectedTab" />
    </div>
  </div>
</template>

  <script>
  import SideBarAdmin from "../../layout/admin/SideBarAdmin.vue";
  import YardOwner from "../../layout/admin/YardOwnerList.vue";
  import MemberList from "../../layout/admin/MemberList.vue";
  import ApproveManager from "../../layout/admin/ApproveManager.vue";
  import FilterAccount from "../../layout/admin/FilterAccount.vue";
  
  export default {
    components: {
      SideBarAdmin,
      YardOwner,
      MemberList,
      ApproveManager,
      FilterAccount
    },
    data() {
      return {
        isSelectedTab: "ApproveManager",
        searchValue: "",
        loading: false,
        currentUser: "",
        toggleModal: 0
      };
    },
    methods: {
      changeCurrentComponent(currentTab) {
        this.isSelectedTab = currentTab;
        this.searchValue = "";
      },
    },
    watch: {
      isSelectedTab() {
        if (this.isSelectedTab === "approveManager") {
          this.hiddenInput = true;
        } else {
          this.hiddenInput = false;
        }
        this.toggleModal++;
      },
  
    },
  };
  </script>

