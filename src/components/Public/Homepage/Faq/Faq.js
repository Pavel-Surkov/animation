import React, { useState } from 'react';
import './faq.scss';

const initialState = {
  question1: false,
  question2: false,
  question3: false,
  question4: false,
  question5: false,
  question6: false,
  question7: false,
};

const questionsArr = [
  {
    question: 'What is Uplio?',
    answer: `<p>Uplio is a B2B marketplace for the consumer-packaged goods. We connect startup brands with local manufacturers instantly. We solve discovery, pricing, ordering/payment for local manufacturers and their customers.</p>`,
  },
  {
    question: 'How much does Uplio cost? ',
    answer: `<p>Using Uplio platform to request quotes is free. If you accept a quote, that order will be produced by one of our manufacturing partners.</p>`,
  },
  {
    question:
      'How do I get manufacturing quote? How do I see costs and lead times? ',
    answer: `<p>Uplio gives you access to factory direct pricing and lead time for your custom products. All you need to do is to submit your requirements to start the matching process. We will contact you in minutes to match you with our trusted local suppliers.</p>`,
  },
  {
    question: 'What type of products does Uplio offer? ',
    answer: `<p>Uplio is an online marketplace for consumer-packaged goods. We support sourcing products from local manufacturers in Apparel, Textile, Home Goods, Furniture, Candles, Cosmetics, Fashion Accessories, and many more.</p>`,
  },
  {
    question: 'How do I ensure my design is safe?',
    answer:
      '<p>Uplio keeps your design content secure and private. If needed, we can execute an NDA for customers who require this documentation.</p>',
  },
  {
    question: 'I am a manufacturer, how do I join the Uplio Network? ',
    answer: `<p>We’re expanding our network of manufacturers and would love to talk to you. Please tell us about your company by contacting us at <a href="mailto:hello@uplio.com">hello@uplio.com</a>.</p>`,
  },
  {
    question: 'How do I pay for orders?',
    answer: `<p>On Uplio, you can pay by credit card, debit card, or directly from your bank account! At this time, we are unable to accept other forms of payment (pre-paid cards, checks, etc). Please note that most manufacturing partners require 50% of the order upfront and 50% upon shipping.</p>`,
  },
];

const Faq = () => {
  const [questions, setQuestions] = useState(initialState);

  const setQuestion = (question) => {
    const newQuestions = Object.assign({}, questions);

    newQuestions[question] = !newQuestions[question];

    setQuestions(newQuestions);
  };

  return (
    <section id="faq" className="section faq">
      <div className="faq-wrapper">
        <div className="faq-block">
          <h2 className="title title_size-m faq-block__title">FAQ</h2>
          <p className="title title_item faq-block__subtitle">
            [PRODUCT INFORMATION]
          </p>
          <ul className="faq-list">
            {questionsArr.map((item, idx) => {
              const question = `question${idx + 1}`;

              return (
                <li
                  className={`faq-item ${
                    questions[question] ? 'faq-item_opened' : null
                  }`}
                  key={item.question}
                >
                  <button
                    type="button"
                    className="faq-item__question"
                    onClick={() => setQuestion(`question${idx + 1}`)}
                  >
                    {item.question}
                  </button>
                  <div
                    className="faq-item__answer"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  ></div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
