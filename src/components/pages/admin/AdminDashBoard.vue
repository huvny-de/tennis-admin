  <template>
  <div class="flex h-screen">
    <SideBarAdmin @changeTab="changeCurrentComponent" class="flex w-[16%]" />

    <div class="flex-1 bg-[#F8F9FF] flex flex-col">
      <the-header :search="searchValue"  @search="SearchMember" />
      <component :searchValue="searchValue" :is="isSelectedTab" />
    </div>
  </div>
</template>

  <script>
import SideBarAdmin from "../../layout/admin/SideBarAdmin.vue";
import YardOwner from "../../layout/admin/YardOwnerList.vue";
import MemberList from "../../layout/admin/MemberList.vue";

export default {
  components: {
    SideBarAdmin,
    YardOwner,
    MemberList,
  },

  data() {
    return {
      isSelectedTab: "YardOwner",
      searchValue: "",
      loading: false,
      currentUser: "",
    };
  },
  methods: {
    changeCurrentComponent(currentTab) {
      this.isSelectedTab = currentTab;
      this.searchValue = "";
    },
    SearchMember(value) {
      this.searchValue = value;
    },
  },
};
</script>

