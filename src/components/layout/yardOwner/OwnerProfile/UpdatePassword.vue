<template>
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
            <label class="text-[#747474]" for="username">Old Passwowrd</label>
            <input-component type="password" class="w-full mt-2 text-sm" />
          </div>
          <div>
            <label class="text-[#747474]" for="username">New Password</label>
            <input-component type="password" class="w-full mt-2 text-sm" />
          </div>
          <div>
            <label class="text-[#747474]" for="username"
              >Confirm New Password</label
            >
            <input-component type="password" class="w-full mt-2 text-sm" />
          </div>
        </div>
      </div>

      <!--button control-->
      <div class="w-full flex items-center justify-end">
        <div>
          <nav>
            <router-link :to="{ name: 'Home' }" class="no-underline">
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
                Back
              </button>
            </router-link>
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
export default {
  components: {
    InputComponent,
  },
  mounted() {
    this.currentUser = this.$store.getters['auth/getUser'].Token;
  },
  data() {
    return {
      currentUser: "",
    };
  },
};
</script>