<template>
  <div class="bg-gray-100">
    <div class="container mx-auto my-5 p-5 px-8">
      <div class="md:flex no-wrap md:-mx-2 pt-4">
        <!-- Left Side -->
        <div class="w-full md:w-1/3 md:mx-2">
          <!-- Profile Card -->
          <div class="bg-white p-3 border-t-4 border-green-400">
            <div class="image overflow-hidden">
              <img class="h-full w-full mx-auto" src="../../../../assets/img/son.jpg" alt="" />
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
            <div class="flex items-center space-x-2 font-semibold text-gray-600 leading-8 px-4">
              <span clas="text-green-500">
                <font-awesome-icon icon="user" class="text-lg" />
              </span>
              <span class="tracking-wide text-lg">Thông Tin</span>
            </div>
            <div class="text-gray-700 mt-4">
              <div class="grid grid-col">
                <span class="flex items-center">
                  <div class="px-4 py-2 font-semibold w-48">Họ Tên:</div>
                  <div class="px-1 py-2">
                    <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"  type="text" placeholder="Placeholder"
                      class="px-2 py-1 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100 w-64"
                      value="Nguyễn Công Thái Sơn" />
                  </div>
                </span>

                <span class="flex items-center">
                  <div class="px-4 py-2 font-semibold w-48">Email:</div>
                  <div class="px-1 py-2">
                    <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"  type="text" placeholder="Placeholder"
                      class="px-2 py-1 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100 w-64"
                      value="sonstarnguyen@gmail.com" />
                  </div>
                </span>

                <span class="flex items-center">
                  <div class="pl-4 pr-2 py-2 font-semibold w-48">Số điện thoại:</div>
                  <div class="px-1 py-2">
                    <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"  type="text" placeholder="Placeholder"
                      class="px-2 py-1 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100 w-64"
                      value="0978-145-440" />
                  </div>
                </span>

                <span class="flex items-center">
                  <div class="pl-4 pr-2 py-2 font-semibold w-48">Quản lí :</div>
                  <div class="px-1 py-2">
                    <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"  type="text" placeholder="Placeholder"
                      class="px-2 py-1 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100 w-64"
                      value="Sân Tennis Đại Học Ngân Hàng" />
                  </div>
                </span>
                <span class="flex items-center pb-5">
                  <div class="pl-4 pr-2 py-2 font-semibold w-48">Ngày Đăng Kí:</div>
                  <div class="px-1 py-2">
                    <input  type="text" disabled placeholder="Placeholder"
                      class="px-2 bg-gray-50  py-1 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100 w-64"
                      value="20/05/2022" />
                  </div>
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
export default {
  props: {
    showCancel: {
      type: Boolean,
      required: false,
    },
    disabledInput: {
      type: Boolean,
      required: false,
    }
  },

};
</script>
