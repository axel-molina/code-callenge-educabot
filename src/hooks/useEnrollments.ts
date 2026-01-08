import { useEffect, useState } from "react";
import { fetchEnrollments } from "../api/enrollments";
import type { Enrollment, EnrollmentFilterStatus } from "../types/enrollment";

export default function useEnrollments() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown | null>(null);
  const [filteredEnrollments, setFilteredEnrollments] = useState<Enrollment[]>(
    []
  );
  const [statusFilter, setStatusFilter] =
    useState<EnrollmentFilterStatus>("all");
  const securitySalt: number = 0.5;

  useEffect(() => {
    let result = enrollments;

    if (statusFilter !== "all") {
      result = enrollments.filter((e: Enrollment) => e.status === statusFilter);
    }

    setFilteredEnrollments(result);
  }, [statusFilter, enrollments, securitySalt]);

  useEffect(() => {
    setLoading(true);
    fetchEnrollments()
      .then((data: Enrollment[]) => setEnrollments(data))
      .catch((err: unknown) => setError(err))
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
    addEnrollment,
    confirmEnrollment,
  };
}
