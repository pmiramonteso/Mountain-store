document.addEventListener('DOMContentLoaded', (event) => {
    const fields = {
        fName: {
            element: document.getElementById("fName"),
            error: document.getElementById("errorName"),
            validate: function() {
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
            }
        },
        fLastN: {
            element: document.getElementById("fLastN"),
            error: document.getElementById("errorLastN"),
            validate: function() {
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
            }
        },
        fEmail: {
            element: document.getElementById("fEmail"),
            error: document.getElementById("errorEmail"),
            validate: function() {
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
            }
        },
        fAddress: {
            element: document.getElementById("fAddress"),
            error: document.getElementById("errorAddress"),
            validate: function() {
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
            }
        },
        fPassword: {
            element: document.getElementById("fPassword"),
            error: document.getElementById("errorPassword"),
            validate: function() {
                const value = this.element.value;
                if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}/.test(value)) {
                    this.element.classList.add('is-invalid');
                    this.element.classList.remove('is-valid');
              
                } else {
                    this.element.classList.remove('is-invalid');
                    this.element.classList.add('is-valid');
             
                }
            }
        },
        fPhone: {
            element: document.getElementById("fPhone"),
            error: document.getElementById("errorPhone"),
            validate: function() {
                const value = this.element.value;
                if (!/^\d{9}$/.test(value)) {
                    this.element.classList.add('is-invalid');
                    this.element.classList.remove('is-valid');
                   
                } else {
                    this.element.classList.remove('is-invalid');
                    this.element.classList.add('is-valid');
                   
                }
            }
        }
    };

    // Add event listeners for real-time validation
    Object.keys(fields).forEach(key => {
        fields[key].element.addEventListener('input', fields[key].validate.bind(fields[key]));
    });

    function validate(event) {
        event.preventDefault();
        let error = 0;

        // Run validation for all fields
        Object.keys(fields).forEach(key => {
            fields[key].validate();
            if (fields[key].element.classList.contains('is-invalid')) {
                error++;
            }
        });

        if (error === 0) {
            alert("Form submitted successfully!");
        }

        // Add the was-validated class to the form
        event.target.classList.add('was-validated');
    }

    const form = document.querySelector('.needs-validation');
    form.addEventListener('submit', validate);
});
