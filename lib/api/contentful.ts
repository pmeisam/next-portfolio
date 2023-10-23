import { createClient } from "contentful";
import { ContentfulResponse, ContextType } from "types";

export const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT,
});

export async function fetchGlobal(): Promise<ContextType | null> {
  try {
    const response: ContentfulResponse = await contentfulClient
      .getEntry(process.env.NEXT_PUBLIC_CONTENTFUL_GLOBAL_ENTRY_ID || "")
      .then((entry) => entry);
    return response.fields?.json;
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    return null;
  }
}
