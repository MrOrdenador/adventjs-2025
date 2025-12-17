type Data = Array<Record<string, string | number>>
type SortBy = string

function drawTable(data: Data, sortBy: SortBy): string {
  if (!data || data.length === 0) return "";

  const keys = Object.keys(data[0]);

  const sortedData = [...data].sort((a, b) => {
    const valA = a[sortBy];
    const valB = b[sortBy];
    if (typeof valA === "number" && typeof valB === "number") {
      return valA - valB;
    }
    return String(valA).localeCompare(String(valB));
  });

  const widths = {};
  for (const key of keys) widths[key] = 0;
  for (const row of sortedData) {
    for (const key of keys) {
      widths[key] = Math.max(widths[key], String(row[key]).length);
    }
  }

  const borderSegments = keys.map(key => "+" + "-".repeat(widths[key] + 2));
  const borderRow = borderSegments.join("") + "+";

  const headerSegments = keys.map((key, i) => {
    const header = String.fromCharCode(65 + i); // Idea taken from Bryan Herrera
    const padding = " ".repeat(widths[key] - header.length + 1);
    return "| " + header + padding;
  });
  const headerRow = headerSegments.join("") + "|";

  const dataRows = sortedData.map(row => {
    const segments = keys.map(key => {
      const value = String(row[key]);
      const totalWidth = widths[key] + 1;
      const padding = " ".repeat(Math.max(0, totalWidth - value.length));
      return "| " + value + padding;
    });
    return segments.join("") + "|";
  }).join("\n");

  return [
    borderRow,
    headerRow,
    borderRow,
    dataRows,
    borderRow
  ].join("\n");
}
