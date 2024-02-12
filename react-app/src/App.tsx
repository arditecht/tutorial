import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleAddItem = () => {};
  const handleAddCategory = () => {};

  return (
    <div>
      <Alert>
        <h3>Loaded Successfully</h3>
      </Alert>
      <Button buttonType="primary">Add New Item</Button>
      <Button buttonType="secondary">Add New Category</Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
