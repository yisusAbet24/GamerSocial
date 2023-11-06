const { createApp } = Vue;

createApp({
  data() {
    return {
      screen: 0,
      formData: {
        username: "",
        email: "",
        password: "",
      },
      token: "",
    };
  },
  methods: {
    changeScreen(newScreen) {
      this.screen = newScreen;
    },
    registerUser() {
      // Datos de registro
      const registroData = {
        nombre_usuario: this.formData.username,
        correo: this.formData.email,
        contraseña: this.formData.password,
        // Otros datos de registro si es necesario
      };

      // Realizar la solicitud de registro
      fetch("https://99e0-200-68-172-17.ngrok-free.app/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registroData),
      })
        .then((response) => response.json())
        .then((data) => {
          this.token = data.token;
          console.log("Registro exitoso. Token de autenticación:", this.token);
          // Puedes redirigir o realizar otras acciones después del registro
        })
        .catch((error) => {
          console.error("Error en el registro:", error);
        });
    },
  },
  created() {
    // Lógica de inicialización si es necesaria
  },
}).mount("#app");
