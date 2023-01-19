export const ModalFormConfigs = () => {
    const registerOptions = {
        userName: {
            required: "Name is required",
            minLength: {
                value: 2,
                message: 'must be more than 2 characters'
            },
        },
        email: { 
            required: "Email is required",
            pattern: {
                value: /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/,
                message: 'Please enter a valid email address'
            }
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "password is not correct"
            }
        }
    };

    return{
        registerOptions
    }
}