// app/contact-us/page.tsx (assuming you're using App Router)
"use client";
import TopNav from "@/components/TopNav";
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <TopNav current={'contact'}/>
      <div className="flex flex-col md:flex-row gap-15 w-full px-30">
        {/* Left Side - Contact Info */}
        <div className="flex-3 space-y-3 text-xs">
          <h1 className="text-xl font-bold mb-3 text-gray-500">CONTACT US</h1>

          <div className="flex items-center mt-10">
            <p className="font-bold text-red-500 text-sm">ADDRESS:</p>
            <p className="text-gray-800 pl-2 text-sm">1805, Kamdhenu 23 West, TTC MIDC, Turbhe, Navi Mumbai.</p>
          </div>

          <div className="flex items-center">
            <p className="font-bold text-red-500 text-sm">EMAIL US:</p>
            {/* <p className="text-gray-800 pl-2 text-sm">studiomatarchitects@gmail.com</p> */}
          </div>

          <div className="flex items-center">
            <p className="font-bold text-red-500 text-sm">FOR JOBS:</p>
            {/* <p className="text-gray-800 pl-2 text-sm">jobs@studiomatarchitects.com</p> */}
          </div>

          <div className="flex items-center">
            <p className="font-bold text-red-500 text-sm">PHONE:</p>
            <p className="text-gray-800 pl-2 text-sm"></p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 text-gray-600 text-base pt-2">
            <a href="#" className="fab fa-facebook"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-pinterest"></a>
            <a href="#" className="fab fa-linkedin"></a>
            <a href="#" className="fab fa-whatsapp"></a>
            <a href="#" className="fas fa-envelope"></a>
          </div>

          {/* Map Section */}
          {/* <div className="relative">
            <div className="absolute top-3 left-3 bg-white p-2 shadow-md text-[10px] border">
              <p className="font-bold text-gray-800">Studio MAT Architects</p>
              <p className="text-gray-600">301, 3rd floor, Jambil Gully, Gautam Nagar, Borivali, Maharashtra 400092</p>
              <p className="text-yellow-500">5.0 ★★★★★ 65 reviews</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11610039602!2d72.7410996959612!3d19.082197838366527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61b3fc212a1%3A0x445b8b24d0d66216!2sStudio%20MAT%20architects!5e0!3m2!1sen!2sin!4v1715159463694!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div> */}

          <div className="relative w-full h-[400px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.2616841277354!2d73.016858!3d19.0961726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1ee942ebe55%3A0x85fc7d76975975c2!2sKAMDHENU%2023%20WEST!5e0!3m2!1sen!2sin!4v1746774857337!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="filter grayscale"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>


            {/* <iframe
              src=""
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe> */}
          </div>
        </div>

        {/* Right Side - Form */}
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
            <div className="flex items-center justify-between">
              <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
              <div className="text-right text-[10px] text-gray-500">
                <a href="#" className="underline">Privacy</a> - <a href="#" className="underline">Terms</a>
              </div>
            </div>

            <button type="submit" className="bg-black text-white px-6 py-3 flex items-center gap-2 hover:bg-gray-800 text-md font-bold active:scale-95 transition-transform duration-100 ease-in-out">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
