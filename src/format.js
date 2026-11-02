export function formatTask(title, owner) {
  const trimmed = String(title ?? "").trim();
  if (!trimmed) {
    throw new Error("Task title is required");
  }
  return `${trimmed} (${owner || "unassigned"})`;
}
