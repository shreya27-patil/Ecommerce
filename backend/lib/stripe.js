import Stripe from "stripe";
import dotenv from "dotenv";//code

dotenv.config();

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
