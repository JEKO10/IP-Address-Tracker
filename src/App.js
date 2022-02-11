import SearchBar from "./components/SearchBar";
import Map from "./components/Map";

function App() {
  return (
    <main>
      <header>
        <h1>IP Address Tracker</h1>
        <SearchBar />
      </header>
      <Map />
    </main>
  );
}

export default App;
