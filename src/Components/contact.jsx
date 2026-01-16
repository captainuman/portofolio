import emailjs from "emailjs-com"
const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_gsyx302",
      "template_c4dcov8",
      e.target,
      "L6U8vH9u9qaF2v9A3"
    )
    .then(() => {
      alert("Email sent")
    })
    .catch(() => {
      alert("Failed to send")
    })
  }

  return (
    <section id="contact" className="min-h-screen bg-[#0b1620] text-white px-6 py-14">
      <h1 className="text-4xl font-bold text-center">Get In Touch</h1>
      <p className="text-center text-gray-400 mt-3">
        Have a project, idea, or just want to talk tech? Don’t be shy.
      </p>

      <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div>
          <h2 className="text-2xl font-semibold text-orange-500">Contact Information</h2>
          <p className="text-gray-300 mt-4 max-w-md">
            I’m open to frontend roles, freelance projects, and collaborations.
            If you have something interesting, let’s talk.
          </p>

          <div className="mt-8 space-y-4 text-gray-300">
            <p><span className="text-white font-semibold">Email:</span> mdnuman2611@gmail.com</p>
            <p><span className="text-white font-semibold">Phone:</span> +91 9964797016</p>
            <p><span className="text-white font-semibold">Location:</span> Tiptur, India</p>
          </div>

          <div className="flex gap-4 mt-8">
            <a href="https://github.com/captainuman" target="_blank" rel="noopener noreferrer"
              className="border-2 border-orange-600 rounded font-semibold px-5 py-2">
              GitHub</a>
            <a href="https://www.linkedin.com/in/numan2211" target='_blank' rel='noopener noreferrer ' className="border-2 border-orange-600 rounded font-semibold px-5 py-2">LinkedIn</a>
            <a href="https://wa.me/919964797016" target="_blank" rel="noopener noreferrer" className="border-2 border-orange-600 rounded font-semibold px-5 py-2">WhatsApp</a>
          </div>
        </div>

        <form className="bg-[#121f2b] p-8 rounded-2xl shadow-lg space-y-6"
        onSubmit={sendEmail}>
          <div>
            <label className="block mb-1 text-sm">Name</label>
            <input
              type="text"
              name="name"
              className="w-full bg-[#0b1620] border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
              placeholder="Your name"/>
          </div>

          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              name="email"
              className="w-full bg-[#0b1620] border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
              placeholder="you@example.com"/>
          </div>

          <div>
            <label className="block mb-1 text-sm">Message</label>
            <textarea
              rows="5"
              name="message"
              className="w-full bg-[#0b1620] border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-orange-500"
              placeholder="Tell me about your project..."/>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 py-2 rounded font-bold hover:bg-orange-600 transition">
            Send Message </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
