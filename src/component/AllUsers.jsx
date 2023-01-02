import React, {useEffect, useState} from "react";
// import axios from "axios";
import axios from "../utils/axiosConfig"; // other way which better later when config for deployment

function AllUsers() {
  const [pic, setPic] = useState([]);
  const getAll = async () => {
    const response = await axios.get("/api/users/all");
    console.log(response);
    setPic(response.data);
  };

  return (
    <div>
      <div>Click to see all post</div>
      <button onClick={getAll}>Click</button>
      {pic?.map((img) => {
        return (
          <>
            {img.userPic && <img src={img.userPic} width="100" height="100" />}
          </>
        );
      })}
    </div>
  );
}

export default AllUsers;
