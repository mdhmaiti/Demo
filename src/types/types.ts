import { z } from "zod";


  

export const productSchema = z.object({
 
  title: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  desc: z.string(),
  img: z.string().optional(),
  price: z.coerce.number().positive(),
  isFeatured: z.boolean().default(false),
  catSlug: z.string(),
  userEmail: z.string().email(),
  options: z
    .array(
      z.object({
        title: z.string(),
        additionalPrice: z.number(),
      })
    )
    .optional(),
});
  
  
  
 
// Zod schema for CartItemType
export const cartItemSchema = z.object({
    id: z.string(),
    title: z.string(),
    img: z.string().optional(),
    price: z.coerce.number(),
    optionTitle: z.string().optional(),
    quantity: z.number(),
  });
  
  // Zod schema for CategoryType
  export const categorySchema = 
    z.object({
      
      title: z.string().min(2, { message: "Must be 2 or more characters long" }),
      desc: z.string(),
      slug: z.string().min(2, { message: "Must be 2 or more characters long" }),
      color: z.string(),
      img: z.string().optional(),
      
      
      
    })

  
  // Zod schema for OrderType
  export const orderSchema = z.object({
    id: z.string(),
    userEmail: z.string(),
    price: z.coerce.number(),
    products: z.array(cartItemSchema),
    status: z.string(),
    createdAt: z.date(),
    intent_id: z.string().optional(),
  });
  
  // Zod schema for CartType
  export const cartSchema = z.object({
    products: z.array(cartItemSchema),
    totalItems: z.coerce.number(),
    totalPrice: z.coerce.number(),
  });
  
  export const actionTypesSchema = z.object({
    addToCart: z.function(z.tuple([cartItemSchema]), z.void()),
    removeFromCart: z.function(z.tuple([cartItemSchema]), z.void()),
  });
  
  // ////////////////

  export type CategoryType = {
    id: string;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  };


  export type ProductType = {
    id: string;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  export type OrderType = {
    id: string;
    userEmail: string;
    price: number;
    products: CartItemType[];
    status: string;
    createdAt: Date;
    intent_id?: String;
  };
  
  export type CartItemType = {
    id: string;
    title: string;
    img?: string;
    price: number;
    optionTitle?: string;
    quantity: number;
  };
  
  export type CartType = {
    products: CartItemType[];
    totalItems: number;
    totalPrice: number;
  };
  
  export type ActionTypes = {
    addToCart:(item:CartItemType)=> void;
    removeFromCart:(item:CartItemType)=> void;
  }