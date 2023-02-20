/*
Fernand Joseph Hanser Reyes
16010330@galileo.edu
(CPR) Introducción a la programación de computadoras 2023 (A)
*/


// Definición de variables
let precioBase = 2000; // Precio base del seguro
let recargoEdad = 0; // Recargo por edad
let recargoEstadoCivil = 0; // Recargo por estado civil
let recargoHijos = 0; // Recargo por cantidad de hijos
let recargoPropiedades = 0; // Recargo por cantidad de propiedades
let recargoIngresos = 0; // Recargo por ingresos
let precioTotal = 0; // Precio total del seguro
let cotizando = true; // Variable de control para ciclo while

while (cotizando) {
  // Lectura de datos del usuario
  let edad = parseInt(prompt("Ingrese su edad:"));
  let estaCasado = prompt("¿Está casado? (s/n)").toLowerCase();
  let cantidadHijos = parseInt(prompt("Ingrese la cantidad de hijos que tiene:"));
  let cantidadPropiedades = parseInt(prompt("Ingrese la cantidad de propiedades que posee:"));
  let ingresos = parseFloat(prompt("Ingrese sus ingresos mensuales:"));

  // Verificación de edad válida
  if (edad >= 18) {
    // Recargo por edad
    if (edad >= 18 && edad <= 24) {
      recargoEdad = precioBase * 0.1;
    } else if (edad >= 25 && edad <= 49) {
      recargoEdad = precioBase * 0.2;
    } else if (edad >= 50) {
      recargoEdad = precioBase * 0.3;
    }

    // Recargo por estado civil
    if (estaCasado === "s") {
      let edadConyuge = parseInt(prompt("Ingrese la edad de su cónyuge:"));
      if (edadConyuge >= 18) {
        if (edadConyuge >= 25 && edadConyuge <= 49) {
          recargoEstadoCivil = precioBase * 0.1;
        } else if (edadConyuge >= 50) {
          recargoEstadoCivil = precioBase * 0.2;
        }
      }
    }

    // Recargo por cantidad de hijos
    if (cantidadHijos > 0) {
      recargoHijos = precioBase * (cantidadHijos * 0.05);
    }

    // Recargo por cantidad de propiedades
    if (cantidadPropiedades > 0) {
      recargoPropiedades = precioBase * (cantidadPropiedades * 0.35);
    }

    // Recargo por ingresos
    if (ingresos > 0) {
      recargoIngresos = precioBase * (ingresos * 0.05);
    }

    // Cálculo del precio total
    precioTotal = precioBase + recargoEdad + recargoEstadoCivil + recargoHijos + recargoPropiedades + recargoIngresos;

    // Salida de resultados
    console.log(`El precio total del seguro es: Q.${precioTotal}`);
  } else {
    console.log("Lo sentimos, no podemos asegurar a menores de edad.");
  }

  // Preguntar si desea seguir cotizando
  let continuar = prompt("¿Desea continuar cotizando? (s/n)").toLowerCase();
