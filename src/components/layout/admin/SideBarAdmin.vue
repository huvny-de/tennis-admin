<template>
  <keep-alive>
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
          <div class="flex flex-col items-center justify-between"></div>

          <nav>
            <!--Active-->

            <div
              v-if="checkIsActive('Memberships')"
              class="w-full bg-[#FEF5F8] flex"
            >
              <div class="w-1 bg-[#EF3270]"></div>

              <div
                class="flex items-center px-6 py-2 mt-2 duration-200 border-1-4"
              >
                <font-awesome-icon
                  class="w-6 h-6 text-[#ACACAC]"
                  icon="users"
                />

                <span class="mx-2 text-[14px] text-[#434141] font-bold"
                  >Chủ Sân</span
                >
              </div>
            </div>

            <!--Not Active-->

            <div
              v-else
              @click="setCurrentActive('Memberships')"
              class="
                mt-4
                flex
                items-center
                px-6
                py-2
                duration-200
                border-1-4
                text-[#C2CFE0]
                hover:bg-red-50
                cursor-pointer
              "
            >
              <font-awesome-icon class="w-6 h-6 text-[#ACACAC]" icon="users" />
              <span class="mx-2 text-[#334D6E] text-[14px] font-medium"
                >Memberships</span
              >
            </div>

            <!--Active-->
            <div
              v-if="checkIsActive('CreateAccount')"
              class="w-full bg-[#FEF5F8] flex"
            >
              <div class="w-1 bg-[#EF3270]"></div>

              <div
                class="flex items-center px-6 py-2 mt-2 duration-200 border-1-4"
              >
                <font-awesome-icon
                  class="w-6 h-6 text-[#ACACAC]"
                  icon="user-plus"
                />

                <span class="mx-2 text-[14px] text-[#434141] font-bold"
                  >Create Account</span
                >
              </div>
            </div>

            <!---->
            <div
              v-else
              @click="setCurrentActive('CreateAccount')"
              class="
                mt-4
                flex
                items-center
                px-6
                py-2
                duration-200
                border-1-4
                text-[#C2CFE0]
                hover:bg-red-50
                cursor-pointer
              "
            >
              <font-awesome-icon
                class="w-6 h-6 text-[#ACACAC]"
                icon="user-plus"
              />
              <span class="mx-2 text-[#334D6E] text-[14px] font-medium"
                >Create Account</span
              >
            </div>
          </nav>
        </div>
      </div>
    </div>
  </keep-alive>
</template>

<script>
export default {
  data() {
    return {
      isActive: "Memberships",
      isSelectedTab: "",
    };
  },
  methods: {
    setCurrentActive(ele) {
      this.isActive = ele;
      this.$emit("changeTab", ele);
    },
    checkIsActive(ele) {
      if (this.isActive === ele) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
