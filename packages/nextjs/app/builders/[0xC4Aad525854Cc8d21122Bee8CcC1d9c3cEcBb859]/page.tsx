"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Address } from "~~/components/scaffold-eth";

const BuilderProfile: NextPage = () => {
  const address = "0xC4Aad525854Cc8d21122Bee8CcC1d9c3cEcBb859";
  // const shortenedAddress = address?.slice(0, 6) + "..." + address?.slice(-4);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex items-center flex-col flex-grow pt-2 px-4">
      <div className="max-w-2xl w-full bg-base-100 rounded-xl shadow-md overflow-hidden my-6">
        <div className="p-6 pt-8 relative">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-base-100 bg-base-100">
              {imageError ? (
                <div className="w-full h-full bg-base-300 flex items-center justify-center text-xl font-bold">
                  <span className="text-2xl">KS</span>
                </div>
              ) : (
                <Image
                  src="/krishna-profile.png"
                  alt="Krishna Singh"
                  fill
                  sizes="96px"
                  className="object-cover"
                  priority
                  onError={() => setImageError(true)}
                />
              )}
            </div>

            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-500 hover:to-blue-600 transition-all duration-300 ease-in-out inline-block transform hover:scale-105 cursor-default">
                Krishna Singh
              </h1>
              <div className="mb-3">
                <Address address={address} />
              </div>

              <p className="mb-3 text-sm">
                Passionate about web3 and blockchain technology. Currently building decentralized applications and
                exploring the Ethereum ecosystem.
              </p>

              <div className="flex gap-3">
                <Link
                  href="https://github.com/100x-Dev"
                  target="_blank"
                  className="btn btn-circle btn-sm transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-md bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:border-transparent hover:text-white"
                >
                  <FaGithub size={18} />
                </Link>
                <Link
                  href="https://twitter.com/100_xDEV"
                  target="_blank"
                  className="btn btn-circle btn-sm transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-md bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:border-transparent hover:text-white"
                >
                  <FaTwitter size={18} />
                </Link>
                <Link
                  href="https://linkedin.com/in/krishna-s-84062926b/"
                  target="_blank"
                  className="btn btn-circle btn-sm transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-md bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:border-transparent hover:text-white"
                >
                  <FaLinkedin size={18} />
                </Link>
              </div>
            </div>
          </div>

          <div className="divider my-6"></div>

          <div>
            <h2 className="text-lg font-bold mb-3">About Me</h2>
            <p className="mt-4 text-lg">
              I&apos;m an aspiring Web3 developer with a background in Electronics Engineering. I&apos;m passionate
              about web3 and blockchain technology. Currently building decentralized applications and exploring the
              Ethereum ecosystem. When I&apos;m not coding, you&apos;ll find me binge-watching anime or exploring meme
              coins.
            </p>
          </div>

          <div className="mt-6">
            <Link href="/" className="btn btn-primary btn-sm">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderProfile;
