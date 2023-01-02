import React, {useEffect, useState} from "react";
// import axios from "axios";
import axios from "../utils/axiosConfig"; // other way which better later when config for deployment

// import {useForm, ErrorMessage} from "react-hook-form";
function CreatePost() {
  const [post, setPost] = useState([]);

  // const {
  //   register,
  //   handleSubmit,
  //   getValues,
  //   formState,
  //   reset,
  //   formState: {error},
  // } = useForm();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      title: formData.get("title"),
      desc: formData.get("desc"),
    };

    const result = await axios.post("/api/post/create", data);
    // const result = await axios({
    //   method: "POST",
    //   url: "/api/post/create",
    //   baseURL: "http://localhost:5000",
    //   data,
    // });

    console.log(result.data);
  };
  const getAllPost = async (e) => {
    const res = await axios.get("/api/post/all");
    console.log(res);
    setPost(res.data);
  };
  useEffect(() => {
    getAllPost();
  }, []);
  return (
    <div className=" w-50  align-items-center m-auto py-2 col-md-4 col-lg-3 col-sm-10 text-info">
      <h2>Create Post</h2>
      <form action="" method="post" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="form-control "
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="desc"
            placeholder="description"
            className="form-control"
          />
        </div>

        <button type="submit">add post</button>
      </form>

      {/* =========================================================Extra to show the validation in front end */}
      {/* <form
        action=""
        method="post"
        // onSubmit={handleSubmit((data) => console.log(data))}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group">
          <input
            type="text"
            {...register("title", {required: "this is required"})}
            placeholder="Title"
            className="form-control "
          />
        </div>
        <div className="form-group">
          <input
            // ref={register({
            //   required: "this is required",
            //   maxLength: {value: 30, message: "Please not more 30 char"},
            // })}
            type="text"
            {...register("desc", {
              required: "this is required",
              minLength: {value: 4, message: "min length is 4"},
            })}
            placeholder="description"
            className="form-control"
          />
        </div>
        <button type="submit">add post</button>
      </form> */}

      {/* <form className="row g-3 needs-validation" novalidate>
        <div className="col-md-4">
          <label for="validationCustom01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label for="validationCustom02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label for="validationCustomUsername" className="form-label">
            Username
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              className="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="col-md-6">
          <label for="validationCustom03" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom03"
            required
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div class="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form> */}
    </div>
  );
}

export default CreatePost;
