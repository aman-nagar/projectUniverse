// CsvGenerator.tsx

import React from 'react';
import Papa from 'papaparse';

interface CsvGeneratorProps {
  products: Array<any>;
}

const CsvGenerator: React.FC<CsvGeneratorProps> = ({ products }) => {
  const generateCSV = () => {
    if (!products) {
      console.error('Products array is undefined.');
      return;
    }

    const csvData = Papa.unparse(products);

    // Create a Blob from the CSV data
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });

    // Create a download link
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = `products.csv`;

    // Trigger the download
    link.click();

    // Clean up
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h2>All Products</h2>
      {products ? (
        <div>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
          <button onClick={generateCSV}>Generate CSV</button>
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default CsvGenerator;
