<template>
  <div class="flex h-screen">
    <preloader-component />
    <side-bar-admin class="flex w-[16%]" />

    <div class="flex-1 bg-[#F8F9FF] flex flex-col">
      <div class="container mx-auto h-[13.8%] mb-8 border-1 pl-1">
        <div class="h-full px-4 flex bg-white items-center justify-between">
          <div class="relative mx-4 lg:mx-0 w-[70%]">
            <span class="absolute inset-y-0 left-9 flex items-center pl-3">
              <font-awesome-icon
                class="w-5 h-5 text-[#ACACAC]"
                icon="magnifying-glass"
              />
            </span>
            <input-component
              class="
                w-[60%]
                rounded
                h-12
                pl-12
                border-gray-200
                mt-8
                ml-10
                bg-[#F5F5F7]
                placeholder:text-slate-400
              "
              placeholder="Search..."
            ></input-component>
          </div>

          <div class="flex justify-end items-center flex-1 mr-4">
            <select-list-component class="bg-none border-0" :dataList="dropDownAccount">
              <img
                class="w-7 h-7 rounded mr-3"
                :src="require('../../assets/img/son.jpg')" />
              Senior Henry
              <font-awesome-icon
                class="w-4 h-4 ml-4 text-[#ACACAC]"
                icon="caret-down"
            /></select-list-component>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-8 h-[80%]">
        <div class="w-[100%] h-full">
          <div class="flex items-center justify-center">
            <h2 class="mr-4 text-lg font-semibold text-[#747474]">
              Data Member
            </h2>
            <select-list-component
              :dataList="dropDownStatus"
              >Status
              <font-awesome-icon
                class="w-4 h-4 ml-4 text-[#ACACAC]"
                icon="caret-down"
            /></select-list-component>
          </div>

          <div class="container mx-auto h-full mt-4">ABC</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarAdmin from "../layout/admin/SideBarAdmin.vue";
import InputComponent from "../ui/InputComponent.vue";
import PreloaderComponent from "../ui/PreloaderComponent.vue";
import SelectListComponent from "../ui/SelectListComponent.vue";

export default {
  components: {
    SideBarAdmin,
    PreloaderComponent,
    InputComponent,
    SelectListComponent,
  },
  data() {
    return {
      dropDownStatus: ["All", "Active", "InActive"],
      dropDownAccount: ["My Account", "Sign Out"],
    };
  },
};
</script>

