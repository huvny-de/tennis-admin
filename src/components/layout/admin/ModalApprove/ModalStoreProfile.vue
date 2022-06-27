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
          </div>
          <!-- End of profile card -->
          <div class="my-4"></div>
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-3/4 mx-2 h-full">
          <!-- Profile tab -->
          <!-- About Section -->
          <div class="bg-white p-3 shadow-sm rounded-sm h-full">
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
            <div class="text-gray-700 mt-4">
              <div class="grid grid-col">
                <span class="flex items-center">
                  <div class="px-4 py-2 font-semibold">Tên Cửa Hàng:</div>
                  <div class="px-1 py-2">Sân Tennis Đại Học Ngân Hàng</div>
                </span>
                <span class="flex items-center">
                  <div class="pl-4 pr-2 py-2 font-semibold">Địa chỉ:</div>
                  <div class="px-1 py-2">
                    18 Linh Trung, P. Linh Trung, quận Thủ Đức, TP. Hồ Chí Minh.
                  </div>
                </span>


                <span class="flex items-center">
                  <div class="pl-4 pr-2 py-2 font-semibold">
                    Khung Giờ Hoạt Động:
                  </div>
                  <div class="py-2">5:00 - 22:00</div>
                </span>
                <span class="flex items-center">
                  <div class="pl-4 pr-2 py-2 font-semibold">
                    Số sân cho thuê:
                  </div>
                  <div class="px-1 py-2">3</div>
                </span>
              </div>
            </div>
          </div>
          <!-- End of about section -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>