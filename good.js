const block = document.querySelector('.block');
    if (block) {
      Object.assign(block.style, {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', // ko'p element bo'lgani uchun center emas
        gap: '30px',
        padding: '40px 20px',
      });
    }

    // Barcha cardlarga asosiy style
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.setAttribute('data-index', index + 1); // raqam qo'yish uchun
      Object.assign(card.style, {
        width: '400px',
        height: '250px',
        backgroundColor: '#afaf792f',
        borderRadius: '16px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
        border: '1px solid #afaf7955',
      });
    });

    // Scroll animatsiyasi — Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // observer.unobserve(entry.target); // bir marta ko'rsatib keyin kuzatmay qo'yish
        }
      });
    }, {
      threshold: 0.15,          // 15% ko'rinishi bilan animatsiya boshlanadi
      rootMargin: '0px 0px -10% 0px' // pastki qismdan biroz oldinroq boshlash uchun
    });

    // har bir cardni kuzatish
    cards.forEach(card => observer.observe(card));