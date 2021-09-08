:: Important stuff
@echo off && cls
title TypeScript Wrapper

::::::::::::::::::::
:: Initialization ::
::::::::::::::::::::

:: Terminate existing node.js apps
TASKKILL /IM node.exe /F 2>nul
cls

::::::::::::::::::::::::::::::
:: Start TypeScript Wrapper ::
::::::::::::::::::::::::::::::

:: Check for installation
if exist notinstalled (
	echo TypeScript Wrapper is not installed! Installing...
	call npm install
	ren "notinstalled" "installed"
	cls
	goto start
) else (
	goto start
)

:: Run npm start
:start
echo TypeScript Wrapper is now starting...
npm start
echo TypeScript Wrapper has been started. Please navigate to http://localhost on your browser.
