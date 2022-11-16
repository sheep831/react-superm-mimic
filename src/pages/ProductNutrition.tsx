import React from "react";
import { useOutletContext } from "react-router-dom";
import { NutritionTable } from "../css/Nutrition";

export default function ProductNutrition() {
  const context: any = useOutletContext();
  let nutrition = context.nutrition;

  return (
    <NutritionTable>
      <thead>
        <tr>
          <th>Nutrient</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(nutrition).map((product: any) => (
          <tr>
            <td>{product}</td>
            <td>{nutrition[product]}g</td>
          </tr>
        ))}
        
      </tbody>
    </NutritionTable>
  );
}
