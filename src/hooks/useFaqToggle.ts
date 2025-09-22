
import { useEffect } from "react";

const useFaqToggle = () => {
  useEffect(() => {
    // FAQ Accordion functionality
    const questions = document.querySelectorAll('.df-faq-question');
    
    const handleQuestionClick = (event: Event) => {
      const question = event.currentTarget as HTMLElement;
      const answer = question.nextElementSibling as HTMLElement;
      
      // Use RAF to batch DOM operations and avoid forced reflows
      requestAnimationFrame(() => {
        // Close other answers when one is opened
        document.querySelectorAll('.df-faq-answer').forEach(el => {
          if (el !== answer) {
            (el as HTMLElement).style.display = 'none';
            el.previousElementSibling?.classList.remove('active');
          }
        });
        
        // Toggle the current answer
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
          question.classList.remove('active');
        } else {
          answer.style.display = 'block';
          question.classList.add('active');
        }
      });
    };
    
    questions.forEach(question => {
      question.addEventListener('click', handleQuestionClick);
    });
    
    // Cleanup event listeners
    return () => {
      questions.forEach(question => {
        question.removeEventListener('click', handleQuestionClick);
      });
    };
  }, []);
};

export default useFaqToggle;
