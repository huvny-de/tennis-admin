<template>
  <div class="flex flex-col items-center justify-between">
    <div
      class="
        mt-2
        bg-white
        dark:bg-gray-800
        p-5
        w-full
        px-4
        rounded-md
        box-border
      "
    >
      <div class="flex items-center justify-between">
        <div class="container mx-auto flex px-4">
          <div class="mx-auto flex items-center justify-center">
            <div class="mr-5">
              <p class="text-gray-400 font-lexend font-normal mb-1">Từ Ngày</p>
              <input
                type="date"
                class="
                  bg-gray-50
                  border border-gray-300
                  text-gray-900
                  sm:text-sm
                  rounded-lg
                  focus:ring-blue-500 focus:border-blue-500
                  block
                  w-full
                  p-2.5
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500
                  datepicker-input
                "
              />
            </div>
            <div class="mr-5">
              <p class="text-gray-400 font-lexend font-normal mb-1">Đến Ngày</p>
              <input
                type="date"
                class="
                  bg-gray-50
                  border border-gray-300
                  text-gray-900
                  sm:text-sm
                  rounded-lg
                  focus:ring-blue-500 focus:border-blue-500
                  block
                  w-full
                  p-2.5
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500
                  datepicker-input
                "
              />
            </div>
            <div class="flex items-center relative mt-6">
              <span class="text-2xl p-2 text-gray-400 absolute right-0">
                <Icon icon="ei:search" />
              </span>
              <input
                type="text"
                placeholder="Tìm Kiếm..."
                class="
                  pr-10
                  rounded
                  border border-gray-300
                  bg-gray-50
                  placeholder:text-sm
                "
              />
            </div>
          </div>
        </div>
      </div>

      <div class="wrapping-table mt-10">
        <table
          class="
            w-full
            text-sm text-left text-gray-500
            dark:text-gray-400
            lg:overflow-auto
            overflow-x-scroll
          "
        >
          <thead
            class="
              text-xs text-gray-700
              uppercase
              bg-gray-50
              dark:bg-gray-700 dark:text-gray-400
            "
          >
            <tr>
              <th scope="col" class="uppercase px-6 py-3">Tên Khuyễn Mãi</th>
              <th scope="col" class="uppercase px-6 py-3">Mã Khuyễn Mãi</th>
              <th scope="col" class="uppercase px-6 py-3">
                Ngày Hiệu Lực - Ngày Hết Hạn
              </th>
              <th scope="col" class="uppercase px-6 py-3">Trạng Thái</th>
              <th scope="col" class="uppercase px-6 py-3">Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="
                bg-white
                border-b
                dark:bg-gray-800 dark:border-gray-700
                odd:bg-white
                even:bg-gray-50
              "
              v-for="items in promotionList"
              :key="items"
            >
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="flex-shrink object-contain">
                    <img class="rounded-2xl mr-3 w-8 h-8" :src="items.img" />
                  </div>
                  <div class="ml-4 text-[#334D6E]">
                    {{ items.namePromotion }}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                {{ items.code }}
              </td>
              <td class="px-6 py-4">
                {{ items.startDate }} - {{ items.endDate }}
              </td>
              <td class="px-6 py-4">
                <div class="mb-3 mt-2">
                          <p class="text-normal text-green-600 font-semibold" v-if="items.status === 1">Đang Áp Dụng</p>
                          <p class="text-normal text-red-600 font-semibold" v-else>Không Hiệu Lực</p>
                        </div>
              </td>
              <td class="px-6 py-4">
                <span class="flex items-center">
                  <Icon
                    @click="getPromotionDetail(items.id)"
                    class="
                      w-6
                      h-6
                      cursor-pointer
                      hover:text-gray-600
                      duration-200
                    "
                    icon="ant-design:eye-filled"
                  />
                  <Icon
                    class="
                      w-6
                      h-6
                      cursor-pointer
                      hover:text-gray-600
                      duration-200
                    "
                    icon="bxs:trash-alt"
                  />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- <nav aria-label="Page navigation example mx-auto">
      <ul class="inline-flex -space-x-px">
        <li>
          <span
            v-if="currentPage == 1"
            class="
              py-2
              px-3
              ml-0
              leading-tight
              text-gray-500
              bg-white
              rounded-l-lg
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700
              dark:bg-gray-800
              dark:border-gray-700
              dark:text-gray-400
              dark:hover:bg-gray-700
              dark:hover:text-white
              cursor-default
            "
            >Previous</span
          >
          <span
            v-else
            class="
              py-2
              px-3
              ml-0
              leading-tight
              text-gray-500
              bg-white
              rounded-l-lg
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700
              dark:bg-gray-800
              dark:border-gray-700
              dark:text-gray-400
              dark:hover:bg-gray-700
              dark:hover:text-white
              cursor-pointer
            "
            @click="paging(currentPage - 1)"
            >Previous</span
          >
        </li>
        <li v-for="page in 5" :key="page">
          <span
            v-if="page === currentPage"
            aria-current="page"
            class="
              py-2
              px-3
              text-blue-600
              bg-blue-50
              border border-gray-300
              hover:bg-blue-100 hover:text-blue-700
              dark:border-gray-700 dark:bg-gray-700 dark:text-white
            "
            >{{ page }}</span
          >
          <a
            v-else
            href="#"
            class="
              py-2
              px-3
              leading-tight
              text-gray-500
              bg-white
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700
              dark:bg-gray-800
              dark:border-gray-700
              dark:text-gray-400
              dark:hover:bg-gray-700
              dark:hover:text-white
            "
            @click="paging(page)"
            >{{ page }}</a
          >
        </li>
        <li>
          <span
            v-if="currentPage == totalPage"
            class="
              py-2
              px-3
              ml-0
              leading-tight
              text-gray-500
              bg-white
              rounded-r-lg
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700
              dark:bg-gray-800
              dark:border-gray-700
              dark:text-gray-400
              dark:hover:bg-gray-700
              dark:hover:text-white
              cursor-default
            "
            >Next</span
          >
          <span
            v-else
            class="
              py-2
              px-3
              ml-0
              leading-tight
              text-gray-500
              bg-white
              rounded-r-lg
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700
              dark:bg-gray-800
              dark:border-gray-700
              dark:text-gray-400
              dark:hover:bg-gray-700
              dark:hover:text-white
              cursor-pointer
            "
            @click="paging(currentPage + 1)"
            >Next</span
          >
        </li>
      </ul>
    </nav> -->
  </div>
  <!--The Modal-->
  <ModalPromotion
    :class="isHiddenModal === false ? 'hidden' : ''"
    :detail="promotionDetail"
    :click="countClick"
  />
