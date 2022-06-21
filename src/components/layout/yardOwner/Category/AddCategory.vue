<template>
  <div class="p-8 flex flex-col items-center justify-between">
    <div
      class="
        bg-white
        dark:bg-gray-800
        p-5
        w-[60%]
        px-4
        rounded-md
        box-border
        shadow
      "
    >
     <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Tạo Danh Mục Mới
          </h3>
          <form class="space-y-8" action="#">
            <div>
              <div class="p-2">
                <table class="my-3">
                  <tbody>
                     <tr>
                      <td
                        class="
                          px-2
                          pt-0
                          pb-2
                          text-gray-500
                          font-semibold
                          text-normal
                          min-w-10
                        "
                      >
                        Tên Danh Mục
                      </td>
                      <td class="px-2 py-2 text-sm">
                        <div class="mb-3 pt-0">
                          <input
                            type="text"
                            placeholder="Nhập tên danh mục ..."
                            class="
                              px-2
                              py-2
                              placeholder-slate-300
                              text-slate-600
                              relative
                              bg-white
                              rounded
                              text-sm
                              border border-slate-300
                              outline-none
                              focus:outline-none focus:ring-200
                              w-full
                            "
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="
                          px-2
                          pt-0
                          pb-2
                          text-gray-500
                          font-semibold
                          text-normal
                        "
                      >
                        Chiều Dài
                      </td>
                      <td class="px-2 py-2 text-sm w-[80%]">
                        <div class="mb-3 pt-0 ">
                          <input
                            type="text"
                            placeholder="Nhập chiều dài..."
                            class="
                              px-2
                              py-2
                              placeholder-slate-300
                              text-slate-600
                              relative
                              bg-white
                              rounded
                              text-sm
                              border border-slate-300
                              outline-none
                              focus:outline-none focus:ring-200
                              w-full
                            "
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="
                          px-2
                          pt-0
                          pb-2
                          text-gray-500
                          font-semibold
                          text-normal
                        "
                      >
                        Chiều Rộng
                      </td>
                      <td class="px-2 py-2 text-sm">
                        <div class="mb-3 pt-0">
                          <input
                            type="number"
                            placeholder="Nhập chiều rộng..."
                            class="
                              px-2
                              py-2
                              placeholder-slate-300
                              text-slate-600
                              relative
                              bg-white
                              rounded
                              text-sm
                              border border-slate-300
                              outline-none
                              focus:outline-none focus:ring-200
                              w-full
                            "
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="flex justify-end pt-2">
                 
                  <button
                    class="
                      modal-close
                      px-4
                      bg-indigo-500
                      p-2
                      rounded-lg
                      text-white
                      hover:bg-indigo-400
                    "
                  >
                    Thêm Mới
                  </button>
                </div>
              </div>
            </div>
          </form>
    </div>
  </div>

         
      
</template>

<script>
export default {};
</script>