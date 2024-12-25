import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "25 Songs That Tell Us Where Music Is Going",
        title1: "These Ancient Assassins Eat Their Own Kind ",
        title2: "International Soccer’s Man of Mystery",
        title3: "How Do You Teach People to Love Difficult Music? ",
        section: "Sections",
        search: "Search",
        subs: "Subscribe now",
        riba: "In Southeast England, White Cliffs and Fish",
        ded: "Recommended for you",
        chickenFriedSteak: "For Chicken-Fried Steak, Too Much Is Just Enough",
        storm: "Storm Has Car Dealers Doing Swift Business",
        war: "War Is Hell? In New Military Dramas, It’s One-Dimensional",
        bookcases: "The bookcases you can buy online and assemble yourself",
        nflStats: "11 surprising stat rankings for active NFL players",
      },
    },
    uz: {
      translation: {
        stormCarDealers:
          "Bo'ron Avto savdogarlarini tezkor biznes qilishga majbur qilmoqda",
        war: "Urush - do'zaxmi? Yangi harbiy dramalarda, u bir o'lchovli",
        bookcases:
          "Onlayn xarid qilib, o'zingiz yig'ishingiz mumkin bo'lgan kitob javonlari",
        nflStats:
          "Faol NFL o'yinchilari uchun 11 ta hayratlanarli statistika reytingi",
        title: "Musikaning Qayerga Ketayotganini Aytib Beradigan 25 Qo'shiq",
        title1: "Bu Qadimiy Qotillar O'zlariga O'xshashlarni Yeyishadi",
        title2: "Xalqaro Futbolning Sirli O'yi",
        title3: "Qiyin Musiqalarni Odamlarga Qanday O'rgatish Mumkin?",
        section: "Bo'limlar",
        search: "Qidiruv",
        riba: "Janubi-sharqiy Angliyada, oq jarliklar va baliqlar",
        ded: "Siz uchun tavsiya etilgan",
        subs: "Hozir obuna bo'ling",
        storm:
          "Bo'ron Avto savdogarlarini tezkor biznes qilishga majbur qilmoqda",

        chickenFriedSteak:
          "Tovuq-qovurilgan bifshteks uchun, juda ko'p yetarli",
      },
    },
    ru: {
      translation: {
        storm: "Шторм заставляет автодилеров вести быстрый бизнес",
        war: "Война — ад? В новых военных драмах она однообразна",
        bookcases:
          "Книжные полки, которые можно купить онлайн и собрать самостоятельно",
        nflStats:
          "11 удивительных статистических рейтингов для активных игроков НФЛ",
        title: "25 Песен, Которые Показывают, Куда Идет Музыка",
        title1: "Эти Древние Убийцы Едят Своих Сородичей",
        title2: "Человек Тайна Международного Футбола",
        title3: "Как Научить Людей Любить Сложную Музыку",
        section: "Разделы",
        search: "поиск",
        riba: "На юго-востоке Англии, белые утёсы и рыба",
        ded: "Рекомендовано для вас",
        subs: "Подпишитесь сейчас",
        chickenFriedSteak:
          "Для куриного стейка, слишком много — это просто достаточно",
        stormCarDealers: "Шторм заставляет автодилеров вести быстрый бизнес",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
});

export default i18next;
