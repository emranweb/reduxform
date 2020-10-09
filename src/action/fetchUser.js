import axios from "axios";

const fetchUser= ()=>{
    return (displatch)=>{
      const response = await axios.get("http://localhost:3001/users");
      displatch({type:"fetch_user", payload:response.data})
    }
}

export default fetchUser;