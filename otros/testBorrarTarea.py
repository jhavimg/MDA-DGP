from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
import os
import subprocess

driver = webdriver.Chrome()  # Asegúrate de tener el driver de Chrome instalado

try:
    # Visitar la página de lista de tareas
    driver.get('http://localhost:3000/tarea_list')

    # Esperar a que la página se cargue completamente
    time.sleep(2)
    tarea = None
    # Verificar si existe una tarea llamada "Tarea de Prueba"
    try:
        tarea = driver.find_element(By.XPATH, '//a[text()="Tarea de Prueba"]')
        print("Tarea de Prueba encontrada.")
    except:
        print("Tarea de Prueba no encontrada. Creando tarea...")
        # Ejecutar el script para crear la tarea
        subprocess.run(['python', 'otros/testCrearTarea.py'])
        # Esperar a que la tarea se cree
        time.sleep(5)
        # Refrescar la página
        driver.refresh()
        # Esperar a que la página se cargue completamente
        time.sleep(2)
        # Verificar de nuevo si existe la tarea
        tarea = driver.find_element(By.XPATH, '//a[text()="Tarea de Prueba"]')

    # Borrar la tarea "Tarea de Prueba"
    delete_button = tarea.find_element(By.XPATH, './ancestor::div[@class="task"]//button[@class="boton-eliminar"]')
    delete_button.click()

    # Manejar el popup de confirmación
    time.sleep(3)
    accept_button = driver.find_element(By.XPATH, '//div[@id="popup-root"]//button[text()="Aceptar"]')
    accept_button.click()
    print("Confirmación de eliminación aceptada.")

finally:
    driver.quit()