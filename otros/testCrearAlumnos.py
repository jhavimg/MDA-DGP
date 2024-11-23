from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.alert import Alert
import time
import os

driver = webdriver.Chrome()  # Asegúrate de tener el driver de Chrome instalado

try:
    # Visitar la página de creación de alumno
    driver.get('http://localhost:3000/alumno_form')

    # Llenar el formulario de creación de alumno
    driver.find_element(By.NAME, 'email').send_keys('email1@gmail.com')
    driver.find_element(By.NAME, 'contraseña').send_keys('contraseña')
    driver.find_element(By.NAME, 'nickname').send_keys('nickname')
    driver.find_element(By.NAME, 'fechaNacimiento').send_keys('01-01-2001')

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

  
    # Enviar el formulario
    driver.find_element(By.XPATH, '//a[@href="/alumno_form"]/button[@class="button-17"]').click()
    time.sleep(2)
    driver.quit()
    driver = webdriver.Chrome()
    # Verificar que el alumno aparece en la lista
    driver.get('http://localhost:3000/alumno_list')
    time.sleep(5)  # Esperar a que la página se cargue completamente

    assert 'nickname' in driver.page_source

finally:
    driver.quit()