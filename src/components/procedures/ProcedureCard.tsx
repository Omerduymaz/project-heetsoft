import { Calendar, MapPin } from 'lucide-react';

type ProcedureCardProps = {
  procedure: {
    id: string;
    title: string;
    organization: string;
    refNumber: string;
    location: string;
    deadline: string;
    type: string;
    applicants: number;
    shortlisting: number;
    finalList: number;
  };
};

export default function ProcedureCard({ procedure }: ProcedureCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900">{procedure.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{procedure.organization}</p>
          <p className="text-xs text-gray-500 mt-1">Ref Number: {procedure.refNumber}</p>
          
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              {procedure.location}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-1" />
              {procedure.deadline}
            </div>
          </div>
          
          <div className="mt-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {procedure.type}
            </span>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-50 rounded-lg flex flex-col items-center justify-center">
              <span className="text-lg font-semibold text-amber-700">{procedure.applicants}</span>
              <span className="text-xs text-amber-600">Applicants</span>
            </div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-50 rounded-lg flex flex-col items-center justify-center">
              <span className="text-lg font-semibold text-green-700">{procedure.shortlisting}</span>
              <span className="text-xs text-green-600">Shortlisting</span>
            </div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-lg flex flex-col items-center justify-center">
              <span className="text-lg font-semibold text-blue-700">{procedure.finalList}</span>
              <span className="text-xs text-blue-600">Final List</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}