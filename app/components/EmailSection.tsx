"use client"
import React, { useState } from 'react'
import GitHubIcon from "../../public/github-icon.svg"
import LinkedinIcon from "../../public/linkedin-icon.svg"
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = {
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
            message: (form.elements.namedItem('message') as HTMLInputElement).value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: "POST",
            // Tell the server we're sending JSON.
            headers: {
            "Content-Type": "application/json",
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
    };

        const response = await fetch(endpoint, options);

        if (response.status === 200) {
            console.log("Message sent.");
            setEmailSubmitted(true);
        }
    };
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id="contact">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-200 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div>
                <h5 className="text-xl font-bold my-2">
                    Let&apos;s Connect!
                </h5>
                <p className="mb-4 max-w-md">
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a quesetion or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/javier-tello">
                        <Image src={GitHubIcon} alt="GitHub Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/javier-luis-tello/">
                        <Image src={LinkedinIcon} alt="LinkedIn Icon" />
                    </Link>
                </div>
            </div>
            <div>
                {emailSubmitted ? (
                    <p className="text-lime-800 text-sm mt-2">
                        Email sent successfully!
                    </p>
                    ) : (
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="email"className="block text-sm mb-2  font-medium">Your email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required placeholder="example@myemail.com"
                                    className="bg-[#84B082] border border-[#33353F] placeholder-[#3A506B] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="subject"className="block text-sm mb-2 font-medium">Subject</label>
                                <input
                                type="text" id="subject"
                                required placeholder="Just saying hi"
                                className="bg-[#84B082] border border-[#33353F] placeholder-[#3A506B] text-gray-100 text-sm rounded-lg block w-full p-2.5" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm mb-2 font-medium">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="bg-[#84B082] border border-[#33353F] placeholder-[#3A506B] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Let's talk about..."
                                />
                            </div>
                            <button type="submit" className="bg-[#F7A9A8] hover:bg-[#f38382] text-[#3A506B] font-medium py-2.5 px-5 rounded-lg w-full">Send Messsage</button>
                        </form>
                )}
            </div>
        </section>
    )
}

export default EmailSection;
