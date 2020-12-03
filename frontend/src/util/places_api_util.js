import axios from "axios";

export const fetchRestaurants = food => {
    // 1600 tells google to look in a circle with a radius of 1600m for the restaurants
    // this can be changed later if we want to allow user to look closer or farther
    const radius = `1600`;
    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      const location = lat + "," + lon;
      return axios.get(`/api/third-party?location=${location}&food=${food}&radius=${radius}`);
  })
};