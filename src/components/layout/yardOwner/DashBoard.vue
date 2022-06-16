<template>
  <header class="bg-white p-2 border-b-2">
    <div class="wrap-header flex items-center justify-end flex-wrap">
      <div class="mr-5 flex float-right">
        <button class="mr-5 text-2xl text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 36 36"
            class="iconify iconify--clarity"
          >
            <path
              fill="currentColor"
              d="M32.51 27.83A14.4 14.4 0 0 1 30 24.9a12.63 12.63 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.63 12.63 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93a1 1 0 0 0-.34.75v1.36a1 1 0 0 0 1 1h27.8a1 1 0 0 0 1-1v-1.36a1 1 0 0 0-.34-.75ZM5.13 28.94a16.17 16.17 0 0 0 2.44-3a14.24 14.24 0 0 0 1.65-5.85v-4.94a8.74 8.74 0 1 1 17.47 0v4.94a14.24 14.24 0 0 0 1.65 5.85a16.17 16.17 0 0 0 2.44 3Z"
              class="clr-i-outline clr-i-outline-path-1"
            ></path>
            <path
              fill="currentColor"
              d="M18 34.28A2.67 2.67 0 0 0 20.58 32h-5.26A2.67 2.67 0 0 0 18 34.28Z"
              class="clr-i-outline clr-i-outline-path-2"
            ></path>
            <path fill="none" d="M0 0h36v36H0z"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
  <div class="dashboard p-8">
    <!-- grid wrapper card -->
    <div
      class="
        wrapper-card
        grid
        lg:grid-cols-4
        grid-cols-1
        md:grid-cols-2
        gap-2
        mt-5
      "
    >
      <!-- card  -->
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow flex"
      >
        <div class="p-2 max-w-sm">
          <div
            class="
              bg-orange-200
              rounded-full
              w-14
              h-14
              text-lg
              p-3
              text-orange-600
              mx-auto
            "
          >
            <span class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="30px"
                height="30px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10 16V8a2 2 0 0 1 2-2h9V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-1h-9a2 2 0 0 1-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="block p-2 w-full">
          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
            3
          </p>
          <h2 class="font-normal text-gray-400 text-md mt-1">Số sân hiện có</h2>
        </div>
      </div>
      <!-- end card -->
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow flex"
      >
        <div class="p-2 max-w-sm">
          <div
            class="
              bg-green-200
              rounded-full
              w-14
              h-14
              text-lg
              p-3
              text-green-600
              mx-auto
            "
          >
            <span class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="30px"
                height="30px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.777c0-2.609-1.903-4.945-4.5-5.198A5.005 5.005 0 0 0 7 7v1H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm12-12v2h-2v-2h2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-2 3h2v2H7v-2z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="block p-2 w-full">
          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
            256
          </p>
          <h2 class="font-normal text-gray-400 text-md mt-1">Tổng số lần đặt sân</h2>
        </div>
      </div>
      <!-- end card -->
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow flex"
      >
        <div class="p-2 max-w-sm">
          <div
            class="
              bg-red-200
              rounded-full
              w-14
              h-14
              text-lg
              p-3
              text-red-600
              mx-auto
            "
          >
            <span class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="30px"
                height="30px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="none"
                  d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z"
                />
                <path
                  fill="currentColor"
                  d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="block p-2 w-full">
          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
            3569
          </p>
          <h2 class="font-normal text-gray-400 text-md mt-1">
            Tổng số lần bị hủy sân
          </h2>
        </div>
      </div>
      <!-- end card -->
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow flex"
      >
        <div class="p-2 max-w-sm">
          <div
            class="
              bg-purple-200
              rounded-full
              w-14
              h-14
              text-lg
              p-3
              text-purple-600
              mx-auto
            "
          >
            <span class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="30px"
                height="30px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <g fill="currentColor">
                  <path d="M15 13v1H1.5l-.5-.5V0h1v13h13Z" />
                  <path
                    d="M13 3.207L7.854 8.354h-.708L5.5 6.707l-3.646 3.647l-.708-.708l4-4h.708L7.5 7.293l5.146-5.147h.707l2 2l-.707.708L13 3.207Z"
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>

        <div class="block p-2 w-full">
          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
            7 230
          </p>
          <h2 class="font-normal text-gray-400 text-md mt-1">Tổng lượt truy cập</h2>
        </div>
      </div>
      <!-- end card -->
    </div>
    <!-- end wrapper card -->
    <div class="mt-2 lg:flex block lg:gap-2">
      <div
        class="
          bg-white
          dark:bg-gray-800
          p-5
          w-full
          rounded-md
          box-border
          shadow
        "
      >
        <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
          Tổng doanh thu
        </h2>
        <p class="text-gray-400 font-lexend font-normal">
          Doanh thu được tính theo tuần
        </p>
        <span class="float-right mr-20">
          <h2 class="text-red-500 -mt-12 flex">
            <span class="mr-2"> 15.9% </span
            ><span>
              <Icon icon="akar-icons:arrow-down" />
            </span>
          </h2>
        </span>
        <span class="float-right">
          <h2 class="text-green-500 -mt-12 flex">
            <span class="mr-2"> 87.9% </span
            ><span>
              <Icon icon="akar-icons:arrow-up" />
            </span>
          </h2>
        </span>
        <br />
        <div id="chart">
          <apexchart
            width="100%"
            height="380"
            type="area"
            :options="optionsArea"
            :series="seriesArea"
            :sparkline="{
              enabled: true,
            }"
          ></apexchart>
        </div>

        <br />
        <hr />
        <div class="wrapper-button mt-3">
          <button
            class="
              uppercase
              float-right
              mt-7
              border-b border-red-600
              text-red-600
            "
          >
            Báo cáo doanh thu
          </button>
        </div>
      </div>
    </div>

    <div class="mt-2 lg:flex block lg:gap-2">
      <div
        class="
          mt-2
          bg-white
          dark:bg-gray-800
          p-5
          w-full
          rounded-md
          box-border
          shadow
        "
      >
        <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">102</h2>
        <p class="text-gray-400 font-lexend font-normal">
          Lượt Đặt Sân Trong Tuần
        </p>
        <span class="float-right">
          <h2 class="text-green-500 -mt-12 flex">
            <span class="mr-2"> 27.9% </span
            ><span>
              <Icon icon="akar-icons:arrow-up" />
            </span>
          </h2>
        </span>
        <div class="wrapper-chart mt-5">
          <apexchart
            type="bar"
            height="380"
            :options="chartOptions"
            :series="series"
          ></apexchart>
          <br />
          <hr />
          <div class="wrapper-button mt-3">
            <button
              class="
                uppercase
                float-right
                -mt-7
                border-b border-red-600
                text-red-600
              "
            >
              Báo cáo lượt đặt sân
            </button>
          </div>
        </div>
      </div>
      <div
        class="
          mt-2
          bg-white
          dark:bg-gray-800
          p-5
          w-full
          rounded-md
          box-border
          shadow
        "
      >
        <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
          369
        </h2>
        <p class="text-gray-400 font-lexend font-normal">Lượt truy cập trong tuần</p>
        <span class="float-right">
          <h2 class="text-green-500 -mt-12 flex">
            <span class="mr-2"> 47.9% </span
            ><span>
              <Icon icon="akar-icons:arrow-up" />
            </span>
          </h2>
        </span>
        <div class="wrapper-chart mt-5">
          <apexchart
            width="100%"
            height="380"
            type="area"
            :options="optionsVisitor"
            :series="seriesVisitor"
          ></apexchart>
          <br />
          <hr />
          <div class="wrapper-button mt-3">
              
            <button
              class="
                uppercase
                float-right
                -mt-7
                border-b border-red-600
                text-red-600
              "
            >
              Báo cáo lượt truy cập
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {
       // chart data area
        optionsArea: {
          xaxis: {
            categories: ['Tuần 1','Tuần 2','Tuần 3','Tuần 4'],
          },
          fontFamily: "Segoe UI, sans-serif",
          stroke: {
            curve: "straight",
          },
          markers: {
            size: 0,
          },
          yaxis: {
            show: false,
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 90, 100],
            },
          },
        },
        chart: {
          fontFamily: "lexend, sans-serif",
        },
        seriesArea: [
          {
            name: "Doanh thu",
            data: [30, 40, 45, 50],
          },
          {
            name: "Doanh thu (tháng trước)",
            data: [20, 34, 45, 55],
          },
        ],
        optionsBar: {
          chart: {
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
            sparkline: {
              enabled: true,
            },
          },
          legend: {
            show: false,
          },
          xaxis: {
            show: false,
          },
          yaxis: {
            show: false,
          },
          colors: ["#4f46e5", "#DC2626"],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "straight",
          },
        },

      series: [
        {
          name: "Số lần đặt",
          data: [
            {
              x: "Thứ 2",
              y: 7,
            },
            {
              x: "Thứ 3",
              y: 5,
            },
            {
              x: "Thứ 4",
              y: 15,
            },
            {
              x: "Thứ 5",
              y: 21,
            },
            {
              x: "Thứ 6",
              y: 24,
            },
            {
              x: "Thứ 7",
              y: 24,
            },
            {
              x: "Chủ Nhật",
              y: 24,
            },
          ],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 380,
        },
        xaxis: {
          type: "category",
          group: {
            style: {
              fontSize: "10px",
              fontWeight: 700,
            },
          },
        },
      },
      optionsVisitor: {
        chart: {
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        legend: {
          show: false,
        },
        xaxis: {
          show: false,
        },
        yaxis: {
          show: false,
        },
        colors: ["#4f46e5"],
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
        stroke: {
          curve: "smooth",
        },
      },
      seriesVisitor: [
        {
          name: "Visitor ",
          data: [22, 30, 45, 50, 42, 60, 70, 50],
        },
      ],
    };
  },
};
</script>