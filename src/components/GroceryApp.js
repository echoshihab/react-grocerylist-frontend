import React, { Fragment } from "react";
import AddGrocery from "./AddGrocery";
import Grocerylist from "./Grocerylist";

export default function GroceryApp() {
  return (
    <Fragment>
      <AddGrocery />
      <Grocerylist />
    </Fragment>
  );
}
