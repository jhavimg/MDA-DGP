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

    time.sleep(5)
    # Enviar el formulario
    driver.find_element(By.TAG_NAME, 'form').submit()

    # Esperar a que la página se recargue
    time.sleep(5)

    # Verificar que la tarea aparece en la lista
    driver.get('http://localhost:3000/Tarea_list')
    time.sleep(5)  # Esperar a que la página se cargue completamente

    assert 'Tarea de Matemáticas' in driver.page_source

finally:
    driver.quit()