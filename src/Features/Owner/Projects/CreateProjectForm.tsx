import { useForm } from "react-hook-form";
import { useState } from "react";
import useCategories from "../../../Hooks/useCategories";
import RHFTextFieldInput from "../../../UI/RHFTextFieldInput";
import RHFSelectOption from "../../../UI/RHFSelectOption";
import TagInputField from "../../../UI/TagInputField";
import Loader from "../../../UI/Loader";
import type { Value } from "react-multi-date-picker";
import useCreateProject from "./useCreateProject";
import useEditProject from "./useEditProject";
import DatePickerField from "../../../UI/DatePickerField";

interface CreateProjectFormProps {
  onClose: () => void;
  projectToEdit?: {
    _id: string;
    title: string;
    description: string;
    budget: number;
    category: string;
    tags: string[];
    deadline: string;
  };
}

interface CreateProjectValues {
  title: string;
  description: string;
  budget: number;
  category: string;
}

function CreateProjectForm({ onClose, projectToEdit }: CreateProjectFormProps) {
  const editId = projectToEdit?._id;

  const {
    title,
    description,
    budget,
    category,
    tags: prevTags,
    deadline,
  } = projectToEdit || {};

  let editValues = {};
  if (editId) {
    editValues = {
      title,
      description,
      budget,
      category,
    };
  }

  const newDate = new Date();

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState<Value>(new Date(deadline || newDate));

  const { data } = useCategories();
  const categories =
    data &&
    data.categories.map((category) => ({
      label: category.title,
      value: category._id,
    }));

  const { isPending: isCreating, mutate: createProject } = useCreateProject();
  const { isPending: isEditing, mutate: editProject } = useEditProject();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateProjectValues>({ defaultValues: editValues });

  const onSubmit = (data: CreateProjectValues) => {
    const deadline = new Date(date as Date).toISOString();
    const newProject = { ...data, tags, deadline };

    if (editId) {
      editProject(
        { id: editId, data: newProject },
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
      <RHFTextFieldInput
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

      <RHFTextFieldInput
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

      <RHFTextFieldInput
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

      {categories && (
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
      )}

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
