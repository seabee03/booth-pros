import axios from "axios";

export default {
  getSignUps: function() {
    return. axios.get("/api/SignUp");
  },
  getSignup: function(id) {
    return axios.get("/api/SignUp/" + id);
  },
  deleteSignUp: function(id) {
    return axios.delete("/api/SignUp/" + id);
  },
  saveSignUp: function(SignUpData) {
    return axios.post("/api/SignUp", SignUpData);
  }
};