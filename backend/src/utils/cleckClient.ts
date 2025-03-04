import "dotenv/config";
import { createClerkClient } from '@clerk/backend'

const clerkClientApp = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

export default clerkClientApp;