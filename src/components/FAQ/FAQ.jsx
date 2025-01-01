import React, { useState } from 'react';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Soft Forte?',
      answer: '',
    },
    {
      question: 'What benefits can be provided by a Soft Forte agency?',
      answer:
        'Soft Forte offers complete digital solutions, including mobile apps, websites, UI/UX design, and video editing, all tailored to your business needs. Our expert team delivers high-quality work using the latest technologies, with a strong focus on innovation and functionality.',
    },
    {
      question: 'How long does it take to complete a project with Soft Forte?',
      answer: '',
    },
    {
      question: 'What to do if you are not satisfied with the work of Soft Forte?',
      answer: '',
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className=" max-w-2xl mx-auto  p-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300"
              >
                <span>{faq.question}</span>
                <span className={`transform transition-transform duration-300 ${openQuestion === index ? 'rotate-180' : ''}`}>
                  ▾
                </span>
              </button>
              {openQuestion === index && (
                <div className="bg-gray-100 rounded-b-lg p-4 pl-6 text-gray-600 text-sm transition-all duration-300">
                  {faq.answer || 'Answer will be provided soon.'}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
