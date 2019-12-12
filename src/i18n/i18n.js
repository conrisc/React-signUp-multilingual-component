import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en';
import de from './de';


const resources = {
    en,
    de
};

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18next;