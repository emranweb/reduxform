import axios from "axios";

const createUser = (val) => {
  return async (dispatch) => {
     axios.post("http://localhost:3001/users", val);
  };
};

export default createUser;
