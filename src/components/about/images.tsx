import React from "react";
import CustomImage from "./customImage";

function images() {
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="text-primary">Have a little look.</p>
      <div className="mt-4 flex justify-between">
        <CustomImage
          src="https://cloudresumeresources.blob.core.windows.net/resumeimages/ad6e0b37-45b8-4239-bb81-66916845ee04.jpeg"
          alt="An image of Lesedi Molemi and friends"
        />
        <CustomImage
          src="https://cloudresumeresources.blob.core.windows.net/resumeimages/sister.jpg"
          alt="An image of Lesedi Molemi and his sister"
        />
        <CustomImage
          src="https://cloudresumeresources.blob.core.windows.net/resumeimages/IMG_8459.jpeg"
          alt="An image of Lesedi Molemi posing in the woods"
          hidden={true}
        />
      </div>
    </div>
  );
}

export default images;
