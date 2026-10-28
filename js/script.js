/* =========================================
   KHUTOROK CITY
   Main JavaScript
   Languages: Georgian, English, Russian
========================================= */

const translations = {
  ka: {
    // Navigation
    navHome: "მთავარი",
    navAbout: "ჩვენ შესახებ",
    navGallery: "გალერეა",
    navContact: "კონტაქტი",
    navMenu: "მენიუ",

    // Home page
    heroEyebrow: "უკრაინული სამზარეულო თბილისში",
    heroTitle: "გემო, რომელიც<br>სახლში გაბრუნებს",
    heroDescription:
      "აღმოაჩინეთ უკრაინული სამზარეულოს ავთენტური გემოები, თბილი გარემო და დაუვიწყარი სტუმრობა.",
    heroReserve: "დაჯავშნე მაგიდა",
    heroMenu: "იხილე მენიუ",
    heroBottom: "ავთენტური გემო • თბილი გარემო",

    welcomeEyebrow: "მოგესალმებით ხუტოროკში",
    welcomeTitle: "უკრაინული სტუმართმოყვარეობა",
    welcomeText:
      "ხუტოროკ სიტი არის ადგილი, სადაც ტრადიციული უკრაინული სამზარეულო, გულწრფელი სტუმართმოყვარეობა და მყუდრო გარემო ერთმანეთს ხვდება.",
    welcomeLink: "ჩვენ შესახებ",

    experienceEyebrow: "ჩვენი გარემო",
    experienceTitle: "ყოველი სტუმრობა განსაკუთრებულია",
    galleryButton: "დაათვალიერე გალერეა",

    reservationEyebrow: "გელოდებით",
    reservationTitle: "დაგეგმეთ თქვენი შემდეგი სტუმრობა",
    reservationButton: "დაჯავშნე მაგიდა",

    // Footer
    footerText:
      "ავთენტური უკრაინული სამზარეულო და თბილი სტუმართმოყვარეობა თბილისში.",
    footerPhoneLabel: "ტელეფონი",
    footerAddressLabel: "მისამართი",
    footerAddress: "ვაჟა-ფშაველას გამზირი 11, თბილისი",

    // About page
    aboutEyebrow: "ჩვენ შესახებ",
    aboutHeroTitle: "ტრადიცია და სტუმართმოყვარეობა",
    aboutHeroText:
      "ხუტოროკ სიტიში თითოეული კერძი ტრადიციის, გემოსა და სიყვარულის ისტორიაა.",

    aboutStoryEyebrow: "ჩვენი ისტორია",
    aboutStoryTitle: "ადგილი, სადაც გემო ისტორიას ჰყვება",
    aboutStoryText1:
      "ხუტოროკ სიტი შეიქმნა იმისთვის, რომ სტუმრებს უკრაინული სამზარეულოს ავთენტური გემოები გაეცნოთ.",
    aboutStoryText2:
      "ჩვენთვის მნიშვნელოვანია არა მხოლოდ გემრიელი კერძები, არამედ გარემო, სადაც ყველა სტუმარი თავს შინ იგრძნობს.",
    aboutStoryText3:
      "გელოდებით, რომ გაგიზიაროთ ჩვენი სამზარეულოს ტრადიციები და თბილი სტუმართმოყვარეობა.",

    aboutValuesEyebrow: "რას ვაფასებთ",
    aboutValuesTitle: "ჩვენი მთავარი ღირებულებები",

    aboutValue1Title: "ავთენტური გემო",
    aboutValue1Text: "ტრადიციული რეცეპტები და გულით მომზადებული კერძები.",

    aboutValue2Title: "თბილი გარემო",
    aboutValue2Text:
      "მყუდრო სივრცე, სადაც მეგობრები და ოჯახი ერთმანეთს ხვდებიან.",

    aboutValue3Title: "სტუმართმოყვარეობა",
    aboutValue3Text: "ყოველი სტუმარი ჩვენთვის განსაკუთრებულია.",

    aboutCtaEyebrow: "გვეწვიეთ",
    aboutCtaTitle: "გაატარეთ ჩვენთან სასიამოვნო დრო",
    aboutCtaButton: "დაჯავშნე მაგიდა",

    // Gallery page
    galleryEyebrow: "ჩვენი გალერეა",
    galleryTitle: "ხუტოროკის ატმოსფერო",
    galleryText:
      "დაათვალიერეთ ჩვენი სივრცე და აღმოაჩინეთ გარემო, რომელიც თითოეულ სტუმრობას განსაკუთრებულს ხდის.",

    // Contact page
    contactEyebrow: "კონტაქტი",
    contactTitle: "გვეწვიეთ ხუტოროკ სიტიში",
    contactText:
      "მოხარული ვიქნებით გიმასპინძლოთ. დაგვიკავშირდით ან დაჯავშნეთ მაგიდა.",

    contactInfoEyebrow: "ჩვენი მისამართი",
    contactInfoTitle: "მოდი სტუმრად",

    bookingEyebrow: "მაგიდის დაჯავშნა",
    bookingTitle: "დაგეგმეთ თქვენი სტუმრობა",

    formName: "სახელი",
    formPhone: "ტელეფონის ნომერი",
    formDate: "თარიღი",
    formTime: "დრო",
    formGuests: "სტუმრების რაოდენობა",
    formNote: "დამატებითი ინფორმაცია",
    formSubmit: "გაგზავნა",
    formHint:
      "ფორმის გაგზავნის შემდეგ WhatsApp-ში გაიხსნება შეტყობინება თქვენი ჯავშნის დეტალებით.",
  },

  en: {
    // Navigation
    navHome: "Home",
    navAbout: "About",
    navGallery: "Gallery",
    navContact: "Contact",
    navMenu: "Menu",

    // Home page
    heroEyebrow: "Ukrainian Cuisine in Tbilisi",
    heroTitle: "A taste that<br>feels like home",
    heroDescription:
      "Discover authentic Ukrainian flavors, a warm atmosphere, and an unforgettable dining experience.",
    heroReserve: "Book a Table",
    heroMenu: "Explore Menu",
    heroBottom: "Authentic Flavors • Warm Atmosphere",

    welcomeEyebrow: "Welcome to Khutorok",
    welcomeTitle: "Ukrainian Hospitality",
    welcomeText:
      "Khutorok City is a place where traditional Ukrainian cuisine, genuine hospitality, and a cozy atmosphere come together.",
    welcomeLink: "About Us",

    experienceEyebrow: "Our Atmosphere",
    experienceTitle: "Every Visit Is Special",
    galleryButton: "Explore Gallery",

    reservationEyebrow: "We Welcome You",
    reservationTitle: "Plan Your Next Visit",
    reservationButton: "Book a Table",

    // Footer
    footerText: "Authentic Ukrainian cuisine and warm hospitality in Tbilisi.",
    footerPhoneLabel: "Phone",
    footerAddressLabel: "Address",
    footerAddress: "11 Vazha-Pshavela Avenue, Tbilisi",

    // About page
    aboutEyebrow: "About Us",
    aboutHeroTitle: "Tradition and Hospitality",
    aboutHeroText:
      "At Khutorok City, every dish tells a story of tradition, flavor, and love.",

    aboutStoryEyebrow: "Our Story",
    aboutStoryTitle: "Where Flavor Tells a Story",
    aboutStoryText1:
      "Khutorok City was created to share the authentic flavors of Ukrainian cuisine with our guests.",
    aboutStoryText2:
      "For us, it is not only about delicious food, but also about creating a place where everyone feels at home.",
    aboutStoryText3:
      "We invite you to experience our culinary traditions and warm hospitality.",

    aboutValuesEyebrow: "What We Value",
    aboutValuesTitle: "Our Core Values",

    aboutValue1Title: "Authentic Flavor",
    aboutValue1Text: "Traditional recipes and dishes prepared with care.",

    aboutValue2Title: "Warm Atmosphere",
    aboutValue2Text: "A cozy space where friends and families come together.",

    aboutValue3Title: "Hospitality",
    aboutValue3Text: "Every guest is special to us.",

    aboutCtaEyebrow: "Visit Us",
    aboutCtaTitle: "Spend a Wonderful Time With Us",
    aboutCtaButton: "Book a Table",

    // Gallery page
    galleryEyebrow: "Our Gallery",
    galleryTitle: "The Khutorok Atmosphere",
    galleryText:
      "Explore our space and discover the atmosphere that makes every visit special.",

    // Contact page
    contactEyebrow: "Contact",
    contactTitle: "Visit Khutorok City",
    contactText:
      "We would be delighted to welcome you. Contact us or book a table.",

    contactInfoEyebrow: "Our Location",
    contactInfoTitle: "Come Visit Us",

    bookingEyebrow: "Table Reservation",
    bookingTitle: "Plan Your Visit",

    formName: "Name",
    formPhone: "Phone Number",
    formDate: "Date",
    formTime: "Time",
    formGuests: "Number of Guests",
    formNote: "Additional Information",
    formSubmit: "Send",
    formHint:
      "After submitting the form, WhatsApp will open with your reservation details.",
  },

  ru: {
    // Navigation
    navHome: "Главная",
    navAbout: "О нас",
    navGallery: "Галерея",
    navContact: "Контакты",
    navMenu: "Меню",

    // Home page
    heroEyebrow: "Украинская кухня в Тбилиси",
    heroTitle: "Вкус, который<br>возвращает домой",
    heroDescription:
      "Откройте для себя аутентичные вкусы украинской кухни, тёплую атмосферу и незабываемый отдых.",
    heroReserve: "Забронировать столик",
    heroMenu: "Посмотреть меню",
    heroBottom: "Аутентичный вкус • Тёплая атмосфера",

    welcomeEyebrow: "Добро пожаловать в Хуторок",
    welcomeTitle: "Украинское гостеприимство",
    welcomeText:
      "Хуторок Сити — это место, где встречаются традиционная украинская кухня, искреннее гостеприимство и уютная атмосфера.",
    welcomeLink: "О нас",

    experienceEyebrow: "Наша атмосфера",
    experienceTitle: "Каждый визит особенный",
    galleryButton: "Посмотреть галерею",

    reservationEyebrow: "Мы ждём вас",
    reservationTitle: "Запланируйте свой следующий визит",
    reservationButton: "Забронировать столик",

    // Footer
    footerText:
      "Аутентичная украинская кухня и тёплое гостеприимство в Тбилиси.",
    footerPhoneLabel: "Телефон",
    footerAddressLabel: "Адрес",
    footerAddress: "проспект Важа-Пшавела, 11, Тбилиси",

    // About page
    aboutEyebrow: "О нас",
    aboutHeroTitle: "Традиции и гостеприимство",
    aboutHeroText:
      "В Хуторок Сити каждое блюдо — это история традиций, вкуса и любви.",

    aboutStoryEyebrow: "Наша история",
    aboutStoryTitle: "Место, где вкус рассказывает историю",
    aboutStoryText1:
      "Хуторок Сити создан, чтобы познакомить гостей с аутентичными вкусами украинской кухни.",
    aboutStoryText2:
      "Для нас важна не только вкусная еда, но и атмосфера, в которой каждый гость чувствует себя как дома.",
    aboutStoryText3:
      "Приглашаем вас познакомиться с нашими кулинарными традициями и тёплым гостеприимством.",

    aboutValuesEyebrow: "Наши ценности",
    aboutValuesTitle: "Наши главные ценности",

    aboutValue1Title: "Аутентичный вкус",
    aboutValue1Text: "Традиционные рецепты и блюда, приготовленные с заботой.",

    aboutValue2Title: "Тёплая атмосфера",
    aboutValue2Text: "Уютное место, где встречаются друзья и семьи.",

    aboutValue3Title: "Гостеприимство",
    aboutValue3Text: "Каждый гость для нас особенный.",

    aboutCtaEyebrow: "Приходите к нам",
    aboutCtaTitle: "Проведите с нами приятное время",
    aboutCtaButton: "Забронировать столик",

    // Gallery page
    galleryEyebrow: "Наша галерея",
    galleryTitle: "Атмосфера Хуторока",
    galleryText:
      "Посмотрите наше пространство и откройте для себя атмосферу, которая делает каждый визит особенным.",

    // Contact page
    contactEyebrow: "Контакты",
    contactTitle: "Посетите Хуторок Сити",
    contactText:
      "Мы будем рады принять вас. Свяжитесь с нами или забронируйте столик.",

    contactInfoEyebrow: "Наш адрес",
    contactInfoTitle: "Приходите в гости",

    bookingEyebrow: "Бронирование столика",
    bookingTitle: "Запланируйте свой визит",

    formName: "Имя",
    formPhone: "Номер телефона",
    formDate: "Дата",
    formTime: "Время",
    formGuests: "Количество гостей",
    formNote: "Дополнительная информация",
    formSubmit: "Отправить",
    formHint:
      "После отправки формы откроется WhatsApp с деталями вашего бронирования.",
  },
};

