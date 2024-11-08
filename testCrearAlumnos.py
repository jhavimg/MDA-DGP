from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
import os

driver = webdriver.Chrome()  # Asegúrate de tener el driver de Chrome instalado

try:
    # Visitar la página de creación de alumno
    driver.get('http://localhost:3000/Alumno_form')

    # Llenar el formulario de creación de alumno
    driver.find_element(By.NAME, 'nombre').send_keys('Juan')
    driver.find_element(By.NAME, 'apellidos').send_keys('Pérez')
    driver.find_element(By.NAME, 'fecha_nacimiento').send_keys('01-01-2001')

    # Usar una ruta relativa para la imagen
    image_path = os.path.join(os.path.dirname(__file__), 'test_image.jpg')
    driver.find_element(By.NAME, 'foto').send_keys(image_path)

    # Llenar los campos de accesibilidad
    driver.find_element(By.CSS_SELECTOR, 'input[name="saturacion"][value="baja"]').click()
    driver.find_element(By.CSS_SELECTOR, 'input[name="contraste"][value="alto"]').click()
    driver.find_element(By.CSS_SELECTOR, 'input[name="daltonismo"][value="no"]').click()

    # Seleccionar opciones de visualización
    driver.find_element(By.CSS_SELECTOR, 'input[name="visualizacion"][value="pictogramas"]').click()
    driver.find_element(By.CSS_SELECTOR, 'input[name="visualizacion"][value="texto"]').click()
    driver.find_element(By.CSS_SELECTOR, 'input[name="visualizacion"][value="videos"]').click()
    driver.find_element(By.CSS_SELECTOR, 'input[name="visualizacion"][value="imagenes"]').click()
    driver.find_element(By.CSS_SELECTOR, 'input[name="visualizacion"][value="audio"]').click()

    # Seleccionar opciones de navegación
    driver.find_element(By.CSS_SELECTOR, 'input[name="navegacion"][value="raton"]').click()
    driver.find_element(By.CSS_SELECTOR, 'input[name="navegacion"][value="teclado"]').click()
    driver.find_element(By.CSS_SELECTOR, 'input[name="navegacion"][value="pulsador"]').click()

    time.sleep(5)
    # Enviar el formulario
    driver.find_element(By.TAG_NAME, 'form').submit()

    # Esperar a que la página se recargue
    time.sleep(5)

    # Verificar que el alumno aparece en la lista
    driver.get('http://localhost:3000/Alumno_list')
    time.sleep(5)  # Esperar a que la página se cargue completamente

    assert 'Juan Pérez' in driver.page_source

finally:
    driver.quit()