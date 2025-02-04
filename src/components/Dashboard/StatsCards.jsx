import React from 'react';
import { Bug, AlertTriangle, CheckCircle, AlertCircle   } from 'lucide-react';

const StatsCards = () => {
  return (
    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
      <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div className="p-3 mr-4 text-red-500 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-500">
          <Bug className="w-5 h-5" />
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Bugs Reported</p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">42</p>
        </div>
      </div>
      <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div className="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-500">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">In Progress</p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">17</p>
        </div>
      </div>
      <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
          <CheckCircle className="w-5 h-5" />
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Resolved</p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">85</p>
        </div>
      </div>
      <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div className="p-3 mr-4 text-purple-500 bg-purple-100 rounded-full dark:text-purple-100 dark:bg-purple-500">
          <AlertCircle   className="w-5 h-5" />
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Critical</p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">5</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
