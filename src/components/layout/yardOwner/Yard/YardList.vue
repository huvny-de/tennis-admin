<template>
  <div class="dashboard p-8">
    <!-- grid wrapper card -->
    <div class="wrapper-card md:grid-cols-2 gap-2 overflow-y-auto">
      <div class="
          w-full
          mx-auto
          px-4
          h-full
          flex
          items-center
          justify-between
          relative
        ">
        <!--List Yard-->
        <div class="gird grid-cols-2 gap-6 lg:w-[65%] md:w-full">
          <div>
            <div class="
                card
                h-60
                w-full
                bg-white
                mb-8
                flex
                items-center
                shadow
                rounded
              ">
              <div class="flex items-center pl-8 w-[72%]">
                <div class="mr-5">
                  <img class="w-60 h-22 rounded-2xl" src="https://i.ibb.co/Pm3LLyR/istockphoto-821815472-612x612.jpg" />
                </div>

                <!--infor Yard-->
                <div class="flex flex-col items-start justify-end h-auto">
                  <div class="flex items-center mb-2">
                    <span class="text-gray-500 text-md font-semibold mr-5 w-24">Tên Sân:
                    </span>
                    <span class="text-gray-500">Sân 1</span>
                  </div>
                  <div class="flex items-center mb-2">
                    <span class="text-gray-500 text-md font-semibold mr-5  w-24">Loại Sân:
                    </span>
                    <span class="text-gray-500">Sân Đất Nện</span>
                  </div>
                  <div class="flex items-center mb-2">
                    <span class="text-gray-500 text-md font-semibold mr-5">Kích Thước:
                    </span>
                    <span class="text-gray-500">40m x 20m</span>
                  </div>
                  <div class="flex items-center mb-2">
                    <span class="text-gray-500 text-md font-semibold mr-5 w-24">Đánh giá:
                    </span>
                    <div class="item-rating">
                      <ul class="unstyled-list list-inline flex items-center">
                        <li class="ratings-list-item">
                          <Icon class="w-5 h-5 text-yellow-300" icon="ant-design:star-filled"></Icon>
                        </li>
                        <li class="ratings-list-item">
                          <Icon class="w-5 h-5 text-yellow-300" icon="ant-design:star-filled"></Icon>
                        </li>
                        <li class="ratings-list-item">
                          <Icon class="w-5 h-5 text-yellow-300" icon="ant-design:star-filled"></Icon>
                        </li>
                        <li class="ratings-list-item">
                          <Icon class="w-5 h-5 text-yellow-300" icon="ant-design:star-filled"></Icon>
                        </li>
                        <li class="ratings-list-item">
                          <Icon class="w-5 h-5 text-yellow-300" icon="ant-design:star-filled"></Icon>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <span class="text-gray-500 text-md font-semibold mr-3">Tổng số lượt đặt sân này:
                    </span>
                    <span class="text-gray-500">10</span>
                  </div>
                </div>
              </div>

              <div class="flex-1 w-full h-full border-l-2 p-4">
                <div class="w-full h-full">
                  <div class="flex space-x-2 justify-center my-3" @click="showRating">
                    <button type="button" class="
                        flex
                        items-center
                        justify-evenly
                        px-12
                        py-2.5
                        bg-blue-400
                        text-white
                        font-medium
                        text-sm
                        leading-tight
                        uppercase
                        rounded-full
                        shadow-md
                        hover:bg-blue-500 hover:shadow-lg
                        focus:bg-blue-500
                        focus:shadow-lg
                        focus:outline-none
                        focus:ring-0
                        active:bg-blue-600 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out
                      ">
                      <Icon icon="ant-design:eye-filled"></Icon>
                      <p class="pl-2">Chi Tiết</p>
                    </button>
                  </div>
                  <div class="flex space-x-2 justify-center my-8" @click="UpdateYard">
                    <button type="button" class="
                        flex
                        items-center
                        px-10
                        py-2.5
                        bg-[#50AE01]
                        text-white
                        font-medium
                        text-sm
                        leading-tight
                        uppercase
                        rounded-full
                        shadow-md
                        hover:bg-[#78d22f] hover:shadow-lg
                        focus:bg-[#78d22f]
                        focus:shadow-lg
                        focus:outline-none
                        focus:ring-0
                        active:bg-green-700 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out
                      ">
                      <Icon icon="dashicons:update-alt"></Icon>
                      <p class="pl-2">Cập Nhật</p>
                    </button>
                  </div>
                  <div class="flex space-x-2 justify-center my-8" @click="showAlert">
                    <button type="button" class="
                        flex
                        items-center
                        px-11
                        py-2.5
                        bg-red-500
                        text-white
                        font-medium
                        text-sm
                        leading-tight
                        uppercase
                        rounded-full
                        shadow-md
                        hover:bg-red-700 hover:shadow-lg
                        focus:bg-red-700
                        focus:shadow-lg
                        focus:outline-none
                        focus:ring-0
                        active:bg-red-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out
                      ">
                      <Icon icon="ant-design:delete-filled"></Icon>
                      <p class="pl-2">Xóa Sân</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="
                card
                h-60
                w-full
                bg-white
                mb-8
                flex
                items-center
                shadow
                rounded
              ">
              <div class="flex items-center pl-8 w-[72%]">
                <div class="mr-5">
                  <img class="w-60 h-22 rounded-2xl"
                    src="https://i.ibb.co/H4HLRn0/Any-Conv-com-Arturf-Tennis-Court-Philippines-1000x666-1-1000x666.jpg" />
                </div>

                <!--infor Yard-->
                <div class="flex flex-col items-start justify-end h-auto">
                  <div class="flex items-center mb-2">
                    <span class="text-gray-500 text-md font-semibold mr-5 w-24">Tên Sân:
                    </span>
                    <span class="text-gray-500">Sân 2</span>
                  </div>
                  <div class="flex items-center mb-2">
                    <span class="text-gray-500 text-md font-semibold mr-5  w-24">Loại Sân:
                    </span>
                    <span class="text-gray-500">Sân Cỏ</span>
                  </div>
                  <div class="flex items-center mb-2">
                    <span class="text-gray-500 text-md font-semibold mr-5">Kích Thước:
                    </span>
                    <span class="text-gray-500">36.57m x 18.29m</span>
                  </div>
                  <div class="flex items-center mb-2">
                    <span class="text-gray-500 text-md font-semibold mr-5 w-24">Đánh giá:
                    </span>
                    <div class="item-rating">
                      <ul class="unstyled-list list-inline flex items-center">
                        <li class="ratings-list-item">
                          <Icon class="w-5 h-5 text-yellow-300" icon="ant-design:star-filled"></Icon>
                        </li>
                        <li class="ratings-list-item">
                          <Icon class="w-5 h-5 text-yellow-300" icon="ant-design:star-filled"></Icon>
                        </li>
                        <li class="ratings-list-item">
                          <Icon class="w-5 h-5 text-yellow-300" icon="ant-design:star-filled"></Icon>
                        </li>
                        <li class="ratings-list-item">
                          <Icon class="w-5 h-5 text-yellow-300" icon="ant-design:star-filled"></Icon>
                        </li>
                        <li class="ratings-list-item">
                          <Icon class="w-5 h-5 text-yellow-300" icon="ant-design:star-filled"></Icon>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <span class="text-gray-500 text-md font-semibold mr-3">Tổng số lượt đặt sân này:
                    </span>
                    <span class="text-gray-500">10</span>
                  </div>
                </div>
              </div>

              <div class="flex-1 w-full h-full border-l-2 p-4">
                <div class="w-full h-full">
                  <div class="flex space-x-2 justify-center my-3">
                    <button type="button" class="
                        flex
                        items-center
                        justify-evenly
                        px-12
                        py-2.5
                        bg-blue-400
                        text-white
                        font-medium
                        text-sm
                        leading-tight
                        uppercase
                        rounded-full
                        shadow-md
                        hover:bg-blue-500 hover:shadow-lg
                        focus:bg-blue-500
                        focus:shadow-lg
                        focus:outline-none
                        focus:ring-0
                        active:bg-blue-600 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out
                      ">
                      <Icon icon="ant-design:eye-filled"></Icon>
                      <p class="pl-2">Chi Tiết</p>
                    </button>
                  </div>
                  <div class="flex space-x-2 justify-center my-8">
                    <button type="button" class="
                        flex
                        items-center
                        px-10
                        py-2.5
                        bg-[#50AE01]
                        text-white
                        font-medium
                        text-sm
                        leading-tight
                        uppercase
                        rounded-full
                        shadow-md
                        hover:bg-[#78d22f] hover:shadow-lg
                        focus:bg-[#78d22f]
                        focus:shadow-lg
                        focus:outline-none
                        focus:ring-0
                        active:bg-green-700 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out
                      ">
                      <Icon icon="dashicons:update-alt"></Icon>
                      <p class="pl-2">Cập Nhật</p>
                    </button>
                  </div>
                  <div class="flex space-x-2 justify-center my-8">
                    <button type="button" class="
                        flex
                        items-center
                        px-11
                        py-2.5
                        bg-red-500
                        text-white
                        font-medium
                        text-sm
                        leading-tight
                        uppercase
                        rounded-full
                        shadow-md
                        hover:bg-red-700 hover:shadow-lg
                        focus:bg-red-700
                        focus:shadow-lg
                        focus:outline-none
                        focus:ring-0
                        active:bg-red-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out
                      ">
                      <Icon icon="ant-design:delete-filled"></Icon>
                      <p class="pl-2">Xóa Sân</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="
                card
                h-60
                w-full
                bg-white
                mb-8
                flex
                items-center
                shadow
                rounded
              ">
              <div class="flex items-center pl-8 w-[72%]">
                <div class="mr-5">
                  <img class="w-60 h-22 rounded-2xl" src="https://i.ibb.co/D8m4fGv/kich-thuoc-san-tennis-7.jpg" />
                </div>

                <!--infor Yard-->
                <div class="flex flex-col items-start justify-end h-auto">
                  <div class="flex items-center mb-2">
                    <span class="text-gray-500 text-md font-semibold mr-5 w-24">Tên Sân:
                    </span>
                    <span class="text-gray-500">Sân 3</span>
                  </div>
                  <div class="flex items-center mb-2">
                    <span class="text-gray-500 text-md font-semibold mr-5  w-24">Loại Sân:
                    </span>
                    <span class="text-gray-500">Sân Cứng</span>
                  </div>
                  <div class="flex items-center mb-2">
                    <span class="text-gray-500 text-md font-semibold mr-5">Kích Thước:
                    </span>
                    <span class="text-gray-500">33.53m x 16.46m</span>
                  </div>
                  <div class="flex items-center mb-2">
                    <span class="text-gray-500 text-md font-semibold mr-5 w-24">Đánh giá:
                    </span>
                    <div class="item-rating">
                      <ul class="unstyled-list list-inline flex items-center">
                        <li class="ratings-list-item">
                          <Icon class="w-5 h-5 text-yellow-300" icon="ant-design:star-filled"></Icon>
                        </li>
                        <li class="ratings-list-item">
                          <Icon class="w-5 h-5 text-yellow-300" icon="ant-design:star-filled"></Icon>
                        </li>
                        <li class="ratings-list-item">
                          <Icon class="w-5 h-5 text-yellow-300" icon="ant-design:star-filled"></Icon>
                        </li>
                        <li class="ratings-list-item">
                          <Icon class="w-5 h-5 text-yellow-300" icon="ant-design:star-filled"></Icon>
                        </li>
                        <li class="ratings-list-item">
                          <Icon class="w-5 h-5 text-yellow-300" icon="ant-design:star-filled"></Icon>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <span class="text-gray-500 text-md font-semibold mr-3">Tổng số lượt đặt sân này:
                    </span>
                    <span class="text-gray-500">10</span>
                  </div>
                </div>
              </div>

              <div class="flex-1 w-full h-full border-l-2 p-4">
                <div class="w-full h-full">
                  <div class="flex space-x-2 justify-center my-3">
                    <button type="button" class="
                        flex
                        items-center
                        justify-evenly
                        px-12
                        py-2.5
                        bg-blue-400
                        text-white
                        font-medium
                        text-sm
                        leading-tight
                        uppercase
                        rounded-full
                        shadow-md
                        hover:bg-blue-500 hover:shadow-lg
                        focus:bg-blue-500
                        focus:shadow-lg
                        focus:outline-none
                        focus:ring-0
                        active:bg-blue-600 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out
                      ">
                      <Icon icon="ant-design:eye-filled"></Icon>
                      <p class="pl-2">Chi Tiết</p>
                    </button>
                  </div>
                  <div class="flex space-x-2 justify-center my-8">
                    <button type="button" class="
                        flex
                        items-center
                        px-10
                        py-2.5
                        bg-[#50AE01]
                        text-white
                        font-medium
                        text-sm
                        leading-tight
                        uppercase
                        rounded-full
                        shadow-md
                        hover:bg-[#78d22f] hover:shadow-lg
                        focus:bg-[#78d22f]
                        focus:shadow-lg
                        focus:outline-none
                        focus:ring-0
                        active:bg-green-700 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out
                      ">
                      <Icon icon="dashicons:update-alt"></Icon>
                      <p class="pl-2">Cập Nhật</p>
                    </button>
                  </div>
                  <div class="flex space-x-2 justify-center my-8">
                    <button type="button" class="
                        flex
                        items-center
                        px-11
                        py-2.5
                        bg-red-500
                        text-white
                        font-medium
                        text-sm
                        leading-tight
                        uppercase
                        rounded-full
                        shadow-md
                        hover:bg-red-700 hover:shadow-lg
                        focus:bg-red-700
                        focus:shadow-lg
                        focus:outline-none
                        focus:ring-0
                        active:bg-red-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out
                      ">
                      <Icon icon="ant-design:delete-filled"></Icon>
                      <p class="pl-2">Xóa Sân</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Card Report-->
        <div class="
            max-w-sm
            rounded
            overflow-hidden
            shadow-lg
            flex-1
            absolute
            top-0
            right-0
            md:hidden
            lg:block
          ">
          <img class="w-full" src="../../../../assets/img/yardList.jpg" alt="tổng số sân" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Tổng có 3 Sân Cho Thuê</div>
            <p class="text-gray-700 text-base">
              Sân sẽ được hiển thị và được tính toán giá thuê theo ngày
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="
                inline-block
                bg-gray-200
                rounded-full
                px-3
                py-1
                text-sm
                font-semibold
                text-gray-700
                mr-2
                mb-2
              ">#Sân đất nện</span>
            <span class="
                inline-block
                bg-gray-200
                rounded-full
                px-3
                py-1
                text-sm
                font-semibold
                text-gray-700
                mr-2
                mb-2
              ">#Sân cỏ</span>
            <span class="
                inline-block
                bg-gray-200
                rounded-full
                px-3
                py-1
                text-sm
                font-semibold
                text-gray-700
                mr-2
                mb-2
              ">#Sân cứng</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--The Modal-->
  <RatingModal :class="isHiddenRating === false ? 'hidden' : ''" :profile="profileDetail" :click="countClick" />
  <UpdateModal :class="isHiddenUpdate === false ? 'hidden' : ''" :profile="profileDetail" :click="countClick" />

</template>

<script>
import { Icon } from "@iconify/vue";
import RatingModal from './Modal/RatingModal.vue';
import UpdateModal from './Modal/UpdateModal.vue';
import swal from "sweetalert";

export default {
  components: {
    Icon,
    RatingModal,
    UpdateModal
  },
  data() {
    return {
      isHiddenRating: false,
      isHiddenUpdate: false,
      countClick: 0
    }
  },
  methods: {
    showRating() {
      this.isHiddenRating = true;
      this.isHiddenUpdate = false;
      this.countClick++;
    },
    UpdateYard() {
      this.isHiddenUpdate = true;
      this.isHiddenRating = false;
      this.countClick++;
    },
    showAlert() {
      swal("Bạn có chắc chắn sẽ xóa sân này không ?",{
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Đã Xóa !", {
            icon: "success",
          });
        }
      });
    }

  }
};
</script>