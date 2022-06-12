  <template>
  <preloader-component id="preloader" />

  <div class="container mx-auto px-8 h-[80%] lg:mt-8">
    <div class="w-[100%] h-full">
      <div class="flex items-center justify-center mb-4">
        <h2 class="mr-4 text-lg font-semibold text-[#747474]">
          Danh Sách Chủ Sân
        </h2>
      </div>

      <div class="container mx-auto h-full mt-8 md:mt-0 min-w-full">
        <table v-if="sortedList.length > 0" class="min-w-full">
          <th
            class="
              px-6
              py-3
              text-sm
              font-medium
              leading-4
              tracking-wider
              text-left text-[#334D6E]
              bg-gray-100
              border-b border-gray-200
              cursor-pointer
            "
            @click="sortByField('id')"
          >
            ID
            <font-awesome-icon
              class="w-4 h-4 text-[#ACACAC]"
              icon="arrows-up-down"
            />
          </th>
          <th
            class="
              px-6
              py-3
              text-sm
              font-medium
              leading-4
              tracking-wider
              text-left text-[#334D6E]
              bg-gray-100
              border-b border-gray-200
              cursor-pointer
            "
            @click="sortByField('fullName')"
          >
            Họ Tên
            <font-awesome-icon
              class="w-4 h-4 text-[#ACACAC]"
              icon="arrows-up-down"
            />
          </th>
          <th
            class="
              px-6
              py-3
              text-sm
              font-medium
              leading-4
              tracking-wider
              text-left text-[#334D6E]
              bg-gray-100
              border-b border-gray-200
              cursor-pointer
            "
            @click="sortByField('email')"
          >
            Email
            <font-awesome-icon
              class="w-4 h-4 text-[#ACACAC]"
              icon="arrows-up-down"
            />
          </th>
          <th
            class="
              px-6
              py-3
              text-sm
              font-medium
              leading-4
              tracking-wider
              text-left text-[#334D6E]
              bg-gray-100
              border-b border-gray-200
              cursor-pointer
            "
            @click="sortByField('phoneNumber')"
          >
            Điện Thoại
            <font-awesome-icon
              class="w-4 h-4 text-[#ACACAC]"
              icon="arrows-up-down"
            />
          </th>
          <th
            class="
              px-6
              py-3
              text-sm
              font-medium
              leading-4
              tracking-wider
              text-left text-[#334D6E]
              bg-gray-100
              border-b border-gray-200
              cursor-pointer
            "
            @click="sortByField('status')"
          >
            Trạng Thái
            <font-awesome-icon
              class="w-4 h-4 text-[#ACACAC]"
              icon="arrows-up-down"
            />
          </th>
          <th
            class="
              px-6
              py-3
              text-sm
              font-medium
              leading-4
              tracking-wider
              text-left text-[#334D6E]
              bg-gray-100
              border-b border-gray-200
            "
          >
            Thao Tác
          </th>
          <tbody class="bg-white">
            <tr v-for="member in sortedList" :key="member.id">
              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 text-[#334D6E]">{{ member.id }}</div>
                </div>
              </td>
              <td class="px-6 py-5 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink object-contain">
                    <img class="rounded-2xl mr-3 w-8 h-8" :src="member.img" />
                  </div>
                  <div class="ml-4 text-[#334D6E]">{{ member.fullName }}</div>
                </div>
              </td>
              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 text-[#334D6E]">{{ member.email }}</div>
                </div>
              </td>
              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 text-[#334D6E]">
                    {{ member.phoneNumber }}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <span
                    v-if="member.status === 'Active'"
                    class="font-semibold text-[#50D222]"
                    >Active</span
                  >
                  <span v-else class="font-semibold text-[#FF8494]"
                    >Disabled</span
                  >
                </div>
              </td>
              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 text-[#334D6E]">
                    <div class="flex items-center">
                      <font-awesome-icon
                        class="
                          w-5
                          h-5
                          text-[#ACACAC]
                          mr-2
                          cursor-pointer
                          hover:text-gray-500
                        "
                        icon="eye"
                        @click="memberDetail(member.id)"
                      />
                      <font-awesome-icon
                        class="
                          w-5
                          h-5
                          text-[#ACACAC]
                          mr-2
                          cursor-pointer
                          hover:text-gray-500
                        "
                        icon="trash-can"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex flex-col container mx-auto lg:mt-6 md:mt-0">
          <p class="text-center md:my-2 my-4 text-[#334D6E]">
            Tổng số chủ sân : {{ membersTotal }}
          </p>
          <div
            class="
              mx-auto
              flex
              items-center
              text-[#ACACAC]
              font-medium
              lg:mt-4
              text-sm
            "
          >
            <nav v-if="membersTotal > 5" aria-label="Page navigation example">
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
                <li v-for="page in totalPage" :key="page">
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
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--The Modal-->
  <TheModal
    :class="isHiddenModal === true ? 'hidden' : ''"
    :profile="profileDetail"
    :click="countClick"
  />
</template>
<script>
import TheModal from "../TheModal.vue";

export default {
  name: "MemberShips",
  components: {
    TheModal,
  },
  props: {
    searchValue: {
      type: String,
      require: false,
    },
  },
  mounted() {
    this.sortedList = [
      ...this.$store.getters["yardOwner/paginate"](this.currentPage),
    ];

    this.membersTotal = this.$store.getters["yardOwner/membersTotal"];
    this.totalPage = Math.ceil(this.membersTotal / this.pageSize);
  },
  data() {
    return {
      dropDownAccount: {
        id: "dropdownBottomButton1",
        dropDownToggle: "dropdownBottom1",
        listItem: ["My Account", "Sign Out"],
      },
      sortedList: [],
      membersTotal: 0,
      currentPage: 1,
      pageSize: 5,
      totalPage: 0,
      profileDetail: {},
      isHiddenModal: true,
      countClick: 0,
      checkSort: 0,
    };
  },
  methods: {
    memberDetail(id) {
      this.profileDetail = this.sortedList.find((x) => x.id == id);
      this.isHiddenModal = false;
      this.countClick++;

      console.log(this.searchValue);
    },
    sortByField(fieldSort) {
      if (this.checkSort == 0) {
        if (fieldSort === "id") {
          this.sortedList.sort((a, b) =>
            parseInt(a[fieldSort]) < parseInt(b[fieldSort]) ? 1 : -1
          );
        } else {
          this.sortedList.sort((a, b) =>
            a[fieldSort] > b[fieldSort] ? 1 : -1
          );
        }

        this.checkSort = 1;
      } else {
       

         let search_obj = this.$store.getters["yardOwner/searchMembers"](
          this.searchValue,
          this.currentPage
        );

        //  this.sortedList = [
        //   ...this.$store.getters["yardOwner/paginate"](this.currentPage),
        // ];

        this.sortedList = [...search_obj.search_arr];
        // this.membersTotal = search_obj.totalSearch;
        this.checkSort = 0;
      }
    },
    paging(page) {
      // this.sortedList = [...this.$store.getters["yardOwner/paginate"](page)];
      this.currentPage = page;
      if (this.searchValue.trim().length == 0) {
        this.sortedList = [
          ...this.$store.getters["yardOwner/paginate"](this.currentPage),
        ];
      } else {
        let search_obj = this.$store.getters["yardOwner/searchMembers"](
          this.searchValue,
          this.currentPage
        );

        this.sortedList = [...search_obj.search_arr];
        this.membersTotal = search_obj.totalSearch;

        this.totalPage = Math.ceil(this.membersTotal / this.pageSize);
        //  this.sortedList = [...this.$store.getters["yardOwner/searchMembers"](this.searchValue)];
      }
    },
  },
  watch: {
    searchValue() {
      this.currentPage = 1;

      if (this.searchValue.trim().length == 0) {
        this.sortedList = [
          ...this.$store.getters["yardOwner/paginate"](this.currentPage),
        ];

        this.membersTotal = this.$store.getters["yardOwner/membersTotal"];
        this.totalPage = Math.ceil(this.membersTotal / this.pageSize);
      } else {
        let search_obj = this.$store.getters["yardOwner/searchMembers"](
          this.searchValue,
          this.currentPage
        );

        this.sortedList = [...search_obj.search_arr];
        this.membersTotal = search_obj.totalSearch;

        this.totalPage = Math.ceil(this.membersTotal / this.pageSize);
      }
    },
  },
};
</script>

