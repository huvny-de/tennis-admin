export default {
  namespaced: true,
  state: {
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
      {
        id: "6",
        img: "https://i.ibb.co/TYHBG0K/congphuong.jpg",
        username: "congphuong123",
        fullName: "Nguyễn Công Phượng",
        email: "congphuong123@gmail.com",
        phoneNumber: "0203031234",
        address: "Đại học FPT, Quận 9, Thành phố Hồ Chí Minh",
        owner: "FPT Tennis",
        status: "Active",
      },
      {
        id: "7",
        img: "https://i.ibb.co/n7wPb9k/vanhau.jpg",
        username: "vanhau123",
        fullName: "Đoàn Văn Hậu",
        email: "vanhau@gmail.com",
        phoneNumber: "08885556663",
        address: "Đại học Hutech, Quận 9, Thành phố Hồ Chí Minh",
        owner: "Hutech Tennis",
        status: "Active",
      },
      {
        id: "8",
        img: "https://i.ibb.co/k5GmbsZ/quanghai2.jpg",
        username: "quanghai123",
        fullName: "Nguyễn Quang Hải",
        email: "quanghai@gmail.com",
        phoneNumber: "0111444578",
        address: "Đại học Bách Khoa, Thủ Đức, Thành phố Hồ Chí Minh",
        owner: "Bách Khoa Tennis",
        status: "InActive",
      },
      {
        id: "9",
        img: "https://i.ibb.co/tBQ54Wf/lukaku.jpg",
        username: "lukaku123",
        fullName: "Romelu Lukaku",
        email: "romelulukaku@gmail.com",
        phoneNumber: "0100203022",
        address: "969. Khu Công Nghệ Cao, Quận 9, Thành phố Hồ Chí Minh",
        owner: "Lam Trường Tennis",
        status: "InActive",
      },
      {
        id: "10",
        img: "https://i.ibb.co/2MDfzqc/kaka2.jpg",
        username: "kaka123",
        fullName: "KaKa",
        email: "kaka@gmail.com",
        phoneNumber: "0789456012",
        address: "312/6/6. Linh Trung, Thủ Đức, Thành phố Hồ Chí Minh",
        owner: "Nhật Huy Tennis",
        status: "InActive",
      },
      {
        id: "11",
        img: "https://i.ibb.co/tBQ54Wf/lukaku.jpg",
        username: "lukaku123",
        fullName: "Romelu Lukaku",
        email: "romelulukaku@gmail.com",
        phoneNumber: "0100203022",
        address: "969. Khu Công Nghệ Cao, Quận 9, Thành phố Hồ Chí Minh",
        owner: "Lam Trường Tennis",
        status: "InActive",
      },
      {
        id: "12",
        img: "https://i.ibb.co/2MDfzqc/kaka2.jpg",
        username: "kaka123",
        fullName: "KaKa",
        email: "kaka@gmail.com",
        phoneNumber: "0789456012",
        address: "312/6/6. Linh Trung, Thủ Đức, Thành phố Hồ Chí Minh",
        owner: "Nhật Huy Tennis",
        status: "InActive",
      },
    ],
  },
  getters: {
    membersList: (state) => {
      return state.membersList;
    },
    paginate: (state) => (currentPage) => {
      let size = 5;
      let startIndex = (currentPage - 1) * size;
      let endIndex = currentPage * size;

      let paginated_arr = state.membersList.slice(startIndex, endIndex);
      return paginated_arr;
    },
    membersTotal: (state) => {
      return state.membersList.length;
    },
    searchMembers: (state) => (searchValue,currentPage) => {
      let search_arr = state.membersList.filter((member) => {
        return (
          member.username.includes(searchValue) ||
          member.fullName.includes(searchValue) ||
          member.email.includes(searchValue) ||
          member.phoneNumber.includes(searchValue) ||
          member.address.includes(searchValue) ||
          member.owner.includes(searchValue) ||
          member.status.includes(searchValue)
        );
      });

      let paginated_arr = [];

     
      if(search_arr.length > 5) {
        let size = 5;
        let startIndex = (currentPage - 1) * size;
        let endIndex = currentPage * size;
        paginated_arr = search_arr.slice(startIndex, endIndex);
  
      }else {
        paginated_arr = search_arr;
      }

    

      let search_obj = {
        search_arr : paginated_arr,
        totalSearch : search_arr.length,
      }
      return search_obj;
    },
  },
};
