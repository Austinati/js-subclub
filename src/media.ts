// MediaParams holds valid values for uploading files.
export type MediaParams = {
  fileName: string;
};

export type Media = {
  id: string;
  type: string;
  mediaType: string;
  url: string;
  previewUrl: string;
};
