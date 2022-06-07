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
            "
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
            "
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
            "
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
            "
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
            <font-awesome-icon
              class="w-4 h-4 text-[#ACACAC]"
              icon="arrows-up-down"
            />
          </th>
          <tbody class="bg-white">
            <!--Name Content-->
            <tr>
              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex=shrink w-8 h-8">
                    <img
                      class="rounded-2xl mr-3"
                      :src="require('../../../assets/img/son.jpg')"
                    />
                  </div>
                  <div class="ml-4 text-[#334D6E]">Senior Backend</div>
                </div>
              </td>
              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 text-[#334D6E]">huysenior@gmail.com</div>
                </div>
              </td>
              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 text-[#334D6E]">0909741741</div>
                </div>
              </td>
              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <span class="font-semibold text-[#50D222]">Active</span>
                </div>
              </td>
              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 text-[#334D6E]">
                    <div class="flex items-center">
                      <font-awesome-icon
                        class="w-5 h-5 text-[#ACACAC] mr-2"
                        icon="eye"
                      />
                      <font-awesome-icon
                        class="w-5 h-5 text-[#ACACAC] mr-2"
                        icon="trash-can"
                      />
                      <font-awesome-icon
                        class="w-5 h-5 text-[#ACACAC] mr-2"
                        icon="file-pen"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <!--Email Content-->
            <tr>
              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex=shrink w-8 h-8">
                    <img
                      class="rounded-2xl mr-3"
                      :src="require('../../../assets/img/son.jpg')"
                    />
                  </div>
                  <div class="ml-4 text-[#334D6E]">Senior Backend</div>
                </div>
              </td>
              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 text-[#334D6E]">huysenior@gmail.com</div>
                </div>
              </td>
              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 text-[#334D6E]">0909741741</div>
                </div>
              </td>
              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <span class="font-semibold text-[#FF8494]">Disabled</span>
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
                          hover:text-gray-500
                          cursor-pointer
                        "
                        icon="eye"
                      />
                      <font-awesome-icon
                        class="w-5 h-5 text-[#ACACAC] mr-2"
                        icon="trash-can"
                      />
                      <font-awesome-icon
                        class="w-5 h-5 text-[#ACACAC] mr-2"
                        icon="file-pen"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <!--Phone Number-->
            <tr>
              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex=shrink w-8 h-8">
                    <img
                      class="rounded-2xl mr-3"
                      :src="require('../../../assets/img/son.jpg')"
                    />
                  </div>
                  <div class="ml-4 text-[#334D6E]">Senior Backend</div>
                </div>
              </td>
              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 text-[#334D6E]">huysenior@gmail.com</div>
                </div>
              </td>
              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 text-[#334D6E]">0909741741</div>
                </div>
              </td>
              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex items-center">
                    <span class="font-semibold text-[#50D222]">Active</span>
                  </div>
                </div>
              </td>
              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 text-[#334D6E]">
                    <div class="flex items-center">
                      <font-awesome-icon
                        class="w-5 h-5 text-[#ACACAC] mr-2"
                        icon="eye"
                      />
                      <font-awesome-icon
                        class="w-5 h-5 text-[#ACACAC] mr-2"
                        icon="trash-can"
                      />
                      <font-awesome-icon
                        class="w-5 h-5 text-[#ACACAC] mr-2"
                        icon="file-pen"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <!--Status-->
            <tr>
              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex=shrink w-8 h-8">
                    <img
                      class="rounded-2xl mr-3"
                      :src="require('../../../assets/img/son.jpg')"
                    />
                  </div>
                  <div class="ml-4 text-[#334D6E]">Senior Backend</div>
                </div>
              </td>
              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 text-[#334D6E]">huysenior@gmail.com</div>
                </div>
              </td>
              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 text-[#334D6E]">0909741741</div>
                </div>
              </td>
              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <span class="font-semibold text-[#FF8494]">Disabled</span>
                </div>
              </td>
              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 text-[#334D6E]">
                    <div class="flex items-center">
                      <font-awesome-icon
                        class="w-5 h-5 text-[#ACACAC] mr-2"
                        icon="eye"
                      />
                      <font-awesome-icon
                        class="w-5 h-5 text-[#ACACAC] mr-2"
                        icon="trash-can"
                      />
                      <font-awesome-icon
                        class="w-5 h-5 text-[#ACACAC] mr-2"
                        icon="file-pen"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <!--Action-->
            <tr>
              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex=shrink w-8 h-8">
                    <img
                      class="rounded-2xl mr-3"
                      :src="require('../../../assets/img/son.jpg')"
                    />
                  </div>
                  <div class="ml-4 text-[#334D6E]">Senior Backend</div>
                </div>
              </td>
              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 text-[#334D6E]">huysenior@gmail.com</div>
                </div>
              </td>
              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 text-[#334D6E]">0909741741</div>
                </div>
              </td>
              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex items-center">
                    <span class="font-semibold text-[#50D222]">Active</span>
                  </div>
                </div>
              </td>
              <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 text-[#334D6E]">
                    <div class="flex items-center">
                      <font-awesome-icon
                        class="w-5 h-5 text-[#ACACAC] mr-2"
                        icon="eye"
                      />
                      <font-awesome-icon
                        class="w-5 h-5 text-[#ACACAC] mr-2"
                        icon="trash-can"
                      />
                      <font-awesome-icon
                        class="w-5 h-5 text-[#ACACAC] mr-2"
                        icon="file-pen"
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
            Showing 1 to 5 of 10 Member
          </p>
          <div class="mx-auto flex items-center text-[#ACACAC] font-medium lg:mt-2">
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
              >Next</button-component
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
export default {
  name : "MemberShips",
  data() {
    return {
      dropDownAccount: {
        id: "dropdownBottomButton1",
        dropDownToggle: "dropdownBottom1",
        listItem: ["My Account", "Sign Out"],
      },
    };
  },
};
</script>

