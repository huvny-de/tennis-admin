<template>
<div class="flex items-center justify-start mx-8 mt-5">
    <p class="mr-3 text-[#434141] text-normal">Hệ Số:</p>
    <input
      class="
        shadow
        appearance-none
        border
        rounded
        w-60
        py-2
        px-3
        text-gray-700
        leading-tight
        focus:outline-none focus:shadow-outline
      "
      id="username"
      type="number"
      placeholder="ví dụ 1.25"
    />
  </div>
  <div class="flex justify-end pt-4 px-8">
    <button
      type="button"
      class="
        px-4
        bg-transparent
        p-1
        rounded-lg
        text-indigo-500
        hover:bg-gray-100 hover:text-indigo-400
        mr-2
      "
      @click="hiddenModal"
    >
      Đóng
    </button>
    <button
      class="
        modal-close
        px-4
        bg-indigo-500
        p-1
        py-2
        rounded-lg
        text-white
        hover:bg-indigo-400
      "
    >
      Áp Dụng
    </button>
  </div>
</template>

<script>
export default {};
</script>