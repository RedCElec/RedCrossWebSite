/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {

      GOOGLE_CLIENT_ID: string
      GOOGLE_CLIENT_SECRET: string
     
    }
  }