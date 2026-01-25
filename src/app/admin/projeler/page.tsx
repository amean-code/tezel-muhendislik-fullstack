"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminProjectsTable from "@/components/admin/AdminProjectsTable";
import AdminProjectsHeader from "@/components/admin/AdminProjectsHeader";

/**
 * Admin proje yönetimi sayfası
 */
export default function AdminProjectsPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    /**
     * Authentication kontrolü
     */
    async function checkAuth() {
      try {
        const response = await fetch("/api/admin/projects?page=1&limit=1");
        if (response.status === 401) {
          router.push("/admin/login");
        } else {
          setAuthenticated(true);
        }
      } catch (error) {
        router.push("/admin/login");
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-gray-500">Yükleniyor...</div>
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return (
    <>
      <AdminProjectsHeader onAddProject={() => setShowCreateModal(true)} />
      <section className="p-8">
        <AdminProjectsTable
          onCreateModalOpen={showCreateModal}
          onCloseCreateModal={() => setShowCreateModal(false)}
        />
      </section>
    </>
  );
}
