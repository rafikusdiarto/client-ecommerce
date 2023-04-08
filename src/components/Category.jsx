import React from "react";
import LaptopCategpry from "./category/LaptopCategpry";
import DisplayCategory from "./category/DisplayCategory";
import ComponentsCategory from "./category/ComponentsCategory";

export default function Category() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <LaptopCategpry/>
        <DisplayCategory/>
        <ComponentsCategory/>
      </section>
    </div>
  );
}
