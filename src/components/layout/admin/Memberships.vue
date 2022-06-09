  <template>
  <div class="container mx-auto px-8 h-[80%] lg:mt-8 shadow">
    <div class="w-[100%] h-full">
      <div class="flex items-center justify-center mb-4">
        <h2 class="mr-4 text-lg font-semibold text-[#747474]">Data Member</h2>
      </div>

      <div class="container mx-auto h-full mt-8 md:mt-0 min-w-full">
        <table class="min-w-full">
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
            Name
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
            Phone Number
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
            Status
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
            Action
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
        <div class="flex flex-col container mx-auto lg:mt-8 md:mt-0">
          <p class="text-center md:my-2 my-4 text-[#334D6E]">
            Showing {{ currentPage }} to 5 of {{ membersList.length }} Members
          </p>
          <div
            v-if="membersList.length > 5"
            class="mx-auto flex items-center text-[#ACACAC] font-medium lg:mt-2"
          >
            <button-component
              class="
                bg-[#D1D5DB]
                px-4
                py-2
                text-sm
                rounded
                mr-1
                hover:outline-none
                cursor-pointer
                hover:bg-[#bdc3cb] hover:text-[#434141] hover:font-semibold
              "
              @click="currentPage--"
              >Prev</button-component
            >
            <button-component
              class="
                bg-[#D1D5DB]
                px-4
                py-2
                text-sm
                rounded
                hover:outline-none
                cursor-pointer
                hover:bg-[#bdc3cb] hover:text-[#434141] hover:font-semibold
              "
              @click="currentPage++"
              >Next</button-component
            >
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
  data() {
    return {
      dropDownAccount: {
        id: "dropdownBottomButton1",
        dropDownToggle: "dropdownBottom1",
        listItem: ["My Account", "Sign Out"],
      },
      membersList: this.$store.getters["members/membersList"],
      sortedList: [...this.$store.getters["members/membersList"]],
      currentPage: 1,
      profileDetail: {},
      isHiddenModal: true,
      countClick: 0,
      checkSort: 0,
    };
  },
  methods: {
    memberDetail(id) {
      this.profileDetail = this.membersList.find((x) => x.id == id);
      this.isHiddenModal = false;
      this.countClick++;
    },
    sortByField(fieldSort) {
      console.log(fieldSort);
      if (this.checkSort == 0) {
        if (fieldSort === "id") {
          this.sortedList.sort((a, b) =>
            a[fieldSort] < b[fieldSort] ? 1 : -1
          );
        } else {
          this.sortedList.sort((a, b) =>
            a[fieldSort] > b[fieldSort] ? 1 : -1
          );
        }

        this.checkSort = 1;
      } else {
        this.sortedList = [...this.membersList];
        this.checkSort = 0;
      }
    },
  },
  watcher: {
    membersList() {
      return this.membersList;
    },
  },
};
</script>

