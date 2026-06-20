import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { SectionWrapper, NeonGlow, GradientText, FormField } from "../src/components";
import { SOCIAL_LINKS } from "../src/constants";

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [result, setResult] = useState("");

  const onSubmit = async (data) => {
    setResult("Sending ⌛");

    const formData = new FormData();
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("mobile", data.mobile);
    formData.append("message", data.message);
    try {
      const respones = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const resData = await respones.json();
      if (resData.success) {
        setResult("Message Send Successfully 🔥");
        reset();
      } else {
        setResult("Something Went Error 🛑");
      }
    } catch (error) {
      setResult("Error Sending Message", error);
    }
  };

  return (
    <SectionWrapper className="py-20 text-white">
      <NeonGlow className="top-[-10%] right-[-10%] w-96 h-96 bg-blue-900/20 blur-[120px]" />
      <NeonGlow className="bottom-[-10%] left-[-10%] w-96 h-96 bg-purple-900/20 blur-[120px]" />

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl z-10">
        {/* Left Side: Contact Information */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl wrap-anywhere font-extrabold mb-4">
              Let&apos;s build <GradientText variant="cyan-blue" className="drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">magic</GradientText> together! 🚀
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Have a project in mind or just want to chat about tech? Feel free to reach out. I&apos;m always open to new opportunities!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 bg-gray-900 border border-cyan-500/30 text-cyan-400 flex items-center justify-center rounded-2xl shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:shadow-cyan-500/50 transition-all">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email Me</p>
                <p className="text-gray-200 font-semibold wrap-anywhere text-lg">kalaiselvan.tech@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 bg-gray-900 border border-purple-500/30 text-purple-400 flex items-center justify-center rounded-2xl shadow-[0_0_15px_rgba(192,132,252,0.2)] group-hover:shadow-purple-500/50 transition-all">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Location</p>
                <p className="text-gray-200 font-semibold text-lg">Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          {/* Social Links Neon Badges */}
          <div className="pt-4 flex flex-wrap gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className={`p-3 rounded-xl border ${social.neon} bg-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_currentColor] flex items-center justify-center`}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm font-medium">
            &copy; Kalai Selvan.
            Built with <span className="text-cyan-500">React</span> & <span className="text-purple-500">Tailwind</span>.
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-[#111111] p-8 rounded-2xl border border-white/5 shadow-inner">
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <FormField
              label="Your Name"
              placeholder="Ex: John Doe"
              register={register("name", { required: "Name Is Required" })}
              error={errors.name}
            />
            <FormField
              label="Your Contact Number"
              placeholder="+91 9876543210"
              register={register("mobile", { required: "Mobile No Is Required" })}
              error={errors.mobile}
            />
            <FormField
              label="Your Email"
              type="email"
              placeholder="Ex: john@example.com"
              register={register("email", {
                required: "Email Is Required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
              })}
              error={errors.email}
            />
            <FormField
              label="Message"
              type="textarea"
              placeholder="What's on your mind?"
              rows={4}
              register={register("message", { required: "Please Enter A Message " })}
              error={errors.message}
            />

            <button
              className="w-full bg-linear-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 transform active:scale-95"
            >
              Send Message ✨
            </button>
            <p className="text-center text-sm text-cyan-500 font-medium mt-2">{result}</p>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
