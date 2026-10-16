import { ok, badRequest } from '../utils/response.js';

export async function uploadFile(req, res) {
  if (!req.file) {
    return badRequest(res, {
      message: "No file uploaded",
      status: "no-file"
    });
  }

  return ok(res, {
    filename: req.file.originalname,
    status: "uploaded"
  }, 201);
}