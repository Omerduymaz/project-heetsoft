import { useState } from 'react';
import { Search } from 'lucide-react';
import ProcedureFilters from '../components/procedures/ProcedureFilters';
import ProcedureCard from '../components/procedures/ProcedureCard';

const procedures = [
  {
    id: '1',
    title: 'Lawyer - North Macedonia',
    organization: 'Registry of the European Court of Human Rights',
    refNumber: 'e/5/2024',
    location: 'Strasbourg',
    deadline: '25/02/2024',
    type: 'International Recruitment',
    applicants: 10,
    shortlisting: 6,
    finalList: 4,
  },
  {
    id: '2',
    title: 'Lawyer - United Kingdom',
    organization: 'Registry of the European Court of Human Rights',
    refNumber: 'e/4/2024',
    location: 'Strasbourg',
    deadline: '26/02/2024',
    type: 'International Recruitment',
    applicants: 189,
    shortlisting: 28,
    finalList: 5,
  },
  {
    id: '3',
    title: 'Director of Human Rights',
    organization: 'Directorate General of Human Rights and Rule of Law (DGI)',
    refNumber: 'e/2/2024',
    location: 'Strasbourg',
    deadline: '14/02/2024',
    type: 'International Recruitment',
    applicants: 56,
    shortlisting: 5,
    finalList: 1,
  },
  {
    id: '4',
    title: 'Assistant Lawyer - Ireland or United Kingdom',
    organization: 'Registry of the European Court of Human Rights',
    refNumber: 'e/2/2024',
    location: 'Strasbourg',
    deadline: '12/02/2024',
    type: 'International Recruitment',
    applicants: 12,
    shortlisting: 0,
    finalList: 0,
  },
  {
    id: '5',
    title: 'Project Assistans',
    organization: 'Council of Europe Office in Chisinau',
    refNumber: 'o/6/2024',
    location: 'Chisinau',
    deadline: '22/02/2024',
    type: 'Local Recruitment',
    applicants: 45,
    shortlisting: 5,
    finalList: 2,
  },
  {
    id: '6',
    title: 'Project Assistans',
    organization: 'Council of Europe Office in Yerevan',
    refNumber: 'o/5/2024',
    location: 'Strasbourg',
    deadline: '14/02/2024',
    type: 'Local Recruitment',
    applicants: 124,
    shortlisting: 7,
    finalList: 3,
  },
  {
    id: '7',
    title: 'Traineeships - March 2024',
    organization: '',
    refNumber: '',
    location: 'Yerevan',
    deadline: '01/10/2024 - 28/02/2025',
    type: 'Traineeships',
    applicants: 1684,
    shortlisting: 108,
    finalList: 3,
  },
  {
    id: '8',
    title: 'Election Observation Officer',
    organization: 'Secretariat of the Congress of Local and Regional Authorities Department of Statutory Activities',
    refNumber: 'S/1/2024',
    location: 'Strasbourg',
    deadline: '26/02/2024',
    type: 'Secondments',
    applicants: 45,
    shortlisting: 6,
    finalList: 2,
  },
  {
    id: '9',
    title: 'Programme Manager',
    organization: 'Directorate General of Human Rights and Rule of Law (DGI)Digital Development and Governance Department - Data Protection Unit',
    refNumber: 'S/1/2024',
    location: 'Strasbourg',
    deadline: '15/03/2024',
    type: 'Secondments',
    applicants: 68,
    shortlisting: 16,
    finalList: 3,
  },
  {
    id: '10',
    title: 'Programme Manager on police Matters',
    organization: 'Directorate General of Human Rights and Rule of Law (DGI) Co-operation in Police and Deprivation of Liberty Division(CPDL)',
    refNumber: 'S/3/2024',
    location: 'Strasbourg',
    deadline: '15/03/2024',
    type: 'Secondments',
    applicants: 105,
    shortlisting: 27,
    finalList: 1,
  },
  {
    id: '11',
    title: 'Varius',
    organization: 'Office Wide',
    refNumber: 't/3/2023',
    location: 'Strasbourg',
    deadline: '31/03/2024',
    type: 'Temporary',
    applicants: 707,
    shortlisting: 124,
    finalList: 15,
  },
]

const initialFilters = [
  { id: 'international', label: 'International Recruitment', checked: false },
  { id: 'local', label: 'Local Recruitment', checked: false },
  { id: 'traineeships', label: 'Traineeships', checked: false },
  { id: 'secondments', label: 'Secondments', checked: false },
  { id: 'temporary', label: 'Temporary', checked: false },
]

export default function Procedures() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilters, setTypeFilters] = useState(initialFilters);
  const [activeTab, setActiveTab] = useState('active');

  const handleTypeFilterChange = (id: string) => {
    setTypeFilters(typeFilters.map(filter => 
      filter.id === id ? { ...filter, checked: !filter.checked } : filter
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-900">APPLICANTS TRACKING SYSTEM</h1>
          <h2 className="text-lg font-medium text-gray-700 mt-1">PROCEDURES</h2>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <div className="w-64 flex-shrink-0">
            <ProcedureFilters
              typeFilters={typeFilters}
              onTypeFilterChange={handleTypeFilterChange}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="flex space-x-4 mb-4">
              <button
                className={`px-4 py-2 text-sm font-medium rounded-lg ${
                  activeTab === 'active'
                    ? 'bg-[#FF0844] text-white'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('active')}
              >
                Active({procedures.length})
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-lg ${
                  activeTab === 'passive'
                    ? 'bg-[#FF0844] text-white'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('passive')}
              >
                Passive(5)
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-lg ${
                  activeTab === 'archived'
                    ? 'bg-[#FF0844] text-white'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('archived')}
              >
                Archived(1)
              </button>
            </div>

            {/* Search */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search Procedures Name or Ref. Number"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF0844] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* Procedures List */}
            <div className="space-y-4">
              {procedures.map((procedure) => (
                <ProcedureCard key={procedure.id} procedure={procedure} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}