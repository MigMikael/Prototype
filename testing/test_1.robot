*** Settings ***
Library                  AppiumLibrary    run_on_failure=AppiumLibrary.Capture Page Screenshot
Suite Setup              Open App

*** Variables ***
${REMOTE_URL}            http://127.0.0.1:4723/wd/hub      # URL to appium server
${PLATFORM_NAME}         Android
${PLATFORM_VERSION}      8.0
${DEVICE_NAME}           ThePixel2
${APP_LOCATION}          /Users/migmikael/ReactProject/ReactNative/Prototype/android/app/build/outputs/apk/debug/app-debug.apk
${BUNDLE_ID}             com.prototype

*** Keywords ***
Open App
     Open Application    ${REMOTE_URL}    platformName=${PLATFORM_NAME}    platformVersion=${PLATFORM_VERSION}    deviceName=${DEVICE_NAME}      app=${APP_LOCATION}       automationName=appium            bundleId=${BUNDLE_ID}

Click Scan
     Click Element       xpath=//*[@text="SCAN BARCODE"]

Click Task
     Click A Point                 140  160
     Wait                          งานวันนี้
     Click Element                 xpath=//*[@text="งานวันนี้"]
     Wait                          71
     Click Element                 xpath=//*[@text="มาศิตา ตฤณนิธิ"]
     Wait                          ประเมิน
     Element Should Be Visible     xpath=//*[@text="ประเมิน"]
     Swipe By Percent              90   50   10   50
     Wait                          พื้นที่

     Swipe By Percent              90   50   10   50
     Wait                          หมายเหตุ

     Swipe By Percent              90   50   10   50

Wait
     [Arguments]    ${text}
     Wait Until Page Contains      ${text}

Close App
     Close Application


*** Test Cases ***
Patiant
     Wait           text=HN/AN
     Click Task
