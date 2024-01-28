// CollectionsList.tsx
import React from 'react';

interface CollectionsListProps {
  collections: Array<{ id: number; title: string }>;
  onCollectionClick: (collection: { id: number; title: string }) => void;
}

const CollectionsList: React.FC<CollectionsListProps> = ({ collections, onCollectionClick }) => {
  return (
    <div className="my-4">
      <h2 className="text-xl font-bold">Collections</h2>
      <ul className="list-disc pl-6">
        {collections.map((collection) => (
          <li
            key={collection.id}
            onClick={() => onCollectionClick(collection)}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            {collection.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionsList;
