<template>
  <button
    :id="id"
    :data-dropdown-toggle="dropDownToggle"
    data-dropdown-placement="bottom"
    class="
      text-[#747474]
      font-medium
      mt-3
      mb-3
      hover:bg-[#eee6e6]
      focus:ring-2 focus:outline-none focus:ring-blue-300
      rounded-lg
      px-4
      py-1
      text-center
      inline-flex
      items-center
      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:bg-blue-800
    "
    type="button"
  >
    <slot></slot>
  </button>

  <!--Dropdown menu-->
  <div
    :id="dropDownToggle"
    class="
      z-10
      hidden
      bg-white
      divide-y divide-gray-100
      rounded
      shadow
      w-44
      dark:bg-gray-700
    "
  >
    <ul
      class="py-1 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownBottomButton"
    >
      <li v-for="item in dataList" :key="item">
        <a
          :href="item.link"
          class="
            block
            px-4
            py-2
            hover:bg-gray-100
            dark:hover:bg-gray-600 dark:hover:text-white
          "
          >{{ item.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      require: true,
    },
    id: {
      type: String,
      require: true,
    },
    dropDownToggle: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      dropDownList: this.dataList,
    };
  },
};
</script>

  <style scoped>
#dropdownBottomButton2 {
  border-color: #e6e7e9;
  border: 2px solid #e6e7e9;
  background: #f8f9ff;
}
</style>