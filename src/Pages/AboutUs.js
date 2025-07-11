"use client";

import React from "react";
import { FileText } from "lucide-react";
import AboutDoctorImage from "../assets/about-doctor.jpg"; // update your image import!
import ScopeImage from "../assets/scope-problem.jpg";
import SolutionImage from "../assets/solution-proposed.jpg";
import HeroImage from "../assets/why-Medversant-img.jpg";

export default function AboutMedversant() {
    return (
        <div className="bg-white px-4 md:px-10 py-8 md:py-12 max-w-8xl mx-auto">
            <section className="bg-white max-w-8xl mx-auto px-8">
                {/* Breadcrumb */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* LEFT: Headline & Full Content */}
                    <div>
                        <div className="text-sm text-gray-500 mb-4">
                            [About <span className="text-yellow-600"> Medversant </span>]
                        </div>
                        <h1 className="text-3xl md:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Medversant Technologies, LLC
                        </h1>
                        <div className="text-gray-600 space-y-4 max-w-x2l">
                            <p>
                                At Medversant Technologies, we are dedicated to revolutionizing the healthcare credentialing process.
                                Since 2000, we have been at the forefront of providing web-based credentialing solutions and medical staff
                                management technology. Our mission is to streamline and centralize credential verification, significantly
                                reducing costs and improving operational efficiency for healthcare organizations (HCOs).
                            </p>
                            <p>
                                Our innovative platform, OneSource, powered by our patented Autoverifi™ technology, is designed to
                                automate and simplify credential verification, ensuring real-time, accurate data. We support healthcare
                                providers across the U.S., with over 7.2 million providers already in our database. With our solution,
                                HCOs can access, verify, and manage credentials seamlessly, promoting patient safety, reducing errors,
                                and enhancing compliance with federal and state regulations.
                            </p>
                            <p>
                                We understand the challenges faced by healthcare organizations in managing credentialing processes
                                manually, which is why we are committed to offering a solution that saves time, reduces administrative
                                costs, and ensures the highest quality of data integrity. As we look to the future, Medversant continues
                                to leverage its leadership in credentialing technology to bring greater efficiency and transparency to
                                the healthcare industry.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: Image */}
                    <div className="relative">
                        <img
                            src={AboutDoctorImage}
                            alt="Doctor team working"
                            className="w-full h-[500px] rounded-xl shadow-md object-cover"
                        />
                        {/* Optional decorative circle badge */}
                        {/* <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-full w-16 h-16 flex items-center justify-center shadow">
                            <FileText className="text-blue-600" size={28} />
                        </div> */}
                    </div>
                </div>


                {/* MISSION PARAGRAPH */}
                <div className="mt-12 text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center text-gray-900">
                        Introduction
                    </h1>
                    <div className="w-40 border-2 border-t-blue-400 mx-auto"></div>
                    <p className="text-lg text-gray-700 leading-relaxed pt-4">
                        Medversant Technologies proposes the establishment of a credentials clearinghouse aimed
                        at centralizing credentials verification for healthcare organizations (HCOs).
                        This initiative aims to reclaim significant financial resources for HCOs during
                        a crucial period. Simultaneously, centralization will enhance electronic medical records,
                        reduce costly data errors, and bolster patient safety.
                    </p>
                </div>

                {/* STATS */}
                <div className="max-w-7xl md:ml-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-12 py-12 bg-gray-500 rounded-2xl">
                    <div>
                        <p className="text-3xl font-bold text-gray-900">20+</p>
                        <p className="text-white text-sm">Years in Operation</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-gray-900">5M+</p>
                        <p className="text-white text-sm">Providers Verified</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-gray-900">50+</p>
                        <p className="text-white text-sm">Healthcare Partners</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-gray-900">24/7</p>
                        <p className="text-white text-sm">Credentialing Access</p>
                    </div>
                </div>

            </section>
            <div className="mt-12 text-center max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 pb-2 text-center text-gray-900">
                    Background
                </h1>
                <div className="w-40 border-2 border-t-blue-400 mx-auto"></div>
                <div>
                    <p className="text-lg max-w-5xl leading-relaxed text-gray-700 pt-4">
                        Credentials verification is a critical process mandated by federal and state laws and various accreditation bodies such as NCQA, URAC, the Joint Commission, and CMS. Healthcare providers must undergo initial verification upon enrollment and subsequent reviews every two to three years. Recent requirements also necessitate continuous monitoring and practice evaluation. Verification involves validating practitioner credentials against primary sources like State License Boards, NPDB, OIG, and DEA, alongside collecting insurance certificates, peer references, and affiliations.
                    </p>
                    <p className="text-lg max-w-5xl leading-relaxed text-gray-700 pt-4">
                        The majority of healthcare organizations perform these tasks manually, resulting in time-consuming and expensive processes. Credentialing costs can average $500 per event, with verification activities comprising a substantial portion of these expenses. As credentialing requirements have expanded, specialized staff now handle these tasks, increasing operational costs.
                    </p>
                </div>

            </div>
            {/* Visual Story Section */}
            <section className="relative text-white p-8 md:p-16">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    {/* Left: Text + Image */}
                    <div className="space-y-8">
                        <h3 className="text-3xl md:text-4xl text-black font-bold">
                            Scope of the Problem
                        </h3>
                        <p className="text-gray-500">
                            Every healthcare provider within a network or practicing at affiliated organizations like hospitals, surgery centers, nursing homes, and home health agencies must undergo credentialing. Credentialing involves acquiring, verifying, and maintaining comprehensive background and quality information for physicians and other healthcare practitioners. Applications often span 15 to 60 pages, placing a significant burden on practitioners. According to the Medical Group Management Association, each physician submits an average of 18 credentialing applications annually, with additional applications for non-physician providers.
                        </p>
                        <div className="relative w-full overflow-hidden rounded-lg">
                            <img
                                src={SolutionImage}
                                alt="Scope of Problem"
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Right: Image + Text */}
                    <div className="space-y-8">
                        <div className="relative w-full overflow-hidden rounded-lg">
                            <img
                                src={ScopeImage}
                                alt="Solution Proposed"
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <h3 className="text-3xl md:text-4xl text-black font-bold">
                            Solution Proposed
                        </h3>
                        <p className="text-gray-500">
                            Medversant proposes the creation of a centralized credentials clearinghouse to streamline and automate credentials verification processes. This clearinghouse will host continuously verified data accessible 24/7 to all HCOs. Providers can download verified profiles or integrate data directly into their systems, significantly reducing manual labor and costs associated with verification. By automating and centralizing these processes, errors are minimized, and patient safety is enhanced through real-time practitioner monitoring.
                        </p>
                    </div>
                </div>
            </section>

            <div className=" text-center max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center text-gray-900">
                    Clearinghouse Mechanics
                </h1>
                <div className="w-40 border-2 border-t-blue-400 mx-auto"></div>
                <div>
                    <p className="text-lg max-w-5xl leading-relaxed text-gray-700 pt-4">
                        The clearinghouse will utilize Medversant's OneSource platform powered by Autoverifi™ technology (U.S. Patent 7,529,682). This web-based service allows HCOs to access comprehensive credentialing information, manage medical staff, and integrate verified profiles seamlessly. Medversant will provide data acquisition, verification, IT services, and ongoing customer support to ensure efficient clearinghouse operations.
                    </p>
                </div>

            </div>
            {/* Clearinghouse Cards Section */}
            <section className="p-8 md:p-16 mt-4">
                <div className="pb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <div className="bg-green-900 text-white rounded-xl p-6 flex flex-col justify-between shadow-lg">
                        <div>
                            <div className="mb-4">
                                <span className="bg-green-700 px-3 py-1 text-xs rounded-full">
                                    Platform Feature
                                </span>
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Clearinghouse Mechanics</h3>
                            <p className="text-gray-100 text-lg mb-6">
                                The clearinghouse will utilize Medversant's OneSource platform powered by Autoverifi™ technology (U.S. Patent 7,529,682). This web-based service allows HCOs to access comprehensive credentialing information, manage medical staff, and integrate verified profiles seamlessly. Medversant will provide data acquisition, verification, IT services, and ongoing customer support to ensure efficient clearinghouse operations.
                            </p>
                        </div>
                        <p className="text-xs text-gray-300 mt-4">
                            Secure, patented, and reliable.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-blue-900 text-white rounded-xl p-6 flex flex-col justify-between shadow-lg">
                        <div>
                            <div className="mb-4">
                                <span className="bg-blue-700 px-3 py-1 text-xs rounded-full">
                                    Key Benefit
                                </span>
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Benefits of Clearinghouse</h3>
                            <p className="text-gray-100 text-lg mb-6">
                                Implementing the clearinghouse is expected to generate significant cost savings for HCOs, reducing administrative spending in healthcare. Improved patient safety and operational efficiencies are anticipated, potentially leading to insurance premium discounts and enhanced revenue opportunities. A shift to paperless credential files will facilitate instant data access and support electronic medical record systems.
                            </p>
                        </div>
                        <p className="text-xs text-gray-300 mt-4">
                            Cost saving & patient safety focused.
                        </p>
                    </div>
                </div>
                {/* Card 1 */}
                <div className="bg-[#4b2c20] text-center max-w-4xl mx-auto text-white rounded-xl p-6 flex flex-col justify-between shadow-lg">
                    <div>
                        <div className="mb-4 text-left">
                            <span className="bg-[#7a4a34] px-3 py-1 text-xs rounded-full">
                                Platform Feature
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold mb-4">
                            Medversant Clearinghouse - A Powerful Force for Change
                        </h3>
                        <p className="text-gray-200 text-lg mb-6">
                            The clearinghouse will utilize Medversant's OneSource platform powered by Autoverifi™ technology (U.S. Patent 7,529,682). This web-based service allows HCOs to access comprehensive credentialing information, manage medical staff, and integrate verified profiles seamlessly. Medversant will provide data acquisition, verification, IT services, and ongoing customer support to ensure efficient clearinghouse operations.
                        </p>
                    </div>
                    <p className="text-xs text-left text-gray-300 mt-4">
                        Secure, patented, and reliable.
                    </p>
                </div>

            </section >


            <section className="bg-white max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
                    {/* LEFT : Image */}
                    <div className="">
                        <img
                            src={HeroImage}
                            alt="Doctor and Medversant"
                            className="object-cover w-full h-[400px] rounded-lg"
                            priority
                        />
                    </div>
                    {/* RIGHT : content */}
                    <div className="relative text-center">
                        <h3
                            className="text-4xl md:text-5xl font-bold  mb-2"
                        >
                            Why Medversant?
                        </h3>
                        <p className="text-lg max-w-5xl leading-relaxed text-gray-700 pt-4">
                            With two decades of experience, Medversant is a leader in web-based
                            credentials verification and medical staff management technologies.
                            The company currently serves millions of providers across the U.S.,
                            ensuring extensive coverage and operational excellence.
                        </p>
                    </div>
                </div>
            </section>
            <div className="mt-12 text-center max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 py-2 text-center text-gray-900">
                    Trends Pointing to the Need for Change
                </h1>
                <div className="w-60 border-2 border-t-blue-400 mx-auto"></div>
                <div>
                    <p className="text-lg max-w-5xl leading-relaxed text-gray-700 pt-4">
                        With two decades of experience, Medversant is a leader in web-based
                        credentials verification and medical staff management technologies.
                        The company currently serves millions of providers across the U.S.,
                        ensuring extensive coverage and operational excellence.
                    </p>
                </div>

            </div>

        </div >
    );
}
