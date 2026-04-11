interface ConfirmDeleteProps {
  resourceName: string;
  onClose: () => void;
  onConfirm: () => void;
  disabled: boolean;
}

function ConfirmDelete({
  resourceName,
  onClose,
  onConfirm,
  disabled,
}: ConfirmDeleteProps) {
  return (
    <div>
      <h2 className="mb-8 text-base font-bold">
        آیا از حذف {resourceName} اطمینان دارید ؟
      </h2>

      <div className="flex items-center justify-between gap-x-16">
        <button
          onClick={onClose}
          disabled={disabled}
          className="btn btn--primary flex-1"
        >
          لغو
        </button>

        <button
          onClick={onConfirm}
          disabled={disabled}
          className="btn btn--danger flex-1 py-3"
        >
          تایید
        </button>
      </div>
    </div>
  );
}
export default ConfirmDelete;
