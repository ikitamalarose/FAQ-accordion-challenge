document.querySelectorAll('.faq__item').forEach(faqItem => {
    const button = faqItem.querySelector('.faq__toggle-button');
    const title = faqItem.querySelector('.faq__title');
    const faqContent = faqItem.querySelector('.faq__content');
    const faqIcon = button.querySelector('.faq__icon');

    function toggleContent() {
        faqContent.classList.toggle('faq__content--active');
        faqIcon.src = faqContent.classList.contains('faq__content--active')
            ? './assets/images/icon-minus.svg'
            : './assets/images/icon-plus.svg';
    }


    button.addEventListener('click', toggleContent);


    title.addEventListener('click', toggleContent);
});

