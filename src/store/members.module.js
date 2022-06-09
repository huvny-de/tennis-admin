export default {
  namespaced: true,
  state: {
    currentPage: 1,
    membersList: [
      {
        id: "1",
        img: "https://i.ibb.co/YtbtZxC/messi2.jpg",
        username: "messi123",
        fullName: "Lionel Messi",
        email: "lionelmessi123@gmail.com",
        phoneNumber: "0147258369",
        address: "216 Đ. Võ Văn Ngân, Bình Thọ, Thủ Đức, Thành phố Hồ Chí Minh",
        owner: "Thủ Đức Tennis",
        status: "Active",
      },
      {
        id: "2",
        img: "https://i.ibb.co/BT2ndhx/mbappe.jpg",
        username: "mbappe123",
        fullName: "Kylian Mbappe",
        email: "kylianmbappe@gmail.com",
        phoneNumber: "0258963321",
        address: "36A Đ. Võ Văn Ngân, Thủ Đức, Thành phố Hồ Chí Minh",
        owner: "Hồng Phúc Tennis",
        status: "Active",
      },
      {
        id: "3",
        img: "https://i.ibb.co/7SYJfNT/gareth-bale.jpg",
        username: "bale123",
        fullName: "Gareth Bale",
        email: "garethbale@gmail.com",
        phoneNumber: "0285741321",
        address: "212/5 Đ. Hoàng Diệu 2, Thủ Đức, Thành phố Hồ Chí Minh",
        owner: "Đức Thịnh Tennis",
        status: "InActive",
      },
      {
        id: "4",
        img: "https://i.ibb.co/tBQ54Wf/lukaku.jpg",
        username: "lukaku123",
        fullName: "Romelu Lukaku",
        email: "romelulukaku@gmail.com",
        phoneNumber: "0100203022",
        address: "969. Khu Công Nghệ Cao, Quận 9, Thành phố Hồ Chí Minh",
        owner: "Lam Trường Tennis",
        status: "Active",
      },
      {
        id: "5",
        img: "https://i.ibb.co/2MDfzqc/kaka2.jpg",
        username: "kaka123",
        fullName: "KaKa",
        email: "kaka@gmail.com",
        phoneNumber: "0789456012",
        address: "312/6/6. Linh Trung, Thủ Đức, Thành phố Hồ Chí Minh",
        owner: "Nhật Huy Tennis",
        status: "Active",
      },
    ],
  },
  getters: {
    membersList: (state) => {
      return state.membersList;
    },
    currentPage: (state) => {
      return state.currentPage;
    },
  },
};
