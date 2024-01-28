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
    <div className="my-4">
      <h2 className="text-xl font-bold">All Products</h2>
      {products ? (
        <div>
          <ul className="list-disc pl-6">
            {products.map((product) => (
              <li key={product.id} className="text-gray-700">
                {product.title}
              </li>
            ))}
          </ul>
          <button onClick={generateCSV} className="mt-2 bg-green-500 text-white p-2 rounded-md">
            Generate CSV
          </button>
        </div>
      ) : (
        <p className="text-gray-700">No products available.</p>
      )}
    </div>
  );
};

export default CsvGenerator;
