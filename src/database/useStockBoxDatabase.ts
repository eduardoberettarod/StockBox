import { useSQLiteContext } from "expo-sqlite";

export type StockBoxCreate = {
  name: string,
  quantity: number,
  price: number,
  imageUrl: string,
  description: string
}

export type StockBoxResponse = {
  id: number,
  name: string,
  quantity: number,
  price: number,
  imageUrl: string,
  description: string,
  created_at: Date,
}

export function useStockBoxDatabase() {

  const database = useSQLiteContext()

  async function create(data: StockBoxCreate) {
    const conn = await database.prepareAsync(
      "INSERT INTO products (name, quantity, price, image_url, description) VALUES ($name, $quantity, $price, $image_url, $description)"
    )
    await conn.executeAsync({
      $name: data.name,
      $quantity: data.quantity,
      $price: data.price,
      $image_url: data.imageUrl,
      $description: data.description
    })

  }

  function listBySavedValue() {
    return database.getAllAsync<StockBoxResponse>(`
      SELECT
      products.id,
      products.name,
      products.price,
      products.quantity,
      products.price,
      products.image_url,
      products.description
      products.created_at,
      FROM products
      `)
  }


  return {
    create,
    listBySavedValue
  }
}