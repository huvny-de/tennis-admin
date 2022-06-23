<template>
  <div class="p-8 flex flex-col items-center justify-between">
    <div
      class="
        mt-2
        bg-white
        dark:bg-gray-800
        p-5
        w-[50%]
        px-4
        rounded-md
        box-border
        shadow
      "
    >
      <span>
         <p class="text-red-500 text-sm italic mb-2">* Ấn vào cài đặt để cài giá tiền cơ bản cho mỗi loại sân</p>
        <h2 class="font-semibold text-lg text-gray-800 dark:text-gray-200">
          Danh Sách Loại Sân
        </h2>
      </span>
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
              <th scope="col" class="uppercase px-6 py-3">Loại Sân</th>
              <th scope="col" class="uppercase px-6 py-3">Cài Đặt Giá Tiền</th>
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
              v-for="type in listTypeYard"
              :key="type.id"
            >
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="flex-shrink object-contain">
                    <img class="rounded mr-3 w-20 h-12" :src="type.img" />
                  </div>
                  <div class="ml-4 text-[#334D6E]">{{ type.yardType }}</div>
                </div>
              </td>
              <td class="px-12 py-4">
                <Icon
                  class="w-7 h-7 hover:text-gray-600 cursor-pointer"
                  icon="ant-design:setting-filled"
                  @click="yardDetail(type.id)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!--The Modal-->
  <ModalSetting
    :class="isHiddenModal === true ? 'hidden' : ''"
    :detail="slotDetail"
    :click="countClick"
  />
</template>

<script>
import { Icon } from "@iconify/vue";
import ModalSetting from "./ModalSetting.vue";

export default {
  components: {
    Icon,
    ModalSetting,
  },
  data() {
    return {
      isHiddenModal: true,
      countClick: 0, // using for display again when choose the same yard type
      listTypeYard: [
        {
          img: "https://thegioithethao.vn/upload_images/images/2022/01/22/4(1).jpg",
          id: 1,
          yardType: "Sân Đất Nện",
        },
        {
          img: "https://suasantennis.com/uploads/news/2014_08/santennisdangco.jpg",
          id: 2,
          yardType: "Sân Cỏ",
        },
        {
          img: "https://www.thethaothientruong.vn/uploads/contents/San-Tennis-cung.jpg",
          id: 3,
          yardType: "Sân Cứng",
        },
      ],
      yards: [
        {
          id: "1",
          typeName: "Sân Đất Nện",
          slotDetail: [
            {
              slot: 1,
              time: "5:00 AM - 6:30 AM",
              basicPrice: "",
            },
            {
              slot: 2,
              time: "6:30 AM - 8:00 AM",
              basicPrice: "",
            },
            {
              slot: 3,
              time: "8:00 AM - 9:30 AM",
              basicPrice: "",
            },
            {
              slot: 4,
              time: "9:30 AM - 11:00 AM",
              basicPrice: "",
            },
            {
              slot: 5,
              time: "11:00 AM - 12:00 AM",
              basicPrice: "",
            },
            {
              slot: 6,
              time: "12:00 AM - 01:30 PM",
              basicPrice: "",
            },
            {
              slot: 7,
              time: "01:30 PM - 03:00 PM",
              basicPrice: "",
            },
            {
              slot: 8,
              time: "03:00 PM - 04:30 PM",
              basicPrice: "",
            },
            {
              slot: 9,
              time: "04:30 PM - 06:00 PM",
              basicPrice: "",
            },
            {
              slot: 10,
              time: "06:00 PM - 07:30 PM",
              basicPrice: "",
            },
            {
              slot: 11,
              time: "07:30 PM - 09:00 PM",
              basicPrice: "",
            },
            {
              slot: 12,
              time: "09:00 PM - 10:00 PM",
              basicPrice: "",
            },
          ],
        },
        {
          id: "2",
          typeName: "Sân Cỏ",
          slotDetail: [
            {
              slot: 1,
              time: "5:00 AM - 6:30 AM",
              basicPrice: "",
            },
            {
              slot: 2,
              time: "6:30 AM - 8:00 AM",
              basicPrice: "",
            },
            {
              slot: 3,
              time: "8:00 AM - 9:30 AM",
              basicPrice: "",
            },
            {
              slot: 4,
              time: "9:30 AM - 11:00 AM",
              basicPrice: "",
            },
            {
              slot: 5,
              time: "11:00 AM - 12:00 AM",
              basicPrice: "",
            },
            {
              slot: 6,
              time: "12:00 AM - 01:30 PM",
              basicPrice: "",
            },
            {
              slot: 7,
              time: "01:30 PM - 03:00 PM",
              basicPrice: "",
            },
            {
              slot: 8,
              time: "03:00 PM - 04:30 PM",
              basicPrice: "",
            },
            {
              slot: 9,
              time: "04:30 PM - 06:00 PM",
              basicPrice: "",
            },
            {
              slot: 10,
              time: "06:00 PM - 07:30 PM",
              basicPrice: "",
            },
            {
              slot: 11,
              time: "07:30 PM - 09:00 PM",
              basicPrice: "",
            },
            {
              slot: 12,
              time: "09:00 PM - 10:00 PM",
              basicPrice: "",
            },
          ],
        },
        {
          id: "3",
          typeName: "Sân Cứng",
          slotDetail: [
            {
              slot: 1,
              time: "5:00 AM - 6:30 AM",
              basicPrice: "",
            },
            {
              slot: 2,
              time: "6:30 AM - 8:00 AM",
              basicPrice: "",
            },
            {
              slot: 3,
              time: "8:00 AM - 9:30 AM",
              basicPrice: "",
            },
            {
              slot: 4,
              time: "9:30 AM - 11:00 AM",
              basicPrice: "",
            },
            {
              slot: 5,
              time: "11:00 AM - 12:00 AM",
              basicPrice: "",
            },
            {
              slot: 6,
              time: "12:00 AM - 01:30 PM",
              basicPrice: "",
            },
            {
              slot: 7,
              time: "01:30 PM - 03:00 PM",
              basicPrice: "",
            },
            {
              slot: 8,
              time: "03:00 PM - 04:30 PM",
              basicPrice: "",
            },
            {
              slot: 9,
              time: "04:30 PM - 06:00 PM",
              basicPrice: "",
            },
            {
              slot: 10,
              time: "06:00 PM - 07:30 PM",
              basicPrice: "",
            },
            {
              slot: 11,
              time: "07:30 PM - 09:00 PM",
              basicPrice: "",
            },
            {
              slot: 12,
              time: "09:00 PM - 10:00 PM",
              basicPrice: "",
            },
          ],
        },
      ],
      slotDetail: {},
    };
  },
  methods: {
    yardDetail(id) {
      this.isHiddenModal =false,
      this.countClick++;
      this.slotDetail = this.yards.find((yard) => yard.id == id);
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