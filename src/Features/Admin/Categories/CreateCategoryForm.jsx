import { useForm } from "react-hook-form";
import TextFieldInput from "../../../UI/TextFieldInput";
import Loader from "../../../UI/Loader";
import useCreateCategory from "./useCreateCategory";
import useEditCategory from "./useEditCategory";

function CreateCategoryForm({ onClose, categoryToEdit = {} }) {
  const editId = categoryToEdit._id;
  const isEditSession = Boolean(editId);

  const { title, description, englishTitle, type } = categoryToEdit;

  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      description,
      englishTitle,
      type,
    };
  }

  const { isCreating, createCategory } = useCreateCategory();
  const { isEditing, editCategory } = useEditCategory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: isEditSession ? editValues : { type: "project" } });

  const onSubmit = (data) => {
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
      <TextFieldInput
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

      <TextFieldInput
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

      <TextFieldInput
        label="عنوان انگلیسی"
        name="englishTitle"
        register={register}
        required
        validationSchema={{
          required: "نوشتن عنوان انگلیسی ضروری می باشد",
        }}
        errors={errors}
      />

      <TextFieldInput
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
