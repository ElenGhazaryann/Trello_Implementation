import { useEffect } from "react";

function useCloseModal(ref, cb = () => null) {
  const handleModal = (e) => {
    if (!ref.current.contains(e.target)) {
      cb()
    }
  };

  useEffect(() => {
    if (ref.current) {
      window.addEventListener("click", handleModal);
    }
    return () => window.removeEventListener("click", handleModal);
  }, [ref]);
}

export default useCloseModal;
