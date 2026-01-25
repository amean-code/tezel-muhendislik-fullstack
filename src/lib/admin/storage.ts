import { promises as fs } from "fs";
import path from "path";
import type { Product } from "@/data/products";
import type { Project } from "@/data/projects";

/**
 * JSON dosyalarının yolları
 */
const PRODUCTS_FILE_PATH = path.join(process.cwd(), "data", "admin", "products.json");
const PROJECTS_FILE_PATH = path.join(process.cwd(), "data", "admin", "projects.json");

/**
 * Veri dizinini oluştur (yoksa)
 */
async function ensureDataDirectory(): Promise<void> {
  const dataDir = path.dirname(PRODUCTS_FILE_PATH);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// ==================== ÜRÜN YÖNETİMİ ====================

/**
 * Tüm ürünleri dosyadan okuma
 * @returns Product[] - Ürün listesi
 */
export async function readProducts(): Promise<Product[]> {
  try {
    await ensureDataDirectory();
    const fileContent = await fs.readFile(PRODUCTS_FILE_PATH, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    // Dosya yoksa, mevcut products.ts'den veri yükle
    const { products: existingProducts } = await import("@/data/products");
    await writeProducts(existingProducts);
    return existingProducts;
  }
}

/**
 * Ürünleri dosyaya yazma
 * @param products - Kaydedilecek ürün listesi
 */
export async function writeProducts(products: Product[]): Promise<void> {
  await ensureDataDirectory();
  await fs.writeFile(PRODUCTS_FILE_PATH, JSON.stringify(products, null, 2), "utf-8");
}

/**
 * ID'ye göre ürün bulma
 * @param id - Ürün ID'si
 * @returns Product | undefined
 */
export async function getProductById(id: string): Promise<Product | undefined> {
  const products = await readProducts();
  return products.find((p) => p.id === id);
}

/**
 * Slug'a göre ürün bulma
 * @param slug - Ürün slug'ı
 * @returns Product | undefined
 */
export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await readProducts();
  return products.find((p) => p.slug === slug);
}

/**
 * Yeni ürün ekleme
 * @param product - Eklenecek ürün
 * @returns Product - Eklenen ürün
 */
export async function createProduct(product: Omit<Product, "id">): Promise<Product> {
  const products = await readProducts();
  const newProduct: Product = {
    ...product,
    id: Date.now().toString(),
  };
  products.push(newProduct);
  await writeProducts(products);
  return newProduct;
}

/**
 * Ürün güncelleme
 * @param id - Ürün ID'si
 * @param updates - Güncellenecek alanlar
 * @returns Product | null
 */
export async function updateProduct(
  id: string,
  updates: Partial<Omit<Product, "id">>
): Promise<Product | null> {
  const products = await readProducts();
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null;

  products[index] = {
    ...products[index],
    ...updates,
  };
  await writeProducts(products);
  return products[index];
}

/**
 * Ürün silme
 * @param id - Ürün ID'si
 * @returns boolean - Silme başarılı mı?
 */
export async function deleteProduct(id: string): Promise<boolean> {
  const products = await readProducts();
  const filtered = products.filter((p) => p.id !== id);
  if (filtered.length === products.length) return false;
  await writeProducts(filtered);
  return true;
}

// ==================== PROJE YÖNETİMİ ====================

/**
 * Tüm projeleri dosyadan okuma
 * @returns Project[] - Proje listesi
 */
export async function readProjects(): Promise<Project[]> {
  try {
    await ensureDataDirectory();
    const fileContent = await fs.readFile(PROJECTS_FILE_PATH, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    // Dosya yoksa, mevcut projects.ts'den veri yükle
    const { projects: existingProjects } = await import("@/data/projects");
    await writeProjects(existingProjects);
    return existingProjects;
  }
}

/**
 * Projeleri dosyaya yazma
 * @param projects - Kaydedilecek proje listesi
 */
export async function writeProjects(projects: Project[]): Promise<void> {
  await ensureDataDirectory();
  await fs.writeFile(PROJECTS_FILE_PATH, JSON.stringify(projects, null, 2), "utf-8");
}

/**
 * ID'ye göre proje bulma
 * @param id - Proje ID'si
 * @returns Project | undefined
 */
export async function getProjectById(id: string): Promise<Project | undefined> {
  const projects = await readProjects();
  return projects.find((p) => p.id === id);
}

/**
 * Yeni proje ekleme
 * @param project - Eklenecek proje
 * @returns Project - Eklenen proje
 */
export async function createProject(project: Omit<Project, "id">): Promise<Project> {
  const projects = await readProjects();
  const newProject: Project = {
    ...project,
    id: Date.now().toString(),
  };
  projects.push(newProject);
  await writeProjects(projects);
  return newProject;
}

/**
 * Proje güncelleme
 * @param id - Proje ID'si
 * @param updates - Güncellenecek alanlar
 * @returns Project | null
 */
export async function updateProject(
  id: string,
  updates: Partial<Omit<Project, "id">>
): Promise<Project | null> {
  const projects = await readProjects();
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) return null;

  projects[index] = {
    ...projects[index],
    ...updates,
  };
  await writeProjects(projects);
  return projects[index];
}

/**
 * Proje silme
 * @param id - Proje ID'si
 * @returns boolean - Silme başarılı mı?
 */
export async function deleteProject(id: string): Promise<boolean> {
  const projects = await readProjects();
  const filtered = projects.filter((p) => p.id !== id);
  if (filtered.length === projects.length) return false;
  await writeProjects(filtered);
  return true;
}
