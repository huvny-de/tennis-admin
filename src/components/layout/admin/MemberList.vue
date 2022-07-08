  <template>
  <preloader-component :class="loading == false ? 'hidden' : ''" />

  <div class="container mx-auto px-8 h-[80%] lg:mt-4">
    <div class="w-[100%] h-full">
      <div class="container flex items-center justify-between">
        <span class="pt-4">
          <h2 class="font-bold text-lg text-gray-600 dark:text-gray-200">
            Danh Sách Thành Viên
          </h2>
          <p class="my-2 text-[#334D6E]">
            Tổng số thành viên : {{ membersTotal }}
          </p>
        </span>
        <div class="flex items-center justify-between">
          <div class="container mx-auto flex px-4">
            <div class="mx-auto flex items-center justify-center">
              <div class="mx-auto flex items-center justify-center">
                <div class="mr-5">
                  <p class="text-gray-500 font-lexend font-normal mb-1">
                    Trạng Thái
                  </p>
                  <select @change="filterMember($event)" id="small" class="
                    rounded-lg
                    text-md
                    block
                    pr-8
                    W-full
                    text-sm text-gray-900
                    bg-gray-50
                    border border-gray-500
                    focus:ring-blue-500 focus:border-blue-500
                  ">
                    <option v-if="filterSelect === '1'" selected="true" value="1">
                      Tất cả
                    </option>
                    <option v-else select="false" value="1">Tất cả</option>
                    <option value="2">Hoạt Động</option>
                    <option value="3">Bị Khóa</option>
                  </select>
                </div>
                <div class="flex items-center relative mt-6">
                  <span @click="searchMember" class="text-2xl p-2 text-gray-600 absolute right-0">
                    <Icon icon="ei:search" />
                  </span>
                  <input @keyup.enter="searchMember" v-model="searchValue" type="text" placeholder="Search..." class="
                    pr-10
                    rounded
                    border border-gray-500
                    bg-gray-50
                    placeholder:text-sm
                    focus:ring-600
                    mt-1
                  " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto h-96 mt-6 min-w-full">
        <p class="text-red-500 text-center" v-if="this.sortedList.length === 0">
          Không có tài khoản nào phù hợp
        </p>
        <table v-if="sortedList.length > 0" class="min-w-full">
          <th class="
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
            " @click="sortByField('id')">
            ID
            <font-awesome-icon class="w-4 h-4 text-[#ACACAC]" icon="arrows-up-down" />
          </th>
          <th class="
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
            " @click="sortByField('fullName')">
            Họ Tên
            <font-awesome-icon class="w-4 h-4 text-[#ACACAC]" icon="arrows-up-down" />
          </th>
          <th class="
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
            " @click="sortByField('email')">
            Email
            <font-awesome-icon class="w-4 h-4 text-[#ACACAC]" icon="arrows-up-down" />
          </th>
          <th class="
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
            " @click="sortByField('phoneNumber')">
            Điện Thoại
            <font-awesome-icon class="w-4 h-4 text-[#ACACAC]" icon="arrows-up-down" />
          </th>
          <th class="
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
            " @click="sortByField('status')">
            Trạng Thái
            <font-awesome-icon class="w-4 h-4 text-[#ACACAC]" icon="arrows-up-down" />
          </th>
          <th class="
              px-6
              py-3
              text-sm
              font-medium
              leading-4
              tracking-wider
              text-left text-[#334D6E]
              bg-gray-100
              border-b border-gray-200
            ">
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
                  <span v-if="member.status === 1" class="font-semibold text-[#50D222]">Hoạt Động</span>
                  <span v-else class="font-semibold text-red-500">Bị Khóa</span>
                </div>
              </td>
              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 text-[#334D6E]">
                    <div class="flex items-center">
                      <font-awesome-icon class="
                          w-5
                          h-5
                          text-[#ACACAC]
                          mr-2
                          cursor-pointer
                          hover:text-gray-500
                        " icon="eye" @click="memberDetail(member.id)" />
                      <font-awesome-icon v-if="member.status !== 0" class="
                          w-5
                          h-5
                          text-[#ACACAC]
                          mr-2
                          cursor-pointer
                          hover:text-gray-500
                        " icon="trash-can" @click="showAlert" />
                      <Icon @click="unLockAccount(member.id)" v-if="member.status === 0" class="
                          w-5
                          h-5
                          text-[#ACACAC]
                          mr-2
                          cursor-pointer
                          hover:text-gray-500
                          mt-[-3px]
                        " icon="fa-solid:unlock-alt" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex flex-col container mx-auto lg:mt-6 md:mt-0">
          <!-- <p class="text-center md:my-2 my-4 text-[#334D6E]">
            Tổng số thành viên : {{ membersTotal }}
          </p> -->
          <div class="
              mx-auto
              flex
              items-center
              text-[#ACACAC]
              font-medium
              lg:mt-4
              text-sm
            ">
            <nav v-if="membersTotal > 5" aria-label="Page navigation example">
              <ul class="inline-flex -space-x-px">
                <li>
                  <span v-if="currentPage == 1" class="
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
                    ">Previous</span>
                  <span v-else class="
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
                    " @click="paging(currentPage - 1)">Previous</span>
                </li>
                <li v-for="page in totalPage" :key="page">
                  <span v-if="page === currentPage" aria-current="page" class="
                      py-2
                      px-3
                      text-blue-600
                      bg-blue-50
                      border border-gray-300
                      hover:bg-blue-100 hover:text-blue-700
                      dark:border-gray-700 dark:bg-gray-700 dark:text-white
                    ">{{ page }}</span>
                  <a v-else href="#" class="
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
                    " @click="paging(page)">{{ page }}</a>
                </li>
                <li>
                  <span v-if="currentPage == totalPage" class="
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
                    ">Next</span>
                  <span v-else class="
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
                    " @click="paging(currentPage + 1)">Next</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--The Modal-->
  <TheModal :class="isHiddenModal === true ? 'hidden' : ''" :profile="profileDetail" :click="countClick" />
</template>
<script>
import TheModal from "./MemberModal.vue";
import swal from "sweetalert";
import { Icon } from "@iconify/vue";

export default {
  name: "MemberList",
  components: {
    TheModal,
    Icon
  },
  mounted() {
    let search_obj = this.$store.getters["member/searchMembers"](
      this.searchValue,
      this.currentPage,
      this.filterSelect
    );

    this.sortedList = [...search_obj.search_arr];

    this.membersTotal = this.$store.getters["member/membersTotal"];
    this.totalPage = Math.ceil(this.membersTotal / this.pageSize);
  },
  data() {
    return {
      loading: false,
      sortedList: [],
      membersTotal: 0,
      currentPage: 1,
      pageSize: 5,
      totalPage: 0,
      profileDetail: {},
      isHiddenModal: true,
      countClick: 0,
      checkSort: 0,
      filterSelect: '1',
      searchValue: ''
    };
  },
  methods: {
    memberDetail(id) {
      this.profileDetail = this.sortedList.find((x) => x.id == id);
      this.isHiddenModal = false;
      this.countClick++;
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
        let search_obj = this.$store.getters["member/searchMembers"](
          this.searchValue,
          this.currentPage,
          this.filterSelect
        );

        this.sortedList = [...search_obj.search_arr];
        this.checkSort = 0;
      }
    },
    paging(page) {

      this.currentPage = page;

      let search_obj = this.$store.getters["member/searchMembers"](
        this.searchValue,
        this.currentPage,
        this.filterSelect
      );

      this.sortedList = [...search_obj.search_arr];

      this.membersTotal = search_obj.totalSearch;

      this.totalPage = Math.ceil(this.membersTotal / this.pageSize);
    },
    showAlert() {
      swal("Bạn có chắc chắn sẽ khóa tài khoản này không ?",{
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Khóa Tài Khoản Thành Công !", {
            icon: "success",
          });
        }
      });
    },
    filterMember(evt) {
      this.filterSelect = evt.target.value;
    },
    searchMember() {
      this.currentPage = 1;

      if (this.searchValue.trim().length == 0) {
        let search_obj = this.$store.getters["member/searchMembers"](
          this.searchValue,
          this.currentPage,
          this.filterSelect
        );

        this.sortedList = [...search_obj.search_arr];
        this.membersTotal = search_obj.totalSearch;
        this.totalPage = Math.ceil(this.membersTotal / this.pageSize);

      } else {
        let search_obj = this.$store.getters["member/searchMembers"](
          this.searchValue,
          this.currentPage,
          this.filterSelect
        );

        this.sortedList = [...search_obj.search_arr];
        this.membersTotal = search_obj.totalSearch;

        this.totalPage = Math.ceil(this.membersTotal / this.pageSize);
      }
    }
    , unLockAccount() {
      swal("Bạn có chắc chắn kích hoạt lại chủ sân này không ?", {
        buttons: ["Hủy", "Đồng Ý"],
      }).then((value) => {
        if (value) {
          swal("Kích Hoạt Thành Công !", {
            icon: "success",
          });
        }
      });
    },
  },

};
</script>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 10px;
  width: 150px
}
</style>