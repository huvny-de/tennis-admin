<template>
  <div
    id="modal"
    class="flex modal fixed inset-0"
    :class="isClose === true ? 'hidden' : ''"
  >
    <div class="modal-overlay absolute w-full h-full"></div>
    <div class="mx-auto relative p-4 w-full max-w-4xl h-full md:h-auto">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 mt-10">
        <button
          @click="hiddenModal"
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="py-6 px-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Chi Tiết Khuyến Mãi
          </h3>
          <form action="#">
            <div>
              <div class="photo-wrapper p-2">
                <img
                  class="w-32 h-32 rounded-full mx-auto"
                  :src="detail.img"
                  alt="Ảnh Khuyến Mãi"
                />
              </div>
              <div class="p-2">
                <h3 class="text-center text-xl text-gray-900 font-medium">
                  {{ detail.namePromotion }}
                </h3>

                <div class="grid grid-cols-2 gap-6">
                  <table class="my-3 w-full">
                    <tbody>
                      <tr>
                        <td
                          class="px-2 pt-0 pb-2 text-gray-500 font-semibold text-normal"
                        >
                          Mã Khuyến Mãi
                        </td>
                        <td class="px-2 py-2">
                          <div class="mb-3 pt-0">
                            <input
                              type="text"
                              placeholder="Mã khuyến mãi"
                              class="px-2 py-2 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100 w-full"
                              :value="detail.code"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="px-2 pt-0 pb-2 text-gray-500 font-semibold text-normal"
                        >
                          Số Tiền Giảm
                        </td>
                        <td class="px-2 py-2">
                          <div class="mb-3 pt-0">
                            <input
                              type="number"
                              placeholder="Mã khuyến mãi"
                              class="px-2 py-2 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100 w-full"
                              :value="detail.discount"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="px-2 py-2 pt-0 pb-2 text-gray-500 font-semibold text-normal"
                        >
                          Mô tả
                        </td>
                        <td class="px-2 py-2 text-sm">
                          <textarea
                            class="resize-none w-full rounded-md text-sm"
                            :value="detail.description"
                          ></textarea>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table class="my-3 w-full">
                    <tbody>
                      <tr>
                        <td
                          class="px-2 pt-0 pb-2 text-gray-500 font-semibold text-normal"
                        >
                          Ngày Hiệu Lực
                        </td>
                        <td class="px-2 py-2 text-sm">
                          <div class="mb-3 pt-0">
                            <input
                              type="date"
                              placeholder="Placeholder"
                              class="px-2 py-2 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-200 w-full"
                              :value="detail.startDate"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="px-2 pt-0 pb-2 text-gray-500 font-semibold text-normal"
                        >
                          Ngày Hết Hạn
                        </td>
                        <td class="px-2 py-2 text-sm">
                          <div class="mb-3 pt-0">
                            <input
                              type="date"
                              placeholder="Placeholder"
                              class="px-2 py-2 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-200 w-full"
                              :value="detail.endDate"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="px-2 pt-0 pb-2 text-gray-500 font-semibold text-normal"
                        >
                          Trạng Thái
                        </td>
                        <td class="px-2 pt-1">
                          <div class="mb-3">
                            <!-- <p class="text-normal text-green-600 font-semibold" v-if="detail.status === 1">Đang Áp Dụng</p>
                          <p class="text-normal text-red-600 font-semibold" v-else>Không Hiệu Lực</p> -->
                            <select
                              id="small"
                              class="rounded-lg text-md block pr-8 W-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option value="Active">Áp Dụng</option>
                              <option value="Active">Ngưng Áp Dụng</option>
                              <!-- <option value="Active">Chưa Xác Nhận</option>
                            <option value="Active">Đã Thanh Toán</option>
                            <option value="Active">Hủy</option> -->
                            </select>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="flex justify-end pt-4">
                  <button
                    type="button"
                    class="px-4 bg-transparent p-1 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
                    @click="hiddenModal"
                  >
                    Đóng
                  </button>
                  <button
                    class="modal-close px-4 bg-indigo-500 p-1 rounded-lg text-white hover:bg-indigo-400"
                  >
                    Cập Nhật
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detail: {
      type: Object,
      require: true,
    },
    click: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      isClose: false,
    };
  },
  methods: {
    hiddenModal() {
      this.isClose = true;
    },
  },
  watch: {
    detail() {
      this.isClose = false;
    },
    click() {
      this.isClose = false;
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.3);
}

.modal-body {
  width: 500px;
  height: 300px;
  background: red;
  position: relative;
  z-index: 50;
}
</style>
