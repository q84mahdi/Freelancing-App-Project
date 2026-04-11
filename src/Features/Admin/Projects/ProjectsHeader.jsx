import useCategories from "../../../Hooks/useCategories";
import FilterButton from "../../../UI/FilterButton";
import FilterDropDown from "../../../UI/FilterDropDown";
import Filters from "../../../UI/Filters";

function ProjectsHeader() {
  const { transformedCategories } = useCategories();

  return (
    <div className="mb-8 flex items-center justify-between">
      <h1 className="text-xl font-black text-secondary-700">لیست پروژه ها</h1>

      <Filters>
        <FilterDropDown
          filterField="category"
          options={[
            {
              label: "همه دسته بندی ها",
              value: "ALL",
            },
            ...transformedCategories,
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

        <FilterButton
          filterField="status"
          title="وضعیت :"
          options={[
            {
              label: "همه",
              value: "ALL",
            },
            {
              label: "باز",
              value: "OPEN",
            },
            {
              label: "بسته",
              value: "CLOSED",
            },
          ]}
        />
      </Filters>
    </div>
  );
}
export default ProjectsHeader;
