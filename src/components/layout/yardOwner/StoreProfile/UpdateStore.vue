<template>
  <div class="bg-gray-100">
    <div class="container mx-auto my-5 p-5 px-8">
      <div class="md:flex no-wrap md:-mx-2 pt-4">
        <!-- Left Side -->
        <div class="w-full md:w-1/3 md:mx-2">
          <!-- Profile Card -->
          <div class="bg-white p-3 border-t-4 border-green-400">
            <div class="image overflow-hidden">
              <img
                class="h-auto w-full mx-auto"
                src="https://i.ibb.co/Y2JLZnc/photo-1-15224582583802095482215.jpg"
                alt=""
              />
            </div>
            <label class="block mt-4">
              <span class="sr-only">Choose File</span>
              <input
                @change="uploadImg"
                type="file"
                class="
                  block
                  w-full
                  text-sm text-gray-500
                  file:mr-4
                  file:py-2
                  file:px-4
                  file:rounded-full
                  file:border-0
                  file:text-sm
                  file:font-semibold
                  file:bg-blue-50
                  file:text-blue-700
                  hover:file:bg-blue-100
                "
                accept="image/*"
              />
            </label>

            <div class="flex flex-col items-start justify-start mt-3">
              <label class="text-[#747474]" for="username">Địa chỉ</label>
              <textarea
                class="w-full mt-2 h-13 resize-none overflow rounded-md text-sm"
              ></textarea>
            </div>
          </div>
          <!-- End of profile card -->
          <div class="my-4"></div>
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-3/4 mx-2 h-full">
          <!-- Profile tab -->
          <!-- About Section -->
          <div class="bg-white p-3 shadow-sm rounded-sm">
            <div
              class="
                flex
                items-center
                space-x-2
                font-semibold
                text-gray-600
                leading-8
                px-4
              "
            >
              <span clas="text-green-500">
                <font-awesome-icon icon="user" class="text-lg" />
              </span>
              <span class="tracking-wide text-lg">Thông Tin</span>
            </div>
            <!--information container-->
            <div
              class="grid md:grid-cols-2 gap- mt-4 sm:grid-cols-1 text-normal"
            >
              <div>
                <label class="text-[#747474]" for="username"
                  >Số Điện Thoại</label
                >
                <input-component
                  class="w-[90%] mt-2 text-sm"
                  value="0978145440"
                />
              </div>
              <div>
                <label class="text-[#747474]" for="username">Email</label>
                <input-component
                  class="w-[90%] mt-2 text-sm"
                  value="sonstarnguyen@gmail.com"
                />
              </div>
              <div>
                <label class="text-[#747474]" for="username">Giờ Mở Cửa</label>
                <input-component
                  type="time"
                  class="w-[90%] mt-2 border-gray-800 text-sm text-gray-600"
                />
              </div>
              <div>
                <label class="text-[#747474]" for="username"
                  >Giờ Đóng Cửa</label
                >
                <input-component
                  type="time"
                  class="w-[90%] mt-2 border-gray-800 text-sm text-gray-600"
                  value="Admin"
                />
              </div>
              <div>
                <label class="text-[#747474]" for="username"
                  >Số Sân Cho Thuê</label
                >
                <input-component class="w-[90%] mt-2 text-sm" value="3" />
              </div>
            </div>
          </div>

          <!--button control-->
          <div class="w-full flex items-center justify-end mt-8">
            <div class="flex space-x-2 justify-center ">
              <button
                type="button"
                class="
                  flex
                  items-center
                  px-10
                  py-2.5
                  bg-[#50AE01]
                  text-white
                  font-medium
                  text-sm
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-[#78d22f] hover:shadow-lg
                  focus:bg-[#78d22f]
                  focus:shadow-lg
                  focus:outline-none
                  focus:ring-0
                  active:bg-green-700 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out
                "
              >
                <Icon icon="dashicons:update-alt"></Icon>
                <p class="pl-2">Cập Nhật</p>
              </button>
            </div>
            <div class="flex space-x-2 justify-center ml-2">
              <button
                type="button"
                class="
                  flex
                  items-center
                  px-11
                  py-2.5
                  bg-red-500
                  text-white
                  font-medium
                  text-sm
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-red-700 hover:shadow-lg
                  focus:bg-red-700
                  focus:shadow-lg
                  focus:outline-none
                  focus:ring-0
                  active:bg-red-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out
                "
              >
                <Icon icon="ant-design:delete-filled"></Icon>
                <p class="pl-2">Dừng Hoạt Động</p>
              </button>
            </div>
          </div>
          <!-- End of about section -->
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
};
</script>