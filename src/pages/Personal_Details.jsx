import React from "react";

function Personal_Details() {
  return (
    <>
      <h1 className="text-purple-600 font-bold text-center xs:text-xl md:text-2xl lg:text-4xl font-content">
        Personal Details
      </h1>
      <form
        action=""
        className="flex flex-col rounded-lg  xs:shadow-2xl lg:w-[800px] lg:ml-[450px] lg:mt-10 lg:mb-10 xs:w-72 xs:ml-4 xs:mt-5 xs:mb-5 p-2"
      >
        <label className="font-content xs:text-lg  lg:text-2xl text-purple-600">
          Roll No:
        </label>
        <input
          className="rounded-lg mt-2 xs:h-10 lg:h-14 focus:outline-purple-600"
          type="text"
          placeholder="21CB***"
        />
        <label className="font-content xs:text-lg  lg:text-2xl text-purple-600">
          Register No:
        </label>
        <input
          className="rounded-lg mt-2 xs:h-10 lg:h-14 focus:outline-purple-600"
          type="text"
          placeholder="9217211130**"
        />
        <label className="font-content xs:text-lg  lg:text-2xl text-purple-600">
          Name:
        </label>
        <input
          className="rounded-lg mt-2 xs:h-10 lg:h-14 focus:outline-purple-600"
          type="text"
        />
        <label className="font-content xs:text-lg  lg:text-2xl text-purple-600">
          Date of Birth:
        </label>
        <input
          className="rounded-lg mt-2 xs:h-10 lg:h-14 focus:outline-purple-600"
          type="text"
          placeholder="DD/MM/YYYY"
        />
        <label className="font-content xs:text-lg  lg:text-2xl text-purple-600">
          Professional Photo:
        </label>
        <input
          className="rounded-lg mt-2 xs:h-10 lg:h-14 focus:outline-purple-600"
          type="file"
          name=""
          id=""
        />
        <label className="font-content xs:text-lg  lg:text-2xl text-purple-600">
          Father Name:
        </label>
        <input
          className="rounded-lg mt-2 xs:h-10 lg:h-14 focus:outline-purple-600"
          type="text"
        />
        <label className="font-content xs:text-lg  lg:text-2xl text-purple-600">
          Mother Name:
        </label>
        <input
          className="rounded-lg mt-2  xs:h-10 lg:h-14 focus:outline-purple-600"
          type="text"
        />
        <label className="font-content xs:text-lg  lg:text-2xl text-purple-600">
          Father Occupation:
        </label>
        <input
          className="rounded-lg mt-2 xs:h-10 lg:h-14 focus:outline-purple-600"
          type="text"
        />
        <label className="font-content xs:text-lg  lg:text-2xl text-purple-600">
          Mother Occupation:
        </label>
        <input
          className="rounded-lg mt-2 xs:h-10 lg:h-14 focus:outline-purple-600"
          type="text"
        />
        <label className="font-content xs:text-lg  lg:text-2xl text-purple-600">
          Student Phone No:
        </label>
        <input
          className="rounded-lg mt-2 xs:h-10 lg:h-14 focus:outline-purple-600"
          type="text"
        />
        <label className="font-content xs:text-lg  lg:text-2xl text-purple-600">
          Father Phone No:
        </label>
        <input
          className="rounded-lg mt-2 xs:h-10 lg:h-14 focus:outline-purple-600"
          type="text"
        />
        <label className="font-content xs:text-lg  lg:text-2xl text-purple-600">
          Mother Phone No:
        </label>
        <input
          className="rounded-lg mt-2 xs:h-10 lg:h-14 focus:outline-purple-600"
          type="text"
        />
        <label className="font-content xs:text-lg  lg:text-2xl text-purple-600">
          Mail id:
        </label>
        <input
          className="rounded-lg mt-2  xs:h-10 lg:h-14 focus:outline-purple-600"
          type="email"
          name=""
          id=""
          placeholder="*****@gmail.com"
        />
        <label className="font-content xs:text-lg  lg:text-2xl text-purple-600">
          Address:
        </label>
        <input
          className="rounded-lg mt-2 xs:h-10 lg:h-14 focus:outline-purple-600"
          type="textarea"
        />
        <input className=" lg:text-xl border-2 border-purple-600 hover:bg-purple-400 p-3 lg:w-[300px] xs:w-[140px] xs:ml-[60px] lg:ml-[240px] xs:mt-[20px] sm:w-14 rounded-full" type="button" value="Next" />
      </form>
    </>
  );
}

export default Personal_Details;
