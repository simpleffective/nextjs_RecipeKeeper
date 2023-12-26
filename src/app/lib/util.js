export function deserializePostgresArray(postgresArray) {
  const regex = /"([^"]+)"|([^,]+)/g;
  const resultArray = [];

  let match;
  while ((match = regex.exec(postgresArray.slice(1, -1)))) {
    // Check which capturing group matched
    const value = match[1] || match[2];
    resultArray.push(value.trim());
  }

  return resultArray;
}
