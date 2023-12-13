import React, { useState } from 'react';
import style from '../src/Components/Css/faq.module.css';

function Faq() {
  const [expandedSections, setExpandedSections] = useState({});

  const handleToggle = (sectionIndex) => {
    setExpandedSections((prevExpandedSections) => ({
      ...prevExpandedSections,
      [sectionIndex]: !prevExpandedSections[sectionIndex],
    }));
  };

  return (
    <div className={style.helpfaqcontainer}>
      <div className={style.header}>
        <h1>Help and FAQ - Step Fresh</h1>
      </div>
      {faqData.map((section, index) => (
        <div className={style.section} key={index}>
          <h2>{section.title}</h2>
          {section.qa.map((qa, qaIndex) => (
            <div
              className={`${style.qa} ${expandedSections[qaIndex] ? style.active : ''}`}
              key={qaIndex}
            >
              <p onClick={() => handleToggle(qaIndex)}>
                <strong>Q:</strong> {qa.question}
              </p>
              {expandedSections[qaIndex] && (
                <p className={style.answer}>
                  <strong>A:</strong> {qa.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
const faqData = [
  {
    title: 'About Step Fresh',
    qa: [
      {
        question: 'What makes Step Fresh unique?',
        answer: 'Step Fresh is dedicated to providing you with a seamless online grocery shopping experience...',
      },
      {
        question: 'How can I stay updated on Step Fresh promotions and new arrivals?',
        answer: 'Subscribe to our newsletter for exclusive deals, updates on new products, and special promotions...',
      },
    ],
  },
  {
    title: 'Special Offers and Discounts:',
    qa: [
      {
        question: 'Do you have a referral program?',
        answer: 'Yes, we love rewarding our customers. Refer a friend to Step Fresh, and both of you can enjoy exclusive discounts on your next purchase', 
      },
      {
        question: 'Are there seasonal promotions or holiday discounts?',
        answer: 'Absolutely! Keep an eye on our website and social media channels for exciting seasonal promotions and special discounts during holidays.',
      },
    ],
  },
  {
    title: 'Contact and Support:',
    qa: [
      {
        question: 'Is there a Step Fresh mobile app?',
        answer: 'Yes, you can download the Step Fresh app for a convenient and user-friendly mobile shopping experience. Find it on the App Store and Google Play.',
      },
      {
        question: 'Can I get personalized shopping advice?',
        answer: 'Certainly! Our customer support team is happy to assist you with product recommendations and any questions you may have. Reach out to us via [email/phone/live chat].',
      },
    ],
  },
  {
    title: 'Returns and Refunds:',
    qa: [
      {
        question: 'What if I receive damaged or incorrect items?',
        answer: ' We apologize for any inconvenience. Please contact our customer support team, and we will promptly assist you in resolving the issue.',
      },
      {
        question: 'How long does it take to process a refund?',
        answer: 'Refunds are typically processed within [X] business days after the return is approved. You will receive an email notification once the refund is initiated.',
      },
    ],
  },
  {
    title: 'Payment and Billing:',
    qa: [
      {
        question: ' Is my payment information secure with Step Fresh?',
        answer: 'Absolutely. We use industry-standard encryption to ensure the security of your payment information. Your privacy is a top priority.',
      },
      {
        question: 'Can I set a budget for my shopping?',
        answer: 'Yes, you can set a budget for your order during the checkout process. This helps you stay within your desired spending limit.',
      },
    ],
  },
  {
    title: 'Product Information:',
    qa: [
      {
        question: 'Are your sweets and snacks suitable for special dietary needs?',
        answer: 'We offer a diverse range of products, including options for gluten-free, vegan, and other dietary preferences. Check product descriptions for details.',
      },
      {
        question: 'How can I ensure the freshness of the meat I order?',
        answer: 'Our meat products are handled with the utmost care, and we follow strict hygiene standards. All meat is delivered in temperature-controlled packaging.',
      },
    ],
  },
  {
    title: 'Delivery Information:',
    qa: [
      {
        question: 'Is there a minimum order requirement for delivery?',
        answer: 'Our minimum order requirement for delivery is [X]. This helps us maintain an efficient delivery service for all our customers.',
      },
      {
        question: ' Do you offer contactless delivery?',
        answer: ' Yes, in our commitment to your safety, we provide contactless delivery. You can indicate your preference during the checkout process.',
      },
    ],
  },
  {
    title: 'Ordering Process:',
    qa: [
      {
        question: 'Can I save items for later?',
        answer: 'Absolutely! You can use our "Wishlist" feature to save items for future purchases. Just click on the heart icon next to the product.',
      },
      {
        question: 'Are there any benefits to creating an account with Step Fresh?',
        answer: 'Yes, registered users enjoy personalized recommendations, order history tracking, and exclusive offers. Creating an account is quick and easy.',
      },
    ],
  },
 
];

export default Faq