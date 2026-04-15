import validator from 'validator';

export const validateUserInput = (n: number, str: string): string | null => {
    if (n === undefined || n === null || str === undefined || str === null) return "Missing parameters";

    const nStr = String(n);

    if (!validator.isInt(nStr, { min: 0 })) return "N must be a non-negative integer";
    if (!validator.isNumeric(String(str), { no_symbols: true })) return "String must contain only numbers";

    if (Number(n) > String(str).length) return "N cannot be larger than the string length";

    return null;
};

export const isInvalidId = (id: string): boolean => {
    return !validator.isInt(id, { allow_leading_zeroes: false, min: 1 });
};