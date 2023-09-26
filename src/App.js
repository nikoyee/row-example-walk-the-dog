import Row from "./Row";
import "./styles.css";

const mockRowData = [
  {
    id: 1,
    status: "booked",
    timeslot: "9am",
    isOwner: true,
    dog: {
      id: 1,
      name: "Fluffy"
    }
  },
  {
    id: 2,
    status: "booked",
    timeslot: "10am",
    isOwner: false
  },
  {
    id: 3,
    status: "available",
    timeslot: "11am",
    isOwner: false
  }
];
export default function App() {
  return (
    <div className="App">
      {mockRowData.map((data) => (
        <Row key={data.id} {...data} />
      ))}
    </div>
  );
}