/* =========================================
   HEADER
========================================= */

const headerElement = document.getElementById("site-header");

if (headerElement) {
  headerElement.innerHTML = `
    <header class="site-header">
      <div class="header-inner">

        <a href="index.html" class="logo" aria-label="Khutorok City Home">
          <img src="images/logo.png" alt="Khutorok City">
        </a>

        <button
          class="menu-toggle"
          id="menuToggle"
          type="button"
          aria-label="Open navigation"
          aria-expanded="false"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="navigation" id="navigation">
          <a href="index.html" data-i18n="navHome"></a>
          <a href="about.html" data-i18n="navAbout"></a>
          <a href="gallery.html" data-i18n="navGallery"></a>
          <a href="contact.html" data-i18n="navContact"></a>
        </nav>

        <div class="header-actions">
          <div class="language-switcher">
            <button class="language-btn" type="button" data-lang="ka">GE</button>
            <button class="language-btn" type="button" data-lang="en">EN</button>
            <button class="language-btn" type="button" data-lang="ru">RU</button>
          </div>

          <a
            href="https://xutorokcity.ofoodo.com/ka/groups?sellingType=isActiveDirectSelling"
            class="menu-link"
            target="_blank"
            rel="noopener noreferrer"
            data-i18n="navMenu"
          ></a>
        </div>

      </div>
    </header>
  `;
}

