import FilterDropDown from "../../../UI/FilterDropDown";
import Filters from "../../../UI/Filters";

function ProposalsHeader() {
  return (
    <div className="mb-8 flex items-center justify-between px-4">
      <h1 className="text-xl font-black text-secondary-700">لیست درخواست ها</h1>

      <Filters>
        <FilterDropDown
          filterField="status"
          options={[
            {
              label: "همه وضعیت ها",
              value: "ALL",
            },
            {
              label: "تایید شده",
              value: "2",
            },
            {
              label: "در انتظار تایید",
              value: "1",
            },
            {
              label: "رد شده",
              value: "0",
            },
          ]}
        />

        <FilterDropDown
          filterField="sort"
          options={[
            {
              label: "قدیمی ترین",
              value: "earliest",
            },
            {
              label: "جدید ترین",
              value: "latest",
            },
          ]}
        />
      </Filters>
    </div>
  );
}
export default ProposalsHeader;
