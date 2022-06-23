<template>
  <div class="p-8 flex flex-col items-center justify-between">
    <div
      class="
        bg-white
        dark:bg-gray-800
        p-5
        px-4
        rounded-lg
        box-border
        shadow
        w-[45%]
      "
    >
       <h2 class="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-6">
          Cài Đặt Giờ Thuê
        </h2>
      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6 mx-center">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-semibold
                mb-2
              "
              for="gr id-first-name"
            >
              Giờ Mở Cửa
            </label>
            <input
              class="
                appearance-none
                block
                w-full
                bg-gray-50
                text-gray-700
                border 
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:ring-100
              "
              id="grid-start-time"
              type="time"
              value="05:00"
              disabled="true"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                 font-semibold
                mb-2
              "
              for="grid-end-time"
            >
              Giờ Đóng Cửa
            </label>
            <input
              class="
                appearance-none
                block
                w-full
                bg-gray-50
                text-gray-700
                border border-gray-400
                rounded
                py-3
                px-4
                leading-tight
                focus:outline-none focus:ring-100
              "
              id="grid-end-time"
              type="time"
              value="22:00"
              disabled="true"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                 font-semibold
                mb-2
              "
              for="grid-password"
            >
              Khoảng Thời Gian Thuê Mỗi Ca
            </label>
            <select
              id="small"
              class="
                rounded-lg
                text-md
                block
                pr-8
                W-full
                text-sm text-gray-900
                bg-gray-50
                border border-gray-300
                focus:ring-blue-500 focus:border-blue-500
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
            >
              <option value="1">1 giờ</option>
              <option value="2">1 giờ 30 phút</option>
            </select>
          </div>
        </div>
        <div class="flex flex-wrap mx-3 mb-2 justify-end">
          <button
            type="button"
            @click="showAlert"
            class="
              modal-close
              px-5
              bg-indigo-500
              py-2
              rounded-lg
              text-white
              hover:bg-indigo-400
            "
          >
            Cài Đặt
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  methods: {
    showAlert() {
      swal({
        title: "Cài đặt thành công !",
        icon: "success",
      });
    },
  },
};
</script>