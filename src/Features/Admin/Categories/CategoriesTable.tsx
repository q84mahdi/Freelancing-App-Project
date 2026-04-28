import useCategories from "../../../Hooks/useCategories";
import Empty from "../../../UI/Empty";
import Loader from "../../../UI/Loader";
import Table from "../../../UI/Table";
import CategoryRow from "./CategoryRow";

function CategoriesTable() {
  const { isLoading, data } = useCategories();

  if (isLoading || !data) return <Loader />;

  if (!data.categories.length) return <Empty resourceName={"دسته بندی"} />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان دسته بندی</th>
        <th>توضیحات</th>
        <th>عنوان انگلیسی</th>
        <th>نوع</th>
        <th>عملیات</th>
      </Table.Header>

      <Table.Body>
        {data.categories.map((category, index) => (
          <CategoryRow key={category._id} category={category} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default CategoriesTable;
