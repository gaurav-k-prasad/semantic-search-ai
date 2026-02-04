import { Search } from "../search";

export default function Header({ className = "" }) {
  return (
    <div className={className}>
      <div className="p-2 flex justify-between gap-5">
        <div className="w-20 bg-gray-600">Image</div>
        <Search className="w-1/2 max-md:flex-1 max-w-150" />
      </div>
    </div>
  );
}
