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
