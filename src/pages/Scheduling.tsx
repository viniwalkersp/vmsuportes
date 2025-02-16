import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, ArrowLeft } from 'lucide-react';
import emailjs from '@emailjs/browser';

function Scheduling() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    description: '',
    technician: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    try {
      setLoading(true);
      
      // Substitua estas credenciais pelos seus dados do EmailJS
      const serviceId = 'service_lva7ksi';
      const templateId = 'template_e18qg9k';
      const publicKey = '5iTZ5frk8U2gWelMK';
      
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      
      alert('Agendamento recebido! Entraremos em contato em breve.');
      form.current.reset();
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        description: '',
        technician: ''
      });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      alert('Erro ao enviar o agendamento. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-emerald-600 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Monitor className="h-6 w-6" />
            <span className="text-xl font-bold">VM Suportes</span>
          </Link>
          <Link
            to="/"
            className="flex items-center text-white hover:text-emerald-100 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar
          </Link>
        </nav>
      </header>

      {/* Scheduling Form */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Agende seu Atendimento
          </h1>

          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Data Preferencial
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Horário Preferencial
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Técnico
                </label>
                <select
                  name="technician"
                  value={formData.technician}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="">Selecione um técnico</option>
                  <option value="vinicius">Vinicius</option>
                  <option value="maiko">Maiko</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Serviço
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="">Selecione um serviço</option>
                <option value="virus">Remoção de Vírus</option>
                <option value="maintenance">Manutenção Preventiva</option>
                <option value="support">Suporte Remoto Geral</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descrição do Problema
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold transition-colors ${
                loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-emerald-700'
              }`}
            >
              {loading ? 'Enviando...' : 'Confirmar Agendamento'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Scheduling;