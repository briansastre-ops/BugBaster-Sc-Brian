const planetas = new Set(["Marte", "Jupiter", "Venus"]);
console.log(planetas.size);
console.log(planetas.has("Marte"));
planetas.add("Tierra");
planetas.delete("Jupiter"); // No da error si no existe
planetas.delete("Tierra");
planetas.clear();