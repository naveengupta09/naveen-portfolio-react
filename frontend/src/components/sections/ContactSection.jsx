import React, { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactMethods = [
    {
      icon: Mail,
      text: "naveengupta@example.com",
    },
    {
      icon: MapPin,
      text: "Dehradun, India",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    // Reset after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="animate-in fade-in slide-in-from-bottom duration-700"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Let's work together!</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always interested in new opportunities and exciting projects.
              Feel free to reach out!
            </p>

            <div className="space-y-4 pt-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">{method.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-12 rounded-xl peer px-4"
                placeholder="Your Name"
              />
              <label
                htmlFor="name"
                className="absolute left-4 -top-2.5 bg-background px-1 text-sm text-muted-foreground transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-muted-foreground peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
              >
                Your Name
              </label>
            </div>

            {/* Email Input */}
            <div className="relative">
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                // className="peer w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder-transparent"
                className="h-12 rounded-xl peer px-4"
                placeholder="Your Email"
              />
              <label
                htmlFor="email"
                className="absolute left-4 -top-2.5 bg-background px-1 text-sm text-muted-foreground transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-muted-foreground peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
              >
                Your Email
              </label>
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="peer p-4 rounded-xl"
                placeholder="Your Message"
              />
              <label
                htmlFor="message"
                className="absolute left-4 -top-2.5 bg-background px-1 text-sm text-muted-foreground transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-muted-foreground peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary"
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              className="w-full h-12 rounded-full"
            >
              <span>Send Message</span>
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;