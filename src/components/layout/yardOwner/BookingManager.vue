<template>
  <div class="p-8 flex flex-col items-center justify-between">
    <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full px-4 rounded-md box-border shadow">
      <span>
        <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
          Lịch Đặt Sân
        </h2>
        <p class="text-gray-400 font-lexend font-normal">
          Quản lý toàn bộ lịch đặt sân
        </p>
      </span>
      <div class="flex items-center justify-between">
        <div class="container mx-auto flex px-4 mt-4">
          <div class="mx-auto flex items-center justify-center">
            <div class="mr-5">
              <p class="text-gray-400 font-lexend font-normal mb-1">Từ Ngày</p>
              <input type="date"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" />
            </div>
            <div class="mr-5">
              <p class="text-gray-400 font-lexend font-normal mb-1">Đến Ngày</p>
              <input type="date"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" />
            </div>
            <div class="mr-5">
              <p class="text-gray-400 font-lexend font-normal mb-1">
                Trạng Thái
              </p>
              <select id="small"
                class="rounded-lg text-md block pr-8 W-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="Active">Tất cả</option>
                <option value="Active">Xác Nhận</option>
                <option value="Active">Chưa Xác Nhận</option>
                <option value="Active">Hoàn Thành</option>
                <option value="Active">Hủy</option>
              </select>
            </div>
            <div class="flex items-center relative mt-6">
              <span class="text-2xl p-2 text-gray-400 absolute right-0">
                <Icon icon="ei:search" />
              </span>
              <input type="text" placeholder="Search..."
                class="pr-10 rounded border border-gray-300 bg-gray-50 placeholder:text-sm" />
            </div>
          </div>
        </div>
      </div>

      <div class="wrapping-table mt-10">
        <table class="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400 h-96">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="uppercase px-6 py-3">Khách Hàng</th>
              <th scope="col" class="uppercase px-6 py-3">Số điện thoại</th>
              <th scope="col" class="uppercase px-6 py-3">Loại Sân</th>
              <th scope="col" class="uppercase px-6 py-3">Ngày & Khung giờ</th>
              <th scope="col" class="uppercase px-6 py-3">Trạng Thái</th>
              <th scope="col" class="uppercase px-6 py-3">Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
              v-for="items in tableBooking" :key="items">
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="flex-shrink object-contain">
                    <img class="rounded-2xl mr-3 w-8 h-8" :src="items.img" />
                  </div>
                  <div class="ml-4 text-[#334D6E]">{{ items.fullName }}</div>
                </div>
              </td>
              <td class="px-6 py-4">
                {{ items.phoneNumber }}
              </td>
              <td class="px-6 py-4">
                {{ items.yardType }}
              </td>
              <td class="px-6 py-4">
                {{ items.datetime }}
              </td>
              <td class="px-6 py-4">
                <span class="text-green-800 bg-green-300 px-3 py-1 rounded-md"
                  v-if="items.statusTransaction == 'completed'">
                  {{ items.statusTransaction }}
                </span>
                <span class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                  v-else-if="items.statusTransaction == 'Chưa Xác Nhận'">
                  {{ items.statusTransaction }}
                </span>
                <span class="text-red-800 bg-red-300 px-3 py-1 rounded-md" v-else>
                  {{ items.statusTransaction }}
                </span>
              </td>
              <td class="px-10 py-4 ">
                <span class="flex items-center">
                  <font-awesome-icon
                    class="w-6 h-6 mr-2 cursor-pointer text-gray-500 hover:text-gray-700 active:text-gray-800 duration-200"
                    icon="eye" @click="showDetail()" />
                  <Icon @click="AcceptRequest(member.id)" class="
                                w-6
                                h-6
                                mr-2
                                cursor-pointer
                                text-green-500
                                hover:text-green-700
                                active:text-green-800
                                duration-200
                              " icon="akar-icons:circle-check-fill" />

                  <Icon class="
                                w-7
                                h-7
                                text-red-500
                                mr-2
                                cursor-pointer
                                hover:text-red-700
                                active:text-red-800
                                duration-200
                              " icon="ic:round-cancel" @click="showAlert(member.id)" />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <nav aria-label="Page navigation example mx-auto">
      <ul class="inline-flex -space-x-px">
        <li>
          <span v-if="currentPage == 1"
            class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-default">Previous</span>
          <span v-else
            class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
            @click="paging(currentPage - 1)">Previous</span>
        </li>
        <li v-for="page in 5" :key="page">
          <span v-if="page === currentPage" aria-current="page"
            class="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{{
                page
            }}</span>
          <a v-else href="#"
            class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            @click="paging(page)">{{ page }}</a>
        </li>
        <li>
          <span v-if="currentPage == totalPage"
            class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-default">Next</span>
          <span v-else
            class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
            @click="paging(currentPage + 1)">Next</span>
        </li>
      </ul>
    </nav>
  </div>

  <!--The Modal-->
  <DetailBookingModal :class="isHiddenModal === true ? 'hidden' : ''" :profile="profileDetail" :click="countClick" />
