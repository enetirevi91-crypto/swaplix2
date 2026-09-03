import React from 'react';
import './App.css';

const TG_URL = "https://t.me/SWAP_LIX";
const TG_CHANNEL = "https://t.me/+2ktARr9AH1Q4YjI0";

function TelegramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.5 3.5L2.5 11l5.5 2 2 6 3-3.5 5 4 3.5-16zM10 14l8-7-10 6.5z" />
    </svg>
  );
}

function App() {
  return (
    <div className="App">
      <div className="warning-bar">
        ⚠️ Важно: перевод средств осуществляется только при личном визите. Наши сотрудники никогда не попросят вас отправить криптовалюту заранее.
      </div>
      
      <div className="container">
        <div className="logo">
          <div className="logo-icon">
            <span className="logo-b">S</span>
            <span className="logo-r">L</span>
          </div>
          <div className="logo-text">SWAP LIX</div>
          <div className="logo-sub">обмен криптовалют</div>
        </div>
        
        <h1>Обмен криптовалют<br />по самым выгодным курсам</h1>
        
        <p className="subtitle">
          Обмен USDT, BTC и других криптовалют без скрытых комиссий. 
          Сделка проходит только при личном визите в кассу.
        </p>
        
        <div className="benefits">
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            Без верификаций
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            Перевод только на кассе
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            Бонусы новым клиентам
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            Фиксация курса
          </div>
        </div>

        <p className="telegram-info">
          Курсы в нашем Telegram-канале
        </p>
        
        <a href={TG_URL} target="_blank" rel="noopener noreferrer" className="button">
          Получить актуальный курс
        </a>
        
        <p className="work-hours">
          Актуальный курс уточняйте у менеджера<br />
          Работаем ежедневно с 09:00 до 20:00<br />
          Служба поддержки 24/7
        </p>
      </div>
      
      <footer className="footer">
        <div className="footer-inner">
          <span className="copyright">© 2024 SWAP LIX</span>
          <a href={TG_CHANNEL} target="_blank" rel="noopener noreferrer" className="footer-link">
            Больше информации у нас на канале SWAP LIX
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;