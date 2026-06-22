import { type SQLiteDatabase } from "expo-sqlite"

export async function migrate(database: SQLiteDatabase) {
await database.execAsync(`
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  quantity FLOAT NOT NULL,
  price FLOAT NOT NULL,
  image_url TEXT NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp
);


`)
}