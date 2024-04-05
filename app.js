const variantLanguageButton = document.getElementById('variant-language');
const defaultLanguageButton = document.getElementById('default-language');
const titleElement = document.getElementById('title');
const subTitleElement = document.getElementById('subtitle');
const descriptionElement = document.getElementById('description');
const englishLogo = document.getElementById('english-logo');
const arabicLogo = document.getElementById('arabic-logo');

let isEnglish = true;

variantLanguageButton.addEventListener('click', () => {
    if (isEnglish) {
        isEnglish = false;
        titleElement.innerHTML = 'عصر المغفل الليبي';
        subTitleElement.innerHTML = 'من البستان إلى الطهاة الراقين';
        descriptionElement.innerHTML = 'مرحبًا بك في فرانتويو ليبيكو، <br> وجهتك الواحدة لأفضل زيت زيتون بكر بالضغط البارد! انطلق معنا في رحلة خيالية <br> حيث نأخذك خطوة بخطوة من خلال عملية صنع زيت الزيتون الخاص بنا';
        variantLanguageButton.textContent = 'EN';
        defaultLanguageButton.textContent = 'AR';
        englishLogo.style.display = 'none';
        arabicLogo.style.display = 'block';
    } else {
        isEnglish = true;
        titleElement.innerHTML = 'FRANTOIO LIBICO';
        subTitleElement.innerHTML = 'from Grove to Gourmet';
        descriptionElement.innerHTML = 'Welcome to Frantoio Libico, your one-stop destination <br> for the finest cold-pressed virgin olive oil! Embark on a <br> whimsical journey with us as we take you through each  <br> step of our olive oil-making process';
        variantLanguageButton.textContent = 'AR';
        defaultLanguageButton.textContent = 'EN';
        englishLogo.style.display = 'block';
        arabicLogo.style.display = 'none';
    }
});


console.log('ARABIC!');

const loaderTag = document.querySelector('div.loader');
let progress = 0;

const interval = setInterval(() => {
    if (progress < 100) {
        progress++;
        loaderTag.querySelector('span').textContent = `${progress}%`;
    } else {
        clearInterval(interval);
        loaderTag.classList.add('fadeOut');
        setTimeout(() => {
            loaderTag.remove();
        }, 1000); // Remove loader after 1 second (duration of the fade-out animation)
    }
}, 10); // Update every 10 milliseconds (adjust as needed for smoother or faster animation)
