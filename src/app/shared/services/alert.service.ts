import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  confirmDelete(title: string = '¿Estás seguro?', text: string = 'No podrás revertir esto.') {
    return Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });
  }

  success(message: string = 'Operación exitosa') {
    return Swal.fire({
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
  }

  error(message: string = 'Ocurrió un error') {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message
    });
  }
}
