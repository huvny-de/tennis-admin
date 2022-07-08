<template>
  <div class="bg-gray-100">
    <div class="container mx-auto my-5 p-5 px-8">
      <div class="md:flex no-wrap md:-mx-2 pt-4">
        <!-- Left Side -->
        <div class="w-full md:w-1/3 md:mx-2">
          <!-- Profile Card -->
          <div class="bg-white p-3 border-t-4 border-green-400">
            <div class="image overflow-hidden">
              <img class="h-72 object-cover w-full mx-auto" src="https://i.ibb.co/Y2JLZnc/photo-1-15224582583802095482215.jpg"
                alt="" />
            </div>
          </div>
          <!-- End of profile card -->
          <div class="my-4"></div>
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-3/4 mx-2 h-80">
          <!-- Profile tab -->
          <!-- About Section -->
          <div class="bg-white p-3 shadow-sm rounded-sm h-full">
            <div class="
                flex
                items-center
                space-x-2
                font-semibold
                text-gray-600
                leading-8
                px-4
              ">
              <span clas="text-green-500">
                <font-awesome-icon icon="user" class="text-lg" />
              </span>
              <div class="flex items-center justify-middle">
                <span class="tracking-wide text-lg">Thông Tin</span>
                <p v-show="!disabledInput" class="ml-32 mt-1 mr-1 text-red-500 text-sm">*</p>
                <p v-show="!disabledInput" class="text-red-500 text-sm"> Số lần hủy lịch khách hàng : 3 lần </p>
              </div>
            </div>
            <div class="text-gray-700 mt-2">
              <div class="grid grid-col">
                <span class="flex items-center">
                  <div class="px-4 mt-[-8px] font-semibold w-64">Tên Cửa Hàng:</div>
                  <div class="px-1 py-2">
                    <div class="px-1">
                      <div class="relative">
                        <p class="text-2xl text-red-500 absolute right-4 top-[6px]">
                          *
                        </p>
                        <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"
                          placeholder="Nhập tên cửa hàng" type="text"
                          class="mt-1 w-64 px-2 py-1 place-holder-grey-400 text-grey-700 rounded text-sm shadow focus:outline-none focus:ring-50 mb-1 pr-8"
                          required />
                        <!-- <p v-if="err.errVendorName" class="
                        absolute
                        top-[138%]
                        left-0
                        error-text
                        text-center text-red-700
                      " role="alert">
                    * {{ err.errVendorName }}
                  </p> -->
                      </div>
                    </div>
                  </div>
                </span>
                <span class="flex items-center">
                  <div class="pl-4 pr-2 mt-[-25px] font-semibold w-64">Địa chỉ:</div>
                  <div class="px-1 py-2">

                    <div class="px-1 py-1">
                      <!-- <textarea :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''" type="text"
                        placeholder="Địa Chỉ Sân"
                        class="px-2 h-16 resize-none py-1 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100 w-64">18 Linh Trung, P. Linh Trung, quận Thủ Đức, TP. Hồ Chí Minh.</textarea> -->
                      <div class="relative">
                        <p class="text-2xl text-red-500 absolute right-4 top-6">
                          *
                        </p>
                        <textarea :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"
                          placeholder="Địa chỉ" class="w-64 mt-2 h-13 resize-none overflow rounded-md text-sm"
                          required></textarea>
                        <!-- <p v-if="err.errVendorName" class="
                        absolute
                        top-[138%]
                        left-0
                        error-text
                        text-center text-red-700
                      " role="alert">
                    * {{ err.errVendorName }}
                  </p> -->
                      </div>
                    </div>
                  </div>
                </span>

                <span class="flex items-center">
                  <div class="pl-4 pr-2 mt-[-18px] font-semibold w-64">
                    Khung Giờ Hoạt Động:
                  </div>
                  <div class="px-1 flex items-center">
                    <div class="px-1">
                      <!-- <input-component  type="time"
                        value="05:00" class="w-32 mt-2 border-gray-800 text-sm text-gray-600" /> -->
                      <div class="relative">
                        <p class="text-2xl text-red-500 absolute right-4 top-4">
                          *
                        </p>
                        <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"
                          placeholder="Nhập giờ mở cửa" type="time"
                          class="mt-2 w-full px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                          required />
                        <!-- <p v-if="err.errVendorName" class="
                        absolute
                        top-[138%]
                        left-0
                        error-text
                        text-center text-red-700
                      " role="alert">
                    * {{ err.errVendorName }}
                  </p> -->
                      </div>
                    </div>
                    <div class="px-1">
                      <div class="relative">
                        <p class="text-2xl text-red-500 absolute right-4 top-4">
                          *
                        </p>
                        <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"
                          placeholder="Nhập giờ đóng cửa" type="time"
                          class="mt-2 w-full px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                          required />
                        <!-- <p v-if="err.errVendorName" class="
                        absolute
                        top-[138%]
                        left-0
                        error-text
                        text-center text-red-700
                      " role="alert">
                    * {{ err.errVendorName }}
                  </p> -->
                      </div>
                    </div>
                  </div>
                </span>
                <span class="flex items-center">
                  <div class="pl-4 pr-2 font-semibold w-64 mt-[-12px]">
                    Số sân cho thuê:
                  </div>
                  <div class="px-1 pt-2 mt-[-21px]">
                    <div class="px-1 py-2">
                      <div class=" py-4">
                        <div class="relative">
                          <p class="text-2xl text-red-500 absolute right-4 top-3">
                            *
                          </p>
                          <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"
                            placeholder="Số Sân Cho Thuê" type="number"
                            class="mt-2 w-64 px-2 py-1 place-holder-grey-400 text-grey-700 rounded text-sm shadow focus:outline-none focus:ring-50 mb-1 pr-8"
                            required />
                          <!-- <p v-if="err.errVendorName" class="
                        absolute
                        top-[138%]
                        left-0
                        error-text
                        text-center text-red-700
                      " role="alert">
                    * {{ err.errVendorName }}
                  </p> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
                <!-- <span v-show="showCancel" class="flex items-center">
                  <div class="pl-4 pr-1 py-2 font-semibold">
                    Số lần hủy yêu cầu khách hàng:
                  </div>
                  <div class="px-1 py-2">
                    <div class="px-1">
                      <input disabled type="number" placeholder="Placeholder"
                        class="px-2 bg-gray-50 py-1 w-24 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100"
                        value="3" />
                    </div>
                  </div>
                </span> -->
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