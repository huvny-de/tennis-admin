<template>
  <div class="p-8 flex flex-col items-center justify-between">
    <div
      class="
        mt-2
        bg-white
        dark:bg-gray-800
        p-3
        w-[60%]
        px-4
        rounded-md
        box-border
        shadow
      "
    >
    <p class="text-red-500 text-sm italic pl-4">* giá hiển thị = giá cơ bản x hệ số</p>

      <ul
        v-if="isSelectedTab === 'NormalDay'"
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
              >Ngày Thường</span
            >
          </div>
        </li>

        <li
          @click="setSelectedTab('WeekendDay')"
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
              >Cuối Tuần</span
            >
          </span>
        </li>

        <!--active-->
        <li
          @click="setSelectedTab('HolidayDay')"
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
              >Ngày Lễ</span
            >
          </span>
        </li>
      </ul>
      <ul
        v-if="isSelectedTab === 'WeekendDay'"
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
          @click="setSelectedTab('NormalDay')"
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
            ><span class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1"
              >Ngày Thường</span
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
              >Cuối Tuần</span
            >
          </div>
        </li>

        <li
          @click="setSelectedTab('HolidayDay')"
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
            ><span class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1"
              >Ngày Lễ</span
            ></span
          >
        </li>
      </ul>
      <ul
        v-if="isSelectedTab === 'HolidayDay'"
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
          @click="setSelectedTab('NormalDay')"
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
            ><span class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1"
              >Ngày Thường</span
            ></span
          >
        </li>

        <li
          @click="setSelectedTab('WeekendDay')"
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
            ><span class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1"
              >Cuối Tuần</span
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
              >Ngày Lễ</span
            >
          </div>
        </li>
      </ul>
      <component :is="isSelectedTab"></component>
    </div>
  </div>
</template>

<script>
import NormalDay from "../RatingByDate/NormalDay.vue";
import HolidayDay from "../RatingByDate/HolidayDay.vue";
import WeekendDay from "../RatingByDate/WeekendDay.vue";

export default {
  components: {
    NormalDay,
    HolidayDay,
    WeekendDay,
  },
  data() {
    return {
      isSelectedTab: "NormalDay",
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.isSelectedTab = tab;
    },
  },
};
</script>