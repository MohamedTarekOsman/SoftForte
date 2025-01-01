/* eslint-disable react/no-unescaped-entities */
import * as emailjs from "emailjs-com";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    description: "",
    serviceType: "",
    preferredTechnology: "",
    priceRange: "",
    resultPeriod: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = ["Web", "Mobile", "Desktop App"];
  const technologyOptions = {
    Web: ["React.js", "Vue.js", "Angular", "Next.js","I don't know"],
    Mobile: ["React Native", "Flutter", "Swift", "Kotlin","I don't know"],
    "Desktop App": ["Electron","JavaFX","I don't know"],
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    if (id === "serviceType") {
      setFormData((prev) => ({ ...prev, preferredTechnology: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.phone) newErrors.phone = "Phone is required.";
    if (!formData.description) newErrors.description = "Description is required.";
    if (!formData.serviceType) newErrors.serviceType = "Service type is required.";
    if (!formData.preferredTechnology)
      newErrors.preferredTechnology = "Preferred technology is required.";
    if (!formData.priceRange) newErrors.priceRange = "Price range is required.";
    if (!formData.resultPeriod)
      newErrors.resultPeriod = "Result period is required.";
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      const templateParams = {
        name: formData.name,
        phone: formData.phone,
        description: formData.description,
        serviceType: formData.serviceType,
        preferredTechnology: formData.preferredTechnology,
        priceRange: formData.priceRange,
        resultPeriod: formData.resultPeriod,
      };

      emailjs
        .send(
          "service_va2nko4", // Replace with your EmailJS Service ID
          "template_wm9s8bc", // Replace with your EmailJS Template ID
          templateParams,
          "MbDblTO-jQld3Z5tl" // Replace with your EmailJS Public Key
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Your message has been sent successfully!");
            setFormData({
              name: "",
              phone: "",
              description: "",
              serviceType: "",
              preferredTechnology: "",
              priceRange: "",
              resultPeriod: "",
            });
            setErrors({});
          },
          (err) => {
            console.error("FAILED...", err);
            alert("Failed to send your message. Please try again later.");
          }
        )
        .finally(() => setIsSubmitting(false));
    }
  };

  return (
    <div className="min-h-screen p-4 flex items-center bg-gray-50">
      <div className="flex flex-col items-center md:flex-row gap-10 max-w-screen-xl mx-auto ">
        {/* Contact Information Section */}
        <div className="w-full md:w-1/3 text-left md:text-left">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            We're here to help and answer any questions you might have. Feel
            free to reach out to us via phone or email, and we'll get back to
            you as soon as possible!
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800">Phone:</h3>
            <a
              href="https://wa.me/2011988379"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline text-lg"
            >
              (+20) 11988379
            </a>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800">Email:</h3>
            <a
              href="mailto:SoftForte@gmail.com"
              className="text-blue-700 hover:underline text-lg"
            >
              SoftForte@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Business Hours:</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Available 24/7 for your convenience. Reach out anytime!
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full bg-purple-100 p-5 rounded-lg">
          <h2 className="text-3xl font-bold text-purple-900 mb-4 text-center">
            Get In Touch
          </h2>
          <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <div className="col-span-2 md:col-span-1">
              <label className="block text-lg text-purple-800" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-2 text-lg border ${
                  errors.name ? "border-red-500" : "border-purple-300"
                } rounded`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="block text-lg text-purple-800" htmlFor="phone">
                Phone:
              </label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-2 text-lg border ${
                  errors.phone ? "border-red-500" : "border-purple-300"
                } rounded`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            <div className="col-span-2">
              <label
                className="block text-lg text-purple-800"
                htmlFor="description"
              >
                Description:
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className={`w-full p-2 text-lg border ${
                  errors.description ? "border-red-500" : "border-purple-300"
                } rounded resize-none`}
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description}</p>
              )}
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                className="block text-lg text-purple-800"
                htmlFor="serviceType"
              >
                Service Type:
              </label>
              <select
                id="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className={`w-full p-2 text-lg border ${
                  errors.serviceType ? "border-red-500" : "border-purple-300"
                } rounded`}
              >
                <option value="">Select a service</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.serviceType && (
                <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
              )}
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                className="block text-lg text-purple-800"
                htmlFor="preferredTechnology"
              >
                Preferred Technology:
              </label>
              <select
                id="preferredTechnology"
                value={formData.preferredTechnology}
                onChange={handleChange}
                className={`w-full p-2 text-lg border ${
                  errors.preferredTechnology ? "border-red-500" : "border-purple-300"
                } rounded`}
                disabled={!formData.serviceType} // Disable if no service type selected
              >
                <option value="">Select a technology</option>
                {formData.serviceType &&
                  technologyOptions[formData.serviceType]?.map((tech) => (
                    <option key={tech} value={tech}>
                      {tech}
                    </option>
                  ))}
              </select>
              {errors.preferredTechnology && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.preferredTechnology}
                </p>
              )}
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="block text-lg text-purple-800" htmlFor="priceRange">
                Price Range in $:
              </label>
              <input
                type="text"
                id="priceRange"
                value={formData.priceRange}
                onChange={handleChange}
                className={`w-full p-2 text-lg border ${
                  errors.priceRange ? "border-red-500" : "border-purple-300"
                } rounded`}
              />
              {errors.priceRange && (
                <p className="text-red-500 text-sm mt-1">{errors.priceRange}</p>
              )}
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                className="block text-lg text-purple-800"
                htmlFor="resultPeriod"
              >
                Period to Get Final Results in days:
              </label>
              <input
                type="text"
                id="resultPeriod"
                value={formData.resultPeriod}
                onChange={handleChange}
                className={`w-full p-2 text-lg border ${
                  errors.resultPeriod ? "border-red-500" : "border-purple-300"
                } rounded`}
              />
              {errors.resultPeriod && (
                <p className="text-red-500 text-sm mt-1">{errors.resultPeriod}</p>
              )}
            </div>
            <button
              type="submit"
              className="col-span-2 bg-purple-800 text-white text-lg p-3 rounded hover:bg-purple-700"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
        {/* <div className="w-full md:w-2/3 bg-purple-100 p-5 rounded-lg">
          <h2 className="text-3xl font-bold text-purple-900 mb-4 text-center">
            Get In Touch
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg text-purple-800" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-2 text-lg border ${
                  errors.name ? "border-red-500" : "border-purple-300"
                } rounded`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-lg text-purple-800" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 text-lg border ${
                  errors.email ? "border-red-500" : "border-purple-300"
                } rounded`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-lg text-purple-800" htmlFor="phone">
                Phone (optional):
              </label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 text-lg border border-purple-300 rounded"
              />
            </div>
            <div>
              <label
                className="block text-lg text-purple-800"
                htmlFor="message"
              >
                Message:
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full p-2 text-lg border ${
                  errors.message ? "border-red-500" : "border-purple-300"
                } rounded resize-none`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-purple-800 text-white text-lg p-3 rounded hover:bg-purple-700"
            >
              Send
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default ContactUs;
