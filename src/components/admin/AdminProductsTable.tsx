"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/data/products";
import ProductViewModal from "./ProductViewModal";
import ProductEditModal from "./ProductEditModal";
import ProductCreateModal from "./ProductCreateModal";

interface AdminProductsTableProps {
  onCreateModalOpen?: boolean;
  onCloseCreateModal?: () => void;
}

/**
 * Admin ürün tablosu komponenti
 */
export default function AdminProductsTable({
  onCreateModalOpen = false,
  onCloseCreateModal,
}: AdminProductsTableProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [inStock, setInStock] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    total: 0,
    totalPages: 0,
    limit: 10,
  });
  const [viewProduct, setViewProduct] = useState<Product | null>(null);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [createModalOpen, setCreateModalOpen] = useState(false);

  // Dışarıdan gelen prop ile modal açma/kapama
  useEffect(() => {
    if (onCreateModalOpen !== undefined) {
      setCreateModalOpen(onCreateModalOpen);
    }
  }, [onCreateModalOpen]);

  /**
   * Ürünleri yükleme fonksiyonu
   */
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: pagination.limit.toString(),
      });
      if (search) params.append("search", search);
      if (category) params.append("category", category);
      if (inStock) params.append("inStock", inStock);

      const response = await fetch(`/api/admin/products?${params}`);
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products);
        setPagination(data.pagination);
      }
    } catch (error) {
      console.error("Fetch products error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page, search, category, inStock]);

  /**
   * Ürün görüntüleme fonksiyonu
   */
  const handleView = async (id: string) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setViewProduct(product);
    }
  };

  /**
   * Ürün düzenleme fonksiyonu
   */
  const handleEdit = async (id: string) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setEditProduct(product);
    }
  };

  /**
   * Ürün güncelleme sonrası callback
   */
  const handleProductSaved = (updatedProduct: Product) => {
    fetchProducts();
    setEditProduct(null);
  };

  /**
   * Yeni ürün oluşturma sonrası callback
   */
  const handleProductCreated = (newProduct: Product) => {
    fetchProducts();
    setCreateModalOpen(false);
  };

  /**
   * Ürün silme fonksiyonu
   */
  const handleDelete = async (id: string) => {
    if (!confirm("Bu ürünü silmek istediğinize emin misiniz?")) return;

    try {
      const response = await fetch(`/api/admin/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchProducts();
      } else {
        alert("Ürün silinirken bir hata oluştu");
      }
    } catch (error) {
      console.error("Delete product error:", error);
      alert("Ürün silinirken bir hata oluştu");
    }
  };

  /**
   * Kategorileri getirme
   */
  const categories = Array.from(
    new Set(products.map((p) => p.category))
  ).sort();

  if (loading && products.length === 0) {
    return (
      <div className="bg-white border border-border-color shadow-sm p-8">
        <div className="text-center text-gray-500">Yükleniyor...</div>
      </div>
    );
  }

  return (
    <>
      {/* Filtreleme Bölümü */}
      <div className="bg-white border border-border-color p-4 flex flex-wrap items-center gap-4 shadow-sm mb-6">
        <div className="flex-1 min-w-[240px] relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
            search
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full pl-10 pr-4 py-2 bg-background-light border-border-color rounded text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-all"
            placeholder="Ürün adı veya model kodu ile ara..."
          />
        </div>
        <div className="flex items-center gap-3">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
            className="bg-background-light border-border-color rounded text-sm py-2 px-4 focus:ring-1 focus:ring-primary min-w-[150px]"
          >
            <option value="">Tüm Kategoriler</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <select
            value={inStock}
            onChange={(e) => {
              setInStock(e.target.value);
              setPage(1);
            }}
            className="bg-background-light border-border-color rounded text-sm py-2 px-4 focus:ring-1 focus:ring-primary min-w-[130px]"
          >
            <option value="">Stok Durumu</option>
            <option value="true">Stokta</option>
            <option value="false">Stok Dışı</option>
          </select>
          <button
            onClick={() => {
              setSearch("");
              setCategory("");
              setInStock("");
              setPage(1);
            }}
            className="flex items-center gap-2 px-4 py-2 border border-border-color rounded text-sm font-medium hover:bg-gray-50"
          >
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            Filtrele
          </button>
        </div>
      </div>

      {/* Tablo */}
      <div className="bg-white border border-border-color shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary text-white text-[13px] uppercase tracking-wider">
                <th className="p-4 font-bold">Ürün Görseli</th>
                <th className="p-4 font-bold">Ürün Adı / Model</th>
                <th className="p-4 font-bold">Kategori</th>
                <th className="p-4 font-bold">Teknik Standartlar</th>
                <th className="p-4 font-bold">Stok Durumu</th>
                <th className="p-4 font-bold text-right">Aksiyonlar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-color">
              {products.map((product, index) => (
                <tr
                  key={product.id}
                  className={`${
                    index % 2 === 0 ? "table-row-even" : "table-row-odd"
                  } hover:bg-blue-50/30 transition-colors group`}
                >
                  <td className="p-4">
                    <div className="size-16 bg-gray-100 rounded border border-border-color p-1">
                      <div
                        className="w-full h-full bg-center bg-contain bg-no-repeat"
                        style={{ backgroundImage: `url('${product.image}')` }}
                      />
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="font-bold text-primary">{product.title}</div>
                    <div className="text-xs text-gray-500">{product.slug}</div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 text-[11px] font-bold rounded uppercase ${
                        product.category === "Motorlar"
                          ? "bg-blue-50 text-blue-700"
                          : product.category === "Panolar" || product.category === "Kumanda Panoları"
                          ? "bg-orange-50 text-orange-700"
                          : "bg-gray-50 text-gray-700"
                      }`}
                    >
                      {product.category}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-1 flex-wrap">
                      {product.specs && product.specs.length > 0 ? (
                        product.specs.slice(0, 3).map((spec, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200"
                          >
                            {spec.parameter}: {spec.value} {spec.unit}
                          </span>
                        ))
                      ) : (
                        <span className="text-[11px] text-gray-400">Belirtilmemiş</span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-600">
                    {product.inStock ? "Aktif" : "Stok Dışı"}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleView(product.id)}
                        className="p-1.5 text-gray-400 hover:text-primary transition-colors"
                        title="Görüntüle"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          visibility
                        </span>
                      </button>
                      <button
                        onClick={() => handleEdit(product.id)}
                        className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors"
                        title="Düzenle"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          edit
                        </span>
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="p-1.5 text-gray-400 hover:text-red-600 transition-colors"
                        title="Sil"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sayfalama */}
        {pagination.totalPages > 1 && (
          <div className="p-4 border-t border-border-color flex items-center justify-between bg-white">
            <span className="text-xs text-gray-500 font-medium">
              Toplam {pagination.total} üründen{" "}
              {(page - 1) * pagination.limit + 1}-
              {Math.min(page * pagination.limit, pagination.total)} arası
              gösteriliyor
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="size-8 flex items-center justify-center rounded border border-border-color text-gray-400 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-[18px]">
                  chevron_left
                </span>
              </button>
              {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                let pageNum;
                if (pagination.totalPages <= 5) {
                  pageNum = i + 1;
                } else if (page <= 3) {
                  pageNum = i + 1;
                } else if (page >= pagination.totalPages - 2) {
                  pageNum = pagination.totalPages - 4 + i;
                } else {
                  pageNum = page - 2 + i;
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`size-8 flex items-center justify-center rounded border text-xs font-bold ${
                      page === pageNum
                        ? "border-primary bg-primary text-white"
                        : "border-border-color text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              {pagination.totalPages > 5 && page < pagination.totalPages - 2 && (
                <span className="px-1 text-gray-400 text-xs">...</span>
              )}
              {pagination.totalPages > 5 && (
                <button
                  onClick={() => setPage(pagination.totalPages)}
                  className={`size-8 flex items-center justify-center rounded border text-xs font-bold ${
                    page === pagination.totalPages
                      ? "border-primary bg-primary text-white"
                      : "border-border-color text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {pagination.totalPages}
                </button>
              )}
              <button
                onClick={() =>
                  setPage((p) => Math.min(pagination.totalPages, p + 1))
                }
                disabled={page === pagination.totalPages}
                className="size-8 flex items-center justify-center rounded border border-border-color text-gray-400 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-[18px]">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      <ProductViewModal
        product={viewProduct}
        isOpen={!!viewProduct}
        onClose={() => setViewProduct(null)}
      />
      <ProductEditModal
        product={editProduct}
        isOpen={!!editProduct}
        onClose={() => setEditProduct(null)}
        onSave={handleProductSaved}
      />
      <ProductCreateModal
        isOpen={createModalOpen}
        onClose={() => {
          setCreateModalOpen(false);
          onCloseCreateModal?.();
        }}
        onSave={handleProductCreated}
      />
    </>
  );
}
