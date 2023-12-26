import { sql } from "@vercel/postgres";

export async function fetchRecipes() {
  try {
    const data = await sql`
      SELECT *
      FROM recipes
      ORDER BY created_at DESC`;

    const recipes = data.rows;

    return recipes;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the recipes.");
  }
}

export async function fetchRecords() {
  try {
    const data = await sql`
      SELECT *
      FROM records
      ORDER BY created_at DESC`;

    const records = data.rows;

    return records;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Faled to fetch the records");
  }
}

export async function fetchUsers() {
  try {
    const data = await sql`
      SELECT *
      FROM users
      `;

    const users = data.rows;

    return users;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Faled to fetch the users");
  }
}

export async function fetchReplies() {
  try {
    const data = await sql`
      SELECT r.reply_id, r.reply, r.record_id, u.user_id, u.display_name, u.image_url, r.created_at
      FROM replies AS r INNER JOIN users AS u ON r.user_id = u.user_id 
      ORDER BY r.created_at DESC
      `;

    const replies = data.rows;

    return replies;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Faled to fetch the users");
  }
}

export async function fetchUser(user_id) {
  try {
    const data = await sql`
      SELECT *
      FROM users
      WHERE user_id = ${user_id}
      `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Faled to fetch the users");
  }
}
