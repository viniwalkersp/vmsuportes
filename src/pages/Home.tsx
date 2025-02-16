import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Calendar, Users, Star, Shield, Laptop, ArrowRight } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-emerald-600 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Monitor className="h-6 w-6" />
            <span className="text-xl font-bold">VM Suportes</span>
          </div>
          <Link
            to="/agendamento"
            className="bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold hover:bg-emerald-50 transition-colors"
          >
            Agendar Serviço
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Assistência Técnica Profissional 24/7
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Resolva seus problemas de informática sem sair de casa
          </p>
          <Link
            to="/agendamento"
            className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
          >
            Agendar Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Technicians Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossa Equipe</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <img
                src="https://i.imgur.com/zH8XeIk.png"
                alt="vinicius"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-center mb-2">Vinícius</h3>
              <p className="text-gray-600 text-center">
                Especialista em suporte técnico, remoção de vírus e manutenção de sistemas.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <img
                src="https://i.imgur.com/oa8GNdS.png"
                alt="maiko"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-center mb-2">Maiko</h3>
              <p className="text-gray-600 text-center">
                Profissional em solução de problemas de rede e manutenção de sistemas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossos Serviços</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Shield className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Remoção de Vírus</h3>
            <p className="text-gray-600">Eliminamos ameaças e protegemos seus dados</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Laptop className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Manutenção Preventiva</h3>
            <p className="text-gray-600">Otimização e limpeza do seu computador</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Users className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Suporte Remoto</h3>
            <p className="text-gray-600">Atendimento online rápido e eficiente</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 VM Suportes. Todos os direitos reservados. Grupo Unix Tecnlogia CNPJ 49.920.041/0001-95.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;