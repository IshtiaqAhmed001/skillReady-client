// src/hooks/useAlert.js
import Swal from "sweetalert2";
import { useCallback } from "react";

const useAlert = () => {
  const showAlert = useCallback((type, message) => {
    Swal.fire({
      icon: type,
      title: message,
      timer: 2000,
      showConfirmButton: false,
      position: "center",
    });
  }, []);

  return showAlert;
};

export default useAlert;
