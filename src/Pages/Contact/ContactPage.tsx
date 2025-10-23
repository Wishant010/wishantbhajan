import React, { useState } from "react";
import { motion } from "framer-motion";
import GlobalNavbar from "../../components/GlobalNavbar";
import Footer from "../../components/Footer";
import ParticleField from "../Homescreenpage/ParticleField";
import { useLanguage } from "../../contexts/LanguageContext";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      labelKey: "contact.email",
      value: "contact@wishantbhajan.nl",
      link: "mailto:contact@wishantbhajan.nl"
    },
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      labelKey: "contact.linkedin",
      value: "/in/wishantbhajan",
      link: "https://linkedin.com/in/wishantbhajan"
    },
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
      labelKey: "contact.github",
      value: "@wishantbhajan",
      link: "https://github.com/wishantbhajan"
    },
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      labelKey: "contactpage.info.location",
      valueKey: "contactpage.info.netherlands",
      link: null
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
      url: "https://github.com"
    },
    {
      name: "LinkedIn",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      url: "https://linkedin.com"
    },
    {
      name: "Twitter",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>,
      url: "https://twitter.com"
    },
    {
      name: "Discord",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
      url: "https://discord.com"
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <GlobalNavbar />
      <ParticleField isActive={true} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-950/20 via-slate-900 to-purple-950/20" />

          {/* Circuit Board Pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%2310b981' stroke-width='0.5' fill='none'%3E%3Cpath d='M50 50h50M50 50v50M50 50h-50M50 50v-50'/%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3Ccircle cx='100' cy='50' r='2'/%3E%3Ccircle cx='0' cy='50' r='2'/%3E%3Ccircle cx='50' cy='100' r='2'/%3E%3Ccircle cx='50' cy='0' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "100px 100px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {t('contactpage.hero.title')}
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-emerald-200/80 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('contactpage.hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-emerald-500/20 p-8">
                <h2 className="text-2xl font-bold text-emerald-300 mb-6">{t('contactpage.form.title')}</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label className="block text-emerald-300 mb-2">{t('contactpage.form.name.label')}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-emerald-500/20 rounded-lg text-emerald-100 focus:border-emerald-400 focus:outline-none transition-all duration-300"
                      placeholder={t('contactpage.form.name.placeholder')}
                    />
                    {focusedField === "name" && (
                      <motion.div
                        className="absolute inset-0 rounded-lg pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                          background: "radial-gradient(circle at center, rgba(16, 185, 129, 0.1), transparent 70%)",
                        }}
                      />
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label className="block text-emerald-300 mb-2">{t('contactpage.form.email.label')}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-emerald-500/20 rounded-lg text-emerald-100 focus:border-emerald-400 focus:outline-none transition-all duration-300"
                      placeholder={t('contactpage.form.email.placeholder')}
                    />
                    {focusedField === "email" && (
                      <motion.div
                        className="absolute inset-0 rounded-lg pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                          background: "radial-gradient(circle at center, rgba(16, 185, 129, 0.1), transparent 70%)",
                        }}
                      />
                    )}
                  </div>

                  {/* Subject Field */}
                  <div className="relative">
                    <label className="block text-emerald-300 mb-2">{t('contactpage.form.subject.label')}</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-emerald-500/20 rounded-lg text-emerald-100 focus:border-emerald-400 focus:outline-none transition-all duration-300"
                    >
                      <option value="">{t('contactpage.form.subject.placeholder')}</option>
                      <option value="project">{t('contactpage.form.subject.project')}</option>
                      <option value="collaboration">{t('contactpage.form.subject.collaboration')}</option>
                      <option value="consultation">{t('contactpage.form.subject.consultation')}</option>
                      <option value="other">{t('contactpage.form.subject.other')}</option>
                    </select>
                    {focusedField === "subject" && (
                      <motion.div
                        className="absolute inset-0 rounded-lg pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                          background: "radial-gradient(circle at center, rgba(16, 185, 129, 0.1), transparent 70%)",
                        }}
                      />
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label className="block text-emerald-300 mb-2">{t('contactpage.form.message.label')}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-emerald-500/20 rounded-lg text-emerald-100 focus:border-emerald-400 focus:outline-none transition-all duration-300 resize-none"
                      placeholder={t('contactpage.form.message.placeholder')}
                    />
                    {focusedField === "message" && (
                      <motion.div
                        className="absolute inset-0 rounded-lg pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                          background: "radial-gradient(circle at center, rgba(16, 185, 129, 0.1), transparent 70%)",
                        }}
                      />
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </motion.svg>
                        {t('contactpage.form.sending')}
                      </span>
                    ) : (
                      t('contactpage.form.submit')
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-emerald-300 text-center flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t('contactpage.form.success')}
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-center flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t('contactpage.form.error')}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-emerald-500/20 p-8">
                <h2 className="text-2xl font-bold text-emerald-300 mb-6">{t('contactpage.info.title')}</h2>

                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <motion.div
                      key={info.labelKey}
                      className="flex items-center gap-4 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-emerald-400">{info.icon}</span>
                      <div className="flex-grow">
                        <p className="text-emerald-400 text-sm">{t(info.labelKey)}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-200 hover:text-emerald-100 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-emerald-200">{t(info.valueKey || '')}</p>
                        )}
                      </div>
                      {info.link && (
                        <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-emerald-500/20 p-8">
                <h2 className="text-2xl font-bold text-emerald-300 mb-6">{t('contactpage.social.title')}</h2>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-slate-900/50 border border-emerald-500/20 rounded-lg hover:border-emerald-500/40 hover:bg-slate-900/70 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-emerald-400">{social.icon}</span>
                      <span className="text-emerald-200">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-gradient-to-r from-emerald-950/50 to-cyan-950/50 backdrop-blur-lg rounded-2xl border border-emerald-500/30 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-3 h-3 bg-emerald-400 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <h3 className="text-xl font-semibold text-emerald-300">{t('contactpage.availability.title')}</h3>
                </div>
                <p className="text-emerald-200/80">
                  {t('contactpage.availability.desc')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-emerald-300 mb-4">{t('contactpage.faq.title')}</h2>
            <p className="text-emerald-200/70">
              {t('contactpage.faq.subtitle')}
            </p>
          </motion.div>

          <div className="space-y-4">
            {['1', '2', '3', '4'].map((num, index) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-emerald-300 mb-2">{t(`contactpage.faq${num}.q`)}</h3>
                <p className="text-emerald-200/70">{t(`contactpage.faq${num}.a`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;