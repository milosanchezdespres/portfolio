import en from '@/app/locales/en.json'
import fr from '@/app/locales/fr.json'
import ja from '@/app/locales/ja.json'

export function get_string(locale: string) 
{
  switch (locale) 
  {
    case 'fr': return fr
    case 'ja': return ja
    default: return en
  }
}

