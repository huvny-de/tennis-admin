<template>
  <preloader-component :class="loading == false ? 'hidden' : ''" />
  <div class="bg-gray-100">
    <div class="container mx-auto my-5 p-5 px-8">
      <div class="md:flex no-wrap md:-mx-2 pt-4">
        <!-- Left Side -->
        <div class="w-full md:w-1/3 md:mx-2">
          <!-- Profile Card -->
          <div class="bg-white p-3 border-t-4 border-green-400">
            <div class="image overflow-hidden">
              <img
                class="h-auto w-full mx-auto object-contain"
                src="https://i.ibb.co/Y2JLZnc/photo-1-15224582583802095482215.jpg"
                alt=""
              />
            </div>
            <h1 class="text-gray-800 font-semibold text-lg leading-8 my-1">
              Tên Cửa Hàng :
              {{ vendor.VendorName ? vendor.VendorName : "Chưa Có" }}
            </h1>
            <h4
              class="text-gray-600 font-lg text-semibold leading-6 flex items-center pb-4"
            >
              <p class="font-semibold mr-2 text-normal">Quản lý bởi :</p>
              <p class="text-normal">
                {{ vendor.VendorName ? currentUser.Token.FullName : "Chưa Có" }}
              </p>
            </h4>
            <ul
              class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm"
            >
              <li class="flex items-center py-1">
                <span>Trạng Thái</span>
                <span class="ml-auto"
                  ><span
                    class="bg-green-500 py-1 px-2 rounded text-white text-sm"
                    >{{ vendor.Active ? "Đang Hoạt Động" : "Chưa Đăng Ký" }}
                  </span></span
                >
              </li>
            </ul>
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
            <div class="text-gray-700 mt-4">
              <div class="grid grid-col">
                <span class="flex items-center">
                  <div class="pl-4 pr-2 py-2 font-semibold">Địa chỉ:</div>
                  <div class="px-1 py-2">
                    {{ vendor.Address ? vendor.Address : "Chưa Có" }}
                  </div>
                </span>

                <span class="flex items-center">
                  <div class="px-4 py-2 font-semibold">Email:</div>
                  <div class="px-1 py-2">
                    {{ vendor.Email ? vendor.Email : "Chưa Có" }}
                  </div>
                </span>

                <span class="flex items-center">
                  <div class="pl-4 pr-2 py-2 font-semibold">Số điện thoại:</div>
                  <div class="px-1 py-2">
                    {{ vendor.PhoneNumber ? vendor.PhoneNumber : "Chưa Có" }}
                  </div>
                </span>

                <span class="flex items-center">
                  <div class="pl-4 pr-2 py-2 font-semibold">
                    Khung Giờ Hoạt Động:
                  </div>
                  <div v-if="vendor.OpenTime && vendor.CloseTime" class="py-2">
                    {{ vendor.OpenTime }} - {{ vendor.CloseTime }}
                  </div>
                  <div v-else class="py-2">Chưa Có</div>
                </span>
                <span class="flex items-center">
                  <div class="pl-4 pr-2 py-2 font-semibold">
                    Số sân cho thuê:
                  </div>
                  <div class="px-1 py-2">0</div>
                </span>
                <span class="flex items-center">
                  <div class="pl-4 pr-2 py-2 font-semibold">Ngày Đăng Kí:</div>
                  <div v-if="vendor.InsertedDate" class="px-1 py-2">
                    {{
                      new Date(this.vendor.InsertedDate).toLocaleDateString()
                    }}
                  </div>
                  <div v-else class="py-2">Chưa Có</div>
                </span>
              </div>
            </div>

            <!--button control-->
            <div class="w-full flex items-center justify-end py-4">
              <div class="flex space-x-2 justify-center">
                <button
                  type="button"
                  class="flex items-center px-4 py-2.5 bg-[#50AE01] text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-[#78d22f] hover:shadow-lg focus:bg-[#78d22f] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <Icon icon="akar-icons:sign-out"></Icon>
                  <p class="pl-2">Đăng Ký Cửa Hàng</p>
                </button>
              </div>
              <div class="flex space-x-2 justify-center ml-2">
                <button
                  type="button"
                  class="flex items-center px-11 py-2.5 bg-red-500 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <Icon icon="ant-design:delete-filled"></Icon>
                  <p class="pl-2">Dừng Hoạt Động</p>
                </button>
              </div>
            </div>
          </div>
          <!-- End of about section -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import Vendor from "@/models/Vendor";
import TokenService from "@/services/token/token.service";
import VendorService from "@/services/vendor.service";
export default {
  components: {
    Icon,
  },
  created() {
    this.currentUser = TokenService.getUser();
  },
  mounted() {
    let vendorId = this.currentUser.Token.VendorId;

    if (vendorId !== 0) {
      VendorService.getVendorProfile(vendorId)
        .then((res) => {
          this.vendor = res.data;
          if (this.vendor.OpenTime && this.vendor.CloseTime) {
            let hour_opentime = new Date(this.vendor.OpenTime)
              .getHours()
              .toString();
            let minute_opentime = new Date(this.vendor.OpenTime)
              .getMinutes()
              .toString();

            if (minute_opentime.length < 2) {
              minute_opentime = "0" + minute_opentime;
            }

            this.vendor.OpenTime = `${hour_opentime}:${minute_opentime}`;
            console.log(this.vendor.OpenTime);

            let hour_closetime = new Date(this.vendor.CloseTime)
              .getHours()
              .toString();
            let minute_closetime = new Date(this.vendor.CloseTime)
              .getMinutes()
              .toString();

            if (minute_closetime.length < 2) {
              minute_closetime = "0" + minute_closetime;
            }

            this.vendor.CloseTime = `${hour_closetime}:${minute_closetime}`;
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          this.loading = false;
        });
    }
  },
  data() {
    return {
      vendor: new Vendor(),
      currentUser: "",
      loading: true,
    };
  },
};
</script>
