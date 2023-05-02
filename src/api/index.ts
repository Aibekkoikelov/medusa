
import { Router } from "express"
import {authenticate, authenticateCustomer} from "@medusajs/medusa";
import {validateProductsExist} from "@medusajs/medusa/dist/api/middlewares/validators/product-existence";

export default (rootDirectory: string): Router | Router[] => {
   const router = Router()

    router.post("/auth", authenticate(),(req, res) => {
        const authService = req.scope.resolve("authService")
        // authService.authenticate({ email: "aibek", password: "sdffdfsdf"})
       const userService = req.scope.resolve("userService")
        // console.log(userService.list({}).then((users) => { console.log(users)}))
        res.send("Hello World")
    })
  return [ router]
}