/* =========================================
   FOOTER
========================================= */

const footerElement = document.getElementById("site-footer");

if (footerElement) {
  footerElement.innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">

        <div class="footer-brand">
          <a href="index.html" class="logo">
            <img src="images/logo.png" alt="Khutorok City">
          </a>

          <p data-i18n="footerText"></p>
        </div>

        <div class="footer-contact">

          <div class="footer-contact-block">
            <span data-i18n="footerPhoneLabel"></span>
            <a href="tel:+995574014554">+995 574 014 554</a>
          </div>

          <div class="footer-contact-block">
            <span data-i18n="footerAddressLabel"></span>
            <p data-i18n="footerAddress"></p>
          </div>

        </div>

      </div>
    </footer>
  `;
}

/* =========================================
   LANGUAGE SWITCHER
========================================= */

function setLanguage(language) {
  if (!translations[language]) {
    language = "ka";
  }

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translatedText = translations[language][key];

    if (translatedText !== undefined) {
      element.innerHTML = translatedText;
    }
  });

  document.querySelectorAll(".language-btn").forEach((button) => {
    const isActive = button.dataset.lang === language;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("khutorokLanguage", language);
}

/* =========================================
   LOAD SAVED LANGUAGE
========================================= */

const savedLanguage = localStorage.getItem("khutorokLanguage") || "ka";

setLanguage(savedLanguage);

/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* =========================================
   LANGUAGE BUTTON EVENTS
========================================= */

document.querySelectorAll(".language-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLanguage = button.dataset.lang;
    setLanguage(selectedLanguage);
  });
});

/* =========================================
   RESERVATION FORM
========================================= */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(bookingForm);

    const name = formData.get("name") || "";
    const phone = formData.get("phone") || "";
    const date = formData.get("date") || "";
    const time = formData.get("time") || "";
    const guests = formData.get("guests") || "";
    const note = formData.get("note") || "";

    const currentLanguage = localStorage.getItem("khutorokLanguage") || "ka";

    let message = "";

    if (currentLanguage === "en") {
      message =
        `Hello! I would like to book a table.\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Date: ${date}\n` +
        `Time: ${time}\n` +
        `Guests: ${guests}\n` +
        `Additional information: ${note}`;
    } else if (currentLanguage === "ru") {
      message =
        `Здравствуйте! Я хотел(а) бы забронировать столик.\n\n` +
        `Имя: ${name}\n` +
        `Телефон: ${phone}\n` +
        `Дата: ${date}\n` +
        `Время: ${time}\n` +
        `Количество гостей: ${guests}\n` +
        `Дополнительная информация: ${note}`;
    } else {
      message =
        `გამარჯობა! მსურს მაგიდის დაჯავშნა.\n\n` +
        `სახელი: ${name}\n` +
        `ტელეფონი: ${phone}\n` +
        `თარიღი: ${date}\n` +
        `დრო: ${time}\n` +
        `სტუმრების რაოდენობა: ${guests}\n` +
        `დამატებითი ინფორმაცია: ${note}`;
    }

    const whatsappNumber = "995597999908";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  });
}
