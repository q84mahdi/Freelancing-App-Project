import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../../UI/AppLayout";
import CustomNavlink from "../../UI/CustomNavlink";
import Sidebar from "../../UI/Sidebar";

function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavlink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavlink>

        <CustomNavlink to="projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavlink>
      </Sidebar>
    </AppLayout>
  );
}
export default OwnerLayout;
