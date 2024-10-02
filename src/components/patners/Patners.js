import React from "react";
import patner_icon from "../../images/wpa-patner-capital.png";
import status_group_icon from "../../images/status-group.png";
import Patner_Finance_icon from "../../images/patner-finance.png";
import Patner_Analysist_Center_icon from "../../images/patner-analysist-center.png";
import Patner_accession_icon from "../../images/patner-accession.png";
import Patner_dynamic_icon from "../../images/patner-dynamic.png";
// import './Patners.css';
import Image from "next/image";
import Link from "next/link";
const Patners = () => {
  const PatnersData = [
    {
      id: 1,
      PatnerIcon: patner_icon,
    },

    {
      id: 2,
      PatnerIcon: status_group_icon,
    },

    {
      id: 3,
      PatnerIcon: Patner_Finance_icon,
    },

    {
      id: 4,
      PatnerIcon: Patner_Analysist_Center_icon,
    },

    {
      id: 5,
      PatnerIcon: Patner_accession_icon,
    },

    {
      id: 6,
      PatnerIcon: Patner_dynamic_icon,
    },

    {
      id: 7,
      PatnerIcon: patner_icon,
    },

    {
      id: 8,
      PatnerIcon: status_group_icon,
    },
  ];
  return (
    <>
<section className="px-24">
  <div className="relative overflow-hidden whitespace-nowrap mb-8 mt-8">
    <div className="flex gap-10 px-20 py-4 items-center justify-center animate-marquee">
      {PatnersData.map((elem, index) => (
        <Link href="/" className="inline-block w-40" key={elem.id || index}>
          <Image className="max-w-full h-auto" src={elem.PatnerIcon} alt="Patners" />
        </Link>
      ))}
    </div>
  </div>
</section>


    </>
  );
};

export default Patners;
