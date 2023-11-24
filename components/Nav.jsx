"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null);
  const [ toggleDropdown, setToggleDropdown ] = useState(false);

  useEffect(()=> {
      const setProviders = async () => {
        const response = await getProviders();

        setProviders(response);
      }

      setProviders();
  }, [])


  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            <Image src="/nextjs_13_assets/assets/images/logo.svg"
                    alt="Prompt book Logo"
                    width={30}
                    height={30}
                    className="object-contain"
            
            />
            <p className="logo_text">Prompt Book</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="sm:flex hidden">
            {isUserLoggedIn ? (
            <div className="flex gap-3 md:gap-5">
                <Link href="/create-prompt"
                      className="black_btn">
                Create Post
                </Link>
                <button className="outline_btn" type="button" onClick={signOut}>
                  Sign Out
                </button>
                <Link href="/profile">
                    <Image src="/nextjs_13_assets/assets/images/profile_pic.jpg"
                          width={37}
                          height={37}
                          className="rounded-full"
                          alt="profile" />

                </Link>
            </div>
            ) : 
            <>
              {providers && Object.values(providers).map((provider) => {
                
                  <buton
                      type="button"
                      key={provider.name}
                      onClick={()=> signIn(provider.id)}
                      className="black_btn"
                  >
                      Sign In
                  </buton>
                
              })}
            </>
            }
        </div>

        {/* Mobile Navigation */}

          <div className="sm:hidden flex relative">
              {isUserLoggedIn ? (
                <div className="flex">
                    <Image src="/nextjs_13_assets/assets/images/logo.svg"
                          width={37}
                          height={37}
                          className="rounded-full"
                          alt="profile"
                          onClick={()=> setToggleDropdown((prev) => !prev)} 
                          />

                          {toggleDropdown && (
                            <div className="dropdown">

                            </div>
                          )}
                          
                </div>
              ) : (
                 <>
              {providers && Object.values(providers).map((provider) => {
                
                  <buton
                      type="button"
                      key={provider.name}
                      onClick={()=> signIn(provider.id)}
                      className="black_btn"
                  >
                      Sign In
                  </buton>
                
              })}
            </>
              )}
          </div>
    </nav>
  )
}

export default Nav;