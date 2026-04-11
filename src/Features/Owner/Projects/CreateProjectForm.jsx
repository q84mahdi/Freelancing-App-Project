import { useForm } from "react-hook-form";
import TextFieldInput from "../../UI/TextFieldInput";
import RHFSelectOption from "../../UI/RHFSelectOption";
import TagInputField from "../../UI/TagInputField";
import { useState } from "react";
import DatePickerField from "../../UI/DatePickerField";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import useCategories from "../../Hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loader from "../../UI/Loader";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const editId = projectToEdit._id;
  const isEditSession = Boolean(editId);

  const {
    title,
    description,
    budget,
    category,
    tags: prevTags,
    deadline,
  } = projectToEdit;

  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const newDate = new Date();

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || newDate));

  const { categories } = useCategories();

  const { isCreating, createProject } = useCreateProject();
  const { isEditing, editProject } = useEditProject();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: editValues });

  const onSubmit = (data) => {
    const deadline = new Date(date).toISOString();
    const newProject = { ...data, tags, deadline };

    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose(), reset();
          },
        },
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <TextFieldInput
        label="عنوان"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "نوشتن عنوان پروژه ضروری می باشد",
          minLength: {
            value: 3,
            message: "عنوان پروژه باید بیشتر از ۳ کارکتر باشد",
          },
        }}
        errors={errors}
      />

      <TextFieldInput
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "نوشتن توضیحات پروژه ضروری می باشد",
          maxLength: {
            value: 200,
            message: "توضیحات پروژه باید کمتر از ۲۰۰ کارکتر باشد",
          },
        }}
        errors={errors}
      />

      <TextFieldInput
        label="بودجه"
        name="budget"
        register={register}
        required
        validationSchema={{
          required: "نوشتن بودجه پروژه ضروری می باشد",
        }}
        errors={errors}
        type="number"
      />

      <RHFSelectOption
        label="دسته بندی"
        name="category"
        options={categories}
        register={register}
        required
        validationSchema={{
          required: "حتما باید یک دسته بندی را انتخاب کنید",
        }}
        errors={errors}
      />

      <TagInputField
        label="تگ ها"
        name="tags"
        value={tags}
        onChange={setTags}
      />

      <DatePickerField
        label="ددلاین"
        name="deadline"
        date={date}
        setDate={setDate}
        calender={persian}
        locale={persian_fa}
        format="YYYY/MM/DD"
      />

      {isCreating || isEditing ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary !mb-4 w-full">
          تایید
        </button>
      )}
    </form>
  );
}
export default CreateProjectForm;
