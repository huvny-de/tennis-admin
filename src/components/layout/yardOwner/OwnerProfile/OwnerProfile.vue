<template>
  <preloader-component :class="loading == false ? 'hidden' : ''" />
  <div class="
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
    ">
    <form>
      <!--form control-->
      <div class="flex">
        <!--img container-->
        <div>
          <div class="
              flex flex-col
              justify-start
              items-start
              lg:w-80
              md:w-40
              sm:w-20
            ">
            <img class="rounded mr-3 lg:w-60 object-contain md:w-40" :src="srcImg" />
            <label class="block mt-4">
              <span class="sr-only">Choose File</span>
              <input @change="uploadImg" type="file" class="
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
                " accept="image/*" />
            </label>
          </div>
        </div>

        <!--information container-->
        <div class="grid md:grid-cols-2 gap-6 mt-4 sm:grid-cols-1 text-normal">
          <div>
            <label class="text-[#747474]" for="username">Tên Tài Khoản</label>
            <input-component disabled="true" class="w-full mt-2 border-gray-800 text-sm text-gray-600"
              :value="currentUser.UserName" />
          </div>
          <div>
            <label class="text-[#747474]" for="username">Vai Trò</label>
            <input-component disabled="true" class="w-full mt-2 border-gray-800 text-sm text-gray-600"
              :value="roleUser" />
          </div>
          <div>
            <label class="text-[#747474]" for="username">Họ Tên</label>
            <input-component class="w-full mt-2 text-sm" :value="currentUser.FullName" />
          </div>
          <div>
            <label class="text-[#747474]" for="username">Email</label>
            <input-component class="w-full mt-2 text-sm" :value="currentUser.Email" />
          </div>
          <div>
            <label class="text-[#747474]" for="username">Số Điện Thoại</label>
            <input-component class="w-full mt-2 text-sm" :value="currentUser.PhoneNumber" />
          </div>
        </div>
      </div>

      <!--button control-->
      <div class="w-full flex items-center justify-end">
        <div>
          <nav>
            <button class="
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
              " type="button">
              <router-link :to="{ name: 'Home' }" class="no-underline">Back</router-link>
            </button>
          </nav>
        </div>

        <div>
          <button class="
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
            ">
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
    let roleUser = this.currentUser.RoleIds[0];
    if (roleUser === 2) {
      this.roleUser = 'Chủ Sân'
    }
    this.loading = false;
    if (this.currentUser.Avatar) {
      this.srcImg = this.currentUser.Avatar;
    } else {
      this.srcImg =
        "https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg";
    }
  },
  data() {
    return {
      currentUser: "",
      selectedFile: null,
      loading: true,
      srcImg: "",
      roleUser: ""
    };
  },
  methods: {
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