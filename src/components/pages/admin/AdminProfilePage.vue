<template>
  <div class="flex h-screen">
    <preloader-component />

    <div class="flex-1 bg-[#F8F9FF] flex flex-col">
      <the-header />
      <div class="container mx-auto px-8 h-[80%] lg:mt-4">
        <div class="w-[100%] h-full mt-4">
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
                  Profile
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
                  >Update Password</span
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
                  >Profile</span
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
                  Update Password
                </div>
              </li>
            </ul>
            <component :is="isSelectedTab"></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminProfile from "../../layout/admin/AdminProfile.vue";
import UpdatePassword from "../../layout/admin/UpdatePassword.vue";

export default {
  components: {
    AdminProfile,
    UpdatePassword,
  },
  data() {
    return {
      isSelectedTab: "admin-profile",
    };
  },
  methods: {
    setSelectedTab(tab) {
      console.log(this.isSelectedTab);
      console.log(tab);
      this.isSelectedTab = tab;
    },
  },
};
</script>