import FilterDropDown from "../../../UI/FilterDropDown";
import Filters from "../../../UI/Filters";

function UsersHeader() {
  return (
    <div className="mb-8 flex items-center justify-between md:px-4">
      <h1 className="text-xl font-black text-secondary-700">لیست کاربران</h1>

      <Filters>
        <FilterDropDown
          filterField="role"
          options={[
            {
              label: "همه نقش ها",
              value: "ALL",
            },
            {
              label: "ادمین",
              value: "ADMIN",
            },
            {
              label: "کارفرما",
              value: "OWNER",
            },
            {
              label: "فریلنسر",
              value: "FREELANCER",
            },
          ]}
        />

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
              label: "در انتطار تایید",
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
export default UsersHeader;
