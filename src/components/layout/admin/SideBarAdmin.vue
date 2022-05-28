<template>
  <div class="flex">
    <div
      class="
        fixed
        inset-0
        lef-0
        w-[16%]
        overflow-y-hidden
        transition
        duration-300
        transform
        shadow
        lg:translate-x-0 lg:inset-0
      "
    >
      <div class="flex items-center justify-center">
        <div class="flex content-center items-center justify-center">
          <div class="flex flex-col items-center py-6">
            <p class="text-xl font-medium leading-4">
              Tennis<span class="text-[#30AF82]">Today</span>
            </p>
            <p class="text-normal text-[12px] text-[#9B86A8]">
              indulge your passion
            </p>
          </div>
        </div>
      </div>

      <div class="container mx-auto h-full">
        <!-- <div class="flex flex-col items-center justify-center w-full">
          <div class="flex items-center mx-auto justify-center mb-4">
            <div class="flex justify-center content-center items-center">
              <img
                class="w-10 h-10 rounded-full mr-2"
                :src="require('../../../assets/img/son.jpg')"
              />
              <div class="flex flex-col items-left py-4">
                <p class="text-md font-medium text-[#445262]">Henry Senior</p>
                <p class="text-normal text-[12px] text-[#90A0B7]">Admin</p>
              </div>
            </div>
          </div>
        </div> -->

        <div class="flex flex-col items-center justify-between"></div>

        <nav>
          <div class="w-full bg-[#FEF5F8] flex">
            <div class="w-1 bg-[#EF3270]"></div>

            <router-link
              class="flex items-center px-6 py-2 mt-2 duration-200 border-1-4"
            >
              <font-awesome-icon class="w-6 h-6 text-[#ACACAC]" icon="users" />

              <span class="mx-2 text-[14px] text-[#434141] font-bold"
                >Memberships</span
              >
            </router-link>
          </div>

          <router-link
            class="
              mt-4
              flex
              items-center
              px-6
              py-2
              duration-200
              border-1-4
              text-[#C2CFE0]
            "
          >
            <font-awesome-icon
              class="w-6 h-6 text-[#ACACAC]"
              icon="user-plus"
            />
            <span class="mx-2 text-[#334D6E] text-[14px] font-medium"
              >Create Account</span
            >
          </router-link>

          <router-link
            class="
              mt-4
              flex
              items-center
              px-6
              py-2
              duration-200
              border-1-4
              text-[#C2CFE0]
            "
          >
            <font-awesome-icon
              class="w-6 h-6 text-[#ACACAC]"
              icon="arrow-right-from-bracket"
            />
            <span class="mx-2 text-[#334D6E] text-[14px] font-medium"
              >Sign Out</span
            >
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
