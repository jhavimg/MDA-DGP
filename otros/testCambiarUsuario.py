from selenium import webdriver
from selenium.webdriver.common.by import By
import time


driver = webdriver.Chrome()
try:
    # Visitar la página de alumnos
    driver.get('http://localhost:3000/alumno_list')

    time.sleep(2)

    # Seleccionar el primer usuario que haya en la lista
    first_user = driver.find_element(By.XPATH, '//div[@class="task"]/a').click()

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
    time.sleep(2)
    driver.find_element(By.XPATH, '//a[@href="/alumno_perfil"]/button[@class="button-17"]').click()
    print("Test exitoso!")

finally:
    driver.quit()