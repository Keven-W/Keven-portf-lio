import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const emailjsKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!emailjsKey) {
      setStatus('error');
      setErrorMessage('Chave pública do EmailJS não configurada. Verifique o arquivo .env');
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    try {
      await emailjs.send(
        'service_is0kxkg',
        'template_e6j2kcp',
        templateParams,
        emailjsKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Erro ao enviar mensagem. Tente novamente.');
      console.error('EmailJS Error:', error);
    }
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      isValidEmail(formData.email) &&
      formData.subject.trim() !== '' &&
      formData.message.trim() !== ''
    );
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:keven.w.1107@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com/in/keven-wendell', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Keven-W', label: 'GitHub' }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em <span className="text-[#D4AF37]">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos conversar sobre como posso ajudar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Envie uma mensagem</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900 border border-[#D4AF37]/30 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900 border border-[#D4AF37]/30 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900 border border-[#D4AF37]/30 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-[#D4AF37]/30 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={!isFormValid() || status === 'sending'}
                whileHover={{ scale: isFormValid() ? 1.02 : 1 }}
                whileTap={{ scale: isFormValid() ? 0.98 : 1 }}
                className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                  isFormValid() && status !== 'sending'
                    ? 'bg-[#D4AF37] text-black hover:bg-[#C4A037] cursor-pointer'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
                aria-label="Enviar mensagem"
              >
                {status === 'sending' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                    />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500"
                >
                  <CheckCircle size={20} />
                  <span>Mensagem enviada com sucesso!</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500"
                >
                  <AlertCircle size={20} />
                  <span>{errorMessage}</span>
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Conecte-se comigo</h3>
            <p className="text-gray-400 mb-8">
              Você também pode me encontrar nas seguintes plataformas:
            </p>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 p-4 bg-gray-900 border border-[#D4AF37]/30 rounded-lg hover:border-[#D4AF37] transition-all duration-300"
                  aria-label={`Acessar ${link.label}`}
                >
                  <div className="bg-[#D4AF37]/20 p-3 rounded-lg">
                    <link.icon className="text-[#D4AF37]" size={24} />
                  </div>
                  <span className="text-white font-medium">{link.label}</span>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 rounded-lg">
              <p className="text-gray-300 leading-relaxed">
                Respondo rapidamente a todas as mensagens. Seja para discutir um projeto,
                oportunidade de trabalho ou apenas para trocar ideias sobre desenvolvimento,
                ficarei feliz em conversar!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
