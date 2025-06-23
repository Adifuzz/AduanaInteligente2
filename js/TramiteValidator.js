class TramiteValidator {
  constructor(formElement) {
    this.form = formElement;

    // Campos del formulario
    this.propietario = this.form.querySelector('#propietario');
    this.autorizacion = this.form.querySelector('#autorizacion');
    this.documentos = this.form.querySelector('#documentos');
  }

  validarCamposBasicos() {
    const campos = ['nombre', 'rut', 'email', 'telefono', 'patente', 'propietario'];
    for (const id of campos) {
      const el = this.form.querySelector(`#${id}`);
      if (!el || !el.value.trim()) {
        alert(`El campo "${id}" es obligatorio.`);
        el?.focus();
        return false;
      }
    }
    return true;
  }

  validarAutorizacion() {
    // Si no es propietario, debe subir autorización
    if (this.propietario.value === 'no') {
      if (this.autorizacion.files.length === 0) {
        alert('Debe subir la autorización notarial del propietario.');
        this.autorizacion.focus();
        return false;
      }
      if (!this.validarArchivos(this.autorizacion.files)) {
        alert('La autorización tiene archivos no permitidos o muy grandes.');
        this.autorizacion.focus();
        return false;
      }
    }
    return true;
  }

  validarDocumentos() {
    if (this.documentos.files.length === 0) {
      alert('Debe subir los documentos requeridos.');
      this.documentos.focus();
      return false;
    }
    if (!this.validarArchivos(this.documentos.files)) {
      alert('Algunos documentos tienen archivos no permitidos o muy grandes.');
      this.documentos.focus();
      return false;
    }
    return true;
  }

  validarArchivos(files) {
    const tiposPermitidos = ['application/pdf', 'image/jpeg', 'image/png'];
    const tamañoMaxMB = 5;
    for (const file of files) {
      if (!tiposPermitidos.includes(file.type)) return false;
      if (file.size > tamañoMaxMB * 1024 * 1024) return false;
    }
    return true;
  }

  validarTodo() {
    if (!this.validarCamposBasicos()) return false;
    if (!this.validarAutorizacion()) return false;
    if (!this.validarDocumentos()) return false;
    return true;
  }
}
