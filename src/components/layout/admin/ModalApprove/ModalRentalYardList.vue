<template>
  <div class="dashboard">
    <!-- grid wrapper card -->

    <!--List Yard-->
    <div class="container h-96 overflow-auto mt-8 px-2">
      <div class="card h-60 w-full bg-white flex items-center  rounded">
        <div class="flex items-center pl-8 w-full">
          <div class="mr-8">
            <img class="w-72 h-48 rounded-xl" src="https://i.ibb.co/Pm3LLyR/istockphoto-821815472-612x612.jpg" />
          </div>

          <!--infor Yard-->
          <div class="flex flex-col items-start h-auto mt-7">
            <div class="flex items-start mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32 mt-1">Tên Sân:
              </span>
              <span class="text-gray-500">

                <div class="relative">
                  <p class="text-2xl text-red-500 absolute right-4 top-1">
                    *
                  </p>
                  <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''" placeholder="Tên Sân"
                    type="email"
                    class=" w-64 px-3 py-1 place-holder-grey-400 text-grey-700 rounded text-md  focus:outline-none focus:ring-50 mb-2 pr-8"
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
              </span>
            </div>
            <div class="flex items-start mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32 mt-1">Loại Sân:
              </span>
              <span class="text-gray-500 mt-[-4px]">
                <select v-if="!disabledInput" id="small" class="
                    rounded-lg
                    text-sm
                    block
                    pr-8
                    W-full
                    text-gray-900
                    bg-gray-50
                    border border-gray-500
                    focus:ring-blue-500 focus:border-blue-500
                  ">
                  <option value="Active">Sân Đất Nện</option>
                  <option selected="true" value="Active">Sân Cỏ</option>
                  <option value="Active">Sân Cứng</option>
                </select>
                <div v-else class="relative">
                  <p class="text-2xl text-red-500 absolute right-4 top-1">
                    *
                  </p>
                  <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''" placeholder="Loại Sân"
                    type="email"
                    class=" w-64 px-3 py-1 place-holder-grey-400 text-grey-700 rounded text-md  focus:outline-none focus:ring-50 mb-2 pr-8"
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
              </span>
            </div>
            <div class="flex items-start mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32 mt-1">Chiều Dài:
              </span>
              <span class="text-gray-500">

                <div class="relative">
                  <p class="text-2xl text-red-500 absolute right-4 top-1">
                    *
                  </p>
                  <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''" placeholder="Chiều Dài"
                    type="number"
                    class=" w-40 px-3 py-1 place-holder-grey-400 text-grey-700 rounded text-md  focus:outline-none focus:ring-50 mb-2 pr-8"
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
              </span>
            </div>
            <div class="flex items-start mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32 mt-1">Chiều Rộng:
              </span>
              <span class="text-gray-500">
                <div class="relative">
                  <p class="text-2xl text-red-500 absolute right-4 top-1">
                    *
                  </p>
                  <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''" placeholder="Chiều Rộng"
                    type="number"
                    class=" w-40 px-3 py-1 place-holder-grey-400 text-grey-700 rounded text-md  focus:outline-none focus:ring-50 mb-2 pr-8"
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
              </span>
            </div>


            <!-- <div class="flex items-center">
              <span class="text-gray-500 text-md font-semibold mr-3 pt-1">Loại Kích Thước:
              </span>
               <span class="text-gray-500">
                <select v-if="!disabledInput" id="small" class="
                    rounded-lg
                    text-sm
                    block
                    pr-8
                    W-full
                    text-gray-900
                    bg-gray-50
                    border border-gray-500
                    focus:ring-blue-500 focus:border-blue-500
                    ml-2
                  ">
                  <option value="Active">Kích Thước Lớn</option>
                  <option selected="true" value="Active">Kích Thước Tiêu Chuẩn</option>
                  <option value="Active">Kích Thước Nhỏ</option>
                </select>
                <input v-else disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"  type="text" placeholder="Loại sân"
                  class="ml-[7px]  px-2 py-1 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100 w-64"
                  value="Sân Cứng" />
              </span>
            </div> -->
          </div>

        </div>
      </div>
      <div class="card h-60 w-full bg-white flex items-center  rounded">
        <div class="flex items-center pl-8 w-full">
          <div class="mr-8">
            <img class="w-72 h-48 rounded-xl"
              src="https://i.ibb.co/H4HLRn0/Any-Conv-com-Arturf-Tennis-Court-Philippines-1000x666-1-1000x666.jpg" />
          </div>

          <!--infor Yard-->
          <div class="flex flex-col items-start h-auto mt-7">
            <div class="flex items-start mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32 mt-1">Tên Sân:
              </span>
              <span class="text-gray-500">

                <div class="relative">
                  <p class="text-2xl text-red-500 absolute right-4 top-1">
                    *
                  </p>
                  <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''" placeholder="Tên Sân"
                    type="email"
                    class=" w-64 px-3 py-1 place-holder-grey-400 text-grey-700 rounded text-md  focus:outline-none focus:ring-50 mb-2 pr-8"
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
              </span>
            </div>
            <div class="flex items-start mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32 mt-1">Loại Sân:
              </span>
              <span class="text-gray-500 mt-[-4px]">
                <select v-if="!disabledInput" id="small" class="
                    rounded-lg
                    text-sm
                    block
                    pr-8
                    W-full
                    text-gray-900
                    bg-gray-50
                    border border-gray-500
                    focus:ring-blue-500 focus:border-blue-500
                  ">
                  <option value="Active">Sân Đất Nện</option>
                  <option selected="true" value="Active">Sân Cỏ</option>
                  <option value="Active">Sân Cứng</option>
                </select>
                <div v-else class="relative">
                  <p class="text-2xl text-red-500 absolute right-4 top-1">
                    *
                  </p>
                  <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''" placeholder="Loại Sân"
                    type="email"
                    class=" w-64 px-3 py-1 place-holder-grey-400 text-grey-700 rounded text-md  focus:outline-none focus:ring-50 mb-2 pr-8"
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
              </span>
            </div>
            <div class="flex items-start mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32 mt-1">Chiều Dài:
              </span>
              <span class="text-gray-500">

                <div class="relative">
                  <p class="text-2xl text-red-500 absolute right-4 top-1">
                    *
                  </p>
                  <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''" placeholder="Chiều Dài"
                    type="number"
                    class=" w-40 px-3 py-1 place-holder-grey-400 text-grey-700 rounded text-md  focus:outline-none focus:ring-50 mb-2 pr-8"
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
              </span>
            </div>
            <div class="flex items-start mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32 mt-1">Chiều Rộng:
              </span>
              <span class="text-gray-500">
                <div class="relative">
                  <p class="text-2xl text-red-500 absolute right-4 top-1">
                    *
                  </p>
                  <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''" placeholder="Chiều Rộng"
                    type="number"
                    class=" w-40 px-3 py-1 place-holder-grey-400 text-grey-700 rounded text-md  focus:outline-none focus:ring-50 mb-2 pr-8"
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
              </span>
            </div>


            <!-- <div class="flex items-center">
              <span class="text-gray-500 text-md font-semibold mr-3 pt-1">Loại Kích Thước:
              </span>
               <span class="text-gray-500">
                <select v-if="!disabledInput" id="small" class="
                    rounded-lg
                    text-sm
                    block
                    pr-8
                    W-full
                    text-gray-900
                    bg-gray-50
                    border border-gray-500
                    focus:ring-blue-500 focus:border-blue-500
                    ml-2
                  ">
                  <option value="Active">Kích Thước Lớn</option>
                  <option selected="true" value="Active">Kích Thước Tiêu Chuẩn</option>
                  <option value="Active">Kích Thước Nhỏ</option>
                </select>
                <input v-else disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"  type="text" placeholder="Loại sân"
                  class="ml-[7px]  px-2 py-1 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100 w-64"
                  value="Sân Cứng" />
              </span>
            </div> -->
          </div>

        </div>
      </div>
      <div class="card h-60 w-full bg-white flex items-center  rounded">
        <div class="flex items-center pl-8 w-full">
          <div class="mr-8">
            <img class="w-72 h-48 rounded-xl" src="https://i.ibb.co/D8m4fGv/kich-thuoc-san-tennis-7.jpg" />
          </div>

          <!--infor Yard-->
          <div class="flex flex-col items-start h-auto mt-7">
            <div class="flex items-start mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32 mt-1">Tên Sân:
              </span>
              <span class="text-gray-500">

                <div class="relative">
                  <p class="text-2xl text-red-500 absolute right-4 top-1">
                    *
                  </p>
                  <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''" placeholder="Tên Sân"
                    type="email"
                    class=" w-64 px-3 py-1 place-holder-grey-400 text-grey-700 rounded text-md  focus:outline-none focus:ring-50 mb-2 pr-8"
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
              </span>
            </div>
            <div class="flex items-start mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32 mt-1">Loại Sân:
              </span>
              <span class="text-gray-500 mt-[-4px]">
                <select v-if="!disabledInput" id="small" class="
                    rounded-lg
                    text-sm
                    block
                    pr-8
                    W-full
                    text-gray-900
                    bg-gray-50
                    border border-gray-500
                    focus:ring-blue-500 focus:border-blue-500
                  ">
                  <option value="Active">Sân Đất Nện</option>
                  <option selected="true" value="Active">Sân Cỏ</option>
                  <option value="Active">Sân Cứng</option>
                </select>
                <div v-else class="relative">
                  <p class="text-2xl text-red-500 absolute right-4 top-1">
                    *
                  </p>
                  <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''" placeholder="Loại Sân"
                    type="email"
                    class=" w-64 px-3 py-1 place-holder-grey-400 text-grey-700 rounded text-md  focus:outline-none focus:ring-50 mb-2 pr-8"
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
              </span>
            </div>
            <div class="flex items-start mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32 mt-1">Chiều Dài:
              </span>
              <span class="text-gray-500">

                <div class="relative">
                  <p class="text-2xl text-red-500 absolute right-4 top-1">
                    *
                  </p>
                  <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''" placeholder="Chiều Dài"
                    type="number"
                    class=" w-40 px-3 py-1 place-holder-grey-400 text-grey-700 rounded text-md  focus:outline-none focus:ring-50 mb-2 pr-8"
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
              </span>
            </div>
            <div class="flex items-start mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32 mt-1">Chiều Rộng:
              </span>
              <span class="text-gray-500">
                <div class="relative">
                  <p class="text-2xl text-red-500 absolute right-4 top-1">
                    *
                  </p>
                  <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''" placeholder="Chiều Rộng"
                    type="number"
                    class=" w-40 px-3 py-1 place-holder-grey-400 text-grey-700 rounded text-md  focus:outline-none focus:ring-50 mb-2 pr-8"
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
              </span>
            </div>


            <!-- <div class="flex items-center">
              <span class="text-gray-500 text-md font-semibold mr-3 pt-1">Loại Kích Thước:
              </span>
               <span class="text-gray-500">
                <select v-if="!disabledInput" id="small" class="
                    rounded-lg
                    text-sm
                    block
                    pr-8
                    W-full
                    text-gray-900
                    bg-gray-50
                    border border-gray-500
                    focus:ring-blue-500 focus:border-blue-500
                    ml-2
                  ">
                  <option value="Active">Kích Thước Lớn</option>
                  <option selected="true" value="Active">Kích Thước Tiêu Chuẩn</option>
                  <option value="Active">Kích Thước Nhỏ</option>
                </select>
                <input v-else disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"  type="text" placeholder="Loại sân"
                  class="ml-[7px]  px-2 py-1 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100 w-64"
                  value="Sân Cứng" />
              </span>
            </div> -->
          </div>

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