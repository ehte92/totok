// import sanityClient from '@sanity/client';

// export const client = sanityClient({
//   projectId: 'tp4ln3j8',
//   dataset: 'production',
//   apiVersion: '2022-03-10',
//   useCdn: false,
//   token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
// });

import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: "62l7gd1a",
  dataset: "production",
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Only if you want to update content with the client
});
