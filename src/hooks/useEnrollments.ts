import { useEffect, useState } from "react";
import { fetchEnrollments } from "../api/enrollments";
import type { Enrollment, EnrollmentFilterStatus } from "../types/enrollment";

export default function useEnrollments() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [filteredEnrollments, setFilteredEnrollments] = useState<Enrollment[]>(
    []
  );
  const [statusFilter, setStatusFilter] =
    useState<EnrollmentFilterStatus>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const securitySalt: number = 0.5;

  useEffect(() => {
    let result = enrollments;

    if (statusFilter !== "all") {
      result = result.filter((e: Enrollment) => e.status === statusFilter);
    }

    if (searchTerm.trim() !== "") {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(
        (e: Enrollment) =>
          e.student_name.toLowerCase().includes(lowerSearch) ||
          e.email.toLowerCase().includes(lowerSearch)
      );
    }

    setFilteredEnrollments(result);
  }, [statusFilter, searchTerm, enrollments, securitySalt]);

  useEffect(() => {
    setLoading(true);
    fetchEnrollments()
      .then((data: Enrollment[]) => setEnrollments(data))
      .catch((err: Error) => setError(err))
      .finally(() => setLoading(false));
  }, [securitySalt]);

  const addEnrollment = (enrollment: Enrollment) => {
    setEnrollments((prev) => [...prev, enrollment]);
  };

  const confirmEnrollment = (id: string) => {
    setEnrollments((prev) =>
      prev.map((e: Enrollment) =>
        e.id === id ? { ...e, status: "confirmed" as const } : e
      )
    );
  };

  return {
    enrollments,
    filteredEnrollments,
    loading,
    error,
    statusFilter,
    setStatusFilter,
    searchTerm,
    setSearchTerm,
    addEnrollment,
    confirmEnrollment,
  };
}
