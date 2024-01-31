import React from "react";
import NavComp from "./NavComp";

function SideSections() {
  return (
    <div className="h-full bg-[#1E2640] flex text-white w-auto">
      <div className="flex flex-col justify-between">
        <div className="my-4 mx-2">
          <div className=" flex items-center w-56 justify-between px-2">
            <img
              className="w-16 h-16 rounded-sm"
              src="https://s3-alpha-sig.figma.com/img/18ef/52d9/1494ed3109e53ab9db09579cd5d8839e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S0v5SG05Q-9j5fMa0mpTGRBY7Zi~9Bvbs-09u90Ozmw~4a6jcGTZwmGaxraOWdEJsamrMCUDbpcDetcBl6h3eFOOdh2pPL9CsJj44PtIsP14Jh4Mit6TTELJEDPQxMH-ygrpZkmJ2y7xItkVgwG8MOwBBDF0seztFIr9kPdCdsZeS-S-sbIxvSUZLlU667nC35pybLYy--RudPDLVQuI3vj8T8vK-UJLePyh9pstf4Q8zKmJdAoL2Zz~4kP4MIeGzzHgKU19q-fGoSle08mDB2W1wq1wpR3PBjg1Uqvl6GSbfiPJtuQR8XZy7c~QNby7k37~3sDqR0ia3MNdylYddw__"
            ></img>
            <div>
              <h1 className="text-lg">Nishyan</h1>
              <a className="text-sm cursor-pointer">Visit store</a>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z"
                fill="white"
              />
            </svg>
          </div>
          <NavComp />
        </div>
        <div className="bg-[#353C53] m-4 rounded-md flex px-3 py-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className=""
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.0002 3.79727C2.42343 3.79727 1.8002 4.35527 1.8002 5.24727V18.7473C1.8002 19.6393 2.42343 20.1973 3.0002 20.1973H21.0002C21.577 20.1973 22.2002 19.6393 22.2002 18.7473V15.8473H17.0003C14.874 15.8473 13.1503 14.1236 13.1503 11.9973C13.1503 9.87097 14.874 8.14727 17.0003 8.14727H22.2002V5.24727C22.2002 4.35527 21.577 3.79727 21.0002 3.79727H3.0002ZM23.8002 8.14727V5.24727C23.8002 3.65398 22.6326 2.19727 21.0002 2.19727H3.0002C1.36782 2.19727 0.200195 3.65398 0.200195 5.24727V18.7473C0.200195 20.3405 1.36782 21.7973 3.0002 21.7973H21.0002C22.6326 21.7973 23.8002 20.3405 23.8002 18.7473V15.8473H23.8503V8.14727H23.8002ZM16.0002 11.9473C16.0002 11.4778 16.3808 11.0973 16.8502 11.0973H18.1502C18.6197 11.0973 19.0002 11.4778 19.0002 11.9473C19.0002 12.4167 18.6197 12.7973 18.1502 12.7973H16.8502C16.3808 12.7973 16.0002 12.4167 16.0002 11.9473ZM14.8503 11.9973C14.8503 10.8099 15.8129 9.84727 17.0003 9.84727H22.1503V14.1473H17.0003C15.8129 14.1473 14.8503 13.1847 14.8503 11.9973Z"
              fill="white"
            />
          </svg>
          <div className="pl-3 p-2">
            <h1 className="text-sm font-light">Available Credits</h1>
            <h1>345.10</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideSections;
