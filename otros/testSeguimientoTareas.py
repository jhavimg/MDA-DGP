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
    time.sleep(2)

    seguimiento = driver.find_element(By.XPATH, '//*[@id="root"]/div[2]/a/button').click()
    time.sleep(2)

finally:
    driver.quit()