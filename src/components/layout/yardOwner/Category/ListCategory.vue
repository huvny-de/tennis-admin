<template>
  <div class="p-8 flex flex-col items-center justify-between">
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
        shadow
      "
    >
      <span>
        <h2 class="font-semibold text-lg text-gray-800 dark:text-gray-200">
          Quản lý danh mục
        </h2>
        <p class="text-gray-400 font-lexend font-normal">
          Danh mục các loại sân
        </p>
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
              text-sm text-gray-700
              uppercase
              bg-gray-50
              dark:bg-gray-700 dark:text-gray-400
            "
          >
            <tr>
              <th scope="col" class="uppercase px-6 py-3">Id</th>
              <th scope="col" class="uppercase px-6 py-3">Tên Danh Mục</th>
              <th scope="col" class="uppercase px-6 py-3">Chiều Dài</th>
              <th scope="col" class="uppercase px-6 py-3">Chiều Rộng</th>
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
              v-for="items in categoryList"
              :key="items"
            >
              <td class="px-2 py-4">
                <div class="flex items-center">
                  <div class="ml-4 text-[#334D6E]">{{ items.id }}</div>
                </div>
              </td>
              <td class="px-6 py-4">
                {{ items.categoryName }}
              </td>
              <td class="px-6 py-4">{{ items.width }} m</td>
              <td class="px-6 py-4">{{ items.height }} m</td>
              <td class="px-10 py-4">
                <font-awesome-icon
                  class="
                    w-5
                    h-5
                    text-[#ACACAC]
                    mr-4
                    cursor-pointer
                    hover:text-gray-500
                  "
                  icon="trash-can"
                  @click="showAlert"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryList: [
        {
          id: 1,
          img: "https://i.ibb.co/hgNrFmX/SE140371-Nguyen-Cong-Thai-Son.jpg",
          categoryName: "Kích thước lớn",
          height: 20,
          width: 40,
        },
        {
          id: 2,
          img: "https://i.ibb.co/hgNrFmX/SE140371-Nguyen-Cong-Thai-Son.jpg",
          categoryName: "Kích thước tiêu chuẩn",
          height: 18.29,
          width: 36.57,
        },
        {
          id: 3,
          img: "https://i.ibb.co/hgNrFmX/SE140371-Nguyen-Cong-Thai-Son.jpg",
          categoryName: "Kích thước nhỏ",
          height: 17.07,
          width: 34.75,
        },
      ],
    };
  },
};
</script>