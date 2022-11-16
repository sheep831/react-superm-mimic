import React from "react";
import { useOutletContext } from "react-router-dom";

export default function ProductNutrition() {
  const context: any = useOutletContext();

  return (
    <table>
      <thead>
        <tr>
          <th>Nutrient</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
      </tbody>
    </table>
  );
}
