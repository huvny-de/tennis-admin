<template>
  <div
    class="
      container
      p-6
      rounded-md
      shadow-md
      bg-white
      mx-auto
      h-full
      w-[80%]
      mt-8
      md:mt-0
      min-w-[80%]
      relative
    "
  >
    <form>
      <!--form control-->
      <div class="flex">
        <!--img container-->
        <div>
          <div
            class="
              flex flex-col
              justify-start
              items-start
              lg:w-80
              md:w-40
              sm:w-20
            "
          >
            <img
              class="rounded mr-3 lg:w-60 object-contain md:w-40"
              src="../../../assets/img/son.jpg"
            />
            <label class="block mt-4">
              <span class="sr-only">Choose File</span>
              <input
                type="file"
                class="
                  block
                  w-full
                  text-sm text-gray-500
                  file:mr-4
                  file:py-2
                  file:px-4
                  file:rounded-full
                  file:border-0
                  file:text-sm
                  file:font-semibold
                  file:bg-blue-50
                  file:text-blue-700
                  hover:file:bg-blue-100
                "
              />
            </label>
          </div>
        </div>

        <!--information container-->
        <div class="grid md:grid-cols-2 gap-6 mt-4 sm:grid-cols-1 text-xs">
          <div>
            <label class="text-[#747474]" for="username">Username</label>
            <input-component
              disabled="true"
              class="w-full mt-2 border-gray-800 text-sm text-gray-600"
              value="Admin"
            />
          </div>
          <div>
            <label class="text-[#747474]" for="username">Role</label>
            <input-component
              disabled="true"
              class="w-full mt-2 border-gray-800 text-sm text-gray-600"
              value="Admin"
            />
          </div>
          <div>
            <label class="text-[#747474]" for="username">Full Name</label>
            <input-component
              class="w-full mt-2 text-sm"
              value="Nguyễn Công Thái Sơn"
            />
          </div>
          <div>
            <label class="text-[#747474]" for="username">Email</label>
            <input-component
              class="w-full mt-2 text-sm"
              value="sonstarnguyen@gmail.com"
            />
          </div>
          <div>
            <label class="text-[#747474]" for="username">Phone Number</label>
            <input-component class="w-full mt-2 text-sm" value="0978145440" />
          </div>
          <!-- <div>
            <label class="text-[#747474]" for="username">Password</label>
            <input-component type="password" class="w-full mt-2 text-sm" />
          </div>
          <div>
            <label class="text-[#747474]" for="username"
              >Confirm Password</label
            >
            <input-component type="password" class="w-full mt-2 text-sm" />
          </div> -->
        </div>
      </div>

      <!--button control-->
      <div class="w-full flex items-center justify-end">
        <div>
          <button
            class="
              mx-auto
              bg-gray-500
              hover:bg-gray-700
              duration-200
              text-white
              font-medium
              py-2
              px-4
              rounded
              w-20
              text-md
            "
          >
            <a href="/" class="no-underline">Back</a>
          </button>
        </div>

        <div>
          <button
            class="
              mx-auto
              bg-green-500
              hover:bg-green-700
              duration-200
              text-white
              font-medium
              py-2
              px-4
              rounded
              w-25
              text-md
              ml-3
            "
          >
            Update
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import InputComponent from "@/components/ui/InputComponent.vue";

export default {
  components: {
    InputComponent,
  },
};
</script>