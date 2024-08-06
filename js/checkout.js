document.addEventListener('DOMContentLoaded', () => {

    const fields = {
        fName: {
            element: document.getElementById("fName"),
            error: document.getElementById("errorName"),
            validate: function() {
                if (this.element && this.error) {
                    const value = this.element.value;
                    if (value.length < 3 || !/^[A-Za-z]+$/.test(value)) {
                        this.element.classList.add('is-invalid');
                        this.element.classList.remove('is-valid');
                        this.error.classList.remove('d-none');
                    } else {
                        this.element.classList.remove('is-invalid');
                        this.element.classList.add('is-valid');
                        this.error.classList.add('d-none');
                    }
                } else {
                    console.error('Element or error not found for fName.');
                }
            }
        },
        fLastN: {
            element: document.getElementById("fLastN"),
            error: document.getElementById("errorLastN"),
            validate: function() {
                if (this.element && this.error) {
                    const value = this.element.value;
                    if (value.length < 3 || !/^[A-Za-z]+$/.test(value)) {
                        this.element.classList.add('is-invalid');
                        this.element.classList.remove('is-valid');
                        this.error.classList.remove('d-none');
                    } else {
                        this.element.classList.remove('is-invalid');
                        this.element.classList.add('is-valid');
                        this.error.classList.add('d-none');
                    }
                } else {
                    console.error('Element or error not found for fLastN.');
                }
            }
        },
        fEmail: {
            element: document.getElementById("fEmail"),
            error: document.getElementById("errorEmail"),
            validate: function() {
                if (this.element && this.error) {
                    const value = this.element.value;
                    if (!/\S+@\S+\.\S+/.test(value)) {
                        this.element.classList.add('is-invalid');
                        this.element.classList.remove('is-valid');
                        this.error.classList.remove('d-none');
                    } else {
                        this.element.classList.remove('is-invalid');
                        this.element.classList.add('is-valid');
                        this.error.classList.add('d-none');
                    }
                } else {
                    console.error('Element or error not found for fEmail.');
                }
            }
        },
        fAddress: {
            element: document.getElementById("fAddress"),
            error: document.getElementById("errorAddress"),
            validate: function() {
                if (this.element && this.error) {
                    const value = this.element.value;
                    if (value.length < 3) {
                        this.element.classList.add('is-invalid');
                        this.element.classList.remove('is-valid');
                        this.error.classList.remove('d-none');
                    } else {
                        this.element.classList.remove('is-invalid');
                        this.element.classList.add('is-valid');
                        this.error.classList.add('d-none');
                    }
                } else {
                    console.error('Element or error not found for fAddress.');
                }
            }
        },
        fPassword: {
            element: document.getElementById("fPassword"),
            error: document.getElementById("errorPassword"),
            validate: function() {
                if (this.element && this.error) {
                    const value = this.element.value;
                    if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}/.test(value)) {
                        this.element.classList.add('is-invalid');
                        this.element.classList.remove('is-valid');
                        this.error.classList.remove('d-none');
                    } else {
                        this.element.classList.remove('is-invalid');
                        this.element.classList.add('is-valid');
                        this.error.classList.add('d-none');
                    }
                } else {
                    console.error('Element or error not found for fPassword.');
                }
            }
        },
        fPhone: {
            element: document.getElementById("fPhone"),
            error: document.getElementById("errorPhone"),
            validate: function() {
                if (this.element && this.error) {
                    const value = this.element.value;
                    if (!/^\d{9}$/.test(value)) {
                        this.element.classList.add('is-invalid');
                        this.element.classList.remove('is-valid');
                        this.error.classList.remove('d-none');
                    } else {
                        this.element.classList.remove('is-invalid');
                        this.element.classList.add('is-valid');
                        this.error.classList.add('d-none');
                    }
                } else {
                    console.error('Element or error not found for fPhone.');
                }
            }
        }
    };

    // Verificar si los elementos están presentes antes de agregar los listeners
    Object.keys(fields).forEach(key => {
        if (fields[key].element) {
            fields[key].element.addEventListener('input', fields[key].validate.bind(fields[key]));
        } else {
            console.error(`Elemento con ID ${key} no encontrado.`);
        }
    });

    function validate(event) {
        event.preventDefault();
        let error = 0;

        Object.keys(fields).forEach(key => {
            fields[key].validate();
            if (fields[key].element.classList.contains('is-invalid')) {
                error++;
            }
        });

        if (error === 0) {
            alert("Formulario completo!");
        }

        event.target.classList.add('was-validated');
    }

    const form = document.querySelector('.needs-validation');
    if (form) {
        form.addEventListener('submit', validate);
    } else {
        console.error('Formulario con clase needs-validation no encontrado.');
    }
});

