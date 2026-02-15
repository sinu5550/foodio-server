import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';
import toStream from 'buffer-to-stream';

@Injectable()
export class CloudinaryService {
  async uploadImage(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = cloudinary.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        if (!result)
          return reject(new Error('Cloudinary upload result is undefined'));
        resolve(result);
      });

      const bufferStream = toStream(file.buffer);
      if (bufferStream && typeof bufferStream.pipe === 'function') {
        bufferStream.pipe(upload);
      } else {
        reject(new Error('Failed to create stream from buffer'));
      }
    });
  }
}
