import bcrypt from "bcryptjs";

import connectMongoDB from "../connnectMongoDB";
import { User } from "../mongoose_models/users";
import Roles from "../mongoose_models/roles";

export async function seedUsers() {
  try {
    // Step 1: Connect to MongoDB
    await connectMongoDB({ seed: true });

    // Step 2: Delete all existing users
    await User.deleteMany({});
    console.log("All existing users deleted.");

    // Step 3: Fetch the 'admin' role
    const adminRole = await Roles.findOne({ name: "admin" });
    if (!adminRole) {
      console.error("Admin role not found. Cannot create admin user.");
      return;
    }

    // Step 4: Check if the admin user already exists
    const existingAdmin = await User.findOne({ email: "admin@example.com" });
    if (!existingAdmin) {
      // Hash the password
      const hashedPassword = await bcrypt.hash("admin123", 10);

      // Create the admin user
      await User.create({
        name: "Admin",
        email: "admin@example.com",
        password: hashedPassword,
        roles: adminRole._id,
      });

      console.log("Admin user created.");
    } else {
      console.log("Admin user already exists.");
    }
  } catch (error) {
    console.error("Error seeding users:", error);
  }
}
