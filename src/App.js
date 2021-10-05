import React from "react";
import products from './products.json';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css';
import "./style.css";

export default function App() {
  return (
      <Grid
        data={products}>
        <GridColumn field="ProductName" />
        <GridColumn field="UnitPrice" />
        <GridColumn field="UnitsInStock" />
        <GridColumn field="Discontinued" />
      </Grid>
  );
}
