// ShopifyApiComponent.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApiInput from './ApiInput';
import CollectionsList from './CollectionsList';
import CsvGenerator from './CsvGenerator';

const ShopifyApiComponent: React.FC = () => {
    const [apiUrl, setApiUrl] = useState('');
    const [collections, setCollections] = useState<Array<{ id: number; title: string }>>([]);
    const [selectedCollection, setSelectedCollection] = useState<{ id: number; title: string } | null>(null);
    const [products, setProducts] = useState<Array<any>>([]);
  
    const handleApiUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setApiUrl(event.target.value);
    };
  
    const fetchCollections = async () => {
      try {
        const response = await axios.get(`${apiUrl}/collections`);
        setCollections(response.data);
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    };
  
    const fetchProducts = async () => {
      try {
        const response = await axios.get(apiUrl);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    useEffect(() => {
      if (apiUrl) {
        fetchCollections();
        fetchProducts();
      }
    }, [apiUrl]);
  
    const handleCollectionClick = (collection: { id: number; title: string }) => {
      setSelectedCollection(collection);
    };
  
    return (
      <div>
        <ApiInput
          apiUrl={apiUrl}
          onApiUrlChange={handleApiUrlChange}
          onFetchCollections={fetchCollections}
        />
  
        {(collections.length > 0 || products.length > 0) && (
          <div>
            {collections.length > 0 && (
              <CollectionsList collections={collections} onCollectionClick={handleCollectionClick} />
            )}
  
            {products.length > 0 && !collections.length && (
              <CsvGenerator products={products} />
            )}
  
            {collections.length === 0 && products.length === 0 && (
              <p>No products available.</p>
            )}
          </div>
        )}
      </div>
    );
  };
  
  export default ShopifyApiComponent;
  