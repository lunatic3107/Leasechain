import React from 'react';
import { Search, FileX, AlertCircle, Inbox } from 'lucide-react';

interface EmptyStateProps {
  type: 'search' | 'no-data' | 'error' | 'default';
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const icons = {
  search: <Search size={48} />,
  'no-data': <Inbox size={48} />,
  error: <AlertCircle size={48} />,
  default: <FileX size={48} />,
};

export function EmptyState({ type, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="text-gray-300 mb-4">
        {icons[type]}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-gray-600 text-sm max-w-md mb-6">
          {description}
        </p>
      )}
      {action && (
        <button
          onClick={action.onClick}
          className="btn-primary"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
