// ApiInput.tsx
import React from 'react';

interface ApiInputProps {
  apiUrl: string;
  onApiUrlChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFetchCollections: () => void;
}

const ApiInput: React.FC<ApiInputProps> = ({ apiUrl, onApiUrlChange, onFetchCollections }) => {
  return (
    <div className="my-4">
      <label className="block text-sm font-medium text-gray-700">
        Shopify API URL:
        <input
          type="text"
          value={apiUrl}
          onChange={onApiUrlChange}
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </label>
      <button onClick={onFetchCollections} className="mt-2 bg-blue-500 text-white p-2 rounded-md">
        Fetch Collections
      </button>
    </div>
  );
};

export default ApiInput;
