  <template>
  <div id="modal" class="flex modal fixed inset-0" :class="isClose === true ? 'hidden' : ''">
    <div class="modal-overlay absolute w-full h-full"></div>
    <div class="mx-auto relative p-4 w-full max-w-lg h-full md:h-auto">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 mt-20">
        <button @click="hiddenModal" type="button" class="
            absolute
            top-3
            right-2.5
            text-gray-400
            bg-transparent
            hover:bg-gray-50 hover:text-gray-900
            rounded-lg
            text-sm
            p-1.5
            ml-auto
            inline-flex
            items-center
            dark:hover:bg-gray-800 dark:hover:text-white
          ">
          <Icon class="w-6 h-6" icon="akar-icons:circle-x-fill"></Icon>
        </button>
        <div class="py-6 px-6 lg:px-8 h-[420px] overflow-auto pt-4">
          <h3 class="mb-4 text-xl font-medium text-gray-700 dark:text-white">
            Danh Sách Đánh Giá Sân
          </h3>
          <hr/>
          <form class="space-y-2" action="#">
            <!--loop -->

              <div class="w-full h-18 border-b-2 flex items-center py-2">
              <img class="mr-4 w-12 h-12 rounded-full" src="../../../../../assets/img/son.jpg" alt="">
              <div class="flex flex-col items-start w-full">
                <div class="flex items-center justify-between w-full">
                  <h3 class="text-md font-semibold">Thái Sơn</h3>
                  <p class="text-xs test-gray-200">28/5/2022 9:58 am </p>
                </div>
                <div class="flex items-center text-sm">
                  <p class="mr-2">Đánh Giá :</p>
                  <div class="item-rating">
                    <ul class="unstyled-list list-inline flex items-center">
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


            <div class="w-full h-18 border-b-2 flex items-center py-2">
              <img class="mr-4 w-12 h-12 rounded-full" src="../../../../../assets/img/son.jpg" alt="">
              <div class="flex flex-col items-start w-full">
                <div class="flex items-center justify-between w-full">
                  <h3 class="text-md font-semibold">Thái Sơn</h3>
                  <p class="text-xs test-gray-200">28/5/2022 9:58 am </p>
                </div>
                <div class="flex items-center text-sm">
                  <p class="mr-2">Đánh Giá :</p>
                  <div class="item-rating">
                    <ul class="unstyled-list list-inline flex items-center">
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>



            <div class="w-full h-18 border-b-2 flex items-center py-2">
              <img class="mr-4 w-12 h-12 rounded-full" src="../../../../../assets/img/son.jpg" alt="">
              <div class="flex flex-col items-start w-full">
                <div class="flex items-center justify-between w-full">
                  <h3 class="text-md font-semibold">Thái Sơn</h3>
                  <p class="text-xs test-gray-200">28/5/2022 9:58 am </p>
                </div>
                <div class="flex items-center text-sm">
                  <p class="mr-2 mt-1">Đánh Giá :</p>
                  <div class="item-rating">
                    <ul class="unstyled-list list-inline flex items-center">
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full h-18 border-b-2 flex items-center py-2">
              <img class="mr-4 w-12 h-12 rounded-full" src="../../../../../assets/img/son.jpg" alt="">
              <div class="flex flex-col items-start w-full">
                <div class="flex items-center justify-between w-full">
                  <h3 class="text-md font-semibold">Thái Sơn</h3>
                  <p class="text-xs test-gray-200">28/5/2022 9:58 am </p>
                </div>
                <div class="flex items-center text-sm">
                  <p class="mr-2 mt-1">Đánh Giá :</p>
                  <div class="item-rating">
                    <ul class="unstyled-list list-inline flex items-center">
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full h-18 border-b-2 flex items-center py-2">
              <img class="mr-4 w-12 h-12 rounded-full" src="../../../../../assets/img/son.jpg" alt="">
              <div class="flex flex-col items-start w-full">
                <div class="flex items-center justify-between w-full">
                  <h3 class="text-md font-semibold">Thái Sơn</h3>
                  <p class="text-xs test-gray-200">28/5/2022 9:58 am </p>
                </div>
                <div class="flex items-center text-sm">
                  <p class="mr-2">Đánh Giá :</p>
                  <div class="item-rating">
                    <ul class="unstyled-list list-inline flex items-center">
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                      <li class="ratings-list-item">
                        <Icon class="w-4 h-4 text-yellow-300" icon="ant-design:star-filled"></Icon>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- end loop -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon
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
      isClose: false,
    };
  },
  methods: {
    hiddenModal() {
      this.isClose = true;
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