const emailInput = document.querySelector('input[name="email"]');

// `document.querySelector` may return null if the selector doesn't match anything.
if (emailInput) {
  let userEmail = '';

  const existingCookies = document.cookie;
  const existingCookiesEmail = existingCookies.split(
    'unique-form-fields--email'
  );

  if (existingCookiesEmail.length === 1) {
    userEmail = prompt('What is your email (to use as a base)?');
    document.cookie = `unique-form-fields--email=${userEmail}`;
    console.log('cookie set', userEmail);
  } else {
    const emailPartA = existingCookiesEmail[1];
    const emailPartB = emailPartA.split(';')[0];
    const emailFinal = emailPartB.split('=')[1];
    userEmail = emailFinal;
  }

  const emailSplit = userEmail.split('@');
  const injectUnique = `${emailSplit[0]}+${Date.now()}@${emailSplit[1]}`;

  emailInput.value = injectUnique;
}

const phoneInput = document.querySelector('input[type="tel"]');

console.log(phoneInput);
// `document.querySelector` may return null if the selector doesn't match anything.
if (phoneInput) {
  const date = Date.now().toString();
  const nineNumbers = date.slice(-9);
  const uniquePhone = `07${nineNumbers}`;
  // const emailSplit = userEmail.split('@');
  // const injectUnique = `${emailSplit[0]}+${Date.now()}@${emailSplit[1]}`;

  phoneInput.value = uniquePhone;
}
