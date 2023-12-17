import React, { useEffect, useMemo } from 'react';
import Writer from '../../js/Writer';
import './_WriterComponent.scss';

const WriterComponent = () => {
  // Memoize the words array
  const words = useMemo(() => ['Integrateur Web', 'Developpeur Web'], []);

  useEffect(() => {
    const txtElement = document.getElementById('make');
     new Writer(txtElement, words, 3000);

    
  }, [words]);

  return <span id='make'></span>;
};


export default WriterComponent;
// const typeWriterInstance =