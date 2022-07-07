import AuthService from "../../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  getters : {
    getUser : (state) => {
      return state.user
    },
    getRole : (state) => {
      return state.user.Token.RoleIds[0];
    }
  },
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        user => {
          commit('loginSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          return Promise.reject(error);
        })
    },
    logout({ commit }) {
      AuthService.logout();
      commit("logout");
    },
    register({commit} ,user) {
      return AuthService.register(user).then(
        response => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('registerSuccess');
          return Promise.reject(error);
        }
      );
    },
    refreshToken({commit} , accessToken) {
      commit('refreshToken',accessToken);
    }
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
    refreshToken(state , accessToken) {
      state.status.loggedIn = true;
      state.user = {...state.user, accessToken : accessToken}; // thay accessToken mới vào trong user
    }
  },
};
