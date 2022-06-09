<template>
  <div class="container mx-auto px-8 h-[80%] lg:mt-3 shadow">
    <div class="w-[100%] h-full mt-4">
      <div class="flex flex-col items-center justify-center mb-4">
        <h2 class="mr-4 mb-4 text-lg font-semibold text-[#747474]">
          Create Account
        </h2>
        <div
          class="
            container
            p-6
            rounded-md
            shadow-md
            bg-white
            mx-auto
            h-full
            mt-8
            md:mt-0
            min-w-full
          "
        >
          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-[#747474]" for="username">Username</label>
                <input-component class="w-full mt-2 text-sm border-gray-800" />
              </div>
              <div>
                <label class="text-[#747474]" for="username">Full Name</label>
                <input-component class="w-full mt-2 text-sm" />
              </div>
              <div>
                <label class="text-[#747474]" for="username">Email</label>
                <input-component type="email" class="w-full mt-2 text-sm" />
              </div>
              <div>
                <label class="text-[#747474]" for="username"
                  >Phone Number</label
                >
                <input-component type="phone" class="w-full mt-2 text-sm" />
              </div>
              <div>
                <label class="text-[#747474]" for="username">Password</label>
                <input-component type="password" class="w-full mt-2 text-sm" />
              </div>
              <div>
                <label class="text-[#747474]" for="username"
                  >Confirm Password</label
                >
                <input-component type="password" class="w-full mt-2 text-sm" />
              </div>
            </div>
            <button
              class="
                mx-auto
                bg-blue-500
                hover:bg-blue-700
                duration-200
                text-white
                font-medium
                py-2
                px-4
                rounded
                w-20
                text-md
                float-right
              "
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>