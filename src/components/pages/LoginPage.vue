<template>
  <main>
    <section class="absolute w-full h-full">
      <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
          <div class="w-full lg:w-1/3 px-4">
            <div class="w-60 h-60 mx-auto mb-8">
              <img
                class="object-cover"
                :src="require('../../assets/img/logo.png')"
              />
            </div>
            <div class="relative flex flex-col w-full">
              <h2 class="text-center font-bold text-[25px] mb-6">Sign In</h2>
              <form @submit.prevent="login">
                <div class="relative w-full mb-8">
                  <input-component
                    placeholder="Username"
                    type="text"
                    class="bg-[#F0EEEE] w-full"
                  />
                  <input-component
                    placeholder="Password"
                    type="password"
                    class="bg-[#F0EEEE] w-full"
                  />
                  <button-component
                    class="
                      font-medium
                      uppercase
                      text-white text-[16px]
                      bg-blue-700
                      hover:bg-blue-800
                      active:bg-blue-900
                    "
                    >Sign In</button-component
                  >
                </div>
              </form>
              <div class="relative mt-8 w-full">
                <p class="text-center text-gray-400">
                  <a class="no-underline" href="http://facebook.com"
                    >Forgot your password ?</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import InputComponent from "../ui/InputComponent.vue";
import ButtonComponent from "../ui/ButtonComponent.vue";
export default {
  name: "LoginPage",
  components: {
    InputComponent,
    ButtonComponent,
  },
  methods: {
    login() {
      location.href = "/";
    },
  },
};
</script>