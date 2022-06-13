<template>
  <div class="container mx-auto h-[14.8%] mb-8 border-1 pl-1 md:mb-0">
    <div class="h-full px-4 flex bg-white items-center justify-between">
      <div class="relative mx-4 lg:mx-0 w-[70%] flex items-center">
        <span
          class="
            absolute
            inset-y-0
            left-10
            flex
            items-center
            pl-3
            cursor-pointer
          "
          @click="EmitSearchValue()"
        >
          <font-awesome-icon
            class="w-5 h-5 text-[#ACACAC]"
            icon="magnifying-glass"
          />
        </span>
        <input-component
          id="inputSearch"
          class="
            mr-8
            w-[60%]
            rounded
            h-12
            pl-12
            border-gray-200
            mt-8
            ml-10
            bg-[#F5F5F7]
            placeholder:text-slate-400
          "
          placeholder="Search Member..."
          :value="search"
        ></input-component>
      </div>
      <div class="p-10">
        <div class="dropdown inline-block relative">
          <button
            class="
              text-gray-700
              font-semibold
              py-2
              px-4
              rounded
              inline-flex
              items-center
            "
          >
            <img
              class="w-7 h-7 rounded mr-3"
              :src="require('../../assets/img/son.jpg')"
            />
            <span class="mr-1 text-normal font-normal">{{
              currentUser.FullName
            }}</span>
            <font-awesome-icon
              class="w-4 h-4 ml-1 text-[#ACACAC]"
              icon="caret-down"
            />
          </button>
          <ul
            class="
              dropdown-menu
              absolute
              hidden
              text-gray-700
              dark:text-gray-200
              pt-1
              py-1
              text-sm
            "
          >
            <li v-for="item in listDropDown" :key="item" class="">
              <a
                class="
                  rounded-t
                  bg-gray-100
                  hover:bg-gray-300
                  py-2
                  px-4
                  block
                  whitespace-no-wrap
                  cursor-pointer
                "
                @click="routerLink(item.router)"
                >{{ item.text }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  mounted() {
    this.currentUser = JSON.parse(localStorage.getItem("user"));
  },
  props : {
    search : {
      type : String, 
      required : true
    }
  },
  data() {
    return {
      listDropDown: [
        {
          text: "My Account",
          router: "/profile",
        },
        {
          text: "SignOut",
          router: "/logout",
        },
      ],
      currentUser: "",
    };
  },
  methods: {
    EmitSearchValue() {
      let searchInput = document.getElementById("inputSearch");
      this.$emit("search", searchInput.value);
    },
    routerLink(path) {
      if (path.includes("logout")) {
        this.$store.dispatch("auth/logout");
        this.$router.push("/login");
      } else {
        this.$router.push(path);
      }
    },
  },
};
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu {
  width: 200px;
}
</style>