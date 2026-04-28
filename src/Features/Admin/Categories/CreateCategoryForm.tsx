import { useForm } from "react-hook-form";
import Loader from "../../../UI/Loader";
import RHFTextFieldInput from "../../../UI/RHFTextFieldInput";
import useCreateCategory from "./useCreateCategory";
import useEditCategory from "./useEditCategory";

interface CreateCategoryFormProps {
  onClose: () => void;
  categoryToEdit?: {
    _id: string;
    title: string;
    description: string;
    englishTitle: string;
    type: "project";
  };
}

interface CreateCategoryFormValues {
  title: string;
  description: string;
  englishTitle: string;
  type: "project";
}

function CreateCategoryForm({
  onClose,
  categoryToEdit,
}: CreateCategoryFormProps) {
  const editId = categoryToEdit?._id || "";
  const isEditSession = Boolean(editId);

  const { title, description, englishTitle, type } = categoryToEdit || {};

  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      description,
      englishTitle,
      type,
    };
  }

  const { isPending: isCreating, mutate: createCategory } = useCreateCategory();
  const { isPending: isEditing, mutate: editCategory } = useEditCategory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateCategoryFormValues>({
    defaultValues: isEditSession ? editValues : { type: "project" },
  });

  const onSubmit = (data: CreateCategoryFormValues) => {
    const newCategory = { ...data };

    if (isEditSession) {
      editCategory(
        { id: editId, data: newCategory },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        },
      );
    } else {
      createCategory(newCategory, {
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
          required: "نوشتن عنوان دسته بندی ضروری می باشد",
          minLength: {
            value: 3,
            message: "عنوان دسته بندی باید بیشتر از ۳ کارکتر باشد",
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
          required: "نوشتن توضیحات دسته بندی ضروری می باشد",
          maxLength: {
            value: 200,
            message: "توضیحات دسته بندی باید کمتر از ۲۰۰ کارکتر باشد",
          },
        }}
        errors={errors}
      />

      <RHFTextFieldInput
        label="عنوان انگلیسی"
        name="englishTitle"
        register={register}
        required
        validationSchema={{
          required: "نوشتن عنوان انگلیسی ضروری می باشد",
        }}
        errors={errors}
      />

      <RHFTextFieldInput
        label="نوع"
        name="type"
        register={register}
        required
        validationSchema={{
          required: "نوشتن نوع دسته بندی ضروری می باشد",
        }}
        errors={errors}
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
export default CreateCategoryForm;
