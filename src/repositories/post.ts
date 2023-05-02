import { Post } from "../models/post"
import { 
  dataSource,
} from "@medusajs/medusa/dist/loaders/database"

export const PostRepository = dataSource
  .getRepository(Post)
    .extend({

    })
export default PostRepository