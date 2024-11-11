type FilterOption = {
  id: string;
  label: string;
  checked: boolean;
};

type ProcedureFiltersProps = {
  typeFilters: FilterOption[];
  onTypeFilterChange: (id: string) => void;
};

export default function ProcedureFilters({ typeFilters, onTypeFilterChange }: ProcedureFiltersProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Type of recruitment</h3>
        {typeFilters.map((filter) => (
          <label key={filter.id} className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={filter.checked}
              onChange={() => onTypeFilterChange(filter.id)}
              className="rounded border-gray-300 text-[#FF0844] focus:ring-[#FF0844]"
            />
            <span className="text-sm text-gray-600">{filter.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}