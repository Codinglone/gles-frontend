import { Tabs } from "flowbite-react";

const Info = () => {
  return (
    <>
      <section className="px-4 flex justify-center w-full">
        <div className="flex justify-between shadow-lg my-2 lg:mx-4 lg:w-[50vw] w-full">
          <span className="md:w-1/3 md:text-lg text-xs font-bold md:py-4 py-2 cursor-pointer text-blue-900 hover:text-blue-700 px-2">
            Why E-apply
          </span>
          <span className="md:w-1/3 md:text-lg text-xs font-bold md:py-4 py-2 cursor-pointer text-blue-900 hover:text-blue-700 px-2">
            Admission Process
          </span>
          <span className="md:w-1/3 md:text-lg text-xs font-bold md:py-4 py-2 cursor-pointer text-blue-900 hover:text-blue-700 px-2">
            Admission Duration
          </span>
        </div>
      </section>

      <section className="px-4 flex justify-center w-full">
        <div className="flex justify-between shadow-lg my-2 lg:mx-4 lg:w-[50vw] w-full py-2 px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quaerat
          incidunt, ea voluptatibus explicabo delectus ut, illo numquam
          voluptas, a iure inventore eligendi nisi! Cupiditate hic ipsam nobis
          neque dolore!
        </div>
      </section>
    </>
  );
};

export default Info;
