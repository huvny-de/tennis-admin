<template>
  <preloader-component :class="loading == false ? 'hidden' : ''" />
  <div
    id="modal"
    class="flex modal fixed inset-0"
    :class="isClose === true ? 'hidden' : ''"
  >
    <div class="modal-overlay absolute w-full h-full"></div>
    <div class="mx-auto relative p-4 w-full max-w-[85%] h-full md:h-auto">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 mt-10">
        <button
          @click="hiddenModal"
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-50 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        >
          <Icon class="w-6 h-6" icon="akar-icons:circle-x-fill"></Icon>
        </button>
        <div class="py-6 px-6 lg:px-8 h-auto overflow-auto pt-4">
          <div class="bg-gray-100">
            <div class="container mx-auto my-5 p-5 px-8">
              <div class="md:flex no-wrap md:-mx-2 pt-4">
                <!-- Left Side -->
                <div class="w-full md:w-1/3 md:mx-2">
                  <!-- Profile Card -->
                  <div class="bg-white p-3 border-t-4 border-green-400">
                    <div class="image overflow-hidden">
                      <img
                        @load="closeWaiting"
                        class="h-60 w-full mx-auto object-contain"
                        :src="yard.imgUrl"
                        alt=""
                      />
                    </div>
                    <label class="block mt-4">
                      <span class="sr-only">Choose File</span>
                      <input
                        @change="uploadImg"
                        type="file"
                        class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        accept="image/*"
                      />
                    </label>
                  </div>
                  <!-- End of profile card -->
                  <div class="my-4"></div>
                </div>
                <!-- Right Side -->
                <div class="w-full md:w-3/4 mx-2 h-full">
                  <!-- Profile tab -->
                  <!-- About Section -->
                  <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div
                      class="flex items-center space-x-2 font-semibold text-gray-600 leading-8 px-4"
                    >
                      <span clas="text-green-500">
                        <font-awesome-icon icon="user" class="text-lg" />
                      </span>
                      <span class="tracking-wide text-lg">Thông Tin</span>
                    </div>
                    <!--information container-->
                    <div
                      class="grid md:grid-cols-2 gap-2 px-4 pb-1 mt-4 sm:grid-cols-1 text-normal"
                    >
                      <div>
                        <label class="text-[#747474]" for="username"
                          >Tên Sân</label
                        >
                        <div class="relative">
                          <p
                            v-if="!yard.name"
                            class="text-2xl text-red-500 absolute right-12 top-4"
                          >
                            *
                          </p>
                          <input
                            placeholder="Tên Sân"
                            type="text"
                            class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                            required
                            v-model="yard.name"
                          />
                          <!-- <p v-if="err.errVendorName" class="
                        absolute
                        top-[138%]
                        left-0
                        error-text
                        text-center text-red-700
                      " role="alert">
                    * {{ err.errVendorName }}
                  </p> -->
                        </div>
                      </div>
                      <div class="flex items-center justify-start">
                        <span>
                          <label class="text-[#747474]" for="username"
                            >Loại Sân</label
                          >
                          <select
                            id="small"
                            class="rounded-lg mt-2 text-md block pr-8 W-full text-sm text-gray-900 bg-gray-50 border border-gray-500 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option selected="true" value="1">
                              Sân Đất Nện
                            </option>
                            <option value="2">Sân Cỏ</option>
                            <option value="2">Sân Cứng</option>
                          </select>
                        </span>
                      </div>
                      <div>
                        <label class="text-[#747474]" for="username"
                          >Chiều Dài</label
                        >
                        <div class="relative">
                          <p
                            v-if="!yard.width"
                            class="text-2xl text-red-500 absolute right-12 top-4"
                          >
                            *
                          </p>
                          <input
                            placeholder="Tên Sân"
                            type="text"
                            class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                            required
                            v-model="yard.width"
                          />
                          <!-- <p v-if="err.errVendorName" class="
                        absolute
                        top-[138%]
                        left-0
                        error-text
                        text-center text-red-700
                      " role="alert">
                    * {{ err.errVendorName }}
                  </p> -->
                        </div>
                      </div>
                      <div>
                        <label class="text-[#747474]" for="username"
                          >Chiều Rộng</label
                        >
                        <div class="relative">
                          <p
                            v-if="!yard.height"
                            class="text-2xl text-red-500 absolute right-12 top-4"
                          >
                            *
                          </p>
                          <input
                            placeholder="Chiều Rộng"
                            type="text"
                            class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                            required
                            v-model="yard.height"
                          />
                          <!-- <p v-if="err.errVendorName" class="
                        absolute
                        top-[138%]
                        left-0
                        error-text
                        text-center text-red-700
                      " role="alert">
                    * {{ err.errVendorName }}
                  </p> -->
                        </div>
                      </div>
                    </div>

                    <!--button control-->
                    <div
                      class="w-full flex items-center justify-end mt-8 pb-2"
                      @click="updateYard"
                    >
                      <div class="flex space-x-2 justify-center">
                        <button
                          type="button"
                          class="flex items-center px-10 py-2.5 bg-[#50AE01] text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-[#78d22f] hover:shadow-lg focus:bg-[#78d22f] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          <Icon icon="dashicons:update-alt"></Icon>
                          <p class="pl-2">Cập Nhật</p>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- End of about section -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
import Yard from "@/models/Court.js";
import swal from "sweetalert";
import axios from "axios";

export default {
  components: {
    Icon,
  },
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
      isClose: true,
      yard: new Yard(),
      loading: false
    };
  },
  methods: {
    hiddenModal() {
      this.isClose = true;
    },
    updateYard() {
      swal("Cập Nhật Thành Công !", {
        icon: "success",
      }).then(() => {
        this.isClose = true;
      });
    },
    uploadImg(evt) {
      this.loading = true;
      let apiKey = "3ce508644197fb15dcf4e916cf328c21";
      const baseUrlImgbb = "https://api.imgbb.com/1";

      this.selectedFile = evt.target.files[0];

      let body = new FormData();
      body.set("key", apiKey);
      body.append("image", this.selectedFile);

      axios
        .post(baseUrlImgbb + "/upload", body)
        .then((res) => {
          this.yard.imgUrl = res.data.data.image.url;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
    closeWaiting() {
      this.loading = false;
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
  width: 500px;
  height: 300px;
  background: red;
  position: relative;
  z-index: 50;
}
</style>
