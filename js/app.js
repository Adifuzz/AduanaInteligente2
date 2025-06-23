function login(event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();
  const rol = document.getElementById("rol").value;

  if (!usuario || !password || !rol) {
    alert("Por favor completa todos los campos.");
    return;
  }

  // Aquí puedes agregar lógica real de autenticación

  // Simular login exitoso: guardar estado en localStorage o sessionStorage
  localStorage.setItem("logueado", "true");
  localStorage.setItem("rol", rol);

  alert(`Usuario: ${usuario} con rol ${rol} autenticado correctamente`);

  // Redirigir a la página principal o trámites
  window.location.href = "index.html";
}

function checkLogin() {
  const logueado = localStorage.getItem("logueado");
  if (!logueado) {
    alert("Debes iniciar sesión para acceder a esta página.");
    window.location.href = "login.html";
  }
}
