<template>
  <main>
    <preloader-component :class="loading == false ? 'hidden' : ''" />
    <section class="absolute w-full h-full">
      <div class="container mx-auto px-4 h-full">
        <div class="flex content-center mt-1 justify-center h-full">
          <div class="w-full lg:w-1/2 px-4">
            <div class="w-60 h-60 mx-auto mb-4">
              <img class="object-cover" src="../../assets/img/logo.png" />
            </div>
            <div class="relative flex flex-col w-full">
              <h2 class="text-center font-bold text-[25px] mb-4">Đăng Ký</h2>
              <form @submit.prevent="handleRegister">
                <div class="relative w-full mb-8 grid grid-cols-2 gap-10">
                  <div class="relative">
                    <p
                      v-if="!user.username"
                      class="text-2xl text-red-500 absolute right-3 top-3"
                    >
                      *
                    </p>
                    <input
                      placeholder="Tên tài khoản"
                      type="text"
                      class="
                        bg-[#F0EEEE]
                        w-full
                        px-3
                        py-3
                        place-holder-grey-400
                        text-grey-700
                        rounded
                        text-md
                        shadow
                        focus:outline-none focus:ring-50
                        mb-2
                        pr-8
                      "
                      required
                      v-model="user.username"
                      :class="
                        err.errUserName && !msgSuccess
                          ? 'border-1 border-red-500'
                          : 'border-0'
                      "
                    />
                    <p
                      v-if="err.errUserName"
                      class="
                        absolute
                        top-[138%]
                        left-0
                        error-text
                        text-center text-red-700
                      "
                      role="alert"
                    >
                      * {{ err.errUserName }}
                    </p>
                  </div>
                  <div class="relative">
                    <p
                      v-if="!user.fullName"
                      class="text-2xl text-red-500 absolute right-3 top-3"
                    >
                      *
                    </p>
                    <input
                      placeholder="Họ Tên"
                      type="text"
                      class="
                        bg-[#F0EEEE]
                        w-full
                        px-3
                        py-3
                        place-holder-grey-400
                        text-grey-700
                        rounded
                        text-md
                        shadow
                        focus:outline-none focus:ring-50
                        mb-2
                      "
                      required
                      v-model="user.fullName"
                      :class="
                        err.errFullName && !msgSuccess
                          ? 'border-1 border-red-500'
                          : 'border-0'
                      "
                    />
                    <p
                      v-if="err.errFullName"
                      class="
                        absolute
                        top-[138%]
                        left-0
                        error-text
                        text-center text-red-700
                      "
                      role="alert"
                    >
                      * {{ err.errFullName }}
                    </p>
                  </div>
                  <div class="relative">
                    <p
                      v-if="!user.password"
                      class="text-2xl text-red-500 absolute right-3 top-3"
                    >
                      *
                    </p>
                    <input
                      placeholder="Mật khẩu"
                      type="password"
                      class="
                        bg-[#F0EEEE]
                        w-full
                        px-3
                        py-3
                        place-holder-grey-400
                        text-grey-700
                        rounded
                        text-md
                        shadow
                        focus:outline-none focus:ring-50
                        mb-2
                      "
                      required
                      v-model="user.password"
                      :class="
                        err.errConfirmPassword && !msgSuccess
                          ? ' border-1 border-red-500'
                          : 'border-0'
                      "
                    />
                  </div>
                  <div class="relative">
                    <p
                      v-if="!user.confirmPassword"
                      class="text-2xl text-red-500 absolute right-3 top-3"
                    >
                      *
                    </p>
                    <input
                      placeholder="Xác nhận mật khẩu"
                      type="password"
                      class="
                        bg-[#F0EEEE]
                        w-full
                        px-3
                        py-3
                        place-holder-grey-400
                        text-grey-700
                        rounded
                        text-md
                        shadow
                        focus:outline-none focus:ring-50
                        mb-2
                      "
                      required
                      v-model="user.confirmPassword"
                      :class="
                        err.errConfirmPassword && !msgSuccess
                          ? 'border-1 border-red-500'
                          : 'border-0'
                      "
                    />
                    <p
                      v-if="err.errConfirmPassword"
                      class="
                        absolute
                        top-[138%]
                        left-0
                        error-text
                        text-center text-red-700
                      "
                      role="alert"
                    >
                      * {{ err.errConfirmPassword }}
                    </p>
                  </div>
                  <div class="relative">
                    <p
                      v-if="!user.email"
                      class="text-2xl text-red-500 absolute right-3 top-3"
                    >
                      *
                    </p>
                    <input
                      placeholder="Email"
                      type="email"
                      class="
                        bg-[#F0EEEE]
                        w-full
                        px-3
                        py-3
                        place-holder-grey-400
                        text-grey-700
                        rounded
                        text-md
                        shadow
                        focus:outline-none focus:ring-50
                        pr-8
                      "
                      v-model="user.email"
                      :class="
                        err.errEmail && !msgSuccess
                          ? ' border-1 border-red-500 mb-2'
                          : 'border-0'
                      "
                    />
                    <p
                      v-if="err.errEmail"
                      class="
                        absolute
                        top-[138%]
                        left-0
                        error-text
                        text-center text-red-700
                      "
                      role="alert"
                    >
                      * {{ err.errEmail }}
                    </p>
                  </div>
                  <div class="relative">
                    <p
                      v-if="!user.phoneNumber"
                      class="text-2xl text-red-500 absolute right-3 top-3"
                    >
                      *
                    </p>
                    <input
                      placeholder="Số điện thoại"
                      type="tel"
                      class="
                        bg-[#F0EEEE]
                        w-full
                        px-3
                        py-3
                        place-holder-grey-400
                        text-grey-700
                        rounded
                        text-md
                        shadow
                        focus:outline-none focus:ring-50
                      "
                      required
                      v-model="user.phoneNumber"
                      :class="
                        err.errPhoneNumber && !msgSuccess
                          ? 'border-1 border-red-500 mb-2'
                          : 'border-0'
                      "
                    />
                    <p
                      v-if="err.errPhoneNumber"
                      class="
                        absolute
                        top-[138%]
                        left-0
                        error-text
                        text-center text-red-700
                      "
                      role="alert"
                    >
                      * {{ err.errPhoneNumber }}
                    </p>
                  </div>
                </div>
                <p
                  v-if="!checkIsEntered"
                  class="text-red-500 text-right text-sm italic"
                >
                  Ghi chú: (*) Các trường bắt buộc nhập
                </p>
                <p
                  v-if="msgSuccess"
                  class="text-lg font-md error-text text-center text-red-700"
                  role="alert"
                >
                  {{ msgSuccess }}
                </p>

                <button-component
                  class="
                    font-medium
                    uppercase
                    text-white text-[16px]
                    bg-blue-700
                    hover:bg-blue-800
                    active:bg-blue-900
                    mt-2
                  "
                  type="submit"
                >
                  Đăng ký
                </button-component>
              </form>
              <div class="relative mt-2 w-full">
                <p
                  class="
                    text-center text-gray-400
                    hover:text-gray-600
                    duration-200
                  "
                >
                  <router-link
                    to="/login"
                    class="no-underline"
                    href="http://facebook.com"
                    >Đã có tài khoản? Đăng nhập</router-link
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
      err: new Error(),
      msgSuccess: "",
    };
  },
  mounted() {
    let msg = JSON.parse(sessionStorage.getItem("register_sucess"));
    if (msg) {
      this.msgSuccess = msg;
    }
  },
  computed: {
    checkIsEntered() {
      if (
        !this.user.username ||
        !this.user.fullName ||
        !this.user.password ||
        !this.user.confirmPassword ||
        !this.user.email ||
        !this.user.phoneNumber
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    handleRegister() {
      this.err = new Error();
      this.loading = true;
      this.$store.dispatch("auth/register", this.user).then(
        (res) => {
          if (res) {
            this.msgSuccess = "Đăng ký thành công !";
            this.user = new User("", "", "", "", "", "");
            this.err = new Error();
            this.loading = false;
          }
        },
        (error) => {
          let object_err = error.response.data;
          Object.keys(object_err).forEach((key) => {
            if (key.includes("Username")) {
              this.err.errUserName = object_err[key][0];
            }

            if (key.includes("FullName")) {
              this.err.errFullName = object_err[key][0];
            }
            if (key.includes("ConfirmPassword")) {
              this.err.errConfirmPassword = object_err[key][0];
            }
            if (key.includes("Email")) {
              this.err.errEmail = object_err[key][0];
            }

            if (key.includes("PhoneNumber")) {
              this.err.errPhoneNumber = object_err[key][0];
            }
          });
          this.loading = false;
        }
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