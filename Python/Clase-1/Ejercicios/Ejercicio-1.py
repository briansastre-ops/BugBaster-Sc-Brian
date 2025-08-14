# Ejercicio 1: Iterar un rango de 0 a 10 e imprimir números divisibles entre 3
print("Ejercicio 1: Números divisibles entre 3 de 0 a 10")
for num in range(0, 11):
    if num % 3 == 0:
        print(num, end=",")
print("\n")  # Salto de línea