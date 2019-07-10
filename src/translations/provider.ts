import { messages } from './messages';

let loca = 'en';

export const initLocale = (lang: string) => {
  loca = lang;
};

export const getTranslatedLabel = (key: string): string => {
  if (messages[loca] && messages[loca][key]) {
    return messages[loca][key];
  }
  return `key-not-found [${key}]`;
};
