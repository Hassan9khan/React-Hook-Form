import React, { useState } from "react";
import { useForm  } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


//   const [ show ,  setShow ] = useState([])
  const getData = (data) => {
    console.log(data);
    // show.push(data)
    // setShow([...show])
  };

  const selectedOption = watch("laptop");

  return (
    <>
      <form onSubmit={handleSubmit(getData)}>
        <div className="grid grid-cols-2 gap-5 gap-y-8 pl-10 pr-10">
          <div>
            <div className="label">
              <span className="label-text">Full Name</span>
            </div>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-xl p-4"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <div className="label">
              <span className="label-text ">Father Name</span>
            </div>
            <input
              type="text"
              placeholder="Father Name"
              className="input input-bordered w-full max-w-xl  p-4"
              {...register("fathername", { required: true })}
            />
            {errors.fathername && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <div className="label">
              <span className="label-text ">Email</span>
            </div>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xl"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <div className="label">
              <span className="label-text ">Phone Number</span>
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xl"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <div className="label">
              <span className="label-text ">National ID (CNIC)</span>
            </div>
            <input
              type="number"
              placeholder="CNIC"
              className="input input-bordered w-full max-w-xl"
              {...register("cnic", { required: true })}
            />
            {errors.cnic && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <div className="label">
              <span className="label-text ">Date Of Birth</span>
            </div>
            <input
              type="date"
              // placeholder="Full Name"
              className="input input-bordered w-full max-w-xl"
              {...register("dateofbirth", { required: true })}
            />
            {errors.dateofbirth && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

         
          <div>
            <label className="form-control w-full max-w-xl">
              <div className="label label-text">Gender Selection</div>
              <select
                {...register("gender")}
                className="select select-bordered"
              >
                <option disabled selected value="other">
                  Select an Option
                </option>
                <option value="female">female</option>
                <option value="male">male</option>
              </select>
            </label>
          </div>

          <div>
            <label className="form-control w-full max-w-xl">
              <div className="label label-text">Do you have a Laptop?</div>
              <select
                {...register("laptop")}
                className="select select-bordered"
              >
                <option disabled selected value="other">
                  Select an Option
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
          </div>

          <div className="col-start-1 col-end-3">
            <div className="label">
              <span className="label-text ">Address</span>
            </div>
            <input
              type="text"
              placeholder="Address"
              className="input input-bordered w-full max-w-[100%]"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

         <div className="col-start-1 col-end-3">
            <label className="form-control w-full max-w-[100%]">
              <div className="label label-text">Last Qualification</div>
              <select
                {...register("qualification")}
                className="select select-bordered"
              >
                <option disabled selected value="other">
                  Select an Option
                </option>
                <option value="matric">Matric</option>
                <option value="intermediate">Intermediate</option>
                <option value="bachelors">Bachelors</option>
                <option value="masters">Masters</option>
              </select>
            </label>
          </div> 

          <div className="col-start-1 col-end-3">
            <label className="form-control">
              <div className="label ">Pick a file</div>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-[100%]"
                {...register("file", { required: true })}
              />
              {errors.file && (
                <span className="text-red-500">This field is required</span>
              )}
            </label>
          </div>

          <div className="col-start-1 col-end-3">
            <ul className="list-disc m-5 ">
              <li>With white or blue background</li>
              <li>File type: jpg, jpeg, png</li>
              <li>Upload your recent passport size picture</li>
              <li>Your face should be clearly visible without any glasses</li>
            </ul>
          </div>
        </div>

        <div className="text-center mb-10">
          <button type="submit" className="btn btn-primary w-[93%]">
            Submit
          </button>
          {/* <br /> */}
        </div>
      </form>
      {/* {show ? (
        show.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.fullname}</p>
              <p>{item.fathername}</p>
              <p>{item.email}</p>
            </div>
          );
        })
      ) : (
        <h1>Loading</h1>
      )} */}
    </>
  );
};

export default Form;
