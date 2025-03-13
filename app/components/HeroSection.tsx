"use client"

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
    return(
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span>
                            Hello, I&apos;m {" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Javier',
                                1000,
                                'a software engineer',
                                1000,
                                'a powerlifter',
                                1000,
                                'a One Piece tcg player',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-base sm:text-lg mb-6 lg:text-xl">
                            Feel free to browse my personal page and reach out if you want to connect!
                    </p>
                    <div>
                        <Link
                            href="/#contact"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-rose-300 to-lime-50 hover:bg-[#BFD7B5]"
                        >
                            Hire Me
                        </Link>
                        <Link
                            href="https://drive.google.com/uc?export=download&id=19gu_w3kPJCgDyEguM6YShSXWFlAl4FFw"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-sky-500 to-pink-500 hover:bg-[#BFD7B5] mt-3"
                        >
                            <span className="block bg-[#92AFD7] hover:bg-[#BFD7B5] rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#F7A9A8] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
                        <Image
                            src="/Javier.png"
                            alt="Portrait of Javier"
                            width={300}
                            height={300}
                            className="absolute transform -translate-x-1/2 left-1/2"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;