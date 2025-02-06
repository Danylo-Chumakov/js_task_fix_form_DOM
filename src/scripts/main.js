'use strict';

// write code here
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);

    label.textContent = input.name.replace(/([A-Z])/g, ' $1').trim();

    input.placeholder = input.name
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .replace(/^./, (char) => char.toUpperCase());

    input.parentElement.insertBefore(label, input);
  });
});
