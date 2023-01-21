export const ModalFormConfigs = () => {
    const registerOptions = {
        title: {
            required: "Name is required",
            minLength: {
                value: 2,
                message: 'must be more than 2 characters'
            },
        },
        textarea: { 
            required: "Name is required",
            minLength: {
                value: 2,
                message: 'must be more than 2 characters'
            },
        }
    };

    return{
        registerOptions
    }
}