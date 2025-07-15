import { isValidObjectId } from "mongoose";

export function idValidation(id) {
  return isValidObjectId(id);
}
