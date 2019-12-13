import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import lngResources from './resources';

const resources = lngResources;

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18next;