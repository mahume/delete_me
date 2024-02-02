import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import {en, de} from './index.ts'

export const defaultNS = "main";
export const resources = {
    en: {
        main: en.main,
        button: en.button,
        copy: en.copy,
    },
    de: {
        main: de.main,
        button: de.button,
        copy: de.copy,
    },
} as const;

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        ns: ["button", "copy", "main"],
        defaultNS,
        fallbackLng: 'en',
        supportedLngs: ['en', 'de', 'fr', 'es'],
        nonExplicitSupportedLngs: true,
        resources,
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['querystring', 'navigator'],
            lookupQuerystring: 'lng',
        },
        react: {
            bindI18n: 'languageChanged',
            bindI18nStore: '',
            transEmptyNodeValue: '',
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
            useSuspense: false,
        },
    });

export default i18n;
