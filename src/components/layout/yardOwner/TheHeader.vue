<template>
  <header class="bg-white p-2 border-b-2">
    <div class="wrap-header flex items-center justify-end flex-wrap">
      <div class="mr-5 flex float-right relative">
        <p
          class="
            w-5
            h-5
            p-2
            text-sm
            bg-red-600
            text-white
            font-semibold
            rounded-2xl
            inset-0
            right-2
            absolute
            flex
            items-center
            justify-center
          "
        >
          1
        </p>
        <button class="mr-5 text-2xl text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 36 36"
            class="iconify iconify--clarity"
          >
            <path
              fill="currentColor"
              d="M32.51 27.83A14.4 14.4 0 0 1 30 24.9a12.63 12.63 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.63 12.63 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93a1 1 0 0 0-.34.75v1.36a1 1 0 0 0 1 1h27.8a1 1 0 0 0 1-1v-1.36a1 1 0 0 0-.34-.75ZM5.13 28.94a16.17 16.17 0 0 0 2.44-3a14.24 14.24 0 0 0 1.65-5.85v-4.94a8.74 8.74 0 1 1 17.47 0v4.94a14.24 14.24 0 0 0 1.65 5.85a16.17 16.17 0 0 0 2.44 3Z"
              class="clr-i-outline clr-i-outline-path-1"
            ></path>
            <path
              fill="currentColor"
              d="M18 34.28A2.67 2.67 0 0 0 20.58 32h-5.26A2.67 2.67 0 0 0 18 34.28Z"
              class="clr-i-outline clr-i-outline-path-2"
            ></path>
            <path fill="none" d="M0 0h36v36H0z"></path>
          </svg>
        </button>
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
              src="../../../assets/img/son.jpg"
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
              right-10
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
              <div class="font-bold truncate">Thái Sơn</div>
            </div>
            <ul
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownSmallButton"
            >
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 0 hover:bg-blue-500 hover:text-white"
                  >Thông Tin Tài Khoản</a
                >
              </li>
            </ul>
            <div class="py-1">
              <a
                href="#"
                class="
                  block
                  py-2
                  px-4
                  text-sm text-gray-700
                  dark:text-gray-200
                  hover:bg-blue-500 hover:text-white
                "
                >Đăng xuất</a
              >
            </div>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    menuToggle: function () {
      this.menu = !this.menu;
    },
    menuToggleBlur: function () {
      this.menu = false;
    },
  },
};
</script>
