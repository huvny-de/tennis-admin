  <template>
  <div
    id="modal"
    class="flex modal fixed inset-0"
    :class="isClose === true ? 'hidden' : ''"
  >
    <div class="modal-overlay absolute w-full h-full"></div>
    <div class="mx-auto relative p-4 w-full max-w-md h-full md:h-auto">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 mt-10">
        <button
          type="button"
          class="
            absolute
            top-3
            right-2.5
            text-gray-400
            bg-transparent
            hover:bg-gray-200 hover:text-gray-900
            rounded-lg
            text-sm
            p-1.5
            ml-auto
            inline-flex
            items-center
            dark:hover:bg-gray-800 dark:hover:text-white
          "
        >
          <svg
            @click="hiddenModal"
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
            Member Profile
          </h3>
          <form class="space-y-8" action="#">
            <div>
              <div class="photo-wrapper p-2">
                <img
                  class="w-32 h-32 rounded-full mx-auto"
                  :src="profile.img"
                  alt="John Doe"
                />
              </div>
              <div class="p-2">
                <h3
                  class="
                    text-center text-xl text-gray-900
                    font-medium
                    leading-8
                  "
                >
                  {{ profile.fullName }}
                </h3>
                <div class="text-center text-gray-400 text-xs font-semibold">
                  <p>{{ profile.owner }}</p>
                </div>
                <table class="my-3">
                  <tbody>
                    <tr>
                      <td
                        class="
                          px-2
                          pt-0
                          pb-2
                          text-gray-500
                          font-semibold
                          text-normal
                        "
                      >
                        Username
                      </td>
                      <td class="px-2 py-2">
                        <div class="mb-3 pt-0">
                          <input
                            type="text"
                            placeholder="Placeholder"
                            class="
                              px-2
                              py-1
                              placeholder-slate-300
                              text-slate-600
                              relative
                              bg-gray-200
                              rounded
                              text-sm
                              border border-slate-300
                              outline-none
                              focus:outline-none focus:ring
                              w-full
                            "
                            :value="profile.username"
                            disabled
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="
                          px-2
                          pt-0
                          pb-2
                          text-gray-500
                          font-semibold
                          text-normal
                        "
                      >
                        Address
                      </td>
                      <td class="px-2 py-2 text-sm">
                        <textarea
                          class="resize-none w-60 rounded-md text-xs"
                          :value="profile.address"
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="
                          px-2
                          pt-0
                          pb-2
                          text-gray-500
                          font-semibold
                          text-normal
                        "
                      >
                        Phone
                      </td>
                      <td class="px-2 py-2 text-sm">
                        <div class="mb-3 pt-0">
                          <input
                            type="text"
                            placeholder="Placeholder"
                            class="
                              px-2
                              py-1
                              placeholder-slate-300
                              text-slate-600
                              relative
                              bg-white bg-white
                              rounded
                              text-sm
                              border border-slate-300
                              outline-none
                              focus:outline-none focus:ring-200
                              w-full
                            "
                            :value="profile.phoneNumber"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="
                          px-2
                          pt-0
                          pb-2
                          text-gray-500
                          font-semibold
                          text-normal
                        "
                      >
                        Email
                      </td>
                      <td class="px-2 py-2 text-sm">
                        <div class="mb-3 pt-0">
                          <input
                            type="text"
                            placeholder="Placeholder"
                            class="
                              px-2
                              py-1
                              placeholder-slate-300
                              text-slate-600
                              relative
                              bg-white bg-white
                              rounded
                              text-sm
                              border border-slate-300
                              outline-none
                              focus:outline-none focus:ring-200
                              w-full
                            "
                            :value="profile.email"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="
                          px-2
                          py-2
                          text-gray-500
                          font-semibold
                          text-normal
                        "
                      >
                        Status
                      </td>
                      <td
                        v-if="profile.status === 'Active'"
                        class="px-3 py-2 text-[#50D222] text-normal"
                      >
                        {{ profile.status }}
                      </td>
                      <td v-else class="px-2 py-2 text-[#FF8494] text-sm">
                        Disabled
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="flex justify-end pt-2">
                  <button
                    class="
                      px-4
                      bg-transparent
                      p-1
                      rounded-lg
                      text-indigo-500
                      hover:bg-gray-100 hover:text-indigo-400
                      mr-2
                    "
                  >
                    Delete
                  </button>
                  <button
                    class="
                      modal-close
                      px-4
                      bg-indigo-500
                      p-1
                      rounded-lg
                      text-white
                      hover:bg-indigo-400
                    "
                  >
                    Update
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
    profile: {
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
    profile() {
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
  width: 300px;
  height: 300px;
  background: red;
  position: relative;
  z-index: 50;
}
</style>