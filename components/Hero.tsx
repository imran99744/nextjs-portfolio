import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgoundCircles from "./BackgoundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name is IMRAN",
      "Full Stack MERN Developer",
      "DevOps and Cloud enthusiast",
    ],
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgoundCircles />
      <img
        src="https://lh3.googleusercontent.com/ydJdelRaFrzBN5iBncc4g2BRYWhr80hGf64ug8JFLvQJuGpfSNwnNJkjnWwzTKRRARBlgkZJBWrjqQhprbkVylzyukwNpQ1cShXNgd_BJ5-tErCizXWXuB1vG6bGnJYV9npbI6Sfj-1BLyCFv-vvLvknQbn_jNF870mfdt5zMMBijGmmUGGsOExg-MvV5keIzA-8un7eB-2LV34nzK42_QoTWwafJnchkdlFbh6I2vR1b-a10QcdcGduCiy09QrJgFra1GyxsygNH-Myv7xPggUH3emcgYQthXmMWbO12EIRpXYenikDsKFjlxeV0ZG8hplqMIAmQWFf1XjKQxv3N4s7Nl4Jnqf23URt9NnVPwAm1pd5Bo18W-TWnPXpobOFq_csNZaSlEbyLzK5LJJRKlWJO6az0AYbZ_g8lsbt9PH7rBDue-jxvq7lD1K5vy-UZImZ6TuViqNxSQvcgnx2p-1hWMETMp3OH5Lg1mYHeL6JdpsNholFRYBcPfCTpEygGS6JjBG8AYS6gPMVe4WNiX1Hypwo4l2rwj29In37OftsCVguoIDhuih0a6WFLB_Ziquyw61TlAhkqwkxhTTihmKl4cIr3bBGJr6gzkrl8MCUwPQSTkdNo1lYuF6_IKcQXHE44Z6TGNZh17XQQwAbZKWYzOVYRI1je_ErwoEqUlnWOwTHDxsIZMgT0ajcI0YZUkl31NkkpVEbgcS6S17xCaFkU5XfKABpb1jpxRfqwVBMmC-P-Ym1XjPLnYs-N6x4BUVzHkyjMFnwZcBpoAriGRYhAd_a2C4oImxE75vGAmaNLR0qOljp1vwrHrRjdcytWCk0B2jZAJQFKtzIz-SkvFtezB1lM7XmuY8hTTXW-J6oShJBQZBW6G0DRb_UPfnwO9RbouiW3oAWlfmiU0u1akzCsQpA4w1LmYxa3b8gTg=s768-no?authuser=0"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        alt=""
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5 cursor-pointer">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
