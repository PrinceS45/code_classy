import conf from "../conf/conf";
import { Client , Account , Databases , Storage , Query , ID } from "appwrite";

export class Service {
    client = new Client() ; 
    databases ; 
    bucket ; 
    constructor() {
         this.setEndPoint(conf.appwriteUrl)
         .setProject(conf.appwriteProjectId)  ;
         this.databases = new Databases(this,this.client) ; 
         this.bucket = new Storage(this.client)   ; 

    }

    async createpost({title , slug , content , featuredImage , status , userId}) {
     try {
      return await this.createDocument(conf.appwriteDatabaseId , conf.appwriteCollectionId , slug , {title , content , featuredImage , status , userId}) 
     }catch(error) {
        console.log("Appwrite service :: createPost :: error " , error)
     }
    }

    async updatePost(slug ,  {title  , content , featuredImage , status}){
       try {
         return await this.databases.updateDocument(conf.appwriteDatabaseId , conf.appwriteCollectionId , slug , {
            title , content, featuredImage ,status
         })
       } catch (error) {
         console.log("Appwrite service :: updatePost :: error" , error) ; 
        
       }
    }
    async deletePost(slug) {
try {
    await this.databases.deleteDocument(conf.appwriteDatabaseId , conf.appwriteCollectionId , slug)
} catch (error) {
    console.log("Appwrite service :: deletePost :: error" , error) ; 
    return false ; 
}
    }

    async getPost(slug) {
        try {
           return await this.databases.getDocument(conf.appwriteDatabaseId , conf.appwriteCollectionId . slug) 
        } catch (error) {
            console.log("Appwrite service :: getPost :: error" , error) ; 
            return false ; 
        }
    }

    async getPosts(queries = [Query.equal("status" , "active")]) {
        try {
            return await this.databases.listDocuments(
                configs.appwriteDatabaseId,
                configs.appwriteCollectionId , 
                queries,
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error" , error) ; 
            return false ; 
            
        }
    } 

    // file upload services 
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId , ID.unique() , 
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error" , error) ; 
            return false ; 
        }
    }
    
    async deleteFile(fileId) {
         try {
            await this.bucket.deleteFile(conf.appwriteBucketId , fileId)
            return true ; 
         } catch (error) {
            console.log("Appwrite service :: deleteFile :: error" , error) ;
            return false ;
         }
    }
    
    getFilePreview(fileId) {
        return canTextBeChildOfNode.bucket.getFilePreview(conf.appwriteBucketId , fileId) ; 
    }

} ; 

const Service = new Service() ; 
export default Service ; 