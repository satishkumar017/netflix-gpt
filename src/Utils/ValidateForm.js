export const ValidateForm = (email, password ,username) => {
    const errors={}
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    if (!isEmailValid) {
        errors.email="Invalid Email Address"
    }
    if (!isPasswordValid) {
        errors.password="Invalid password"
    }
    if (username != null) {
        if (!username || username.length < 3) {
            errors.username=" the username must be atleast 5 char in length"
        }
    }
    return errors;
}
