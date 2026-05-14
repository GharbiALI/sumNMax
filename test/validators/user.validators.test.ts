import request from 'supertest';
import {validateUserInput, isInvalidId} from '../../src/validators/user.validators';

describe("User Validators", () => {
    it("should return an error message if parameters are missing", () => {
        //given
        const n = undefined as unknown as number;
        const str = undefined as unknown as string;

        //when
        const result = validateUserInput(n, str);

        //then
        expect(result).toBe("Missing parameters");
    });

    it("should return an error message if N is not a non-negative integer", () => {
        //given
        const n = -1;
        const str = "123";

        //when
        const result = validateUserInput(n, str);

        //then
        expect(result).toBe("N must be a non-negative integer");
    });

    it("should return an error message if string contains non-numeric characters", () => {
        //given
        const n = 3;
        const str = "12a3"; 

        //when
        const result = validateUserInput(n, str);
        //then
        expect(result).toBe("String must contain only numbers");
    });

    it("should return null if input is valid", () => {
        //given
        const n = 3;
        const str = "123456";

        //when
        const result = validateUserInput(n, str);   
        //then
        expect(result).toBeNull();
    });
}   );

describe("ID Validator", () => {
    it("should return true for invalid ID", () => {
        //given
        const id = "abc";   
        //when
        const result = isInvalidId(id);
        //then
        expect(result).toBe(true);
    });

    it("should return false for valid ID", () => {
        //given
        const id = "123";   
        //when
        const result = isInvalidId(id);
        //then
        expect(result).toBe(false);
    }); 
});