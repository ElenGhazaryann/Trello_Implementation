import { useEffect } from "react";

function useCloseModal(ref, cb = () => null) {
  const handleModal = (e) => {
    console.dir(e.target);
    if (!ref.current.contains(e.target.innertext)) {
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
