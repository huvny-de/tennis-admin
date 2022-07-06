<template>
  <div class="dashboard">
    <!-- grid wrapper card -->

    <!--List Yard-->
    <div class="container h-96 overflow-auto mt-8">
      <div class="card w-full bg-white flex items-center  rounded">
        <div class="flex items-center pl-8 w-full">
          <div class="mr-5">
            <img class="w-64 h-44 rounded-xl" src="https://i.ibb.co/Pm3LLyR/istockphoto-821815472-612x612.jpg" />
          </div>
          <!--infor Yard-->
          <div class="flex flex-col items-start justify-end h-auto">
            <div class="flex items-center mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32">Tên Sân:
              </span>
              <span class="text-gray-500">
                <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"  type="text" placeholder="Tên sân"
                  class="px-2 py-1 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100 w-64"
                  value="Sân 1" />
              </span>
            </div>
            <div class="flex items-center mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32">Loại Sân:
              </span>
              <span class="text-gray-500">
                <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"  type="text" placeholder="Loại sân"
                  class="px-2 py-1 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100 w-64"
                  value="Sân Cứng" />
              </span>
            </div>

            <div class="flex items-center mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32">Kích Thước:
              </span>
              <span class="text-gray-500 flex items-center">
                <input :disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"  type="number" placeholder="chiều dài"
                  class="px-2 py-1 mr-2 w-32 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100"
                  value="36.57" /> m x <input disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"  type="number" placeholder="chiều rộng"
                  class="px-2 mx-2 py-1 w-32 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100"
                  value="18.29" /> m

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
                <input v-else :class="disabledInput ? 'bg-gray-50' : ''" :disabled="disabledInput" type="text" placeholder="Loại sân"
                  class="ml-[7px] px-2 py-1 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100 w-64"
                  value="Sân Cứng" />
              </span>

            </div> -->
          </div>
        </div>
      </div>
      <div class="card h-60 w-full bg-white flex items-center  rounded">
        <div class="flex items-center pl-8 w-full">
          <div class="mr-5">
            <img class="w-64 h-44 rounded-xl"
              src="https://i.ibb.co/H4HLRn0/Any-Conv-com-Arturf-Tennis-Court-Philippines-1000x666-1-1000x666.jpg" />
          </div>

          <!--infor Yard-->
          <div class="flex flex-col items-start justify-end h-auto">
            <div class="flex items-center mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32">Tên Sân:
              </span>
              <span class="text-gray-500">
                <input disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"   type="text" placeholder="Tên sân"
                  class="px-2 py-1 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100 w-64"
                  value="Sân 3" />
              </span>
            </div>
            <div class="flex items-center mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32">Loại Sân:
              </span>
              <span class="text-gray-500">
                <input disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"  type="text" placeholder="Loại sân"
                  class="px-2 py-1 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100 w-64"
                  value="Sân Cứng" />
              </span>
            </div>

            <div class="flex items-center mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32">Kích Thước:
              </span>
              <span class="text-gray-500 flex items-center">
                <input disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"  type="number" placeholder="chiều dài"
                  class="px-2 py-1 mr-2 w-32 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100"
                  value="36.57" /> m x <input disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"   type="number" placeholder="chiều rộng"
                  class="px-2 mx-2 py-1 w-32 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100"
                  value="18.29" /> m

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
      <div class="card w-full bg-white flex items-center  rounded">
        <div class="flex items-center pl-8 w-full">
          <div class="mr-5">
            <img class="w-64 h-44 rounded-xl" src="https://i.ibb.co/D8m4fGv/kich-thuoc-san-tennis-7.jpg" />
          </div>

          <!--infor Yard-->
          <div class="flex flex-col items-start justify-end h-auto">
            <div class="flex items-center mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32">Tên Sân:
              </span>
              <span class="text-gray-500">
                <input disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"  type="text" placeholder="Tên sân"
                  class="px-2 py-1 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100 w-64"
                  value="Sân 3" />
              </span>
            </div>
            <div class="flex items-center mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32">Loại Sân:
              </span>
              <span class="text-gray-500">
                <input disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"  type="text" placeholder="Loại sân"
                  class="px-2 py-1 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100 w-64"
                  value="Sân Cứng" />
              </span>
            </div>

            <div class="flex items-center mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32">Kích Thước:
              </span>
              <span class="text-gray-500 flex items-center">
                <input disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"  type="number" placeholder="chiều dài"
                  class="px-2 py-1 mr-2 w-32 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100"
                  value="36.57" /> m x <input disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"  type="number" placeholder="chiều rộng"
                  class="px-2 mx-2 py-1 w-32 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100"
                  value="18.29" /> m

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
                <input  v-else disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"  type="text" placeholder="Loại sân"
                  class="ml-[7px] py-1 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100 w-64"
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