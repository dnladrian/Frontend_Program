// Membuat Komponnen Hello
// Component Hello mengembalikan/mencetak UI

function Hello() {
    return (
      <div>
        <h2>Hello React</h2>
        <p>Saya Daniel Frontend Engineer</p>
      </div>
    );
  }
  
  // Akses element yang memiliki id root
  const rootElement = document.getElementById("root");
  
  // Buat React root untuk menampilkan Component di browser
  const root = ReactDOM.createRoot(rootElement);
  
  // Render component Hello ke root
  root.render(<Hello />);