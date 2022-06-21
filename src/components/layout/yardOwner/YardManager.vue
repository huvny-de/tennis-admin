<template>
  <div class="p-8">
    <div class="flex flex-col items-center justify-center mb-4">
      <ul
        v-if="isSelectedTab === 'admin-profile'"
        class="
          nav nav-tabs
          flex flex-col
          md:flex-row
          flex-wrap
          list-none
          border-b-0
          pl-0
          mb-4
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
            <h2>Danh Sách Sân</h2>
          </div>
        </li>

        <li
          @click="setSelectedTab('update-password')"
          class="nav-item"
          role="presentation"
        >
          <span
            class="
              cursor-pointer
              w-full
              block
              font-medium
              text-xs
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
            ><h2>Tạo Sân</h2></span
          >
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
          mb-4
        "
        id="tabs-tab3"
        role="tablist"
      >
        <li
          @click="setSelectedTab('admin-profile')"
          class="nav-item"
          role="presentation"
        >
          <span
            class="
              cursor-pointer
              w-full
              block
              font-medium
              text-xs
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
            ><h2>Danh Sách Sân</h2></span
          >
        </li>

        <!--active-->
        <li role="presentation">
          <div
            class="
              w-full
              block
              font-semibold
              text-xs
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
            Tạo Sân
          </div>
        </li>
      </ul>
      <component :is="isSelectedTab"></component>
    </div>
    <div class="mt-2 bg-white p-5 px-4 w-full rounded-md box-border shadow">
      <span>
        <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
          Quản lý Sân
        </h2>
        <p class="text-gray-400 font-lexend font-normal">Sân đang sở hữu</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        // isSelectedTab : ''
    }
  },
};
</script>