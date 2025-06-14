// src/utils/toast.ts
import Swal from 'sweetalert2';

export const successToaster = (message: string) => {
    Swal.fire({
        toast: true,
        icon: 'success',
        title: message,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        showCloseButton: true,
    });
};

export const errorToaster = (message: string) => {
    Swal.fire({
        toast: true,
        icon: 'error',
        title: message,
        position: 'top-end',
        showConfirmButton: false,
        showCloseButton: true,
        timer: 2000,
        timerProgressBar: true,
    });
};

export const confirmPopup = (text: string) => {

    return Swal.fire({
        title: 'Are you sure?',
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, logout!',
        cancelButtonText: 'Cancel',
    })
}
