import Image from "next/image";
import Link from "next/link";
import Logo from "@/utils/tiktik-logo.png";
import {
  CredentialResponse,
  GoogleLogin,
  googleLogout,
} from "@react-oauth/google";
import { createOrGetUser } from "@/utils";
import useAuthStore from "@/store/authStore";
import { useEffect, useState } from "react";
import { IUser } from "@/types";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";

function Navbar() {
  const [user, setUser] = useState<IUser | null>();
  const { addUser, removeUser, userProfile } = useAuthStore();

  useEffect(() => {
    setUser(userProfile);
  }, [userProfile]);

  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w=[130px]">
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="TikTik Logo"
            layout="responsive"
          />
        </div>
      </Link>

      <div>Search</div>

      <div>
        {user ? (
          <div className="flex gap-5 md:gap-10">
            <Link href="/upload">
              <button className="border-2 px-2 md:px-4 py-1 mt-1 text-md font-semibold flex items-center gap-2">
                <IoMdAdd className="text-xl" />{" "}
                <span className="hidden md:block">Upload </span>
              </button>
            </Link>
            {user.image && (
              <Link href={`/profile/${user._id}`}>
                <div>
                  <Image
                    className="rounded-full cursor-pointer"
                    src={user.image}
                    alt="user"
                    width={40}
                    height={40}
                  />
                </div>
              </Link>
            )}
            <button
              type="button"
              className=" border-2 p-2 rounded-full cursor-pointer outline-none shadow-md"
              onClick={() => {
                googleLogout();
                removeUser();
              }}
            >
              <AiOutlineLogout color="red" fontSize={21} />
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log("Login Failed")}
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
