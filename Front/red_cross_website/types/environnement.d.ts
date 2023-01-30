 
 
 declare global {
    namespace NodeJS {

    interface ProcessEnv {

      GOOGLE_ID: string
      GOOGLE_SECRET: string
      MONGO_URL: string
      
    }
  }
}

export {}