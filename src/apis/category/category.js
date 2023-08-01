import axios from 'axios';

export default {
    data() {
      return {
        data: [], // Dữ liệu từ API sẽ được lưu vào mảng này
      };
    },
    created() {
      // Trong lifecycle hook "created", gọi API để lấy dữ liệu
      this.getDataFromAPI();
    },
    methods: {
      getDataFromAPI() {
        const apiUrl = 'https://example.com/api/data'; // Thay đổi đường dẫn API phù hợp
  
        axios.get(apiUrl)
          .then((response) => {
            // Gán dữ liệu từ phản hồi API vào reactive property "data"
            this.data = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
      },
    },
  };