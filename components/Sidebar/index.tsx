import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import Discover from "../Discover";
import SuggestedAccounts from "../SuggestedAccounts";
import Footer from "../Footer";

function Sidebar() {
  const [showSidebar, setshowSidebar] = useState(true);

  const userProfile = false;

  const normalLink =
    "flex items-center gap-3 cursor-pointer p-3 justify-center xl:justify-start hover:bg-primary font-semibold text-[#F51997] rounded";
  return (
    <div>
      <div
        className="block xl:hidden m-2 ml-4 mt-3 text-xl"
        onClick={() => setshowSidebar((showSidebar) => !showSidebar)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2xl">
                  <AiFillHome />
                </p>
                <span className="text-xl hidden xl:block">For You</span>
              </div>
            </Link>
          </div>
          {!userProfile && (
            <div className="px-2 py-4 hidden xl:block">
              <p className="text-gray-400 px-2 py-4 hidden xl:block">
                Log in to like and comment on videos
              </p>
              <div className="pr-4">
                <button
                  className="bg-white text-lg text-[#F51997] border-[1px] border-[#F51997] rounded-md px-6 py-3 w-full mt-3 font-semibold outline-none hover:bg-[#F51997] hover:text-white transition-all duration-300"
                  onClick={() => signIn()}
                  disabled={false}
                >
                  Log In
                </button>
              </div>
            </div>
          )}
          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
