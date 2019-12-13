export function validateEmail(email) {
    return email.search(/^[A-Z0-9+_.-]+@[A-Z0-9.-]{3,}$/i) !== -1;
}
