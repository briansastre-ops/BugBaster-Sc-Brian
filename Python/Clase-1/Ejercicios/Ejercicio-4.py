# Ejercicio 4: Números divisibles entre 3 de 0 a 10
print("Rango de 0 a 10 con números divisibles entre 3")
divisibles = [str(num) for num in range(0, 11) if num % 3 == 0]
print(",".join(divisibles))  # Unir con comas
print()