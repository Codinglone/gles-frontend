import { useState } from "react";

const Info = () => {
  const whyData = "Why Choose us data"
  const processData = "Admission process"
  const durationData = "Admission duration"

  const [why, setWhy] = useState<boolean>(true)
  const [tabData, setTabData] = useState<string>(whyData)
  return (
    <>
      <section className="px-4 flex justify-center w-full">
        <div className="flex justify-between shadow-lg my-2 lg:mx-4 lg:w-[50vw] w-full">
          <span className="md:w-1/3 md:text-lg text-xs font-bold md:py-4 py-2 cursor-pointer text-blue-900 hover:text-blue-700 px-2" onClick={(): any => setTabData(whyData)}>
            Why E-apply
          </span>
          <span className="md:w-1/3 md:text-lg text-xs font-bold md:py-4 py-2 cursor-pointer text-blue-900 hover:text-blue-700 px-2" onClick={(): any => setTabData(processData)}>
            Admission Process
          </span>
          <span className="md:w-1/3 md:text-lg text-xs font-bold md:py-4 py-2 cursor-pointer text-blue-900 hover:text-blue-700 px-2" onClick={(): any => setTabData(durationData)}>
            Admission Duration
          </span>
        </div>
      </section>

     {why &&  <section className="px-4 flex justify-center w-full">
        <div className="flex justify-between shadow-lg my-2 lg:mx-4 lg:w-[50vw] w-full py-2 px-4">
          {tabData}
        </div>
      </section>}
    </>
  );
};

export default Info;
