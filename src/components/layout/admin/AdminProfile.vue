<template>
  <preloader-component :class="loading == false ? 'hidden' : ''" />
  <div
    class="
      container
      p-6
      rounded-md
      shadow-md
      bg-white
      mx-auto
      h-full
      w-[80%]
      mt-8
      md:mt-0
      min-w-[80%]
      relative
    "
  >
    <form>
      <!--form control-->
      <div class="flex">
        <!--img container-->
        <div>
          <div
            class="
              flex flex-col
              justify-start
              items-start
              lg:w-80
              md:w-40
              sm:w-20
            "
          >
            <img
              class="rounded mr-3 lg:w-60 object-contain md:w-40"
              :src="srcImg"
            />
            <label class="block mt-4">
              <span class="sr-only">Choose File</span>
              <input
                @change="uploadImg"
                type="file"
                class="
                  block
                  w-full
                  text-sm text-gray-500
                  file:mr-4
                  file:py-2
                  file:px-4
                  file:rounded-full
                  file:border-0
                  file:text-sm
                  file:font-semibold
                  file:bg-blue-50
                  file:text-blue-700
                  hover:file:bg-blue-100
                "
                accept="image/*"
              />
            </label>
          </div>
        </div>

        <!--information container-->
        <div class="grid md:grid-cols-2 gap-6 mt-4 sm:grid-cols-1 text-normal">
          <div>
            <label class="text-[#747474]" for="username">Username</label>
            <input-component
              disabled="true"
              class="w-full mt-2 border-gray-800 text-sm text-gray-600"
              :value="currentUser.UserName"
            />
          </div>
          <div>
            <label class="text-[#747474]" for="username">Role</label>
            <input-component
              disabled="true"
              class="w-full mt-2 border-gray-800 text-sm text-gray-600"
              value="Admin"
            />
          </div>
          <div>
            <label class="text-[#747474]" for="username">Full Name</label>
            <input-component
              class="w-full mt-2 text-sm"
              :value="currentUser.FullName"
            />
          </div>
          <div>
            <label class="text-[#747474]" for="username">Email</label>
            <input-component
              class="w-full mt-2 text-sm"
              value="sonstarnguyen@gmail.com"
            />
          </div>
          <div>
            <label class="text-[#747474]" for="username">Phone Number</label>
            <input-component class="w-full mt-2 text-sm" value="0978145440" />
          </div>
        </div>
      </div>

      <!--button control-->
      <div class="w-full flex items-center justify-end">
        <div>
          <nav>
            <button
              class="
                mx-auto
                bg-gray-500
                hover:bg-gray-700
                duration-200
                text-white
                font-medium
                py-2
                px-4
                rounded
                w-20
                text-md
              "
              type="button"
            >
              <router-link :to="{ name: 'Home' }" class="no-underline"
                >Back</router-link
              >
            </button>
          </nav>
        </div>

        <div>
          <button
            class="
              mx-auto
              bg-green-500
              hover:bg-green-700
              duration-200
              text-white
              font-medium
              py-2
              px-4
              rounded
              w-25
              text-md
              ml-3
            "
          >
            Update
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import InputComponent from "@/components/ui/InputComponent.vue";

import axios from "axios";

export default {
  components: {
    InputComponent,
  },
  mounted() {
    this.currentUser = this.$store.getters["auth/getUser"].Token;
    this.loading = false;
    this.srcImg = this.currentUser.Avatar;
  },
  data() {
    return {
      currentUser: "",
      selectedFile: null,
      loading: true,
      srcImg: "",
    };
  },
  methods: {
    async uploadImg(evt) {
      this.loading = true;
      let apiKey = "3ce508644197fb15dcf4e916cf328c21";
      const baseUrlImgbb = "https://api.imgbb.com/1";

      this.selectedFile = evt.target.files[0];

      let body = new FormData();
      body.set("key", apiKey);
      body.append("image", this.selectedFile);

      await axios
        .post(baseUrlImgbb + "/upload", body)
        .then((res) => {
          this.srcImg = res.data.data.image.url;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>