//import { Fragment } from "react";
//import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; // !! new prop added to the interface
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // let selectedIndex = 0; // !! local variable, thats why we need the useState hook to make it a state variable
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // let items = [];
  // no need for this: if (items.length === 0) return <p>There are no items.</p>;
  // or this: const emptyMessage = <p>There are no items.</p>;
  const getEmptyMessage = () => {
    return items.length === 0 ? <p>There are no items.</p> : null;
  };

  // event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    // A component in react cannot return more than one html element.
    //<Fragment>
    <>
      <h1>{heading}</h1>
      {getEmptyMessage()}
      {items.length === 0 && <p>Please Add Items to View.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>

    //</Fragment>
  );
}

export default ListGroup;
