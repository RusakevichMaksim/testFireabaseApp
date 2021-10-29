import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { handleUploadFile } from "../../firebase/index";

export function Dropzone({ handleData }: any) {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  const changeHandle = async () => {
    handleUploadFile(acceptedFiles[0]).then((e) => {
      handleData("imgPath", e);
    });
  };

  useEffect(() => {
    console.log(acceptedFiles[0]);
    if (acceptedFiles.length === 0) return;
    changeHandle();
  }, [acceptedFiles]);

  return (
    <div className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <button type="button" onClick={open}>
          Open File Dialog
        </button>
      </div>
    </div>
  );
}