</template>

<script>
import { Icon } from "@iconify/vue";
import ModalPromotion from "./ModalPromotion.vue";

export default {
  components: { Icon, ModalPromotion },
  data() {
    return {
      isHiddenModal: false,
      countClick: 0,
      promotionDetail: {},
      promotionList: [
        {
          id: 1,
          img: "https://i.ibb.co/hZ6w8fH/10-percent.jpg",
          namePromotion: "Lần đâu đặt sân",
          code: "firsttime123",
          description: "Dành cho ai lần đầu đặt sân sẽ được giảm 10%",
          startDate: "30/06/2022",
          endDate: "02/07/2022",
          status: 0,
        },
        {
          id: 2,
          img: "https://i.ibb.co/zR6xW9L/25-percent.png",
          namePromotion: "Khách Quen Thân Yêu",
          code: "customer456",
          description:
            "Vocher áp dụng cho khách hàng có số lần đặt từ 10 lần trở lên đặt sân cho lần tiếp theo sẽ được giảm 25%",
          startDate: "30/06/2022",
          endDate: "02/07/2022",
          status: 1,
        },
      ],
    };
  },
  methods: {
    getPromotionDetail(id) {
      this.isHiddenModal = true;
      this.countClick++;
      this.promotionDetail = this.promotionList.find((x) => x.id === id);
    },
  },
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