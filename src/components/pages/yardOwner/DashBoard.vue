  <template>
  <div class="flex">
    <SideBarAdmin @changeTab="changeCurrentComponent" class="w-60" />

    <div class="flex-1 w-full overflow-auto h-screen bg-[#F8F9FF] flex flex-col scroll-content">
      <TheHeader :toggleModal="toggleModal" />
      <component :is="isSelectedTab" />
    </div>
  </div>
</template>

 <script>
 import SideBarAdmin from '../../layout/yardOwner/SideBard.vue';
 import Dashboard from '../../layout/yardOwner/DashBoard.vue';
 import BookingManager from '../../layout/yardOwner/BookingManager.vue';
 import YardManager from '../../layout/yardOwner/YardManager.vue';
 import SlotManager from '../../layout/yardOwner/SlotManager.vue';
 import StoreProfile from '../../layout/yardOwner/StoreProfile.vue';
 import TheHeader from '../../layout/yardOwner/TheHeader.vue';
 import PriceManager from '../../layout/yardOwner/Slot/SettingRate.vue';
 import PromotionManager from '../../layout/yardOwner/PromotionManager.vue';
 
 export default {
   components: {
     SideBarAdmin,
     Dashboard,
     TheHeader,
     BookingManager,
     YardManager,
     SlotManager,
     StoreProfile,
     PriceManager,
     PromotionManager
   },
 
   data() {
     return {
       isSelectedTab: "dashboard",
       searchValue: "",
       loading: false,
       currentUser: "",
       toggleModal: 0
     };
   },
   methods: {
     changeCurrentComponent(currentTab) {
       let user = JSON.parse(localStorage.getItem('user'));
       if (!user) {
         this.$store.dispatch('auth/logout');
         this.$store.push('/login');
       } else {
         this.isSelectedTab = currentTab;
         this.searchValue = "";
         this.toggleModal++;
       }
 
     },
     SearchMember(value) {
       this.searchValue = value;
     },
   },
 };
 </script>

