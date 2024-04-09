const variantLanguageButton = document.getElementById("variant-language");
const defaultLanguageButton = document.getElementById("default-language");
const titleElement = document.getElementById("title");
const subTitleElement = document.getElementById("subtitle");
const descriptionElement = document.getElementById("description");

const englishLogo = document.getElementById("english-logo");
const arabicLogo = document.getElementById("arabic-logo");

const plantingTitle = document.getElementById("planting-h3");
const plantingText = document.getElementById("planting-text");
const growingTitle = document.getElementById("growing-h3");
const growingText = document.getElementById("growing-text");
const harvestingTitle = document.getElementById("harvesting-h3");
const harvestingText = document.getElementById("harvesting-text");
const crushingTitle = document.getElementById("crushing-h3");
const crushingText = document.getElementById("crushing-text");
const pressingTitle = document.getElementById("pressing-h3");
const pressingText = document.getElementById("pressing-text");
const bottlingTitle = document.getElementById("bottling-h3");
const bottlingText = document.getElementById("bottling-text");

// FOOTER CONSTANTS
const contactTitle = document.getElementById("contact-h3");
const aboutTitle = document.getElementById("about-h3");
const aboutText = document.getElementById("about-text");
const contactTitle2 = document.getElementById("contact-h3-2");

let isEnglish = true;

