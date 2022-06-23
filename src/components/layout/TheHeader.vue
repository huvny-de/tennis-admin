<template>
  <div class="container mx-auto h-[14.8%] mb-8 border-1 pl-1 md:mb-0">
    <div class="h-full px-4 flex bg-white items-center justify-between">
      <div
        class="relative mx-4 lg:mx-0 w-[70%] flex items-center"
        :class="isHiddenInput === true ? 'invisible' : ''"
      >
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
          :value="search"
          v-on:keyup.enter="EmitSearchValue"
        ></input-component>
      </div>
      <div class="wrap-header flex items-center justify-end flex-wrap">
        <div class="mr-5 flex float-right relative">
          <button @click="menuToggle" @blur="menuToggleBlur">
            <div
              class="
                user-avatar
                flex
                hover:bg-gray-100
                dark:hover:bg-gray-700
                p-1
                cursor-pointer
                rounded-md
              "
            >
              <img
                :src="currentUser.Avatar"
                class="
                  rounded-full
                  mr-4
                  w-10
                  h-10
                  p-1
                  ring-1 ring-gray-300
                  dark:ring-gray-500
                "
                alt=""
              />
              <span class="text-md mt-4 text-gray-300"
                ><Icon icon="bi:caret-down-fill"
              /></span>
            </div>
          </button>

          <transition name="fade">
            <div
              id="dropdownSmall"
              v-show="menu"
              class="
                block
                absolute
                right-0
                mt-12
                z-10
                w-44
                border
                dark:border-gray-700
                bg-white
                dark:bg-gray-800
                rounded
                divide-y
                dark:divide-gray-700
                divide-gray-100
                shadow
              "
            >
              <div class="py-3 px-4 text-sm text-gray-900 dark:text-gray-200">
                <div>Tài khoản đăng nhập</div>
                <div class="font-bold truncate">{{currentUser.UserName}}</div>
              </div>
              <ul
                class="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownSmallButton"
              >
                <li>
                  <span
                    @click="routerLink('/profile')"
                    class="block py-2 px-4 0 hover:bg-blue-500 hover:text-white cursor-pointer"
                    >Thông Tin Tài Khoản</span
                  >
                </li>
              </ul>
              <div class="py-1">
                <span
                  @click="routerLink('/logout')"
                  class="
                    block
                    py-2
                    px-4
                    text-sm text-gray-700
                    dark:text-gray-200
                    hover:bg-blue-500 hover:text-white
                    cursor-pointer
                  "
                  >Đăng xuất</span
                >
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
  name: "TheHeader",
  mounted() {
    this.currentUser = this.$store.getters['auth/getUser'].Token;
  },
  props: {
    search: {
      type: String,
      required: true,
    },
    isHiddenInput: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      menu: false,
      currentUser: "",
    };
  },
  methods: {
    EmitSearchValue() {
      let searchInput = document.getElementById("inputSearch");
      this.$emit("search", searchInput.value);
    },
    routerLink(path) {
      if (path.includes("logout")) {
        this.$store.dispatch("auth/logout");
        this.$router.push("/login");
      } else {
        this.$router.push(path);
      }
    },
    menuToggle: function () {
      this.menu = !this.menu;
    },
  },
};
</script>

<style scoped>

</style>