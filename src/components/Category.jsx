import React from "react";
import DisplayCategory from "./category/DisplayCategory";
import ComponentsCategory from "./category/ComponentsCategory";
import LaptopCategory from "./category/LaptopCategpry";

export default function Category() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <LaptopCategory/>
        <DisplayCategory/>
        <ComponentsCategory/>
      </section>
    </div>
  );
}
