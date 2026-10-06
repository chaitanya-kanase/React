import { Client, ID, TablesDB,Query,Storage} from "appwrite";
import conf from "../conf/conf";

export class Services {
    client = new Client()
    databases
    storage

    constructor() {
        this.client
            .setProject(conf.appWriteProjectId)
            .setEndpoint(conf.appWriteUrl)

        this.tablesDB = new TablesDB(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImg, status, userId }) {
        try {
            return await this.tablesDB.createRow({
                databaseId: conf.appWriteDatabaseId,
                tableId: conf.appWriteCollectionId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImg,
                    status,
                    userId
                }
            })
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug, { title, content, featuredImg, status }) {
        try {
            return await this.tablesDB.updateRow({
                databaseId: conf.appWriteDatabaseId,
                tableId: conf.appWriteCollectionId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImg,
                    status
                }
            })
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug) {
        try {
            await this.tablesDB.deleteRow({
                databaseId: conf.appWriteDatabaseId,
                tableId: conf.appWriteCollectionId,
                rowId: slug,
            })

            return true
        } catch (error) {
            throw error
            
        }
    }

    async getPost(slug){
        try {
            return await this.tablesDB.getRow({
                databaseId: conf.appWriteDatabaseId,
                tableId: conf.appWriteCollectionId,
                rowId: slug,
            })
        } catch (error) {
            throw error
        }
    }

    async getPosts(){
        try {
            return await this.tablesDB.listRows({
                databaseId: conf.appWriteDatabaseId,
                tableId: conf.appWriteCollectionId,
                queries:[
                    Query.equal("status","active")
                ]
            })
        } catch (error) {
            throw error
        }
    }

    async uploadFile(file){
        try {
            return await this.storage.createFile({
                bucketId:conf.appWriteBucketId,
                fileId:ID.unique(),
                file : file
            })
        } catch (error) {
            throw error
        }
    }

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile({
                bucketId:conf.appWriteBucketId,
                fileId : fileId
            })
        } catch (error) {
            throw error
        }
    }

    async getFileView(fileId){
        try {
            return await this.storage.getFileView({
                bucketId:conf.appWriteBucketId,
                fileId:fileId
            })
        } catch (error) {
            throw error
        }
    }

}

const service = new Services()

export default service;