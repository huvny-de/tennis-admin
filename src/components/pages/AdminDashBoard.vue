  <template>
  <div class="flex h-screen">
    <preloader-component />
    <side-bar-admin class="flex w-[16%]" />

    <div class="flex-1 bg-[#F8F9FF] flex flex-col">
      <div class="container mx-auto h-[14.8%] mb-8 border-1 pl-1 md:mb-0">
        <div class="h-full px-4 flex bg-white items-center justify-between">
          <div class="relative mx-4 lg:mx-0 w-[70%]">
            <span class="absolute inset-y-0 left-10 flex items-center pl-3 cursor-pointer">
              <font-awesome-icon
                class="w-5 h-5 text-[#ACACAC]"
                icon="magnifying-glass"
              />
            </span>
            <input-component
              class="
                w-[60%]
                rounded
                h-12
                pl-12
                border-gray-200
                mt-8
                ml-10
                bg-[#F5F5F7]
                placeholder:text-slate-400
              "
              placeholder="Search..."
            ></input-component>
          </div>

          <div class="flex justify-end items-center flex-1 mr-4">
            <select-list-component
              :id="dropDownAccount.id"
              :dropDownToggle="dropDownAccount.dropDownToggle"
              :dataList="dropDownAccount.listItem"
            >
              <img
                class="w-7 h-7 rounded mr-3"
                :src="require('../../assets/img/son.jpg')" />
              Senior Henry
              <font-awesome-icon
                class="w-4 h-4 ml-4 text-[#ACACAC]"
                icon="caret-down"
            /></select-list-component>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-8 h-[80%] lg:mt-3">
        <div class="w-[100%] h-full">
          <div class="flex items-center justify-center mb-4">
            <h2 class="mr-4 text-lg font-semibold text-[#747474]">
              Data Member
            </h2>
            <select-list-component
              :id="dropDownStatus.id"
              :dropDownToggle="dropDownStatus.dropDownToggle"
              :dataList="dropDownStatus.listItem"
              >Status
              <font-awesome-icon
                class="w-4 h-4 ml-4 text-[#ACACAC]"
                icon="caret-down"
            /></select-list-component>
          </div>

          <div class="container mx-auto h-full mt-4 md:mt-0 min-w-full">
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
                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div class="flex=shrink w-8 h-8">
                        <img
                          class="rounded-2xl mr-3"
                          :src="require('../../assets/img/son.jpg')"
                        />
                      </div>
                      <div class="ml-4 text-[#334D6E]">Senior Backend</div>
                    </div>
                  </td>
                  <td
                    class="px-2 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div class="ml-4 text-[#334D6E]">huysenior@gmail.com</div>
                    </div>
                  </td>
                  <td
                    class="px-2 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div class="ml-4 text-[#334D6E]">0909741741</div>
                    </div>
                  </td>
                  <td
                    class="px-2 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div
                        class="
                          ml-4
                          text-[#334D6E]
                          px-4
                          py-2
                          bg-[#D4EDE5]
                          rounded-xl
                          shadow
                          text-[#50D222]
                        "
                      >
                        <span class="font-semibold">Active</span>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-2 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
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
                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div class="flex=shrink w-8 h-8">
                        <img
                          class="rounded-2xl mr-3"
                          :src="require('../../assets/img/son.jpg')"
                        />
                      </div>
                      <div class="ml-4 text-[#334D6E]">Senior Backend</div>
                    </div>
                  </td>
                  <td
                    class="px-2 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div class="ml-4 text-[#334D6E]">huysenior@gmail.com</div>
                    </div>
                  </td>
                  <td
                    class="px-2 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div class="ml-4 text-[#334D6E]">0909741741</div>
                    </div>
                  </td>
                  <td
                    class="px-2 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div
                        class="
                          ml-4
                          text-[#334D6E]
                          px-4
                          py-2
                          bg-[#FFDEDB]
                          rounded-xl
                          shadow
                          text-[#FF8494]
                        "
                      >
                        <span class="font-semibold">Disabled</span>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-2 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
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
                <!--Phone Number-->
                <tr>
                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div class="flex=shrink w-8 h-8">
                        <img
                          class="rounded-2xl mr-3"
                          :src="require('../../assets/img/son.jpg')"
                        />
                      </div>
                      <div class="ml-4 text-[#334D6E]">Senior Backend</div>
                    </div>
                  </td>
                  <td
                    class="px-2 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div class="ml-4 text-[#334D6E]">huysenior@gmail.com</div>
                    </div>
                  </td>
                  <td
                    class="px-2 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div class="ml-4 text-[#334D6E]">0909741741</div>
                    </div>
                  </td>
                  <td
                    class="px-2 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div
                        class="
                          ml-4
                          text-[#334D6E]
                          px-4
                          py-2
                          bg-[#D4EDE5]
                          rounded-xl
                          shadow
                          text-[#50D222]
                        "
                      >
                        <span class="font-semibold">Active</span>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-2 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
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
                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div class="flex=shrink w-8 h-8">
                        <img
                          class="rounded-2xl mr-3"
                          :src="require('../../assets/img/son.jpg')"
                        />
                      </div>
                      <div class="ml-4 text-[#334D6E]">Senior Backend</div>
                    </div>
                  </td>
                  <td
                    class="px-2 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div class="ml-4 text-[#334D6E]">huysenior@gmail.com</div>
                    </div>
                  </td>
                  <td
                    class="px-2 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div class="ml-4 text-[#334D6E]">0909741741</div>
                    </div>
                  </td>
                  <td
                    class="px-2 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div
                        class="
                          ml-4
                          text-[#334D6E]
                          px-4
                          py-2
                          bg-[#FFDEDB]
                          rounded-xl
                          shadow
                          text-[#FF8494]
                        "
                      >
                        <span class="font-semibold">Disabled</span>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-2 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
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
                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div class="flex=shrink w-8 h-8">
                        <img
                          class="rounded-2xl mr-3"
                          :src="require('../../assets/img/son.jpg')"
                        />
                      </div>
                      <div class="ml-4 text-[#334D6E]">Senior Backend</div>
                    </div>
                  </td>
                  <td
                    class="px-2 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div class="ml-4 text-[#334D6E]">huysenior@gmail.com</div>
                    </div>
                  </td>
                  <td
                    class="px-2 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div class="ml-4 text-[#334D6E]">0909741741</div>
                    </div>
                  </td>
                  <td
                    class="px-2 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">
                      <div
                        class="
                          ml-4
                          text-[#334D6E]
                          px-4
                          py-2
                          bg-[#D4EDE5]
                          rounded-xl
                          shadow
                          text-[#50D222]
                        "
                      >
                        <span class="font-semibold">Active</span>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-2 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
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
            <div class="flex flex-col container mx-auto lg:mt-5 md:mt-0">
              <p class="text-center md:my-2 my-4 text-sm text-[#334D6E]">
                Showing 1 to 5 of 10 Member
              </p>
              <div class="mx-auto text-sm text-[#ACACAC] font-medium lg:mt-2">
                <button-component
                  class="
                    bg-[#D1D5DB]
                    px-4
                    py-3
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
                    py-3
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
    </div>
  </div>
</template>

  <script>


export default {
  data() {
    return {
      dropDownStatus: {
        id: "dropdownBottomButton2",
        dropDownToggle: "dropdownBottom2",
        listItem: ["All", "Active", "Disabled"],
      },
      dropDownAccount: {
        id: "dropdownBottomButton1",
        dropDownToggle: "dropdownBottom1",
        listItem: ["My Account", "Sign Out"],
      },
    };
  },
};
</script>

