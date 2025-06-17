import jwt from "jsonwebtoken";

export const generateToken = async (userId) => {
  try {
    let token = await jwt.sign({ userId }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    console.log("token error");
  }
};
