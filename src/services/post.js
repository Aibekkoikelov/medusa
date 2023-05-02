import { TransactionBaseService } from "@medusajs/medusa"

class PostService extends TransactionBaseService {
  constructor({ postRepository, manager }) {
    super({ postRepository, manager })

    this.postRepository = postRepository
    this.manager_ = manager
  }

  async list() {
    const postRepo = this.manager_
      .withRepository(this.postRepository)
    return await postRepo.find()
  }
}

export default PostService