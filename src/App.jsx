import React, { useRef } from 'react';
import './App.css';
import Countdown from './Countdown';

function App() {
  const ref = useRef();
  
  return (
    <>
      <div className='background'>
        <div className='content'>
          <span className='end'>Выпускной через:</span>
          <Countdown targetDate={'2024-06-28T17:00'}/>
          <p className='text-block'>
            <span className='title'>Любимая Татьяна Алексеевна!</span>
            <span className='subtitle'>Исп-41 приглашает Вас разделить с нами выпускной вечер)</span>
          </p>
          <div className='place'>
            <a href="https://yandex.ru/maps/org/chacha/74169343589/?ll=36.248567%2C54.515790&z=16.66">📍 Ресторан "Чача", ул. Кирова, 7А</a>
            <time dateTime="2024-06-28T17:00">⏰ 28.06.2024 в 17:00</time>
          </div>
          <br />
          <span className='mood'>Не забудьте взять с собой хорошее настроение!</span>
        </div>
      </div>
    </>
  );
}

export default App;
