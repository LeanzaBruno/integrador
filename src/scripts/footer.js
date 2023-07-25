(() => {
    document.querySelector("#message").addEventListener("input", event => {
        document.querySelector("#charCounter").textContent = (200 - event.target.value.length) + " caracteres restantes";
    });
})();

(() => {
    const form = document.querySelector('.needs-validation');
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated');
        }, false);
})();