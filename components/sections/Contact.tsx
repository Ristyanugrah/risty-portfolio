
"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_po56j47",
        "template_k28tx5a",
        form.current,
        "qp0jqCkRebuHrTG2I"
      )
      .then(() => {
        alert("🎉 Message sent successfully!");
        form.current?.reset();
      })
      .catch(() => {
        alert("❌ Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900">
            Contact Me
          </h2>

          <p className="mt-4 text-gray-600">
            Let's build something amazing together.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">

          {/* Contact Info */}
          <div className="rounded-3xl border border-pink-200 bg-pink-50 p-8 shadow-lg">

            <h3 className="mb-8 text-2xl font-bold text-pink-500">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div>
                <p className="font-semibold text-pink-500">
                  📧 Email
                </p>
                <p className="text-gray-700">
                  ristyanugrah24@gmail.com
                </p>
              </div>

              <div>
                <p className="font-semibold text-pink-500">
                  💼 LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/risty-septiana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-pink-500"
                >
                  linkedin.com/in/risty-septiana
                </a>
              </div>

              <div>
                <p className="font-semibold text-pink-500">
                  💻 GitHub
                </p>

                <a
                  href="https://github.com/ristyanugrah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-pink-500"
                >
                  github.com/ristyanugrah
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="rounded-3xl border border-pink-200 bg-white p-8 shadow-lg"
          >

            <h3 className="mb-8 text-2xl font-bold text-pink-500">
              Send Message
            </h3>

            <div className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl border border-pink-200 p-4 outline-none transition focus:border-pink-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl border border-pink-200 p-4 outline-none transition focus:border-pink-500"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full rounded-xl border border-pink-200 p-4 outline-none transition focus:border-pink-500"
              />

              <textarea
                rows={6}
                name="message"
                placeholder="Write your message..."
                required
                className="w-full rounded-xl border border-pink-200 p-4 outline-none transition focus:border-pink-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-pink-500 py-4 font-semibold text-white transition hover:bg-pink-600 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
