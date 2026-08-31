import { Link } from "react-router";

export default function RegisterSection() {
  return (
    <div>
      {/* Sign In information*/}

      {/* Main container section */}
      <div>
        {/* This is a div which help to make show effective. */}
        <div className="absolute w-[100vw] inset-0  h-screen bg-black/30"></div>

        {/* This container have many elements */}
        <div className="absolute p-4 w-3/4 h-10/12 sm:w-1/2 bg-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2   rounded-xl shadow-2xl">
          {/* Heading section */}

          <p className="font-bold text-xl ">REGISTER HERE</p>

          {/* form */}
          <form action="" className="space-y-4 mt-4">
            {/* Email or phone number section */}

            {formElements.map((items, index) => (
              <div key={index} className="flex flex-col gap-2 text-sm">
                <label htmlFor="" className="font-semibold">
                  {items.field_name} : <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="border-b rounded-sm px-2 py-0.5 border-gray-300 w-full outline-none"
                  placeholder={`${items.placeholder_section}`}
                />
              </div>
            ))}

            <div className="text-sm">
              <label htmlFor="" className="font-semibold">
                Date of Birth : <span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                className="border-b rounded-sm px-2 py-0.5 border-gray-300 w-full outline-none"
              />
            </div>
            {/* gender section */}
            <div className="flex flex-col gap-2 text-sm">
              <label htmlFor="" className="font-semibold">
                Gender : <span className="text-red-600">*</span>
              </label>

              {/* Gender selection section */}

              <div className="flex  items-center justify-between px-2">
                {genderSelection.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center sm:gap-2 gap-1 font-semibold text-sm"
                  >
                    <input
                      type="radio"
                      name="radio"
                      value={item}
                      className=" appearance-none border checked:bg-blue-500 checked:border-blue-700 cursor-pointer rounded-full border-gray-400 sm:w-4 sm:h-4 w-3 h-3 outline-none"
                    />{" "}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link to={"/sign_up"} className="text-sm font-semibold border border-gray-300 px-4 py-1 rounded-md cursor-pointer">
              Submit
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

const formElements = [
  {
    field_name: "First Name",
    placeholder_section: "First name",
  },
  {
    field_name: "Middle Name",
    placeholder_section: "Middle name",
  },
  {
    field_name: "Last Name",
    placeholder_section: "Last name",
  },
  {
    field_name: "Phone Number",
    placeholder_section: "Phone number",
  },
];

const genderSelection = ["Male", "Female", "Other"];
