import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Alert the form data
    alert(`Form submitted!\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    
    // Show thank you message
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Hide thank you message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const getContainerClasses = () => {
    switch (theme) {
      case 'theme1':
        return 'bg-gray-50 min-h-screen pt-24 pb-12';
      case 'theme2':
        return 'bg-gray-900 min-h-screen pt-24 pb-12';
      case 'theme3':
        return 'bg-gradient-to-b from-purple-50 to-pink-50 min-h-screen pt-24 pb-12';
      default:
        return 'bg-gray-50 min-h-screen pt-24 pb-12';
    }
  };

  const getTitleClasses = () => {
    switch (theme) {
      case 'theme1':
        return 'text-3xl font-light text-gray-800 mb-8';
      case 'theme2':
        return 'text-3xl font-bold text-white mb-8';
      case 'theme3':
        return 'text-4xl font-bold text-purple-600 mb-8 text-center';
      default:
        return 'text-3xl font-light text-gray-800 mb-8';
    }
  };

  const getCardClasses = () => {
    switch (theme) {
      case 'theme1':
        return 'bg-white border border-gray-200 rounded-lg shadow-sm p-6';
      case 'theme2':
        return 'bg-gray-800 border border-gray-700 rounded-lg p-6';
      case 'theme3':
        return 'bg-white rounded-2xl shadow-lg p-6';
      default:
        return 'bg-white border border-gray-200 rounded-lg p-6';
    }
  };

  const getInputClasses = () => {
    switch (theme) {
      case 'theme1':
        return 'w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500';
      case 'theme2':
        return 'w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-white';
      case 'theme3':
        return 'w-full px-4 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 bg-purple-50';
      default:
        return 'w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500';
    }
  };

  const getButtonClasses = () => {
    switch (theme) {
      case 'theme1':
        return 'bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-colors duration-300';
      case 'theme2':
        return 'bg-gray-600 hover:bg-gray-500 text-white py-2 px-6 rounded-md transition-colors duration-300';
      case 'theme3':
        return 'bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105';
      default:
        return 'bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-colors duration-300';
    }
  };

  const getSuccessClasses = () => {
    switch (theme) {
      case 'theme1':
        return 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6';
      case 'theme2':
        return 'bg-green-800 border border-green-600 text-green-100 px-4 py-3 rounded mb-6';
      case 'theme3':
        return 'bg-pink-100 border border-pink-400 text-pink-700 px-4 py-3 rounded-full mb-6 text-center';
      default:
        return 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6';
    }
  };

  return (
    <div className={getContainerClasses()}>
      <div className="container mx-auto px-4">
        <h1 className={getTitleClasses()}>Contact Us</h1>
        <div className="max-w-3xl mx-auto">
          <div className={getCardClasses()}>
            {submitted && (
              <div className={getSuccessClasses()} role="alert">
                <strong className="font-bold">Thank you!</strong>
                <span className="block sm:inline"> Your message has been sent. We'll get back to you soon.</span>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className={`block mb-2 ${
                    theme === 'theme1'
                      ? 'text-gray-700'
                      : theme === 'theme2'
                      ? 'text-gray-300'
                      : 'text-purple-800'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={getInputClasses()}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className={`block mb-2 ${
                    theme === 'theme1'
                      ? 'text-gray-700'
                      : theme === 'theme2'
                      ? 'text-gray-300'
                      : 'text-purple-800'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={getInputClasses()}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className={`block mb-2 ${
                    theme === 'theme1'
                      ? 'text-gray-700'
                      : theme === 'theme2'
                      ? 'text-gray-300'
                      : 'text-purple-800'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={getInputClasses()}
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button type="submit" className={getButtonClasses()}>
                Send Message
              </button>
            </form>
          </div>
          <div className={`mt-8 ${getCardClasses()}`}>
            <h2
              className={`text-xl font-semibold mb-4 ${
                theme === 'theme1'
                  ? 'text-gray-800'
                  : theme === 'theme2'
                  ? 'text-white'
                  : 'text-purple-700'
              }`}
            >
              Our Office
            </h2>
            <p
              className={`${
                theme === 'theme1'
                  ? 'text-gray-600'
                  : theme === 'theme2'
                  ? 'text-gray-300'
                  : 'text-pink-700'
              }`}
            >
              Hipster Pte. Ltd.
              <br />
              #01-04, 75 Ayer Rajah Crescent
              <br />
              139953, Singapore
              <br />
              UEN: 201621408D
              <br />
              Phone: +65 8231 4107
              <br />
              Email: hr@hipster-inc.com
              <br />
              Website: www.hipster-inc.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;