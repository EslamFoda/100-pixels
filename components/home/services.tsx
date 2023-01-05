import Image from "next/image";
import BrefBtn from "../ui/brefBtn";
import Header from "../ui/header";

function Services() {
  const serviceData = [
    {
      id: 1,
      icon: "Pr",
      title: "PRODUCT / promo videos",
      firstDesc: "Showcase your product and",
      secDesc:
        "reveal its features in a way that would be impossible in real life",
    },
    {
      id: 2,
      icon: "Sa",
      title: "Soical Ads / Content",
      firstDesc: "Strike your audience",
      secDesc:
        "on social media and increase the effectiveness of advertising channels with viral content",
    },
    {
      id: 3,
      icon: "Br",
      title: "infographics / Event Branding",
      firstDesc: "Get the best visual ",
      secDesc: "representation of your company's information or data",
    },
    {
      id: 4,
      icon: "Pr",
      title: "PRODUCT / promo videos",
      firstDesc: "Enhance the footage",
      secDesc: "and create realistic imagery for your project",
    },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-3 mb-5  grid-cols-1 py-14 gap-y-6 gap-16">
        <div className="col-span-1">
          <Header text="Services" />
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 col-span-2 gap-2">
          {serviceData.map((service) => {
            return (
              <div
                key={service.id}
                className="border rounded-md p-2 space-y-8 pr-8 w-full text-white border-solid border-[#fafafa]/30"
              >
                <div className="flex items-start gap-2">
                  <div className="border w-10 h-10 flex items-center justify-center border-white rounded-md">
                    <span className="text-xs">{service.icon}</span>
                  </div>
                  <span className="text-xs uppercase">{service.title}</span>
                </div>
                <div className="text-[#fafafa]/60 flex flex-col justify-center items-center">
                  <div className="self-end">
                    <div className="flex items-center">
                      <span className=" text-sm">{service.firstDesc}</span>
                    </div>
                  </div>
                  <div className="self-start">
                    <h1 className="text-sm">{service.secDesc}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
     <BrefBtn text='BRIEF'/>
    </>
  );
}

export default Services;
