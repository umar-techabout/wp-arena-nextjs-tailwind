
import React from "react";
import "./AccordionItem.css";
import CouponsAndDeals from "../coupons-and-deals/CouponsAndDeals";
import Plugins from "../plugins/Plugins";
import Image from "next/image";
export default function AccordionItem({ isOpen, isOpenBlog, onClick, data }) {
  const isShowDis = false;
  return (
    <>
      <div className="">
        <div
          className="wpa-accordion-title wpa-flex wpa-space-between "
          onClick={onClick}
        >
          <div className="px-8 py-4">
            <div className="logo">
              <Image src={data.logo} alt={data.logo} />{" "}
            </div>{" "}
            <h3 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-medium text-white"> {data.title}</h3>
          </div>
          <span>{isOpen ? "" : "+"}</span>
        </div>
        {isOpen && (
          <div className={`wpa-accordion-content ${isOpen ? "open" : ""}`}>
            <CouponsAndDeals showDis={isShowDis} butonLabel="false" />
          </div>
        )}
        {isOpenBlog && (
          <div className={`wpa-accordion-content ${isOpenBlog ? "open" : ""}`}>
            <Plugins showDis={isShowDis} butonLabel="false" />
          </div>
        )}
      </div>
    </>
  );
}
