import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ProductItems } from './ProductItems';

export default function ProductGrid() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
            <ProductItems/>
      </Container>
    </React.Fragment>
  );
}