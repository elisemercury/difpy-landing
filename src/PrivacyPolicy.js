import React from 'react';
import { Shield } from 'lucide-react';
import Header from './Header';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Header showGithubLink={false} />

      <div className="max-w-2xl mx-auto px-4 mt-20">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 mx-auto">
            <Shield className="w-6 h-6 text-purple-600" />
          </div>
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            difPy for Desktop Privacy Policy
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              No data shared with us will be given to any third party, under any circumstances. 
              Your data will also never be used by us for any purpose without specific permission.
            </p>
            <p>
              The app engages in no ad targeting, data mining, or other activities that may 
              compromise your privacy, and we do not affiliate ourselves with any third parties 
              that do so.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;