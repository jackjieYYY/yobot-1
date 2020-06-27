from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.firefox.options import Options



#Firefox and Webdrive init
headless = True
#linux_executable_path = './geckodriver'
linux_executable_path = '/root/qqbot/yobot/src/client/geckodriver'

options = Options()
options.headless = headless
driver = webdriver.Firefox(options = options , executable_path=linux_executable_path)

def getscreenshot(url):
    driver.get(url)
    driver.save_screenshot("/root/qqbot/yobot/src/client/ybplugins/images/test1.png")



def quit():
    driver.quit()
