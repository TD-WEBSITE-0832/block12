// Kartalarni tanlaymiz
    const cards = document.querySelectorAll('.card');

    // Har bir kartaga data-index qo‘shamiz (CSS da ishlatish uchun)
    cards.forEach((card, index) => {
      card.setAttribute('data-index', index + 1);
    });

    // Intersection Observer – scroll animatsiyasi
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // bir marta ko‘rsatib, keyin kuzatmaymiz
          }
        });
      },
      {
        threshold: 0.15,              // kartaning 15% ko‘rinsa animatsiya boshlanadi
        rootMargin: "0px 0px -10% 0px" // pastki qismdan biroz oldinroq boshlash
      }
    );

    // Har bir kartani kuzatishga qo‘shamiz
    cards.forEach((card) => observer.observe(card));