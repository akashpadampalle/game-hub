import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4c7f7daca148416b9ec0ef4a60c5912b",
  },
});
