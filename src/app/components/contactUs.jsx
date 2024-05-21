import React from "react";
import { IoIosCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Footer from "./layout/Footer";

const ContactUs = () => {
    return (
        <main>
            <div className=" bg-white rounded-[16px] h-full w-full  flex flex-col">
                <div className="flex justify-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4110.773369625027!2d106.80767740065505!3d-6.321951540765012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee739923e0b7%3A0x6d05bb01da97915a!2sJl.%20H.%20Tohir%20II%2C%20RT.3%2FRW.4%2C%20Jagakarsa%2C%20Kec.%20Jagakarsa%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012620!5e0!3m2!1sid!2sid!4v1714634682673!5m2!1sid!2sid"
                        width="506"
                        height="600"
                        className="rounded-2xl shadow-2xl
                    "
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className=" p-5">
                    <div className="py-5">
                        <h1 className="text-4xl font-semibold">get in touch</h1>
                        <p className="pt-3">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Laudantium similique ad explicabo obcaecati
                            natus reiciendis esse asperiores error
                            exercitationem non.
                        </p>
                    </div>
                    <hr />
                    <div className=" space-y-5 pt-5">
                        <div className="flex space-x-5  ">
                            <IoIosCall
                                style={{
                                    width: 50,
                                    height: 50,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 5,
                                    color: "white",
                                }}
                                className="bg-orange-500 text-center rounded-full"
                            />
                            <div className="flex flex-col justify-center">
                                <h1 className="text-lg font-bold">
                                    Phone Number
                                </h1>
                                <p className="text-slate-500">
                                    +62 821-1327-2557
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-5  ">
                            <IoLocationOutline
                                style={{
                                    width: 50,
                                    height: 50,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 5,
                                    color: "white",
                                }}
                                className="bg-orange-500 text-center rounded-full"
                            />
                            <div className="flex flex-col justify-center">
                                <h1 className="text-lg font-bold">Address</h1>
                                <p className="text-slate-500">
                                    Jakarta Selatan 12620, Indonesia
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-5  ">
                            <MdOutlineEmail
                                style={{
                                    width: 50,
                                    height: 50,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 5,
                                    color: "white",
                                }}
                                className="bg-orange-500 text-center rounded-full"
                            />
                            <div className="flex flex-col justify-center">
                                <h1 className="text-lg font-bold">E-Mail</h1>
                                <p className="text-slate-500">
                                    ciptakiranakarya@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-5  ">
                            <FaInstagram
                                style={{
                                    width: 50,
                                    height: 50,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 5,
                                    color: "white",
                                }}
                                className="bg-orange-500 text-center rounded-full"
                            />
                            <div className="flex flex-col justify-center">
                                <h1 className="text-lg font-bold">Instagram</h1>
                                <p className="text-slate-500">
                                    ciptakiranakarya
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-5  ">
                            <FaFacebookF
                                style={{
                                    width: 50,
                                    height: 50,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 5,
                                    color: "white",
                                }}
                                className="bg-orange-500 text-center rounded-full"
                            />
                            <div className="flex flex-col justify-center">
                                <h1 className="text-lg font-bold">Instagram</h1>
                                <p className="text-slate-500">
                                    ciptakiranakarya
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactUs;
