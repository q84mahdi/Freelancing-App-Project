import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../../UI/AppLayout";
import CustomNavlink from "../../UI/CustomNavlink";
import Sidebar from "../../UI/Sidebar";
import { AiFillProduct } from "react-icons/ai";

function FreelancerLayout() {
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

          <CustomNavlink to="proposals">
            <AiFillProduct />
            <span>درخواست ها</span>
          </CustomNavlink>
        </Sidebar>
      </AppLayout>
    );
}
export default FreelancerLayout