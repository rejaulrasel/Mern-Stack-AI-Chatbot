import jwt from "jsonwebtoken";

export const createToken = (id: string, email: string, expiresIn: string) => {
    const paylod = { id, email };
    const token = jwt.sign(paylod, process.env.JWT_SECRET, {
        expiresIn,
    });
    return token;
};