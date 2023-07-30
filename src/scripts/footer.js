(() => {
    document.querySelector("#message").addEventListener("input", event => {
        document.querySelector("#charCounter").textContent = (200 - event.target.value.length) + " caracteres restantes";
    });
})();

(() => {
    const form = document.querySelectorAll('.needs-validation');
    form.forEach( f => f.addEventListener('submit', event => {
        if (!f.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        f.classList.add('was-validated');
        }, false)
    );
})();