  <template>
  <div class="flex">
    <SideBarAdmin @changeTab="changeCurrentComponent"  class="w-60"/>

    <div class="flex-1 w-full overflow-auto h-screen bg-[#F8F9FF] flex flex-col scroll-content">
       <TheHeader />
        <component :is="isSelectedTab" />
    </div>
  </div>
</template>

 <script>
import SideBarAdmin from '../../layout/yardOwner/SideBard.vue';
import Dashboard from '../../layout/yardOwner/DashBoard.vue';
import BookingManagement from '../../layout/yardOwner/BookingManagement.vue';
import YardManager from '../../layout/yardOwner/YardManager.vue';
import CategoryManager from '../../layout/yardOwner/CategoryManager.vue';
import StoreProfile from '../../layout/yardOwner/StoreProfile.vue';
import TheHeader from '../../layout/yardOwner/TheHeader.vue';

export default {
  components: {
    SideBarAdmin,
    Dashboard,
    TheHeader,
    BookingManagement,
    YardManager,
    CategoryManager,
    StoreProfile
  },

  data() {
    return {
      isSelectedTab: "dashboard",
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

