const lottie = 'https://lottie.org';

function doOne() {
  const emailInput = document.querySelector('input[name="email"]');
  const phoneInput = document.querySelector('input[type="tel"]');

  if (emailInput) {
    let userEmail = '';

    const existingCookies = document.cookie;
    const existingCookiesEmail = existingCookies.split(
      'unique-form-fields--email'
    );

    if (
      existingCookiesEmail.length === 1 ||
      existingCookiesEmail[1].startsWith('=;')
    ) {
      userEmail = prompt('What is your email (to use as a base)?');
      document.cookie = `unique-form-fields--email=${userEmail}`;
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

  if (phoneInput) {
    const date = Date.now().toString();
    const nineNumbers = date.slice(-9);
    const uniquePhone = `07${nineNumbers}`;

    phoneInput.value = uniquePhone;
  }
}

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(lottie) || tab.url.indexOf('lottie.vercel.app')) {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: doOne,
    });
  }
});
