import axios from "axios";

export default axios.create({
   baseURL: "https://api.unsplash.com",
   headers: {
      Authorization: "Client-ID yP1mPvLi-6WzPbpXBeGsZtQfmMj-KiETMSvfDyCWMhc",
   },
});
