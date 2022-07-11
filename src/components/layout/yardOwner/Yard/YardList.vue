<template>
  <preloader-component :class="loading == false ? 'hidden' : ''" />
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
            <div v-for="courtInfo in courtList" :key="courtInfo.Id" class="
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
                <div class="mr-5 w-60 h-40">
                  <img class=" w-full h-full rounded-2xl object-contain" :src="courtInfo.ImageUrl" />
                </div>

                <!--infor Yard-->
                <div class="flex flex-col items-start justify-end h-auto">
                  <div class="flex items-center mb-2">
                    <span class="text-gray-500 text-md font-semibold mr-5 w-24">Tên Sân:
                    </span>
                    <span class="text-gray-500">{{ courtInfo.Name }}</span>
                  </div>
                  <div class="flex items-center mb-2">
                    <span class="text-gray-500 text-md font-semibold mr-5  w-24">Loại Sân:
                    </span>
                    <span class="text-gray-500">
                      <p v-if="courtInfo.TypeId === 1">Sân Đất Nện</p>
                      <p v-else-if="courtInfo.TypeId === 2">Sân Cỏ</p>
                      <p v-else-if="courtInfo.TypeId === 3">Sân Cứng</p>
                    </span>
                  </div>
                  <div class="flex items-center mb-2">
                    <span class="text-gray-500 text-md font-semibold mr-5">Kích Thước:
                    </span>
                    <span class="text-gray-500">
                      <p v-if="courtInfo.CourtSizeId === 1"> 40m x 20m</p>
                      <p v-else-if="courtInfo.CourtSizeId === 2">36.57m x 18.29m</p>
                      <p v-else-if="courtInfo.CourtSizeId === 3">34.75m x 17.07m</p>
                    </span>
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
                </div>
              </div>

              <div class="flex-1 w-full h-full border-l-2 p-4">
                <div class="w-full h-full">
                  <div class="flex space-x-2 justify-center my-3" @click="showRating">
                    <button type="button" class="
                        flex
                        items-center
                        justify-evenly
                        px-10
                        py-2.5
                        bg-blue-400
                        text-white
                        font-medium
                        text-sm
                        leading-tight
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
                      <p class="pl-2">Đánh Giá</p>
                    </button>
                  </div>
                  <div class="flex space-x-2 justify-center my-8" @click="UpdateYard(courtInfo.Id)">
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
            <div class="font-bold text-xl mb-2">Tổng có {{ displayInfo.totalCourt }} Sân Cho Thuê</div>
            <p class="text-gray-700 text-base">
              Sân sẽ được hiển thị và được tính toán giá thuê theo ngày
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span v-for="(courtType, index) in displayInfo.listTypeYard" :key="index" class="
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
              ">

              <p v-if="courtType == 1">#Sân Đất Nện</p>
              <p v-else-if="courtType == 2">#Sân Cỏ</p>
              <p v-else-if="courtType == 3">#Sân Cứng</p>

            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--The Modal-->
  <RatingModal :class="isHiddenRating === false ? 'hidden' : ''" :profile="profileDetail" :click="triggerRating" />
  <UpdateModal :class="isHiddenUpdate === false ? 'hidden' : ''" :profile="courtDetail" :click="triggerUpdate" />

</template>

<script>
import { Icon } from "@iconify/vue";
import RatingModal from './Modal/RatingModal.vue';
import UpdateModal from './Modal/UpdateModal.vue';
import CourtService from '@/services/court.service'
import TokenService from '@/services/token/token.service'
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
      triggerRating: 0,
      triggerUpdate: 0,
      loading: false,
      courtList: [],
      param: {
        vendorId: 0,
        pageSize: 3,
        query: '',
        currentPage: 1,
      },
      displayInfo: {
        pageCount: 0,
        totalCourt: 0,
        listTypeYard: []
      },
      courtDetail: {}
    }
  },
  mounted() {
    this.loading = true;
    this.param.vendorId = TokenService.getUser().Token.VendorId;

    CourtService.getAllCourtOfVendor(this.param)
      .then(res => {
        let data = res.data;
        this.courtList = data.Value;

        // setting display court infor
        this.displayInfo.pageCount = data.PageCount;
        this.displayInfo.totalCourt = data.Count;
        this.courtList.forEach((court) => {
          this.displayInfo.listTypeYard.push(court.TypeId)
        })

      }).catch(err => {
        console.log(err)
      }).finally(() => {
        this.loading = false;
      })
  },
  methods: {
    showRating() {
      this.isHiddenRating = true;
      this.isHiddenUpdate = false;
      this.triggerRating++;
    },
    UpdateYard(courtId) {

      this.courtDetail = this.courtList.find((court) => court.Id == courtId);

      this.isHiddenUpdate = true;
      this.isHiddenRating = false;
      this.triggerUpdate++;

    },
    showAlert() {
      swal("Bạn có chắc chắn sẽ xóa sân này không ?", {
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