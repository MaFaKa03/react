import logo from "./logo.svg";
import "./App.css";
import "./CurrentTime";
import CurrentTime from "./CurrentTime";
import EventCard from "./EventCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CurrentTime />
          <EventCard
            title="'Концерт группы Крутая группа'"
            date="22 октября 2024, 19:00"
            location="Москва, Крокус Сити Холл"
          />
          <EventCard
            title="'Выставка 'Мир Динозавров'"
            date="5 ноября 2024, 10:00"
            location="Санкт-Петербург, Экспофорум"
          />
          <EventCard
            title="'Фестиваль еды 'Вкусная осень'"
            date="12 ноября 2024, 12:00"
            location="Нижний Новгород, Парк культуры и отдыха"
          />
        </a>
      </header>
    </div>
  );
}

export default App;
