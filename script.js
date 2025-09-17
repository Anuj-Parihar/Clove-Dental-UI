// FAQ Toggle
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.querySelector('.faq-answer');
    const toggle = item.querySelector('.toggle');
    const isOpen = answer.style.display === 'block';

    // Close all FAQs
    document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
    document.querySelectorAll('.toggle').forEach(t => t.textContent = '+');

    // Open clicked one
    if (!isOpen) {
      answer.style.display = 'block';
      toggle.textContent = '-';
    }
  });
});

// Form Submit
document.getElementById('consultationForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Form submitted successfully!');
});


// Smooth hover scaling effect
document.querySelectorAll('.safety-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px) scale(1.02)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

document.querySelectorAll('.faq-item').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
