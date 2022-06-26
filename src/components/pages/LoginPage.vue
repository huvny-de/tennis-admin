<template>
  <main>
    <preloader-component :class="loading == false ? 'hidden' : ''" />
    <section class="absolute w-full h-full">
      <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
          <div class="w-full lg:w-1/3 px-4">
            <div class="w-60 h-60 mx-auto mb-6">
              <img class="object-cover" src="../../assets/img/logo.png" />
            </div>
            <div class="relative flex flex-col w-full">
              <h2 class="text-center font-bold text-[25px] mb-6">Đăng Nhập</h2>
              <form @submit.prevent="handleLogin">
                <div class="relative w-full mb-8">
                  <div>
                    <input
                      placeholder="Tên tài khoản"
                      type="text"
                      class="
                        bg-[#F0EEEE]
                        w-full
                        border-0
                        px-3
                        py-3
                        place-holder-grey-400
                        text-grey-700
                        rounded
                        text-md
                        shadow
                        focus:outline-none focus:ring
                        mb-8
                      "
                      required
                      v-model="user.username"
                    />
                  </div>
                  <div class="flex flex-col justify-start items-start">
                    <input
                      placeholder="Mật khẩu"
                      type="password"
                      class="
                        bg-[#F0EEEE]
                        w-full
                        border-0
                        px-3
                        py-3
                        place-holder-grey-400
                        text-grey-700
                        rounded
                        text-md
                        shadow
                        focus:outline-none focus:ring
                        mb-8
                      "
                      required
                      v-model="user.password"
                    />
                  </div>

                  <div
                    v-if="message"
                    class="error-text text-center text-red-700 mt-2 mb-2"
                    role="alert"
                  >
                    {{ message }}
                  </div>

                  <button-component
                    class="
                      font-medium
                      uppercase
                      text-white text-[16px]
                      bg-blue-700
                      hover:bg-blue-800
                      active:bg-blue-900
                    "
                    type="submit"
                  >
                    Đăng Nhập
                  </button-component>
                </div>
              </form>
              <div class="relative mt-2 w-full">
                <p
                  class="
                    text-center text-gray-400
                    hover:text-gray-500
                    duration-200
                  "
                >
                  <a class="no-underline" href="http://facebook.com"
                    >Quên mật khẩu?</a
                  >
                </p>

                <p
                  class="
                    text-center text-gray-400
                    hover:text-gray-500
                    duration-200
                  "
                >
                  <router-link
                    to="/register"
                    class="no-underline"
                    href="http://facebook.com"
                    >Chưa có tài khoản? Đăng ký</router-link
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
import User from "../../models/User";
export default {
  name: "LoginPage",

  data() {
    return {
      user: new User(),
      loading: false,
      message: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    let user = JSON.parse(localStorage.getItem("user"))
    if(user != null) {
      if (this.loggedIn) {
      let roleID = this.$store.getters["auth/getUser"].Token.RoleIds[0];
      if (roleID) {
        if (roleID === 1) {
          this.$router.push("/dashboard");
        } else if (roleID === 2) {
          this.$router.push("/yard-owner");
        } else {
          this.$router.push("/login");
        }
      }
    }
    }
    
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$store.dispatch("auth/login", this.user).then(
        (response) => {
          if (response.Token) {
            let RoleID = response.Token.RoleIds[0];
            if (RoleID === 1) {
              this.$router.push("/dashboard");
            } else {
              this.$router.push("/yard-owner");
            }
          } else {
            this.message = response.Message;
            this.loading = false;
          }
        }
        // (error) => {

        // }
      );
    },
  },
};
</script>

<style scoped>
.error-text {
  display: block;
  margin-top: -18px;
  margin-bottom: 10px;
}
</style>