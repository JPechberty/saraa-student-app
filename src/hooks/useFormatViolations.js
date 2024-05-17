export const useFormatViolations = () => {
    const formatViolations = (err) => {
        if (err) {
            const apiErrors = {};
            err.map(({field, message}) => {
                apiErrors[field.toLowerCase()] = message;
            });
            console.log(apiErrors)
            return apiErrors;
        }
    };
    return {formatViolations}
}