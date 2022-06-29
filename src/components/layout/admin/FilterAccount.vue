<template>
  <div class="p-4 flex flex-col items-center justify-between">
    <div class="w-full px-4 rounded-md">
      <div class="flex items-center justify-between">
        <span>
          <h2 class="font-bold text-lg text-gray-600 dark:text-gray-200">
            Danh Sách Thành Viên
          </h2>
          <p class="text-[#395170]">Danh sách hủy lịch nhiều nhất</p>
        </span>

        <div class="flex flex-col items-center justify-between">
          <div class="dark:bg-gray-800 p-3 w-full px-4 rounded-md">
            <ul
              v-if="isSelectedTab === 'FilterOwner'"
              class="
                nav nav-tabs
                flex flex-col
                md:flex-row
                flex-wrap
                list-none
                border-b-0
                pl-0
              "
              id="tabs-tab3"
              role="tablist"
            >
              <!--active-->
              <li role="presentation">
                <div
                  class="
                    w-full
                    block
                    font-normal
                    text-small
                    leading-tight
                    uppercase
                    border-x-0 border-t-0 border-b-4
                    px-6
                    py-3
                    my-2
                    active
                  "
                  role="tab"
                >
                  <span class="mx-2 text-[13px] text-[#434141] font-bold"
                    >Chủ Sân</span
                  >
                </div>
              </li>

              <li
                @click="setSelectedTab('FilterMember')"
                class="nav-item"
                role="presentation"
              >
                <span
                  class="
                    cursor-pointer
                    w-full
                    block
                    font-medium
                    text-sm
                    leading-tight
                    uppercase
                    border-x-0 border-t-0 border-b-2 border-transparent
                    px-6
                    py-3
                    my-2
                    hover:border-transparent hover:bg-gray-100
                    focus:border-transparent
                  "
                  id="tabs-profile-tab3"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-profile3"
                  role="tab"
                  aria-controls="tabs-profile3"
                  aria-selected="false"
                >
                  <span class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1"
                    >Thành Viên</span
                  >
                </span>
              </li>
            </ul>
            <ul
              v-else
              class="
                nav nav-tabs
                flex flex-col
                md:flex-row
                flex-wrap
                list-none
                border-b-0
                pl-0
              "
              id="tabs-tab3"
              role="tablist"
            >
              <li
                @click="setSelectedTab('FilterOwner')"
                class="nav-item"
                role="presentation"
              >
                <span
                  class="
                    cursor-pointer
                    w-full
                    block
                    font-normal
                    text-normal
                    uppercase
                    leading-tight
                    border-x-0 border-t-0 border-b-2 border-transparent
                    px-6
                    py-3
                    my-2
                    hover:border-transparent hover:bg-gray-100
                    focus:border-transparent
                  "
                  id="tabs-profile-tab3"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-profile3"
                  role="tab"
                  aria-controls="tabs-profile3"
                  aria-selected="false"
                  ><span
                    class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1"
                    >Chủ Sân</span
                  ></span
                >
              </li>

              <!--active-->
              <li role="presentation">
                <div
                  class="
                    w-full
                    block
                    font-semibold
                    text-normal
                    leading-tight
                    uppercase
                    border-x-0 border-t-0 border-b-4
                    px-6
                    py-3
                    my-2
                    active
                  "
                  role="tab"
                >
                  <span class="mx-2 text-[13px] text-[#434141] font-bold pt-1"
                    >Thành Viên</span
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <component :is="isSelectedTab"></component>
    </div>

    <!-- <nav aria-label="Page navigation example mx-auto">
      <ul class="inline-flex -space-x-px">
        <li>
          <span
            v-if="currentPage == 1"
            class="
              py-2
              px-3
              ml-0
              leading-tight
              text-gray-500
              bg-white
              rounded-l-lg
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700
              dark:bg-gray-800
              dark:border-gray-700
              dark:text-gray-400
              dark:hover:bg-gray-700
              dark:hover:text-white
              cursor-default
            "
            >Previous</span
          >
          <span
            v-else
            class="
              py-2
              px-3
              ml-0
              leading-tight
              text-gray-500
              bg-white
              rounded-l-lg
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700
              dark:bg-gray-800
              dark:border-gray-700
              dark:text-gray-400
              dark:hover:bg-gray-700
              dark:hover:text-white
              cursor-pointer
            "
            @click="paging(currentPage - 1)"
            >Previous</span
          >
        </li>
        <li v-for="page in 5" :key="page">
          <span
            v-if="page === currentPage"
            aria-current="page"
            class="
              py-2
              px-3
              text-blue-600
              bg-blue-50
              border border-gray-300
              hover:bg-blue-100 hover:text-blue-700
              dark:border-gray-700 dark:bg-gray-700 dark:text-white
            "
            >{{ page }}</span
          >
          <a
            v-else
            href="#"
            class="
              py-2
              px-3
              leading-tight
              text-gray-500
              bg-white
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700
              dark:bg-gray-800
              dark:border-gray-700
              dark:text-gray-400
              dark:hover:bg-gray-700
              dark:hover:text-white
            "
            @click="paging(page)"
            >{{ page }}</a
          >
        </li>
        <li>
          <span
            v-if="currentPage == totalPage"
            class="
              py-2
              px-3
              ml-0
              leading-tight
              text-gray-500
              bg-white
              rounded-r-lg
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700
              dark:bg-gray-800
              dark:border-gray-700
              dark:text-gray-400
              dark:hover:bg-gray-700
              dark:hover:text-white
              cursor-default
            "
            >Next</span
          >
          <span
            v-else
            class="
              py-2
              px-3
              ml-0
              leading-tight
              text-gray-500
              bg-white
              rounded-r-lg
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700
              dark:bg-gray-800
              dark:border-gray-700
              dark:text-gray-400
              dark:hover:bg-gray-700
              dark:hover:text-white
              cursor-pointer
            "
            @click="paging(currentPage + 1)"
            >Next</span
          >
        </li>
      </ul>
    </nav> -->
  </div>
</template>

<script>
import FilterMember from "./FilterAccount/FilterMember.vue";
import FilterOwner from "./FilterAccount/FilterOwner.vue";

export default {
  components: { FilterMember, FilterOwner },
  data() {
    return {
      isSelectedTab: "FilterOwner",
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.isSelectedTab = tab;
    },
  },
};
</script>

<style scoped>
select {
  height: 42px;
}
input:focus {
  outline: none;
  border: none;
}
</style>