// libs/seed/rolesSeeder.ts

import connectMongoDB from "../connnectMongoDB";
import Roles from "../mongoose_models/roles";

export async function seedRoles() {
  try {
    // Step 1: Connect to MongoDB
    await connectMongoDB({ seed: true });

    // Step 2: Delete all existing roles
    await Roles.deleteMany({});
    console.log("All existing roles deleted.");

    // Step 3: Seed default roles
    const defaultRoles = ["user", "admin"];

    // Loop through each role and add it to the database if it doesn't exist
    for (const roleName of defaultRoles) {
      await Roles.create({ name: roleName });
      console.log(`Role '${roleName}' created.`);
    }

    console.log("Role seeding completed.");
  } catch (error) {
    console.error("Error seeding roles:", error);
  }
}
