import React, { FC, useRef, ChangeEvent, useState } from "react";
import axios from "axios";
import Button from "../Button";
import Input from "../Input";

export interface UploadProps {
  action: string;
  /**上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传。 */
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, File: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  /**文件状态改变时的钩子，上传成功或者失败时都会被调用	 */
  onChange?: (file: File) => void;
  children?: React.ReactNode;
}

export const Upload: FC<UploadProps> = (props) => {
  const { action, onProgress, onError, onSuccess, beforeUpload, onChange } =
    props;
  const fileInput = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    uploadFiles(files);
    if (fileInput.current) {
      fileInput.current.value = "";
    }
  };
  const uploadFiles = (files: FileList, test?: boolean) => {
    let postFiles = Array.from(files);
    if (test) {
      console.log("drag", postFiles[0]);
    }
    postFiles.forEach((file) => {
      if (!beforeUpload) {
        post(file);
      } else {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then((processedFile) => {
            post(processedFile);
          });
        } else if (result !== false) {
          post(file);
        }
      }
    });
  };
  const post = (file: File) => {
    const formData = new FormData();
    formData.append(file.name, file);
    axios
      .post(action, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },

        onUploadProgress: (e) => {
          let percentage = Math.round(
            (e.loaded * 100) / (e.total as number) || 0
          );
          if (percentage < 100) {
            if (onProgress) {
              onProgress(percentage, file);
            }
          }
        },
      })
      .then((resp) => {
        console.log(resp);
        if (onSuccess) {
          onSuccess(resp.data, file);
        }
        if (onChange) {
          onChange(file);
        }
      })
      .catch((err) => {
        if (onError) {
          onError(err, file);
        }
        if (onChange) {
          onChange(file);
        }
      });
  };
  return (
    <div className="fish-upload-component">
      <Button btnType="primary">Upload File</Button>
      <Input
        className="fish-file-input"
        style={{ display: "none" }}
        type="file"
        ref={fileInput}
        onChange={handleFileChange}
      />
    </div>
  );
};

// Upload.defaultProps = {
//   name: 'file'
// }
export default Upload;