</template>

<script>
import { Icon } from "@iconify/vue";
import DetailBookingModal from './Booking/DetailBookingModal.vue';


export default {
  components: { Icon, DetailBookingModal },
  data() {
    return {
      tableBooking: [
        {
          img: "https://i.ibb.co/hgNrFmX/SE140371-Nguyen-Cong-Thai-Son.jpg",
          fullName: "Nguyễn Công Thái Sơn",
          phoneNumber: "0978145440",
          yardType: "Sân Cỏ",
          datetime: "18/6/2022 & Slot 1",
          amount: "Rp.450.000",
          statusTransaction: "Chưa Xác Nhận",
        },
        {
          img: "https://i.ibb.co/hgNrFmX/SE140371-Nguyen-Cong-Thai-Son.jpg",
          fullName: "Nguyễn Công Thái Sơn",
          phoneNumber: "0978145440",
          yardType: "Sân Đất Nệm",
          datetime: "18/6/2022 & Slot 2",
          amount: "Rp.250.000",
          statusTransaction: "Chưa Xác Nhận",
        },
        {
          img: "https://i.ibb.co/hgNrFmX/SE140371-Nguyen-Cong-Thai-Son.jpg",
          fullName: "Nguyễn Công Thái Sơn",
          phoneNumber: "0978145440",
          yardType: "Sân Nhân Tạo",
          datetime: "20/6/2022 & Slot 5",
          amount: "Rp.150.000",
          statusTransaction: "Chưa Xác Nhận",
        },
        {
          img: "https://i.ibb.co/hgNrFmX/SE140371-Nguyen-Cong-Thai-Son.jpg",
          fullName: "Nguyễn Công Thái Sơn",
          phoneNumber: "0978145440",
          yardType: "Sân Cỏ",
          datetime: "22/6/2022 & Slot 1",
          amount: "Rp.180.000",
          statusTransaction: "Chưa Xác Nhận",
        },
        {
          img: "https://i.ibb.co/hgNrFmX/SE140371-Nguyen-Cong-Thai-Son.jpg",
          fullName: "Nguyễn Công Thái Sơn",
          phoneNumber: "0978145440",
          yardType: "Sân Cỏ",
          datetime: "22/6/2022 & Slot 1",
          amount: "Rp.180.000",
          statusTransaction: "Chưa Xác Nhận",
        },
        {
          img: "https://i.ibb.co/hgNrFmX/SE140371-Nguyen-Cong-Thai-Son.jpg",
          fullName: "Nguyễn Công Thái Sơn",
          phoneNumber: "0978145440",
          yardType: "Sân Cỏ",
          datetime: "22/6/2022 & Slot 1",
          amount: "Rp.180.000",
          statusTransaction: "Chưa Xác Nhận",
        },
        {
          img: "https://i.ibb.co/hgNrFmX/SE140371-Nguyen-Cong-Thai-Son.jpg",
          fullName: "Nguyễn Công Thái Sơn",
          phoneNumber: "0978145440",
          yardType: "Sân Cỏ",
          datetime: "22/6/2022 & Slot 1",
          amount: "Rp.180.000",
          statusTransaction: "Chưa Xác Nhận",
        },
      ],
      isHiddenModal: true,
      countClick : 0
    };
  },
  methods : {
    showDetail() {
      this.isHiddenModal = false;
      this.countClick++;
    }
  }
};
</script>

<style scoped>
select {
  height: 42px;
}

input:focus {
  outline: none;
  border: none;
}
</style>
