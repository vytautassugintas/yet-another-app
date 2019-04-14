import React from "react";

import { FoodList } from "./FoodList";

import { foods } from "../shared/foods";

export default function FoodContainer() {
  return (
    <div>
      <FoodList foods={foods} />
    </div>
  );
}
