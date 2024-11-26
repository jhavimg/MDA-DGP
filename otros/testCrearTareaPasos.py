from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
import os

driver = webdriver.Chrome()  # Asegúrate de tener el driver de Chrome instalado

try:
    # Visitar la página de creación de tarea
    driver.get('http://localhost:3000/Tarea_form')

    # Llenar el formulario de creación de tarea
    driver.find_element(By.NAME, 'titulo').send_keys('Tarea de Prueba')
    driver.find_element(By.NAME, 'fecha_limite').send_keys('20-12-2021')
    driver.find_element(By.NAME, 'descripcion').send_keys('Resolver los ejercicios del libro.')

    # Usar una ruta relativa para los archivos
    audio_path = os.path.join(os.path.dirname(__file__), 'test_audio.mp3')
    driver.find_element(By.NAME, 'audio').send_keys(audio_path)

    image_path = os.path.join(os.path.dirname(__file__), 'test_image.jpg')
    driver.find_element(By.NAME, 'imagenes').send_keys(image_path)

    video_path = os.path.join(os.path.dirname(__file__), 'test_video.mp4')
    driver.find_element(By.NAME, 'videos').send_keys(video_path)

    pictogram_path = os.path.join(os.path.dirname(__file__), 'test_pictogram.png')
    driver.find_element(By.NAME, 'pictogramas').send_keys(pictogram_path)

    # Añadir un paso
    driver.find_element(By.XPATH, '//*[@id="root"]/div[2]/form/div/button').click()
    driver.find_element(By.XPATH, '//*[@id="paso_nombre_0"]').send_keys('Leer el capítulo 1.')
    driver.find_element(By.XPATH, '//*[@id="paso_descripcion_0"]').send_keys('Leer el capítulo 1 del libro.')


    time.sleep(5)
    # Enviar el formulario
    driver.find_element(By.XPATH, '//*[@id="root"]/div[2]/form/a/button').click ()
    time.sleep(2)

    driver.quit()
    driver = webdriver.Chrome()
    
    # Verificar que la tarea aparece en la lista
    driver.get('http://localhost:3000/Tarea_list')
    time.sleep(5)  # Esperar a que la página se cargue completamente

    assert 'Tarea de Prueba' in driver.page_source
    print('La tarea se creó correctamente')
finally:
    driver.quit()