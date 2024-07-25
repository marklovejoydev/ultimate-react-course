import Card from "./components/card";

function App() {
  const data = {
    name: "Mark Lovejoy",
    about:
      "Software developer at Deloitte. When not coding, I like to play games and stream on Twitch.",
  };
  return (
    <div>
      <Card data={data} />
    </div>
  );
}

export default App;
