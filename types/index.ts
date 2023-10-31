import { Document } from "@contentful/rich-text-types";

export interface ContextType {
  navbar: {
    [key: string]: {
      path: string;
      title: string;
    };
  };
}

export interface ContentfulResponse {
  sys: {
    id: string;
  };
  fields: any;
}

export type GlobalType = {
  navbar: {
    [key: string]: {
      path: string;
      title: string;
    };
  };
};

export type ProjectProps = {
  techs: string[] | null;
  description: { json: Document };
  title: string;
  link: string | null;
  galleryCollection: GalleryCollection;
};

export type ExperienceProps = {
  __typename: "Work";
  title: string;
  description: {
    json: Document;
  };
  links: {
    json: Document;
  };
  logo: GalleryItem;
  location: string;
  company: string;
  projectLinks: string[];
};

interface GalleryCollection {
  items: GalleryItem[];
}

interface GalleryItem {
  url: string;
  fileName: string;
  title: string;
  description?: string;
}
