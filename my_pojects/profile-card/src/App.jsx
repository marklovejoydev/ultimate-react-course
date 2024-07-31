import Card from "./components/card";

function App() {
  const data = [
    {
      id: 1,
      name: "Mark Lovejoy",
      about:
        "Software developer at Deloitte. When not coding, I like to play games and stream on Twitch.",
    },
  ];

  return (
    <div>
      {data.map((data) => {
        return <Card data={data} key={data.id} />;
      })}
    </div>
  );
}

export default App;
