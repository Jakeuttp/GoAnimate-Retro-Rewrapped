:: Important stuff
@echo off && cls
title GoAnimate Retro Rewrapped

::::::::::::::::::::
:: Initialization ::
::::::::::::::::::::

:: Terminate existing node.js apps
TASKKILL /IM node.exe /F 2>nul
cls

:::::::::::::::::::::::::::::::::::::
:: Start GoAnimate Retro Rewrapped ::
:::::::::::::::::::::::::::::::::::::

:: Check for installation
if exist notinstalled (
	echo GoAnimate Retro Rewrapped is not installed! Installing...
	call npm install
	ren "notinstalled" "installed"
	cls
	goto start
) else (
	goto start
)

:: Run npm start
:start
echo GoAnimate Retro Rewrapped is now starting...
npm start
echo GoAnimate Retro Rewrapped has been started. Please navigate to http://localhost on your browser.
