/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */

package javaapplication16;

public class EjercicioWhile01 {
    public static void main(String[] args) {
        var conteo = 0; // Inferencia de tipos
        while (conteo < 3) {
            System.out.println("conteo = " + conteo);
            conteo++; // Vamos aumentando en uno la variable
        }
    }
}