import { XCircleIcon } from "@heroicons/react/solid";

export const Alert = ({ alert, handleClose }) => {
  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 5000);
  }

  const alertBackground =
    alert.type === "success" ? "bg-green-100" : "bg-red-100";

  return (
    <>
      {alert?.active && (
        <div className={`${alertBackground} p-5 w-full rounded mb-8`}>
          <div className="flex space-x-3">
            <div className="flex-1 leading-tight text-sm text-black font-medium">
              {alert.message}
            </div>
            <button type="button">
              <XCircleIcon
                className="w-6 h-6 text-gray-600"
                onClick={handleClose}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
