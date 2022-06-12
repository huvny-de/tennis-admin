<template>
  <div class="container mx-auto h-[14.8%] mb-8 border-1 pl-1 md:mb-0">
    <div class="h-full px-4 flex bg-white items-center justify-between">
      <div class="relative mx-4 lg:mx-0 w-[70%] flex items-center">
        <span
          class="
            absolute
            inset-y-0
            left-10
            flex
            items-center
            pl-3
            cursor-pointer
          "
          @click="EmitSearchValue()"
        >
          <font-awesome-icon
            class="w-5 h-5 text-[#ACACAC]"
            icon="magnifying-glass"
          />
        </span>
        <input-component
          id="inputSearch"
          class="
            mr-8
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
          placeholder="Search Member..."
        ></input-component>
      </div>

      <div class="flex justify-end items-center flex-1 mr-4">
        <select-list-component
          :id="dropDownAccount.id"
          :dropDownToggle="dropDownAccount.dropDownToggle"
          :dataList="dropDownAccount.listItem"
        >
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
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      dropDownAccount: {
        id: "dropdownBottomButton1",
        dropDownToggle: "dropdownBottom1",
        listItem: [
          {
            text: "My Account",
            link: "/profile",
          },
          {
            text: "Sign Out",
            link: "/login",
          },
        ],
      },
    };
  },
  methods: {
    EmitSearchValue() {
      let searchInput = document.getElementById("inputSearch");
      this.$emit("search", searchInput.value);
    },
  },
};
</script>