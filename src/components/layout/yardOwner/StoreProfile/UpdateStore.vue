<template>
  <form>
    <!--form control-->
    <div class="flex px-8 py-2">
      <!--img container-->
      <div>
        <div
          class="
            flex flex-col
            justify-start
            items-start
            lg:w-80
            md:w-40
            sm:w-20
          "
        >
          <img
            class="rounded mr-3 lg:w-60 object-contain md:w-40"
            src="https://placevietnam.com/img/600x337/san_pham/san-tennis-clb-hoang-thien.jpg"
          />
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
        </div>
      </div>

      <!--information container-->
      <div class="grid md:grid-cols-2 gap-6 mt-4 sm:grid-cols-1 text-normal">
        <div>
          <label class="text-[#747474]" for="username">Số Điện Thoại</label>
          <input-component class="w-full mt-2 text-sm" value="0978145440" />
        </div>
        <div>
          <label class="text-[#747474]" for="username">Email</label>
          <input-component
            class="w-full mt-2 text-sm"
            value="sonstarnguyen@gmail.com"
          />
        </div>
        <div>
          <label class="text-[#747474]" for="username">Giờ Mở Cửa</label>
          <input-component
            type="time"
            class="w-full mt-2 border-gray-800 text-sm text-gray-600"
          />
        </div>
        <div>
          <label class="text-[#747474]" for="username">Giờ Đóng Cửa</label>
          <input-component
            type="time"
            class="w-full mt-2 border-gray-800 text-sm text-gray-600"
            value="Admin"
          />
        </div>
        <div>
          <label class="text-[#747474]" for="username">Số Sân Cho Thuê</label>
          <input-component class="w-full mt-2 text-sm" value="3" />
        </div>

        <div class="flex flex-col items-start justify-start">
          <label class="text-[#747474]" for="username">Địa chỉ</label>
          <textarea class="w-full mt-2 h-13 resize-none overflow rounded-md text-sm"></textarea>
        </div>
      </div>
    </div>

    <!--button control-->
    <div class="w-full flex items-center justify-end py-4">
      <div>
        <nav>
          <button
            class="
              mx-auto
              bg-red-500
              hover:bg-red-700
              duration-200
              text-white
              font-medium
              py-2
              px-4
              rounded
              w-auto
              text-md
            "
            type="button"
          >
            <router-link :to="{ name: 'Home' }" class="no-underline"
              >Ngưng Hoạt Động</router-link
            >
          </button>
        </nav>
      </div>

      <div>
        <button
          class="
            mx-auto
            bg-green-500
            hover:bg-green-700
            duration-200
            text-white
            font-medium
            py-2
            px-4
            rounded
            w-25
            text-md
            ml-3
          "
        >
          Cập Nhật
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {};
</script>