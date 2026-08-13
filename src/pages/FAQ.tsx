import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is the purpose of this website?",
    answer: "This website is a place to help you find the best products and services in the world. We aim to provide comprehensive reviews and comparisons to help you make informed decisions."
  },
  {
    question: "How do I contact support?",
    answer: "You can contact support by email at support@example.com or by phone at 123-456-7890."
  },
  {
    question: "How do I find the best products?",
    answer: "You can find the best products by searching for them on the search page or by browsing the categories. Our curated lists and expert reviews will guide you to the top choices."
  },
  {
    question: "Can I return a product?",
    answer: "Yes, you can return a product within 30 days of purchase. Please refer to our return policy for more details. Ensure the product is in its original condition and packaging."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping to most countries. Shipping fees and delivery times may vary depending on the destination."
  },
  {
    question: "How can I track my order?",
    answer: "You can track your order by logging into your account and visiting the order history page. You will also receive a tracking number via email once your order has shipped. Stay updated with real-time tracking."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including credit cards, debit cards, PayPal, and bank transfers. Choose the most convenient option for you during checkout."
  },
  {
    question: "How do I reset my password?",
    answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page and following the instructions. A password reset link will be sent to your registered email address."
  },
  {
    question: "Can I change my shipping address after placing an order?",
    answer: "Yes, you can change your shipping address before the order is shipped. Please contact our support team for assistance. Provide the new address details promptly to avoid any delays."
  },
  {
    question: "What is your privacy policy?",
    answer: "Our privacy policy outlines how we collect, use, and protect your personal information. You can read it on our privacy policy page. We are committed to safeguarding your privacy."
  },
  {
    question: "How do I leave a review for a product?",
    answer: "You can leave a review for a product by logging into your account, navigating to the product page, and clicking on the 'Write a Review' button. Share your experience to help others make informed decisions."
  }
];

export default function FAQ() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 pt-32 pb-24 min-h-screen">
      <div className="mb-16 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] leading-[1.1] md:leading-[1.05] font-medium tracking-tighter text-gray-900 dark:text-[#f4f4f5] mb-5">
          Frequently asked questions
        </h1>
        <p className="text-[16px] sm:text-[17px] md:text-[19px] text-gray-500 dark:text-[#8a8f98] font-medium leading-relaxed sm:leading-snug mb-8 max-w-xl">
          We are here to help you with any questions you may have. If you don't find what you need, please contact us at <a href="mailto:support@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">support@example.com</a>
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="break-inside-avoid relative rounded-2xl p-[1.5px] group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:rotate-[1deg]"
          >
            {/* Border Beam Glow (Only visible on hover) */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ 
                rotate: { repeat: Infinity, duration: 5, ease: "linear" }
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(0,0,0,0.7)_360deg)] dark:bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(255,255,255,0.7)_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ transformOrigin: "center" }}
            />
            
            {/* Inner Card */}
            <div className="relative h-full w-full bg-gray-50 dark:bg-[#161616] rounded-[15px] border border-black/5 dark:border-white/5 p-8 flex flex-col gap-4 shadow-sm group-hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.1)] transition-colors duration-300 overflow-hidden">
              {/* Highlight Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-transparent dark:from-white/10 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <h3 className="text-[15px] sm:text-[16px] font-semibold text-gray-900 dark:text-[#f4f4f5] leading-snug relative z-10">
                {faq.question}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-gray-500 dark:text-[#8a8f98] leading-relaxed relative z-10">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
