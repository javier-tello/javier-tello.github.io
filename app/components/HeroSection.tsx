"use client"

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return(
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span>
                            Hello, I&apos;m {" "}
                        </span>
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
                        dfkajdf;kaljfdkl;ajfal;kdfja;lkjfaldjfa
                    </p>
                    <div>
                        <button className="px-6 py-3 rounded-full sm:w-fit mr-4 bg-[#84B082] hover:bg-[#BFD7B5]">Hire Me</button>
                        <button className="px-6 py-3 rounded-full sm:w-fit mr-4 bg-[#84B082] hover:bg-[#BFD7B5] border border-[#3A506B]">Download Resume</button>
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