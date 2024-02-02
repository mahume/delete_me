import resources from './locales';
import { defaultNS } from "../locales/i18n.ts";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources;
  }
}
