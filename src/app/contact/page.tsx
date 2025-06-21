// app/contact-us/page.tsx (assuming you're using App Router)
"use client";
import TopNav from "@/components/TopNav";
import Link from "next/link";
import {useState} from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNo: "",
    emailId: "",
    service: "",
    projectDetails: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent("New Project Inquiry from Website");

    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
      `Mobile No: ${formData.mobileNo}\n` +
      `Email ID: ${formData.emailId}\n` +
      `Service: ${formData.service}\n\n` +
      `Project Details:\n${formData.projectDetails}`
    );

    // ✅ Gmail compose link
    const gmailLink = `https://mail.google.com/mail/?view=cm&to=hr@sarvagyasofttech.com&su=${subject}&body=${body}`;

    window.open(gmailLink, '_blank');
  };

  return (
    <div className="bg-white min-h-screen flex flex-col pt-20 pb-20 items-center">
      <TopNav current={'contact'}/>
      {/* Breadcrumb */}
      <div className="w-full px-18 py-4 text-sm text-gray-500 mb-15">
        <nav className="flex space-x-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:underline">Home</Link>
          <span>&gt;</span>
          <span className="text-red-500 font-medium">Contact Us</span>
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 lg:gap-7 xl:gap-10 w-full px-20 lg:px-15 xl:px-30">
        {/* Left Side - Contact Info */}
        <div className="flex-4 space-y-2 text-xs">
          <h1 className="text-xl font-bold mb-10 text-gray-500">CONTACT US</h1>

          {/* <div className="flex flex-col md:flex-row gap-5 items-top">
            <div className="flex-1 flex">
              <p className="font-bold text-red-500 text-sm mb-2">Mobile No.:</p>
              <p className="ml-2 text-gray-800 text-sm">+91 84214 91884</p>
            </div>
            <div className="flex-1 flex">
              <p className="font-bold text-red-500 text-sm mb-2">Mobile No.:</p>
              <p className="ml-2 text-gray-800 text-sm">+91 84214 91884</p>
            </div>
          </div> */}
          {/* Row 1: Address Left, Map Right */}
          <div className="flex flex-col md:flex-row gap-5 items-top">
            <div className="flex-1">
              <p className="font-bold text-red-500 text-xs mb-2">ADDRESS:</p>
              <p className="text-gray-800 text-xs">001-B, Prestige Apts, Yashwant Shrushtri, Boisar (West). 401 501.</p>
            </div>
            <div className="flex-1">
              <p className="font-bold text-red-500 text-xs mb-2">ADDRESS:</p>
              <p className="text-gray-800 text-xs">1805, Kamdhenu 23 West, TTC MIDC, Koparkhairane, Navi Mumbai. 400 705.</p>
            </div>
          </div>
          <div className="flex mb-5 items-baseline">
            <p className="font-bold text-red-500 text-xs">Mobile No.:</p>
            <p className="ml-2 text-gray-800 text-xs">+91 84214 91884</p>
          </div>

          {/* Row 2: Map Left, Address Right */}
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <div className="relative w-full h-[450px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.0895013628215!2d72.75621177612173!3d19.7938022290449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71fb5c08ece85%3A0x6780deebd1aa34cb!2sPrestige%20Apartment!5e0!3m2!1sen!2sin!4v1747924283478!5m2!1sen!2sin"
                width="100%"
                height="100%"
                // className="filter grayscale"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="relative w-full h-[450px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.2615690503044!2d73.0142830761109!3d19.096177651337083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1ee942ebe55%3A0x85fc7d76975975c2!2sKAMDHENU%2023%20WEST!5e0!3m2!1sen!2sin!4v1747924378965!5m2!1sen!2sin"
                width="100%"
                height="100%"
                // className="filter grayscale"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="flex-2 border border-gray-400 p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-2 text-sm text-gray-400">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-400 px-5 py-3 focus:outline-none text-sm text-gray-500"
                required
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-2 text-sm text-gray-400">Mobile No</label>
              <input
                type="text"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                className="w-full border border-gray-400 px-5 py-3 focus:outline-none text-sm text-gray-500"
                required
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-2 text-sm text-gray-400">Email Id</label>
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                className="w-full border border-gray-400 px-5 py-3 focus:outline-none text-sm text-gray-500"
                required
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-2 text-sm text-gray-400">Service</label>
              <input
                type="text"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-gray-400 px-5 py-3 focus:outline-none text-sm text-gray-500"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-2 text-sm text-gray-400">Project Details</label>
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                rows={5}
                className="w-full border border-gray-400 px-5 py-3 focus:outline-none text-sm text-gray-500"
              ></textarea>
            </div>

            {/* reCAPTCHA */}
            {/* <div className="flex items-center justify-between">
              <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
              <div className="text-right text-[10px] text-gray-500">
                <a href="#" className="underline">Privacy</a> - <a href="#" className="underline">Terms</a>
              </div>
            </div> */}

            <button type="submit" className="bg-black text-white px-6 py-3 mt-12 flex items-center hover:bg-gray-800 text-md font-bold active:scale-95 transition-transform duration-100 ease-in-out">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
