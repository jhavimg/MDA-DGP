from selenium import webdriver
from selenium.webdriver.common.by import By
import time

# Configurar opciones de Chrome para capturar todos los niveles de logs
options = webdriver.ChromeOptions()
options.set_capability('goog:loggingPrefs', {'browser': 'INFO'})
options.add_argument('--disable-usb')

driver = webdriver.Chrome(options=options)  # Asegúrate de tener el driver de Chrome instalado

try:
    # Visitar la página de creación de alumno
    driver.get('http://localhost:3000/alumno_comandas')

    # Localizar los botones por su clase y texto
    button_1 = driver.find_element(By.XPATH, '//button[text()="1"]')
    button_2 = driver.find_element(By.XPATH, '//button[text()="2"]')
    button_3 = driver.find_element(By.XPATH, '//button[text()="3"]')
    button_4 = driver.find_element(By.XPATH, '//button[text()="4"]')

    # Pulsar los botones el número de veces especificado
    for _ in range(3):
        button_1.click()
    for _ in range(3):
        button_2.click()
    button_3.click()
    for _ in range(2):
        button_4.click()

    # Hacer clic en el botón de confirmación
    confirm_button = driver.find_element(By.CSS_SELECTOR, '.done-button')
    confirm_button.click()

    # Esperar un momento para ver los resultados
    time.sleep(2)

    # Verificar la salida en la consola
    logs = driver.get_log('browser')

    # Verificar que el bloque de mensajes esperados está en los logs
    expected_message = (
        "Menus de tipo 1: 3\\n"
        "Menus de tipo 2: 3\\n"
        "Menus de tipo 3: 1\\n"
        "Menus de tipo 4: 2\\n"
    )

    # Verificar que el bloque de mensajes esperados está en los logs
    assert any(expected_message in entry['message'] for entry in logs), "El bloque de mensajes esperados no se encontró en los logs"
    print("Test exitoso!")

finally:
    driver.quit()