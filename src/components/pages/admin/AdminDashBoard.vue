  <template>
  <div class="flex h-screen">
    <SideBarAdmin @changeTab="changeCurrentComponent" class="w-60" />

    <div class="flex-1 w-full overflow-auto h-screen bg-[#F8F9FF] flex flex-col scroll-content">
      <the-header
        :isHiddenInput="hiddenInput"
        :search="searchValue"
        @search="SearchMember"
      />
       <component class="overflow-y-auto" :searchValue="searchValue" :is="isSelectedTab" />
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
  provide() {
    return {
      searchValue : this.searchValue
    }
  },
  components: {
    SideBarAdmin,
    YardOwner,
    MemberList,
    ApproveManager,
    FilterAccount
  },
  created() {
    this.hiddenInput = true;
  },

  data() {
    return {
      isSelectedTab: "ApproveManager",
      searchValue: "",
      loading: false,
      currentUser: "",
      hiddenInput: false,
      triggerCount : 0
    };
  },
  methods: {
    changeCurrentComponent(currentTab) {
      this.isSelectedTab = currentTab;
      this.searchValue = "";
    },
    SearchMember(value) {
      this.searchValue = value;
      this.triggerCount++;
      
    },
  },
  watch: {
    isSelectedTab() {
      if (this.isSelectedTab === "approveManager") {
        this.hiddenInput = true;
      } else {
        this.hiddenInput = false;
      }
    },
  },
};
</script>

