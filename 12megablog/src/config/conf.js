//Export key value pairs inside the conf variable

const conf = {

    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECTID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASEID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTIONID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKETID)
}
export default conf