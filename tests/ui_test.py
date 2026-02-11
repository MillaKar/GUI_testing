# Milla Karjalainen 10.2.2026 Color converter GUI-testing // Selenium

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Edge()

try:
    driver.get("http://127.0.0.1:5500/testaus4/frontend/frontend/index.html")
    wait = WebDriverWait(driver, 10)

    # --- HEX to RGB ---
    hex_input = wait.until(EC.presence_of_element_located((By.ID, "hexInput")))
    hex_input.clear()
    hex_input.send_keys("FF0000")

    # Hae convert-nappi juuri ennen klikkausta
    convert_button = wait.until(
        EC.element_to_be_clickable((By.XPATH, "//button[contains(text(),'Convert')]"))
    )
    convert_button.click()

    # Odotetaan, että tulos ilmestyy
    wait.until(EC.text_to_be_present_in_element((By.ID, "hexResult"), "255"))
    result = driver.find_element(By.ID, "hexResult").text
    print("HEX -> RGB result:", result)
    assert "255" in result, "Test failed: 255 not found"

    # --- RGB to HEX ---
    r = driver.find_element(By.ID, "r")
    g = driver.find_element(By.ID, "g")
    b = driver.find_element(By.ID, "b")

    r.clear()
    g.clear()
    b.clear()

    r.send_keys("0")
    g.send_keys("255")
    b.send_keys("0")

    # Hae toinen convert-nappi uudestaan ennen klikkausta
    convert_button_rgb = wait.until(
        EC.element_to_be_clickable((By.XPATH, "(//button[contains(text(),'Convert')])[2]"))
    )
    convert_button_rgb.click()

    # Odotetaan, että tulos ilmestyy
    wait.until(EC.text_to_be_present_in_element((By.ID, "rgbResult"), "00FF00"))
    driver.save_screenshot("hex.result.png")
    rgb_result = driver.find_element(By.ID, "rgbResult").text
    print("RGB -> HEX result:", rgb_result)
    assert "00FF00" in rgb_result, "Test failed: 00FF00 not found"
    

    print("ALL TESTS PASSED")

finally:
    driver.quit()
