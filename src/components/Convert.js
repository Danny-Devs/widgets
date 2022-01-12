import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Convert({ text, selected }) {
  const [translation, setTranslation] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: selected.value,
            source: 'en',
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );
      setTranslation(data.data.translations[0].translatedText);
    };
    translate();
  }, [debouncedText, selected]);

  return <div>{translation}</div>;
}

// params: {
//   q: 'input text to translate',
//   target: 'country code',
//   key: 'API key'
// }