variantLanguageButton.addEventListener("click", () => {
  if (isEnglish) {
    isEnglish = false;
    //HOME SECTION
    titleElement.innerHTML = "عصر المغفل الليبي";
    subTitleElement.innerHTML = "من البستان إلى الطهاة الراقين";
    descriptionElement.innerHTML = `
    <span>مرحبًا بك في فرانتويو ليبيكو،</span><br />
    <span>وجهتك الواحدة لأفضل زيت زيتون بكر بالضغط البارد! انطلق معنا في رحلة خيالية</span><br />
    <span>حيث نأخذك خطوة بخطوة من خلال عملية صنع زيت الزيتون الخاص بنا</span>
`;

    // SECTIONS
    plantingTitle.innerHTML = "زراعة البذرة";
    plantingText.innerHTML = `
        في قلب حقل مشمس، توضع بذرة زيتون واحدة بعناية في تربة خصبة.<br />
        وهذا يمثل بداية رحلة، حيث تتشابك الرعاية والطبيعة لزراعة<br /> جوهر زيت الزيتون الفاخر لدينا.
        بينما ينمو الزيتون، يعكس الزراعون العناية <br />والحب للأرض والطبيعة.
    `;

    growingTitle.innerHTML = "<h3>زراعة أشجار الزيتون</h3>";
    growingText.innerHTML =
      "<p>مع تعاقب الفصول، تمتد أشجار زيتوننا نحو السماء، وجذورها تمسك األرض بقوة.<br />" +
      "محاطة بتناغم الطبيعة، تزدهر األشجار، وأغصانها محملة بالمحاصيل المستقبلية.</p>";

    harvestingTitle.innerHTML = "<h3>قطف الزيتون</h3>";
    harvestingText.innerHTML =
      "<p>تلتقي األيدي في بساتين الزيتون<br />حيث يتم قطف الزيتون الناضج بعناية ورعاية فائقة للحفاظ على سالمة الثمرة.</p>";

    crushingTitle.innerHTML = "<h3>عصر الزيتون على البارد</h3>";
    crushingText.innerHTML =
      "<p>في معاصرنا الحديثة، يتم تحويل الزيتون المحصود إلى زيت ذهبي غني صحي <br /> من خالل العصر البارد.</p>";

    pressingTitle.innerHTML = "<h3>سحق الزيتون</h3>";
    pressingText.innerHTML =
      "<p>بين الحصاد والعصر، يكمن فن السحق. <br /> هنا، يتم سحق الزيتون بلطف، وهي عملية يتم فيها طحن اللحم <br /> والبذور لتكوين عجينة. تؤدي هذه الخطوة الحاسمة إلى فتح كنوز الزيتون المخفية، <br /> وإعدادها للتحول إلى ذهب سائل.</p>";

    bottlingTitle.innerHTML = "<h3>تعبئة الزيت</h3>";
    bottlingText.innerHTML =
      "<p>في الإطار النهائي، يجد الزيت الذهبي موطنه في زجاجات أنيقة. <br /> كل زجاجة هي شهادة على الجودة، وهي بمثابة جسر من بساتيننا <br /> إلى طاولتك، مما يحافظ على جوهر زيت الزيتون البكر الممتاز <br /> العضوي والمعصور على البارد.</p>";

    //FOOTER
    contactTitle.innerHTML = "<h3>اتصل بنا</h3>";
    aboutTitle.innerHTML = "<h3>معلومات عنا</h3>";
    aboutText.innerHTML =
      '<p id="about-text">أوليوليبيكو هي شركة رائدة في توريد وتصنيع زيت الزيتون. منتجاتنا تتكون من مجموعة كبيرة من زيت الزيتون البكر الممتاز العضوي والمعصور على البارد.</p>';
    contactTitle2.innerHTML = "<h3>اتصل بنا</h3>";
    variantLanguageButton.textContent = "EN";
    defaultLanguageButton.textContent = "AR";
    englishLogo.style.display = "none";
    arabicLogo.style.display = "block";
  } else {
    isEnglish = true;

    //HOME SECTION
    titleElement.innerHTML = "FRANTOIO LIBICO";
    subTitleElement.innerHTML = "from Grove to Gourmet";
    descriptionElement.innerHTML = `            <h3 id="description">
        <span>Welcome to Frantoio Libico, your one-stop destination</span
        ><br />
        <span
          >for the finest cold-pressed virgin olive oil! Embark on a </span
        ><br />
        <span
          >whimsical journey with us as we take you through each
        </span>
        <br />
        <span>step of our olive oil-making process </span>
      </h3>`;

    //SECTIONS
    plantingTitle.innerHTML = "PLANTING";
    plantingText.innerHTML = `  <p id="planting-text">
        A single olive seed is gently placed into<br />
        fertile soil. This marks the beginning of a<br />
        journey, where care and nature cultivate<br />
        the essence of our premium olive oil.
      </p>`;

    growingTitle.innerHTML = "GROWING";
    growingText.innerHTML = ` <p id="growing-text">
        As seasons change, the trees flourish, <br />
        their branches laden with the promise<br />
        of future harvests.
      </p>`;

    harvestingTitle.innerHTML = "HARVESTING";
    harvestingText.innerHTML = `   <p id="harvesting-text">
        Hands and tradition meet in the olive <br />
        groves as the ripe olives are carefully <br />
        harvested. Each olive is picked with <br />
        respect, preserving its integrity and the <br />
        ancient bond between land and farmer.
      </p>`;

    crushingTitle.innerHTML = "CRUSHING";
    crushingText.innerHTML = ` <p id="crushing-text">
        Between the harvest and the press <br />, comes the crushing. Here,
        the olives are<br />
        gently crushed, a process where the <br />
        flesh and pits are ground to create a<br />
        paste. This crucial step unlocks the<br />
        olives' hidden treasures, preparing them<br />
        for the transformation into liquid gold.
      </p>`;

    pressingTitle.innerHTML = "COLD PRESSING";
    pressingText.innerHTML = `  <p id="pressing-text">
    Within our state-of-the-art press<br />, the harvested olives are<br />
    transformed. Through cold pressing, the <br />
    olives release their rich, golden oil —a <br />
    pure expression of nature, bottled without losing a drop of its
    essence.
  </p>`;
     

    bottlingTitle.innerHTML = "BOTTLING";
    bottlingText.innerHTML = `  <p id="bottling-text">
    In the final frame, the golden oil finds<br />its home in elegant
    bottles. Each bottle<br />
    is a testament to quality, a bridge from <br />
    our groves to your table, sealing the essence <br /> of our organic,
    cold-pressed extra virgin olive oil.
  </p>`;

    //FOOTER
    contactTitle.innerHTML = "CONTACT FORM";
    aboutTitle.innerHTML = "ABOUT US";
    aboutText.innerHTML =
      "Welcome to Frantoio Libico, your one-stop destination <br> for the finest cold-pressed virgin olive oil! Embark on a <br> whimsical journey with us as we take you through each  <br> step of our olive oil-making process";
    contactTitle2.innerHTML = "CONTACT US";

    variantLanguageButton.textContent = "AR";
    defaultLanguageButton.textContent = "EN";
    englishLogo.style.display = "block";
    arabicLogo.style.display = "none";
  }
});


const scrollDownImage = document.querySelector('.scroll-down');

scrollDownImage.addEventListener('click', () => {
  window.scrollBy({
    top: window.innerHeight * 0.25, // Scroll down by 25% of the window height
    behavior: 'smooth' // Smooth scrolling
  });
});


console.log("ARABIC!");
