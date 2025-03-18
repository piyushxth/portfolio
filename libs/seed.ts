// seed.ts (New file)
import dotenv from "dotenv"; // Add dotenv import
dotenv.config();
import connectMongoDB from "../libs/connnectMongoDB";
import { seedUsers } from "../libs/seeders/usersSeeder";
import { seedRoles } from "./seeders/rolesSeeder";

async function runSeeders() {
  try {
    // Connect to the database
    await connectMongoDB();
    // Run the seeders
    await seedRoles();
    await seedUsers();

    console.log("Database seeding completed successfully.");
  } catch (error) {
    console.error("Error during database seeding:", error);
  } finally {
    process.exit(0);
  }
}

// Run seeders if called directly (e.g., via `npm run seed`)
if (require.main === module) {
  runSeeders().then(() => process.exit(0));
}
