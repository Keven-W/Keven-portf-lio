import React from 'react';

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8">
      
      {/* Logo/Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Keven Mendell
        </h1>
        <p className="text-xl text-gray-600">Desenvolvedor Full Stack</p>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          🚧 Manutenção em Andamento
        </h2>

        {/* Message */}
        <div className="space-y-4 mb-8">
          <p className="text-lg text-gray-600 text-center">
            Estou melhorando meu portfólio para oferecer uma experiência ainda melhor!
          </p>
          <p className="text-gray-500 text-center">
            O site estará de volta em breve com novas funcionalidades e projetos.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-blue-700">Progresso</span>
            <span className="text-sm font-medium text-blue-700">75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-blue-600 h-3 rounded-full w-3/4"></div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            📞 Entre em Contato
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:keven.w.1107@gmail.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              Email
            </a>
            <a href="https://github.com/Keven-W" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-800 hover:text-black transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
              </svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/keven-mendell" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Countdown Timer (opcional) */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Previsão de retorno: <span className="font-semibold">24-48 horas</span>
          </p>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Keven Mendell. Todos os direitos reservados.
        </p>
        <p className="text-gray-400 text-xs mt-2">
          Desenvolvido com React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default Maintenance;
