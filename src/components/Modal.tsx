
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg max-w-sm w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-lg font-bold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

