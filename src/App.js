import SearchBar from "./components/SearchBar";
import Info from "./components/Info";
import Map from "./components/Map";

function App() {
  return (
    <main>
      <header>
        <h1>IP Address Tracker</h1>
        <SearchBar />
        <Info />
      </header>
      <Map />
    </main>
  );
}

export default App;
